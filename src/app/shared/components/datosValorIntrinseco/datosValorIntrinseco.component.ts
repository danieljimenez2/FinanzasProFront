import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { valorIntrinseco } from '../../modells/bd/valorIntrinseco';
import { CommonModule } from '@angular/common';
import { SimboloMonedaPipe } from '../../pipes/simbolo-moneda.pipe';

@Component({
  standalone:true,
  imports:[CommonModule, SimboloMonedaPipe],
  selector: 'app-datosValorIntrinseco',
  templateUrl: './datosValorIntrinseco.component.html',
  styleUrls: ['./datosValorIntrinseco.component.scss']
})
export class DatosValorIntrinsecoComponent implements OnChanges {
  @Input() datosValorIntrinseco: valorIntrinseco | null = null

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
