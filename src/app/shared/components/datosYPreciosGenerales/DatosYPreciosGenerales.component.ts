import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { precioYDatosGenerales } from '../../modells/bd/precioYDatosGenerales';
import { CommonModule } from '@angular/common';
import { AbreviarNumeroPipe } from '../../pipes/abreviarNumero.pipe';
import { SimboloMonedaPipe } from '../../pipes/simbolo-moneda.pipe';

@Component({
  selector: 'app-DatosYPreciosGenerales',
  standalone:true,
  imports:[CommonModule, AbreviarNumeroPipe, SimboloMonedaPipe],
  templateUrl: './DatosYPreciosGenerales.component.html',
  styleUrls: ['./DatosYPreciosGenerales.component.scss']
})
export class DatosYPreciosGeneralesComponent implements OnChanges {
  @Input() precioYDatosGenerales : precioYDatosGenerales | null = null
  @Input() desplegado: boolean | null = null;
  @Input() moneda: string | null = null;

  constructor() { }

  isCollapsed: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['desplegado']) {
      this.isCollapsed = !this.desplegado;
    }
    if(changes ['moneda'])
      {
      }
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
