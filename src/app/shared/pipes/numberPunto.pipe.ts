import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberPunto',
  standalone: true
})
export class NumberPuntoPipe implements PipeTransform {
  transform(value: number | string | null | undefined): string {
    if (value == null || value === '') return '';

    const num = Number(value);
    if (isNaN(num)) return value.toString();

    // Formato español: separador de miles con punto, sin decimales
    return new Intl.NumberFormat('es-ES', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num);
  }
}
