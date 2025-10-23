import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { distribucionAccionesYCotizacion } from '../../modells/bd/distribucionAccionesYCotizacion';
import { CommonModule } from '@angular/common';
import { PercentFixPipe } from '../../pipes/porcentajeOrdenado';

@Component({
  standalone:true,
  imports: [CommonModule,PercentFixPipe],
  selector: 'app-datosDistribucionAccionesCotizacion',
  templateUrl: './datosDistribucionAccionesCotizacion.component.html',
  styleUrls: ['./datosDistribucionAccionesCotizacion.component.scss']
})
export class DatosDistribucionAccionesCotizacionComponent implements OnChanges{

    @Input() datosDistribucion : distribucionAccionesYCotizacion | null = null;
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
