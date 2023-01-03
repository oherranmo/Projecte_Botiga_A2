import { Component } from '@angular/core';
import {RegisterLoginService} from "../register-login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../assets/css/Default.css']
})
export class LoginComponent {
  email: any;
  passwd: any;
  autenticar(){
    if(this.email=='Joan'){
      console.log("usercorrect");
      if (this.passwd=='patata'){
        console.log("autenticat")
      }
    }
  }


  constructor(private x: RegisterLoginService) {
    this.x.username = 'Joan';
    this.x.passwd = 'patata';
  }

}
