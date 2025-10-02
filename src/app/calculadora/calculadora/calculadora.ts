import { Component } from '@angular/core';
import { Operacion } from './operacion';

@Component({
  selector: 'app-calculadora',
  standalone: false,
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css'
})
export class Calculadora {
  operacion: Operacion = new Operacion();
  calculadora: Calculadora = new Calculadora();
  resultado: number | null = null;

  calcular(operacion: Operacion) {
    this.resultado = this.calculadora.calcular(this.operacion);
  }

}
