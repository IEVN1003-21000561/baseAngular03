import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl:'./cinepolis.html',
})
export class Cinepolis {
  nombre: string = '';
  cantidadCompradores: number = 0;
  cantidadBoletas: number = 0;
  usaTarjeta: boolean = false;
  valorAPagar: number | null = null;

  procesar() {
    
    const precioBase = 12;
    let precio = precioBase * this.cantidadBoletas; 
    
   
    if (this.cantidadBoletas > 5) {
      precio = precio * 0.85; 
    }

    
    if (this.usaTarjeta) {
      precio = precio * 0.9; 
    }
    
    this.valorAPagar = precio;
  }

  limpiar() {
    this.nombre = '';
    this.cantidadCompradores = 0;
    this.cantidadBoletas = 0;
    this.usaTarjeta = false;
    this.valorAPagar = null;
  }
}