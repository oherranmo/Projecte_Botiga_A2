import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterLoginService {
  public username : String;
  public passwd : String;

  constructor() {
    this.username = ' ';
    this.passwd = ' ';

  }
}
