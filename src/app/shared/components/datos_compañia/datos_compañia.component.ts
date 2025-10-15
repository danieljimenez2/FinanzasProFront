import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { datosCompania } from '../../modells/bd/datosCompañia';
import { FechaEspañolaPipe } from '../../pipes/fecha-española.pipe';
import { CommonModule } from '@angular/common';
import { NumberPuntoPipe } from '../../pipes/numberPunto.pipe';
@Component({
  selector: 'app-datos_compania',
  standalone: true,
  imports: [CommonModule, FechaEspañolaPipe, NumberPuntoPipe],
  templateUrl: './datos_compañia.component.html',
  styleUrls: ['./datos_compañia.component.scss']
})
export class Datos_compañiaComponent implements OnChanges {
  @Input() datosCompania: datosCompania | null = null
  @Input() fechaIpo: Date | null = null



  //NUEVOS OUTPUTS
  @Output() monedaEmitida = new EventEmitter<string>();
  @Output() mostrarInfoCambio = new EventEmitter<boolean>();
  @Output() favoritoCambio = new EventEmitter<boolean>();

  //Variables de estado
  esFavorito: boolean = false;
  mostrarInfo: boolean = true;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['datosCompania'] && this.datosCompania?.moneda) {
      this.monedaEmitida.emit(this.datosCompania.moneda);
    }
  }
  // Cambiar favorito
  toggleFavorito() {
    this.esFavorito = !this.esFavorito;
    this.favoritoCambio.emit(this.esFavorito);
  }

  // Cambiar visibilidad
  toggleMostrarInfo() {
    this.mostrarInfo = !this.mostrarInfo;
    this.mostrarInfoCambio.emit(this.mostrarInfo);
  }
}
