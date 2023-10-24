import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/services/shopping-cart.service';

@Component({
  selector: 'app-cart-review',
  templateUrl: './cart-review.component.html',
  styleUrls: ['./cart-review.component.scss'],
})
export class CartReviewComponent {
  cartItems: any[] = [];

  constructor(public cartService: ShoppingCartService, public router: Router) {
    this.cartItems = cartService.getCart();
  }

  ngOnInit() {
    // Initialize cart items
    this.cartItems = this.cartService.getCart();
  }

  removeFromCart(item: any) {
    console.log('remove from cart ', item);
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getCart();
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  confirmOrder() {
    this.cartService.resetCart();
    this.goBack();
  }
}
