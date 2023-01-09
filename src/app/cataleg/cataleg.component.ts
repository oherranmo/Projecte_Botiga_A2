import {Component, OnInit} from '@angular/core';
import {RegisterLoginService} from "../register-login.service";
import {ActivatedRoute} from "@angular/router";
import { Product, products } from '../products';
import { CartService } from '../cistella.service';

@Component({
  selector: 'app-cataleg',
  templateUrl: './cataleg.component.html',
  styleUrls: ['./cataleg.component.css','../../assets/css/Default.css']
})

export class CatalegComponent implements OnInit {
  products = products;
  autenticat = this.registraServei.autenticat
  nomAutenticat = this.registraServei.nomAutenticat

  tancarSessio() {
    this.registraServei.autenticat = false;
    this.registraServei.nomAutenticat = 'null';
    this.autenticat = false;
    this.nomAutenticat = 'null';
    console.log("funciona clic")
  }
  constructor(private registraServei: RegisterLoginService,
              private cartService: CartService) {
  }
  ngOnInit(){
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert(`${product.name} s'ha afegit a la cistella.`);
  }
}
