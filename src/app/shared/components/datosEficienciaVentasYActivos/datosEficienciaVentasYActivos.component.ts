import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { eficienciaEnVentasActivos } from '../../modells/bd/EficienciaEnVentasActivos';

@Component({
  standalone:true,
  imports:[CommonModule],
  selector: 'app-datosEficienciaVentasYActivos',
  templateUrl: './datosEficienciaVentasYActivos.component.html',
  styleUrls: ['./datosEficienciaVentasYActivos.component.scss']
})
export class DatosEficienciaVentasYActivosComponent implements OnChanges {
  @Input() datosEficienciaVentas: eficienciaEnVentasActivos | null = null;
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
