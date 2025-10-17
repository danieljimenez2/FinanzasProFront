import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ratiosDeValoracion } from '../../modells/bd/ratiosDeValoracion';
import { ratiosRentabilidad } from '../../modells/bd/ratiosRentabilidad';
import { CommonModule } from '@angular/common';
import { SimboloMonedaPipe } from '../../pipes/simbolo-moneda.pipe';

@Component({
  standalone:true,
  imports:[CommonModule,SimboloMonedaPipe],
  selector: 'app-datosRatiosValoracionYRentabilidad',
  templateUrl: './datosRatiosValoracionYRentabilidad.component.html',
  styleUrls: ['./datosRatiosValoracionYRentabilidad.component.scss']
})
export class DatosRatiosValoracionYRentabilidadComponent implements OnChanges {

  constructor() { }
  @Input() ratiosValoracion: ratiosDeValoracion | null = null;
  @Input() ratiosRentabilidad: ratiosRentabilidad | null = null;

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
