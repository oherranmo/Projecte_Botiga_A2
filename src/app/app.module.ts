import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistreComponent } from './registre/registre.component';
import { AppRoutingModule } from './app-routing.module';
import { ContacteComponent } from './contacte/contacte.component';
import { IniciComponent } from './inici/inici.component';
import { CatalegComponent } from './cataleg/cataleg.component';
import { CistellaComponent } from './cistella/cistella.component';
import { CondicionsComponent } from './condicions/condicions.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistreComponent,
    ContacteComponent,
    IniciComponent,
    CatalegComponent,
    CistellaComponent,
    CondicionsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
