import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {RegisterLoginService} from "../register-login.service";
import {elementAt} from "rxjs";

@Component({
  selector: 'app-inici',
  templateUrl: './inici.component.html',
  styleUrls: ['./inici.component.css','../../assets/css/Default.css']
})
export class IniciComponent {
  autenticat = this.registraServei.autenticat
  nomAutenticat = this.registraServei.nomAutenticat

  tancarSessio(){
    this.registraServei.autenticat = false;
    this.registraServei.nomAutenticat = 'null';
    this.autenticat= false;
    this.nomAutenticat= 'null';
    console.log("funciona clic")
  }

  constructor(private registraServei: RegisterLoginService, private renderer: Renderer2) {
  }
}
