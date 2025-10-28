import { Component, OnInit } from '@angular/core';
import { TablaListaEmpresasComponent } from '../../shared/components/tablaListaEmpresas/tablaListaEmpresas.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SectorMercadoService } from '../../shared/services/recogerInformacion/sector-mercado.service';
import { respuestaSector } from '../../shared/modells/respuestaSector-interface';

@Component({
  selector: 'app-sector-pais',
  standalone: true,
  imports: [TablaListaEmpresasComponent, CommonModule],
  templateUrl: './sector-pais.component.html',
  styleUrls: ['./sector-pais.component.scss']
})
export class SectorPaisComponent implements OnInit {

  pais: string | null = null;
  empresasSector: respuestaSector[] = [];
  indice: number = 1;
  pagina: number = 0;

  constructor(private route: ActivatedRoute, private sectorService: SectorMercadoService) { }

  ngOnInit() {
    this.pais = this.route.snapshot.paramMap.get('name');
    this.cargarEmpresas()
  }
  cargarEmpresas() {
    if (!this.pais) return;
    this.sectorService.recogerEmpresasPorPais(this.pais, this.pagina)
      .subscribe({
        next: (data) => {
          this.empresasSector = data
        },
        error: (error) => {
          console.error(`Error al cargar la tabla de empresas`, error)
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
