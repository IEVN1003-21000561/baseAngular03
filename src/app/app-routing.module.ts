import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cinepolis } from './cine/cinepolis/cinepolis';



const routes: Routes = [
  { path: 'Cinepolis', component: Cinepolis }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
