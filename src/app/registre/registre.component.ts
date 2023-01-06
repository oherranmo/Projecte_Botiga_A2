import { Component } from '@angular/core';
import {RegisterLoginService} from "../register-login.service";
import {Router} from "@angular/router";

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
    let trobat = false;
    for(let i = 0; i <= this.registraServei.correu_array.length; i++ ){
      if (this.registraServei.correu_array[i]==this.correu){
        trobat = true;
        alert("Ja existeix un usuari amb aquest correu")
        break;
      }
    }
    if (trobat == false){
    this.registraServei.correu_array.push(this.correu)
    this.registraServei.passwd_array.push(this.passwd)
    this.registraServei.nom_array.push(this.nom)
    this.router.navigate(['/login'])
    }


  }
  constructor(private registraServei: RegisterLoginService,public router:Router) {
  }

  ngOnInit(){}



}

