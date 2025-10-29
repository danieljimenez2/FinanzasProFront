import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SectorMercadoService } from '../../shared/services/recogerInformacion/sector-mercado.service';
import { paises } from '../../shared/utils/paises';
import { sectores } from '../../shared/utils/sectores';
import { respuestaSector } from '../../shared/modells/respuestaSector-interface';
import { TablaListaEmpresasComponent } from '../../shared/components/tablaListaEmpresas/tablaListaEmpresas.component';
import { TablaConsultaComponent } from '../../shared/components/tablaConsulta/tablaConsulta.component';

@Component({
  selector: 'app-sector-mercado-pais',
  standalone: true,
  imports: [CommonModule, FormsModule, TablaListaEmpresasComponent, TablaConsultaComponent],
  templateUrl: './sector-mercado-pais.component.html',
  styleUrls: ['./sector-mercado-pais.component.scss']
})
export class SectorMercadoPaisComponent implements OnInit {
  
  pagina: number = 0;
  paisSeleccionado: string = '';
  sectorSeleccionado: string = '';

  paises: string[] = Object.values(paises);
  paisesFiltrados: string[] = [];
  sectores: string[] = sectores;
  sectoresFiltrados: string[] = [];


  empresasSector: respuestaSector[] = [];

  constructor(private sectorService: SectorMercadoService) {}

  ngOnInit(): void {
    // Sectores siempre visibles
    this.sectoresFiltrados = this.sectores;
  }

  filtrarPaises() {
    const term = this.paisSeleccionado.trim().toLowerCase();

    // No mostrar nada hasta escribir al menos una letra
    if (term.length === 0) {
      this.paisesFiltrados = [];
      return;
    }

    this.paisesFiltrados = this.paises
      .filter(p => p.toLowerCase().includes(term))
      .slice(0, 5); // Máximo 5 sugerencias
  }


cargarEmpresas() {
  if (!this.paisSeleccionado && !this.sectorSeleccionado) return;

  this.sectorService.recogerEmpresasPorPaisSector(
    this.sectorSeleccionado,
    this.paisSeleccionado,
    this.pagina
  ).subscribe({
    next: (data) => {
      this.empresasSector = data;
    },
    error: (err) => {
      console.error('Error al cargar las empresas por consulta', err);
    }
  });
}


  siguientePagina() {
    this.pagina++;
    this.cargarEmpresas();
  }

  paginaAnterior() {
    if (this.pagina > 0) {
      this.pagina--;
      this.cargarEmpresas();
    }
  }
}
