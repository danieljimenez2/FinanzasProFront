import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { TradingviewChartComponent } from '../../shared/components/tradingview-chart/tradingview-chart.component';
import { ActivatedRoute } from '@angular/router';
import { InformacionCompañiaService } from '../../shared/services/recogerInformacion/informacion-compañia.service';
import { datosCompania } from '../../shared/modells/bd/datosCompañia';
import { Datos_compañiaComponent } from '../../shared/components/datos_compañia/datos_compañia.component';
import { analistasScore } from '../../shared/modells/bd/analistasScore';
import { Datos_analistas_scoreComponent } from '../../shared/components/datos_analistas_score/datos_analistas_score.component';
import { crecimientosPorAccion } from '../../shared/modells/bd/crecimientosPorAccion';
import { datosPorAccion } from '../../shared/modells/bd/datosPorAccion';
import { precioYDatosGenerales } from '../../shared/modells/bd/precioYDatosGenerales';
import { Datos_crecimiento_accionesComponent } from "../../shared/components/datos_crecimiento_acciones/datos_crecimiento_acciones.component";
import { DatosYPreciosGeneralesComponent } from '../../shared/components/datosYPreciosGenerales/DatosYPreciosGenerales.component';
import { DatosDividendosComponent } from '../../shared/components/datosDividendos/datosDividendos.component';
import { distribucionAccionesYCotizacion } from '../../shared/modells/bd/distribucionAccionesYCotizacion';
import { dividendos } from '../../shared/modells/bd/dividendos';
import { eficienciaEnVentasActivos } from '../../shared/modells/bd/EficienciaEnVentasActivos';
import { gastosSobreVentas } from '../../shared/modells/bd/gastosSobreVentas';
import { margenesDeLaCompañiaSobreVentas } from '../../shared/modells/bd/margenesDeLaCompañiaSobreVentas';
import { posicionFinanciera } from '../../shared/modells/bd/posicionFinanciera';
import { ratiosDeValoracion } from '../../shared/modells/bd/ratiosDeValoracion';
import { ratiosRentabilidad } from '../../shared/modells/bd/ratiosRentabilidad';
import { valorIntrinseco } from '../../shared/modells/bd/valorIntrinseco';
import { DatosDistribucionAccionesCotizacionComponent } from '../../shared/components/datosDistribucionAccionesCotizacion/datosDistribucionAccionesCotizacion.component';
import { DatosEficienciaVentasYActivosComponent } from '../../shared/components/datosEficienciaVentasYActivos/datosEficienciaVentasYActivos.component';
import { DatosMargenesYGastosVentasComponent } from '../../shared/components/datosMargenesYGastosVentas/datosMargenesYGastosVentas.component';
import { DatosPosicionFinancieraComponent } from '../../shared/components/datosPosicionFinanciera/datosPosicionFinanciera.component';
import { DatosRatiosValoracionYRentabilidadComponent } from '../../shared/components/datosRatiosValoracionYRentabilidad/datosRatiosValoracionYRentabilidad.component';
import { DatosValorIntrinsecoComponent } from '../../shared/components/datosValorIntrinseco/datosValorIntrinseco.component';

@Component({
  selector: 'app-compañia',
  standalone: true,
  imports: [
    CommonModule,
    TradingviewChartComponent,
    DatosValorIntrinsecoComponent,
    DatosRatiosValoracionYRentabilidadComponent,
    DatosPosicionFinancieraComponent,
    DatosMargenesYGastosVentasComponent,
    DatosEficienciaVentasYActivosComponent,
    DatosDistribucionAccionesCotizacionComponent,
    Datos_compañiaComponent,
    DatosYPreciosGeneralesComponent,
    DatosDividendosComponent,
    Datos_analistas_scoreComponent,
    Datos_crecimiento_accionesComponent
  ],
  templateUrl: './compañia.component.html',
  styleUrls: ['./compañia.component.scss']
})
export class CompañiaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private informacionCompañia: InformacionCompañiaService) {}

  company_symbol: string | null = null;
  fechaIpo: Date = new Date();

  // Datos para componentes:
  datosScore: analistasScore | null = null;
  datosCrecimiento: crecimientosPorAccion | null = null;
  datosCompania: datosCompania | null = null;
  datosAcciones: datosPorAccion | null = null;
  datosDistribucionYCotizacion: distribucionAccionesYCotizacion | null = null;
  datosDividendos: dividendos | null = null;
  datosEficienciaVentas: eficienciaEnVentasActivos | null = null;
  datosGastosVentas: gastosSobreVentas | null = null;
  datosMargenesCompania: margenesDeLaCompañiaSobreVentas | null = null;
  datosPosicionFinanciera: posicionFinanciera | null = null;
  datosYPrecioGenerales: precioYDatosGenerales | null = null;
  datosRatiosValoracion: ratiosDeValoracion | null = null;
  datosRatiosRentabilidad: ratiosRentabilidad | null = null;
  datosValorIntrinseco: valorIntrinseco | null = null;

  // Variables de estado
  monedaActual: string | null = null;
  desplegar: boolean = true;
  favoritoGlobal: boolean = false;
  mostrarScrollTop = false;

  ngOnInit() {
    // 🔁 Nos suscribimos a los cambios en el parámetro companySymbol
    this.route.paramMap.subscribe(params => {
      const newSymbol = params.get('companySymbol');
      if (newSymbol && newSymbol !== this.company_symbol) {
        this.company_symbol = newSymbol;
        this.resetDatos(); // 🔹 Limpiamos todo
        this.cargarDatosCompañia(newSymbol); // 🔹 Volvemos a cargar con el nuevo símbolo
        window.scrollTo({ top: 0 }); // opcional: vuelve al inicio
      }
    });
  }

  private cargarDatosCompañia(symbol: string) {
    this.informacionCompañia.getCompanyScore(symbol).subscribe({
      next: (data) => (this.datosScore = data),
      error: (err) => console.log('Error al cargar los datos de valoración', err)
    });

    this.informacionCompañia.recogerCrecimientoAccion(symbol).subscribe({
      next: (data) => (this.datosCrecimiento = data),
      error: (err) => console.log('Error al cargar los datos de crecimiento', err)
    });

    this.informacionCompañia.getCompanyInfo(symbol).subscribe({
      next: (data) => {
        this.fechaIpo = data.fechaIpo;
        this.datosCompania = data;
      },
      error: (err) => console.error('Error al cargar los datos de la compañía:', err)
    });

    this.informacionCompañia.recogerDatosPorAccion(symbol).subscribe({
      next: (data) => (this.datosAcciones = data),
      error: (err) => console.log('Error al cargar los datos por acción', err)
    });

    this.informacionCompañia.recogerDistribucionAccionesYCotizacion(symbol).subscribe({
      next: (data) => (this.datosDistribucionYCotizacion = data),
      error: (err) => console.error('Error al cargar la distribución de acciones', err)
    });

    this.informacionCompañia.recogerDividendos(symbol).subscribe({
      next: (data) => (this.datosDividendos = data),
      error: (err) => console.error('Error al cargar dividendos', err)
    });

    this.informacionCompañia.recogerEficienciaEnVentasYActivos(symbol).subscribe({
      next: (data) => (this.datosEficienciaVentas = data),
      error: (err) => console.error('Error al cargar eficiencia en ventas', err)
    });

    this.informacionCompañia.recogerGastosSobreVentas(symbol).subscribe({
      next: (data) => (this.datosGastosVentas = data),
      error: (err) => console.error('Error al cargar gastos sobre ventas', err)
    });

    this.informacionCompañia.recogerMargenesCompania(symbol).subscribe({
      next: (data) => (this.datosMargenesCompania = data),
      error: (err) => console.error('Error al cargar márgenes de la compañía', err)
    });

    this.informacionCompañia.recogerPosicionFinanciera(symbol).subscribe({
      next: (data) => (this.datosPosicionFinanciera = data),
      error: (err) => console.error('Error al cargar posición financiera', err)
    });

    this.informacionCompañia.recogerPreciosYDatosGenerales(symbol).subscribe({
      next: (data) => (this.datosYPrecioGenerales = data),
      error: (err) => console.log('Error al cargar precios y datos generales', err)
    });

    this.informacionCompañia.recogerRatiosDeValoracion(symbol).subscribe({
      next: (data) => (this.datosRatiosValoracion = data),
      error: (err) => console.error('Error al cargar ratios de valoración', err)
    });

    this.informacionCompañia.recogerRatiosDeRentabilidad(symbol).subscribe({
      next: (data) => (this.datosRatiosRentabilidad = data),
      error: (err) => console.error('Error al cargar ratios de rentabilidad', err)
    });

    this.informacionCompañia.recogerValorIntrinseco(symbol).subscribe({
      next: (data) => (this.datosValorIntrinseco = data),
      error: (err) => console.error('Error al cargar valor intrínseco', err)
    });
  }

  private resetDatos() {
    this.datosScore = null;
    this.datosCrecimiento = null;
    this.datosCompania = null;
    this.datosAcciones = null;
    this.datosDistribucionYCotizacion = null;
    this.datosDividendos = null;
    this.datosEficienciaVentas = null;
    this.datosGastosVentas = null;
    this.datosMargenesCompania = null;
    this.datosPosicionFinanciera = null;
    this.datosYPrecioGenerales = null;
    this.datosRatiosValoracion = null;
    this.datosRatiosRentabilidad = null;
    this.datosValorIntrinseco = null;
  }

  // Scroll al top
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.mostrarScrollTop = scrollY > 200;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onMonedaSeleccionada(moneda: string) {
    this.monedaActual = moneda;
  }

  onMostrarInfoCambiado(valor: boolean) {
    this.desplegar = valor;
  }

  onFavoritoCambiado(valor: boolean) {
    this.favoritoGlobal = valor;
  }
}
