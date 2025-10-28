import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TablaListaEmpresasComponent } from '../../shared/components/tablaListaEmpresas/tablaListaEmpresas.component';
import { CarteraInversionService } from '../../shared/services/recogerInformacion/carteraInversion.service';
import { respuestaSector } from '../../shared/modells/respuestaSector-interface';
import { TablaCarteraAccionesComponent } from '../../shared/components/tablaCarteraAcciones/tablaCarteraAcciones.component';
@Component({
  selector: 'app-cartera',
  standalone: true,
  imports: [CommonModule, TablaCarteraAccionesComponent],
  templateUrl: './cartera.component.html',
  styleUrls: ['./cartera.component.scss']
})
export class CarteraComponent implements OnInit {

  constructor(private carteraService: CarteraInversionService) { }

  listaCartera: respuestaSector[] = []

  pagina = 0;

  ngOnInit() {
    this.cargarCartera();
  }

  cargarCartera() {
    this.carteraService.recogerListaCartera(this.pagina).subscribe({
      next: (data) => (this.listaCartera = data),
      error: (err) => console.error('Error al cargar cartera:', err),
    });
  }

  siguientePagina() {
    this.pagina++;
    this.cargarCartera();
  }

  paginaAnterior() {
    if (this.pagina > 0) this.pagina--;
    this.cargarCartera();
  }

}
