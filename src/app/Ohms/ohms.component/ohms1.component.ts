import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
//import { OhmsCalcular } from './ohms-calcular.TestBed';


@Component({
  selector: 'app-ohms1',
  standalone: false,
  templateUrl: './ohms.component.html',
  styleUrls: ['./ohms.component.css']
})
export class Ohms1Component {
megaOhms2: any;
kiloOhms2: any;
valorMin1: any;
valor1: any;

calcularClase1() {
throw new Error('Method not implemented.');
}

    colores = [
    {nombre: 'Negro', valor: 0, multiplicador: 1, hex: '#000000'},
    {nombre: 'Café', valor: 1, multiplicador: 10, hex: '#8B4513'},
    {nombre: 'Rojo', valor: 2, multiplicador: 100, hex: '#FF0000'},
    {nombre: 'Naranja', valor: 3, multiplicador: 1000, hex: '#FFA500'},
    {nombre: 'Amarillo', valor: 4, multiplicador: 10000, hex: '#FFFF00'},
    {nombre: 'Verde', valor: 5, multiplicador: 100000, hex: '#008000'},
    {nombre: 'Azul', valor: 6, multiplicador: 1000000, hex: '#0000FF'},
    {nombre: 'Morado', valor: 7, multiplicador: 10000000, hex: '#800080'},
    {nombre: 'Gris', valor: 8, multiplicador: 100000000, hex: '#808080'},
    {nombre: 'Blanco', valor: 9, multiplicador: 1000000000, hex: '#FFFFFF'}
  ];

  tolerancias = [
    {nombre: 'Dorado 5%', valor: 0.05, hex: '#FFD700'},
    {nombre: 'Plata 10%', valor: 0.10, hex: '#C0C0C0'}
  ];

  banda1: any = null;
  banda2: any = null;
  banda3: any = null;
  tolerancia: any = null;

  resultado: number | null = null;
  valorMax: number | null = null;
  valorMin: number | null = null;

  valorFormateado: string = '';
  valorMaxFormateado: string = '';
  valorMinFormateado: string = '';
  digitosResultado: string[] = [];

  calcular() {
    if (this.banda1 && this.banda2 && this.banda3 && this.tolerancia) {
      const base = Number(`${this.banda1.valor}${this.banda2.valor}`);
      this.resultado = base * this.banda3.multiplicador;

      this.valorMax = this.resultado + (this.resultado * this.tolerancia.valor);
      this.valorMin = this.resultado - (this.resultado * this.tolerancia.valor);


      this.valorFormateado = this.formatOhms(this.resultado);
      this.valorMaxFormateado = this.formatOhms(this.valorMax);
      this.valorMinFormateado = this.formatOhms(this.valorMin);

    
      this.digitosResultado = this.resultado.toString().split('');
    }
  }

  private formatOhms(v: number | null): string {
    if (v === null) return '';
    if (v >= 1_000_000) return (v / 1_000_000).toFixed(2) + ' MΩ';
    if (v >= 1_000) return (v / 1_000).toFixed(2) + ' kΩ';
    return v + ' Ω';
  }
}
