import { Injectable } from '@angular/core';
import {EmailValidator} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class RegisterLoginService {
  public autenticat = false;
  public nomAutenticat = 'null' as String;
  //@ts-ignore
  public correu_array : Array<String>=[];
  //@ts-ignore
  public passwd_array : Array<String>=[];
  //@ts-ignore
  public nom_array : Array<String>=[];



}
