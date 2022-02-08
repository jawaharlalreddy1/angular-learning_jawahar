import { Injectable } from '@angular/core';
import { Product } from '../products';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  constructor() {}
  addToCart(product: Product) {
    this.item.push(product);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    return this.items;
  }
}
