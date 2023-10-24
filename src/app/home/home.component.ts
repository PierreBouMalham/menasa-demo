import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/services/shopping-cart.service';
import { Firestore, query, collection, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    public cartService: ShoppingCartService,
    private fireStore: Firestore
  ) {}
  cart: any[] | undefined;
  searchTerm: string = '';

  menuItems: any[] = [];
  filteredMenuItems: any[] = [];

  async ngOnInit() {
    this.cart = this.cartService.getCart();
    this.menuItems = await this.getMenu();
    this.filteredMenuItems = this.menuItems;

    console.log(this.cart);
  }

  async getMenu() {
    return (await getDocs(query(collection(this.fireStore, 'menu')))).docs.map(
      (menu) => menu.data()
    );
  }

  addToCart(item: any) {
    const index = this.menuItems.indexOf(item);
    if (index !== -1) {
      this.cartService.addToCart(item);
    }
  }

  filterMenuItems() {
    this.filteredMenuItems = this.menuItems.filter(
      (item) =>
        item.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
