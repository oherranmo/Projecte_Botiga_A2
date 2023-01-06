import { Injectable } from '@angular/core';
import {EmailValidator} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class RegisterLoginService {
  //@ts-ignore
  public correu_array : String[];
  //@ts-ignore
  public passwd_array : String[];
  //@ts-ignore
  public nom_array : String[];


}
