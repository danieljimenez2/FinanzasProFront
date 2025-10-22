import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { respuestaSector } from '../../shared/modells/respuestaSector-interface';
import { SectorMercadoService } from '../../shared/services/recogerInformacion/sector-mercado.service';
import { CommonModule } from '@angular/common';
import { TablaListaEmpresasComponent } from '../../shared/components/tablaListaEmpresas/tablaListaEmpresas.component';

@Component({
  selector: 'app-sector-mercado',
  standalone:true,
  imports:[CommonModule, RouterLink, TablaListaEmpresasComponent],
  templateUrl: './sector-mercado.component.html',
  styleUrls: ['./sector-mercado.component.scss']
})
export class SectorMercadoComponent implements OnInit {

  sectorName: string | null = null;
  empresasSector: respuestaSector[] = [];
  indice: number = 1; 
  pagina: number = 0;

  constructor(private route: ActivatedRoute, private sectorService: SectorMercadoService) {}

  ngOnInit() {
    this.sectorName = this.route.snapshot.paramMap.get('name');
    this.cargarEmpresas();
  }

  cargarEmpresas() {
    if (!this.sectorName) return;
    this.sectorService.recogerEmpresasPorSector(this.sectorName, this.pagina)
      .subscribe({
        next:(data)=>{
          this.empresasSector = data
        },
        error:(error)=>{
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
