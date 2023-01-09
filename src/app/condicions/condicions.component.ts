import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {RegisterLoginService} from "../register-login.service";

@Component({
  selector: 'app-condicions',
  templateUrl: './condicions.component.html',
  styleUrls: ['./condicions.component.css','../../assets/css/Default.css']
})
export class CondicionsComponent {
  autenticat = this.registraServei.autenticat
  nomAutenticat = this.registraServei.nomAutenticat
  negre = true;

  // @ts-ignore
  @ViewChild('fons') fons: ElementRef;
  canviarFons(){
    if(this.negre){
      this.render.addClass(this.fons.nativeElement,'canviarColor')
      this.negre = false;
    }
    else{
      this.render.removeClass(this.fons.nativeElement,'canviarColor')
      this.negre = true;
    }
  }

  tancarSessio(){
    this.registraServei.autenticat = false;
    this.registraServei.nomAutenticat = 'null';
    this.autenticat= false;
    this.nomAutenticat= 'null';
    console.log("funciona clic")
  }

  constructor(private registraServei: RegisterLoginService, private render: Renderer2) {
  }

}
