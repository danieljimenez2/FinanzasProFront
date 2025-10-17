import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { posicionFinanciera } from '../../modells/bd/posicionFinanciera';
import { CommonModule } from '@angular/common';
import { SimboloMonedaPipe } from '../../pipes/simbolo-moneda.pipe';

@Component({
  standalone:true,
  imports:[CommonModule, SimboloMonedaPipe],
  selector: 'app-datosPosicionFinanciera',
  templateUrl: './datosPosicionFinanciera.component.html',
  styleUrls: ['./datosPosicionFinanciera.component.scss']
})
export class DatosPosicionFinancieraComponent implements OnChanges {

  constructor() { }
  @Input() datosPosicionFinanciera: posicionFinanciera | null = null;

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
