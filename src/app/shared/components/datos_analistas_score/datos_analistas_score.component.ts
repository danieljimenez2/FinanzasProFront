import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { analistasScore } from '../../modells/bd/analistasScore';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-datos_analistas_score',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './datos_analistas_score.component.html',
  styleUrls: ['./datos_analistas_score.component.scss']
})
export class Datos_analistas_scoreComponent implements OnChanges {

  @Input() datosScore: analistasScore | null = null;
  @Input() desplegado: boolean | null = null;

  isCollapsed: boolean = false; // 🔹 Abierto por defecto

  ngOnChanges(changes: SimpleChanges) {
    if (changes['desplegado']) {
      this.isCollapsed = !this.desplegado;
    }
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
