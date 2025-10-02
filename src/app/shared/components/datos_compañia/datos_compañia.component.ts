import { Component, Input, OnInit } from '@angular/core';
import { DatosCompania } from '../../modells/bd/datos_compañia';
import { FechaEspañolaPipe } from '../../pipes/fecha-española.pipe';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-datos_compania',
  standalone:true,
  imports:[CommonModule,FechaEspañolaPipe],
  templateUrl: './datos_compañia.component.html',
  styleUrls: ['./datos_compañia.component.scss']
})
export class Datos_compañiaComponent implements OnInit {
  @Input() datosCompania: DatosCompania | null = null
  @Input() fechaIpo: Date | null = null

  constructor() { }

  ngOnInit() {

  }

}
