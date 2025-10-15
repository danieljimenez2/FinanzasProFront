import { Pipe, PipeTransform } from '@angular/core';
import { SIMBOLOS_MONEDAS } from '../utils/simbolos-monedas';

@Pipe({
  standalone:true,
  name: 'simboloMoneda'
})
export class SimboloMonedaPipe implements PipeTransform {

  transform(moneda: string | null | undefined): string {
    if (!moneda) return '$';
    const upper = moneda.toUpperCase();
    return SIMBOLOS_MONEDAS[upper] || upper || '$';
  }

}
