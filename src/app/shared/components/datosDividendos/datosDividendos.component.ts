import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { dividendos } from '../../modells/bd/dividendos';
import { PercentFixPipe } from '../../pipes/porcentajeOrdenado';

@Component({
  standalone: true,
  imports: [CommonModule, PercentFixPipe],
  selector: 'app-datosDividendos',
  templateUrl: './datosDividendos.component.html',
  styleUrls: ['./datosDividendos.component.scss']
})
export class DatosDividendosComponent implements OnChanges {

  @Input() datosDividendos: dividendos | null = null;
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
