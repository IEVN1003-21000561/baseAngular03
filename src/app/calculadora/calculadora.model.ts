
import { Operacion } from './operacion';

import { Operacion } from "./calculadora/operacion";

export class Calculadora {
  calcular(op: Operacion): number {
    switch (op.tipo) {
      case 'suma':
        return op.numero1 + op.numero2;
      case 'resta':
        return op.numero1 - op.numero2;
      case 'multiplicacion':
        return op.numero1 * op.numero2;
      case 'division':
        return op.numero2 !== 0 ? op.numero1 / op.numero2 : NaN;
      default:
        return 0;
    }
  }
}
