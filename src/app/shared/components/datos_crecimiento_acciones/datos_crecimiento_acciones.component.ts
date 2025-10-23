import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { crecimientosPorAccion } from '../../modells/bd/crecimientosPorAccion';
import { datosPorAccion } from '../../modells/bd/datosPorAccion';
import { SimboloMonedaPipe } from '../../pipes/simbolo-moneda.pipe';
import { PercentFixPipe } from '../../pipes/porcentajeOrdenado';

@Component({
  selector: 'app-datos_crecimiento_acciones',
  standalone: true,
  imports: [CommonModule, SimboloMonedaPipe, PercentFixPipe],
  templateUrl: './datos_crecimiento_acciones.component.html',
  styleUrls: ['./datos_crecimiento_acciones.component.scss']
})
export class Datos_crecimiento_accionesComponent implements OnChanges {

  @Input() datosCrecimiento: crecimientosPorAccion | null = null;
  @Input() datosPorAccion: datosPorAccion | null = null;

  
  @Input() desplegado: boolean | null = null;
  @Input() moneda: string | null = null;

  isCollapsed: boolean = true;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['desplegado']) {
      this.isCollapsed = !this.desplegado;
    }
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
