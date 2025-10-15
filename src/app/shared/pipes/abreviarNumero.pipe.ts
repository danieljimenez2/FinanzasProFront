import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone:true,
  name: 'abreviarNumero'
})
export class AbreviarNumeroPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value == null || isNaN(value)) return '—';

    const absValue = Math.abs(value);

    // Escala europea (no anglosajona)
    if (absValue >= 1e18) {
      return (value / 1e18).toFixed(2).replace(/\.00$/, '') + ' T'; // Trillones
    } else if (absValue >= 1e12) {
      return (value / 1e12).toFixed(2).replace(/\.00$/, '') + ' B'; // Billones
    } else if (absValue >= 1e9) {
      return (value / 1e9).toFixed(2).replace(/\.00$/, '') + ' Mil M'; // Mil millones
    } else if (absValue >= 1e6) {
      return (value / 1e6).toFixed(2).replace(/\.00$/, '') + ' M'; // Millones
    } else if (absValue >= 1e3) {
      return (value / 1e3).toFixed(1).replace(/\.0$/, '') + ' K'; // Miles
    } else {
      return value.toString();
    }
  }
}
