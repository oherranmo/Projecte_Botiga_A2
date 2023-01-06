import { Component } from '@angular/core';
import {RegisterLoginService} from "../register-login.service";
import {EmailValidator} from "@angular/forms";

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css', '../../assets/css/Default.css']
})
export class RegistreComponent {
  correu: any;
  passwd: any;
  nom: any;
  registrar(){
    console.log(this.correu)
  }
  constructor(private registraServei: RegisterLoginService) {

  }

  ngOnInit(){}



}

