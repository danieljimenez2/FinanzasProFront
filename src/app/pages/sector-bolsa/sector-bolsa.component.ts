import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectorMercadoService } from '../../shared/services/recogerInformacion/sector-mercado.service';
import { respuestaSector } from '../../shared/modells/respuestaSector-interface';
import { TablaListaEmpresasComponent } from '../../shared/components/tablaListaEmpresas/tablaListaEmpresas.component';

@Component({
  selector: 'app-sector-bolsa',
  standalone: true,
  imports: [TablaListaEmpresasComponent],
  templateUrl: './sector-bolsa.component.html',
  styleUrls: ['./sector-bolsa.component.scss']
})
export class SectorBolsaComponent implements OnInit {

  bolsaName: string | null = null;
  empresasSector: respuestaSector[] = [];
  indice: number = 1;
  pagina: number = 0;

  constructor(private route: ActivatedRoute, private sectorService: SectorMercadoService) { }

  ngOnInit() {
    this.bolsaName = this.route.snapshot.paramMap.get('name');
    this.cargarEmpresas()
  }
  cargarEmpresas() {
    if (!this.bolsaName) return;
    this.sectorService.recogerEmpresasPorBolsa(this.bolsaName, this.pagina)
      .subscribe({
        next: (data) => {
          this.empresasSector = data
          console.log(this.empresasSector);
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
