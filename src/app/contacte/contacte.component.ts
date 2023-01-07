import { Component } from '@angular/core';
import {RegisterLoginService} from "../register-login.service";

@Component({
  selector: 'app-contacte',
  templateUrl: './contacte.component.html',
  styleUrls: ['./contacte.component.css', '../../assets/css/Default.css']
})
export class ContacteComponent {
  autenticat = this.registraServei.autenticat
  nomAutenticat = this.registraServei.nomAutenticat

  tancarSessio(){
    this.registraServei.autenticat = false;
    this.registraServei.nomAutenticat = 'null';
    this.autenticat= false;
    this.nomAutenticat= 'null';
    console.log("funciona clic")
  }

  constructor(private registraServei: RegisterLoginService) {
  }
}
