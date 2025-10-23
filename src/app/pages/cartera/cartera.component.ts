import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TablaListaEmpresasComponent } from '../../shared/components/tablaListaEmpresas/tablaListaEmpresas.component';
import { CarteraInversionService } from '../../shared/services/recogerInformacion/carteraInversion.service';
import { respuestaSector } from '../../shared/modells/respuestaSector-interface';
import { TablaCarteraAccionesComponent } from '../../shared/components/tablaCarteraAcciones/tablaCarteraAcciones.component';
@Component({
  selector: 'app-cartera',
  standalone:true,
  imports:[CommonModule, TablaCarteraAccionesComponent],
  templateUrl: './cartera.component.html',
  styleUrls: ['./cartera.component.scss']
})
export class CarteraComponent implements OnInit {

  constructor(private carteraService : CarteraInversionService) { }

  listaCartera: respuestaSector [] = []

  ngOnInit() {
    this.carteraService.recogerListaCartera().subscribe({
      next:(data)=>{this.listaCartera = data},
      error:(err)=>{console.error('error al cargar la cartera de inversión',err)}
    })
  }

}
