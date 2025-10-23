import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { datosCompania } from '../../modells/bd/datosCompañia';
import { FechaEspañolaPipe } from '../../pipes/fecha-española.pipe';
import { CommonModule } from '@angular/common';
import { NumberPuntoPipe } from '../../pipes/numberPunto.pipe';
import { RouterLink } from "@angular/router";
import { CarteraInversionService } from '../../services/recogerInformacion/carteraInversion.service';
@Component({
  selector: 'app-datos_compania',
  standalone: true,
  imports: [CommonModule, FechaEspañolaPipe, NumberPuntoPipe, RouterLink],
  templateUrl: './datos_compañia.component.html',
  styleUrls: ['./datos_compañia.component.scss']
})
export class Datos_compañiaComponent implements OnInit, OnChanges {
  @Input() datosCompania: datosCompania | null = null
  @Input() fechaIpo: Date | null = null

  @Input() companySymbol: any;
  //NUEVOS OUTPUTS
  @Output() monedaEmitida = new EventEmitter<string>();
  @Output() mostrarInfoCambio = new EventEmitter<boolean>();
  @Output() favoritoCambio = new EventEmitter<boolean>();

  //Variables de estado
  esFavorito: boolean = false;
  mostrarInfo: boolean = true;

  constructor(private listaCarteraService:CarteraInversionService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['datosCompania'] && this.datosCompania?.moneda) {
      this.monedaEmitida.emit(this.datosCompania.moneda);
    }
  }
  ngOnInit() {
    if (this.companySymbol) {
      this.listaCarteraService.comprobarSiEsFavorito(this.companySymbol).subscribe({
        next: res => this.esFavorito = res,
        error: err => console.error('Error comprobando favorito', err)
      });
    }
  }
 toggleFavorito() {
    if (!this.companySymbol) return;

    this.esFavorito = !this.esFavorito;
    this.favoritoCambio.emit(this.esFavorito);

    if (this.esFavorito) {
      // Añadir a favoritos
      this.listaCarteraService.anadirAFavoritos(this.companySymbol).subscribe({
        next: res => console.log('Añadido a favoritos:', res),
        error: err => console.error('Error al añadir favorito', err)
      });
    } else {
      // Eliminar de favoritos
      this.listaCarteraService.borrarFavorito(this.companySymbol).subscribe({
        next: () => console.log('Favorito eliminado'),
        error: err => console.error('Error al eliminar favorito', err)
      });
    }
  }

  // Cambiar visibilidad
  toggleMostrarInfo() {
    this.mostrarInfo = !this.mostrarInfo;
    this.mostrarInfoCambio.emit(this.mostrarInfo);
  }
}
