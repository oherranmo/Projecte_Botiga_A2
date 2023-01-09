import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "./products";

export type ShippingPrice = {
  type: string;
  price: number;
};

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearItems() {
    this.items = [];

    return this.items;
  }
}
