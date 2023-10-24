import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  cart: any[] = [];

  totalPrice: number = 0;
  totalItems: number = 0;

  addToCart(item: any) {
    const existingItem = this.cart.find(
      (cartItem) => cartItem.title === item.title
    );
    if (existingItem) {
      existingItem.quantity++;
    } else {
      item.quantity = 1;
      this.cart.push(item);
    }
  }

  removeFromCart(item: any) {
    this.cart = this.cart.filter(function (obj) {
      return obj.title !== item.title;
    });
    console.log('removedItem ', item);
    this.totalPrice -= parseFloat(item.price.replace('$', ''));
    this.totalItems--;
  }

  getCart() {
    return this.cart;
  }

  getTotalPrice() {
    return this.cart
      .reduce(
        (total, item) =>
          total + parseFloat(item.price.replace('$', '')) * item.quantity,
        0
      )
      .toFixed(2);
  }

  getTotalItems() {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  getQuantityByItem(menu: any) {
    let item = this.cart.find((item: any) => item.title == menu.title);
    if (item) return item.quantity;
    return 0;
  }

  resetCart() {
    this.cart = [];
  }
}
