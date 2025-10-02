import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Cinepolis } from './cine/cinepolis/cinepolis';
import { Ohms } from './Ohms/ohms/ohms';
import { OhmsComponent } from './Ohms/ohms.component/ohms.component';
import { Calculadora } from './calculadora/calculadora/calculadora';


@NgModule({
  declarations: [
    AppComponent,
    Cinepolis,
    Ohms,
    OhmsComponent,
    Calculadora 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule, 
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }