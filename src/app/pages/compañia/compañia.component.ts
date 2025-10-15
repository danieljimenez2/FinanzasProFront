import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TradingviewChartComponent } from '../../shared/components/tradingview-chart/tradingview-chart.component';
import { ActivatedRoute } from '@angular/router';
import { InformacionCompañiaService } from '../../shared/services/recogerInformacion/informacion-compañia.service';
import { datosCompania} from '../../shared/modells/bd/datosCompañia';
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
@Component({
  selector: 'app-compañia',
  standalone: true,
  imports: [CommonModule, TradingviewChartComponent, FechaEspañolaPipe,DatosDistribucionAccionesCotizacionComponent, Datos_compañiaComponent, DatosYPreciosGeneralesComponent, DatosDividendosComponent, Datos_analistas_scoreComponent, Datos_crecimiento_accionesComponent],
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
  datosDividendos: dividendos |null = null;

  datosEficienciaVentas: eficienciaEnVentasActivos | null = null;
  datosGastosYActivos: gastosSobreVentas | null = null;
  datosMargenesCompania: margenesDeLaCompañiaSobreVentas | null = null; 

  datosPosicionFinanciera: posicionFinanciera | null = null 
  datosYPrecioGenerales: precioYDatosGenerales | null = null; 
  datosRatiosValoracion: ratiosDeValoracion | null = null; 

  datosRatiosRentabilidad: ratiosRentabilidad | null = null;
  datosValorIntinseco: valorIntrinseco | null = null;

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
          console.log(`datos por accion: `,this.datosAcciones)
        },
        error: (err) => {
          console.log('Error al cargar los datos por accion', err)
        }
      });
      //5. Recoger distribucion acciones y cotizacion
      this.informacionCompañia.recogerDistribucionAccionesYCotizacion(this.company_symbol).subscribe({
        next:(data)=>{
          this.datosDistribucionYCotizacion = data
        },
        error:(err)=>{
          console.error('Error al cargar la distribucion de acciones y cotizacion')
        }
      })
      //6. Recoger dividendos
      this.informacionCompañia.recogerDividendos(this.company_symbol).subscribe({
        next: (data) => {
          this.datosDividendos = data
        },
        error:(err)=>
          {
            console.error('Error al cargar dividendos : ',err)
          }
      });
      //7. Recoger eficiencia en ventas y activos
      this.informacionCompañia.recogerEficienciaEnVentasYActivos(this.company_symbol).subscribe({
        next:(data)=>
          {
            this.datosEficienciaVentas = data;
          },
        error:(err)=>{
          console.error('Error al cargar la eficiencia de ventas y activos', err)
        }
      });
      //8. Recoger gastos sobre ventas
      //9. Recoger margenes de la compañia
      //10. Recoger posicion financiera
      //11. Recoger precios y datos generales
      this.informacionCompañia.recogerPreciosYDatosGenerales(this.company_symbol).subscribe({
        next: (data) => {
          this.datosYPrecioGenerales = data
        },
        error: (err) => {
          console.log('Error al cargar los precios y datos generales de la empresa: ', err)
        }
      });

      //Final if
    }


  }



  onMonedaSeleccionada(moneda: string) {
    this.monedaActual = moneda;
    console.log('💰 Moneda seleccionada:', moneda);
  }

  onMostrarInfoCambiado(valor: boolean) {
    this.desplegar = valor;
    console.log('👁 Mostrar info:', valor);
  }

  onFavoritoCambiado(valor: boolean) {
    this.favoritoGlobal = valor;
    console.log('⭐ Favorito:', valor);
  }
}
