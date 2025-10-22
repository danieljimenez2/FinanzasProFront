import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone:true,
  name: 'percentFix'
})
export class PercentFixPipe implements PipeTransform {

  transform(value: any, decimals: number = 2): string {
    if (value == null || value === '') return '';

    // Aseguramos que sea número
    let num = Number(value);

    // Si es menor que 1, probablemente está en escala 0.01 → multiplicamos por 100
    if (num < 1) {
      num = num * 100;
    }

    // Si es mayor a 1000, probablemente está en 100x → dividimos
    if (num > 1000) {
      num = num / 100;
    }

    // Devolvemos con el símbolo %
    return num.toFixed(decimals) + ' %';
  }

}