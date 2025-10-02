export class OhmsCalcular {

  
  static formatOhms(v: number): string {
    if (v >= 1_000_000) return this.trimNumber(v / 1_000_000) + ' MΩ';
    if (v >= 1_000)     return this.trimNumber(v / 1_000) + ' kΩ';
    return this.trimNumber(v) + ' Ω';
  }

  private static trimNumber(n: number): string {
    const rounded = Math.round(n * 1000) / 1000;
    return rounded.toString().replace(/(\.\d+?)0+$/, '$1').replace(/\.$/, '');
  }


  static calcular(banda1: any, banda2: any, banda3: any, tolerancia: any) {
    if (!banda1 || !banda2 || !banda3 || !tolerancia) {
      throw new Error('Faltan bandas o tolerancia');
    }

    const base = banda1.valor * 10 + banda2.valor;
    const resultado = base * banda3.multiplicador;

    const valorMax = resultado * (1 + tolerancia.valor);
    const valorMin = resultado * (1 - tolerancia.valor);

    return {
      resultado,
      valorMax,
      valorMin,
      valorFormateado: this.formatOhms(resultado),
      valorMaxFormateado: this.formatOhms(valorMax),
      valorMinFormateado: this.formatOhms(valorMin),
      digitos: resultado.toString().split('')
    };
  }
}
import { Component } from '@angular/core';


