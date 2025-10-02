import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { Ohms1Component } from './Ohms/ohms.component/ohms1.component';


const routes: Routes = [

  { path: 'ohms1', component: Ohms1Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
