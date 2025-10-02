import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Analistas_score } from '../../modells/bd/analistas_score';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-datos_analistas_score',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './datos_analistas_score.component.html',
  styleUrls: ['./datos_analistas_score.component.scss']
})
export class Datos_analistas_scoreComponent implements OnChanges {
  @Input() datosScore: Analistas_score | null = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['datosScore'] && this.datosScore) {
      
    }
  }
}
