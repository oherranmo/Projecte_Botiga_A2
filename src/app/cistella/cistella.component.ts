import { Component } from '@angular/core';
import {RegisterLoginService} from "../register-login.service";
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cistella.service';


@Component({
  selector: 'app-cistella',
  templateUrl: './cistella.component.html',
  styleUrls: ['./cistella.component.css','../../assets/css/Default.css']
})
export class CistellaComponent {
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({});
  autenticat = this.registraServei.autenticat
  nomAutenticat = this.registraServei.nomAutenticat
  cognomsAutenticat = this.registraServei.cognomsAutenticat
  adrecaAutenticat = this.registraServei.adrecaAutenticat

  tancarSessio(){
    this.registraServei.autenticat = false;
    this.registraServei.nomAutenticat = 'null';
    this.autenticat= false;
    this.nomAutenticat= 'null';
    console.log("funciona clic")
  }

  constructor(private registraServei: RegisterLoginService,
  private cartService: CartService,
  private formBuilder: FormBuilder) {
  }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearItems();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  delete(index: number) {
    this.cartService.removeItem(index);
  }

  validateInput(event:any, i:number){
    const qty = +event.target.value;
    if (qty < 1){
      event.target.value = this.items[i].qty;
      return;
    }
    this.QtyUpdated(qty, i)
  }
  private QtyUpdated(qty:number, i:number){
    this.items[i].qty = qty;

    this.cartService.setCartData(this.items)
  }

  public calcTotal():number{
    let total:number = 0;
    for(let item of this.items){
      total += (item.qty * item.preu);
    }
    return total;
  }
}
