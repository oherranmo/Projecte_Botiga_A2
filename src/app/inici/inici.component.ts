import { Component } from '@angular/core';
import {RegisterLoginService} from "../register-login.service";

@Component({
  selector: 'app-inici',
  templateUrl: './inici.component.html',
  styleUrls: ['./inici.component.css','../../assets/css/Default.css']
})
export class IniciComponent {
  autenticat = this.registraServei.autenticat
  nomAutenticat = this.registraServei.nomAutenticat

  constructor(private registraServei: RegisterLoginService) {
  }



}
