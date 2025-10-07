import { Component, Input, OnInit } from '@angular/core';
import { Precio_y_datos_generales } from '../../modells/bd/precioYDatosGenerales';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-DatosYPreciosGenerales',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './DatosYPreciosGenerales.component.html',
  styleUrls: ['./DatosYPreciosGenerales.component.scss']
})
export class DatosYPreciosGeneralesComponent implements OnInit {
  @Input() precioYDatosGenerales : Precio_y_datos_generales | null = null
  constructor() { }

  ngOnInit() {
  }

}
