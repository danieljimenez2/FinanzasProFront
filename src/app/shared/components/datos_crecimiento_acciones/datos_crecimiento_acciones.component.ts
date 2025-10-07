import { Component, Input, OnInit } from '@angular/core';
import { Crecimientos_por_accion } from '../../modells/bd/crecimientos_por_accion';
import { CommonModule } from '@angular/common';
import { Datos_por_accion } from '../../modells/bd/datos_por_accion';

@Component({
  selector: 'app-datos_crecimiento_acciones',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './datos_crecimiento_acciones.component.html',
  styleUrls: ['./datos_crecimiento_acciones.component.scss']
})
export class Datos_crecimiento_accionesComponent implements OnInit {

  @Input() datosCrecimiento: Crecimientos_por_accion | null = null;
  @Input() datosPorAccion: Datos_por_accion | null = null;
  isCollapsed: boolean = true;

  constructor() { }

  ngOnInit() {

  }

}
