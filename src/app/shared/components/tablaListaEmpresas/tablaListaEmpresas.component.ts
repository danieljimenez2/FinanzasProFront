import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { respuestaSector } from '../../modells/respuestaSector-interface';
import { PercentFixPipe } from '../../pipes/porcentajeOrdenado';

@Component({
  selector: 'app-tablaListaEmpresas',
  standalone: true,
  imports: [CommonModule, RouterLink, PercentFixPipe],
  templateUrl: './tablaListaEmpresas.component.html',
  styleUrls: ['./tablaListaEmpresas.component.scss']
})
export class TablaListaEmpresasComponent implements OnInit {

  @Input() empresas: respuestaSector[] = [];
  @Input() sectorName: string | null = null;
  @Input() pagina: number = 0;

  // Orden
  sortColumn: string | null = null;
  sortAsc: boolean = true;

  ngOnInit() {}

  // === MÉTODOS DE COLOR SEGÚN RANGO ===
  getColorPER(per: number | null | undefined): string {
    if (per == null) return 'gris';
    if (per < 0) return 'gris';
    if (per >= 1 && per < 5) return 'verde';
    if (per >= 5 && per <= 20) return 'amarillo';
    return 'rojo';
  }

  getColorEVFCF(evFcf: number | null | undefined): string {
    if (evFcf == null) return 'gris';
    if (evFcf < 0) return 'gris';
    if (evFcf >= 1 && evFcf < 5) return 'verde';
    if (evFcf >= 5 && evFcf <= 20) return 'amarillo';
    return 'rojo';
  }

  getColorSituacionCaja(situacion: string | null | undefined): string {
    if (!situacion) return 'gris';
    return situacion.toUpperCase().includes('CAJA NETA') ? 'verde' :
           situacion.toUpperCase().includes('DEUDA NETA') ? 'rojo' : 'gris';
  }

  getColorROCE(roce: number | null | undefined): string {
    if (roce == null) return 'gris';
    if (roce < 0) return 'rojo';
    if (roce >= 0 && roce < 20) return 'amarillo';
    return 'verde';
  }

  getColorRatioDeuda(ratio: number | null | undefined): string {
    if (ratio == null || ratio === 0) return 'gris';
    if (ratio > 0 && ratio <= 0.4) return 'verde';
    if (ratio > 0.4 && ratio <= 5) return 'amarillo';
    return 'rojo';
  }

  getColorLiquidez(value: number | null | undefined): string {
    if (value == null || value === 0) return 'gris';
    if (value > 0 && value < 1) return 'rojo';
    if (value >= 1 && value <= 2) return 'amarillo';
    return 'verde';
  }

  getColorMargenBruto(value: number | null | undefined): string {
    if (value == null || value === 0) return 'gris';
    if (value < 0) return 'rojo';
    if (value > 0 && value <= 40) return 'amarillo';
    return 'verde';
  }

  getColorMargenNeto(value: number | null | undefined): string {
    if (value == null || value === 0) return 'gris';
    if (value < 0) return 'rojo';
    if (value > 0 && value <= 25) return 'amarillo';
    return 'verde';
  }

  getColorDividendYield(value: number | null | undefined): string {
    if (value == null || value === 0) return 'gris';
    if (value > 0 && value < 1) return 'rojo';
    if (value >= 1 && value <= 3) return 'amarillo';
    return 'verde';
  }

  getColorPayoutRatio(value: number | null | undefined): string {
    if (value == null || value === 0) return 'gris';
    if (value < 0) return 'rojo';
    if (value > 0 && value <= 40) return 'verde';
    return 'amarillo';
  }

  // === ORDENAMIENTO ===
  sortBy(column: string) {
    if (this.sortColumn === column) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortColumn = column;
      this.sortAsc = true;
    }

    this.empresas.sort((a: any, b: any) => {
      let valA = a[column];
      let valB = b[column];

      if (typeof valA === 'string') valA = valA.toUpperCase();
      if (typeof valB === 'string') valB = valB.toUpperCase();

      if (valA < valB) return this.sortAsc ? -1 : 1;
      if (valA > valB) return this.sortAsc ? 1 : -1;
      return 0;
    });
  }
}
