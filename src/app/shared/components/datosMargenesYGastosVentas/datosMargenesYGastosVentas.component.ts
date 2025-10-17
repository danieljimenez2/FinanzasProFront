import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { margenesDeLaCompañiaSobreVentas } from '../../modells/bd/margenesDeLaCompañiaSobreVentas';
import { gastosSobreVentas } from '../../modells/bd/gastosSobreVentas';
import { SimboloMonedaPipe } from '../../pipes/simbolo-moneda.pipe';
import { CommonModule } from '@angular/common';
import { NumberPuntoPipe } from '../../pipes/numberPunto.pipe';

@Component({
  standalone: true,
  imports: [SimboloMonedaPipe,CommonModule, NumberPuntoPipe],
  selector: 'app-datosMargenesYGastosVentas',
  templateUrl: './datosMargenesYGastosVentas.component.html',
  styleUrls: ['./datosMargenesYGastosVentas.component.scss']
})
export class DatosMargenesYGastosVentasComponent implements OnChanges {

  constructor() { }
  @Input() datosMargenesVentas: margenesDeLaCompañiaSobreVentas | null = null;
  @Input() datosGastosVentas: gastosSobreVentas | null = null;

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
