import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

<<<<<<< HEAD
import { Cinepolis } from './cine/cinepolis/cinepolis';
import { Ohms } from './Ohms/ohms/ohms';
import { OhmsComponent } from './Ohms/ohms.component/ohms.component';
import { Calculadora } from './calculadora/calculadora/calculadora';
=======

import { Ohms1Component } from './Ohms/ohms.component/ohms1.component';

>>>>>>> 5820a868c2e7ef611a83aa6dfbf4c00b4b892346


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    Cinepolis,
    Ohms,
    OhmsComponent,
    Calculadora 
   
=======
    Ohms1Component
>>>>>>> 5820a868c2e7ef611a83aa6dfbf4c00b4b892346
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
