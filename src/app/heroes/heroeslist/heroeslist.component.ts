import { Component } from '@angular/core';

@Component({
  selector: 'app-heroeslist',
  standalone: false,
  templateUrl: './heroeslist.component.html'
  //styleUrl: './heroeslist.component.css'
})
export class HeroeslistComponent {

  imageWidth:number=40;
  imageMargin:number=2;
  showImage:boolean=true;
  listFilter:string='';
  muestraImage: boolean=true;

  showImagee():void{
    this.muestraImage=!this.muestraImage;
  }

    heroes:Iheroes[]=[
    {
      imagen:"https://dragonball-api.com/transformaciones/vegeta mega instinto.webp",
      nombre:"vegeta",
      descripcion:"Maikankosapo y Flis",
      race:"Saiyan",
      ki:9500
    },
    {
      imagen:"https://dragonball-api.com/planetas/Tierra_Dragon_Ball_Z.webp",
      nombre:"Bulma",
      descripcion:"Ninguno",
      race:"Humana",
      ki:0
    }
    ]
  }



