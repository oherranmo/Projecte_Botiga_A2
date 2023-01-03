import { Component } from '@angular/core';
import {RegisterLoginService} from "../register-login.service";

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css', '../../assets/css/Default.css']
})
export class RegistreComponent {
  ngOnInit(){
    const correu = document.getElementById('correu');
    const passwd = document.getElementById('contrasenya');
    console.log(correu,passwd)

}



}

