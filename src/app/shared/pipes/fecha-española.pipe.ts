import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone:true,
  name: 'fechaEspanola'
})
export class FechaEspañolaPipe implements PipeTransform {

  transform(value: string | Date | null, formato: 'corto' | 'largo' = 'corto'): string {
    if (!value) return '';

    const fecha = new Date(value);

    const opcionesCortas: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const opcionesLargas: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' };

    return new Intl.DateTimeFormat('es-ES', formato === 'corto' ? opcionesCortas : opcionesLargas).format(fecha);
  }
}
