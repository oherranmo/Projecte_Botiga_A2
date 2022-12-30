import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistreComponent } from './registre/registre.component';
import { AppRoutingModule } from './app-routing.module';
import { ContacteComponent } from './contacte/contacte.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistreComponent,
    ContacteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
