import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { TradingviewChartComponent } from '../../shared/components/tradingview-chart/tradingview-chart.component';
import { ActivatedRoute } from '@angular/router';
import { InformacionCompañiaService } from '../../shared/services/recogerInformacion/informacion-compañia.service';
import { datosCompania } from '../../shared/modells/bd/datosCompañia';
import { FechaEspañolaPipe } from '../../shared/pipes/fecha-española.pipe';
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
  imports: [CommonModule, TradingviewChartComponent, DatosValorIntrinsecoComponent, DatosRatiosValoracionYRentabilidadComponent, DatosPosicionFinancieraComponent, DatosMargenesYGastosVentasComponent, DatosEficienciaVentasYActivosComponent, DatosDistribucionAccionesCotizacionComponent, Datos_compañiaComponent, DatosYPreciosGeneralesComponent, DatosDividendosComponent, Datos_analistas_scoreComponent, Datos_crecimiento_accionesComponent],
  templateUrl: './compañia.component.html',
  styleUrls: ['./compañia.component.scss']
})
export class CompañiaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private informacionCompañia: InformacionCompañiaService) { }

  company_symbol: string | null = null
  fechaIpo: Date = new Date

  //Datos para componentes:
  datosScore: analistasScore | null = null;
  datosCrecimiento: crecimientosPorAccion | null = null;
  datosCompania: datosCompania | null = null;

  datosAcciones: datosPorAccion | null = null;
  datosDistribucionYCotizacion: distribucionAccionesYCotizacion | null = null;
  datosDividendos: dividendos | null = null;

  datosEficienciaVentas: eficienciaEnVentasActivos | null = null;
  datosGastosVentas: gastosSobreVentas | null = null;
  datosMargenesCompania: margenesDeLaCompañiaSobreVentas | null = null;

  datosPosicionFinanciera: posicionFinanciera | null = null
  datosYPrecioGenerales: precioYDatosGenerales | null = null;
  datosRatiosValoracion: ratiosDeValoracion | null = null;

  datosRatiosRentabilidad: ratiosRentabilidad | null = null;
  datosValorIntrinseco: valorIntrinseco | null = null;

  //Variables sacadas de eventos  
  monedaActual: string | null = null;
  desplegar: boolean = true;
  favoritoGlobal: boolean = false;




  ngOnInit() {
    this.company_symbol = this.route.snapshot.paramMap.get('companySymbol');
    //Datos compañia
    if (this.company_symbol) {
      //1. Datos Score
      this.informacionCompañia.getCompanyScore(this.company_symbol).subscribe({
        next: (data) => {
          this.datosScore = data;
        },
        error: (err) => {
          console.log('Error al cargar los datos de valoración', err)
        }
      });
      //2. Crecimiento por accion
      this.informacionCompañia.recogerCrecimientoAccion(this.company_symbol).subscribe({
        next: (data) => {
          this.datosCrecimiento = data
        },
        error: (err) => {

          console.log('Error al cargar los datos de crecimiento', err)
        }

      });
      //3. Datos compañia
      this.informacionCompañia.getCompanyInfo(this.company_symbol).subscribe({
        next: (data) => {

          this.fechaIpo = data.fechaIpo
          this.datosCompania = data;
        },
        error: (err) => {
          console.error('Error al cargar los datos de la compañía:', err);
        }
      });

      //4. Datos por accion
      this.informacionCompañia.recogerDatosPorAccion(this.company_symbol).subscribe({
        next: (data) => {
          this.datosAcciones = data;
        },
        error: (err) => {
          console.log('Error al cargar los datos por accion', err)
        }
      });
      //5. Recoger distribucion acciones y cotizacion
      this.informacionCompañia.recogerDistribucionAccionesYCotizacion(this.company_symbol).subscribe({
        next: (data) => {
          this.datosDistribucionYCotizacion = data
        },
        error: (err) => {
          console.error('Error al cargar la distribucion de acciones y cotizacion')
        }
      })
      //6. Recoger dividendos
      this.informacionCompañia.recogerDividendos(this.company_symbol).subscribe({
        next: (data) => {
          this.datosDividendos = data
        },
        error: (err) => {
          console.error('Error al cargar dividendos : ', err)
        }
      });
      //7. Recoger eficiencia en ventas y activos
      this.informacionCompañia.recogerEficienciaEnVentasYActivos(this.company_symbol).subscribe({
        next: (data) => {
          this.datosEficienciaVentas = data;
        },
        error: (err) => {
          console.error('Error al cargar la eficiencia de ventas y activos', err)
        }
      });
      //8. Recoger gastos sobre ventas      
      this.informacionCompañia.recogerGastosSobreVentas(this.company_symbol).subscribe({
        next: (data) => {
          this.datosGastosVentas = data
        },
        error: (err) => {
          console.error(`error al cargar los gastos sobre las ventas`, err)
        }
      })
      //9. Recoger margenes de la compañia
      this.informacionCompañia.recogerMargenesCompania(this.company_symbol).subscribe({
        next: (data) => {
          this.datosMargenesCompania = data;
        },
        error: (err) => {
          console.error(`error al cargar los margenes de la compañia`)
        }
      })
      //10. Recoger posicion financiera
      this.informacionCompañia.recogerPosicionFinanciera(this.company_symbol).subscribe({
        next: (data) => {
          this.datosPosicionFinanciera = data
        },
        error: (err) => {
          console.error(`error al cargar la posicion financiera`, err);
        }
      })
      //11. Recoger precios y datos generales
      this.informacionCompañia.recogerPreciosYDatosGenerales(this.company_symbol).subscribe({
        next: (data) => {
          this.datosYPrecioGenerales = data
        },
        error: (err) => {
          console.log('Error al cargar los precios y datos generales de la empresa: ', err)
        }
      });
      //12. Recoger ratios de valoracion
      this.informacionCompañia.recogerRatiosDeValoracion(this.company_symbol).subscribe({
        next: (data) => {
          this.datosRatiosValoracion = data;
        },
        error: (err) => {
          console.error('Error al cargar los ratios de valoracion', err)
        }
      })
      //13. Recoger ratios de rentabilidad
      this.informacionCompañia.recogerRatiosDeRentabilidad(this.company_symbol).subscribe({
        next: (data) => {
          this.datosRatiosRentabilidad = data;
        },
        error: (err) => {
          console.error('Error al cargar los ratios de rentabilidad', err);
        }
      })
      //14. Recoger valor intrinseco  
      this.informacionCompañia.recogerValorIntrinseco(this.company_symbol).subscribe({
        next: (data) => {
          this.datosValorIntrinseco = data;
        },
        error: (err) => {
          console.error('Error al cargar el valor intrinseco', err)
        }
      })
      //Final if
    }


  }


  mostrarScrollTop = false;

  // Escucha el scroll del usuario
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.mostrarScrollTop = scrollY > 200; // muestra el botón si se baja más de 200px
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
