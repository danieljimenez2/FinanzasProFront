import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { Observable } from 'rxjs';
import { datosCompania } from '../../modells/bd/datosCompañia';
import { analistasScore } from '../../modells/bd/analistasScore';
import { datosPorAccion } from '../../modells/bd/datosPorAccion';
import { precioYDatosGenerales } from '../../modells/bd/precioYDatosGenerales';
import { distribucionAccionesYCotizacion } from '../../modells/bd/distribucionAccionesYCotizacion';
import { dividendos } from '../../modells/bd/dividendos';
import { eficienciaEnVentasActivos } from '../../modells/bd/EficienciaEnVentasActivos';
import { crecimientosPorAccion } from '../../modells/bd/crecimientosPorAccion';
import { gastosSobreVentas } from '../../modells/bd/gastosSobreVentas';
import { margenesDeLaCompañiaSobreVentas } from '../../modells/bd/margenesDeLaCompañiaSobreVentas';
import { posicionFinanciera } from '../../modells/bd/posicionFinanciera';
import { ratiosDeValoracion } from '../../modells/bd/ratiosDeValoracion';
import { ratiosRentabilidad } from '../../modells/bd/ratiosRentabilidad';
import { valorIntrinseco } from '../../modells/bd/valorIntrinseco';

@Injectable({
  providedIn: 'root'
})
export class InformacionCompañiaService {


  private baseUrl = environment.BaseApiUrl;

  constructor(private http: HttpClient) { }


  //1. Recoger datos analistas
  getCompanyScore(companySymbol: string): Observable<analistasScore> {
    const headers = new HttpHeaders({
      companySymbol: companySymbol
    });
    return this.http.get<analistasScore>(`${this.baseUrl}compania/score`, { headers });
  }
  //2. Recoger datos crecimiento por accion
  recogerCrecimientoAccion(companySymbol: string): Observable<crecimientosPorAccion> {
    const headers = new HttpHeaders({
      companySymbol: companySymbol
    })
    return this.http.get<crecimientosPorAccion>(`${this.baseUrl}compania/crecimiento`, { headers })
  }
  //3. Recoger informacion de la compañia 
  getCompanyInfo(companySymbol: string): Observable<datosCompania> {
    const headers = new HttpHeaders({
      companySymbol: companySymbol
    });

    return this.http.get<datosCompania>(`${this.baseUrl}compania/info`, { headers });
  }
  //?. recoger datos empresa no lo pongo debido a que ya va como dato en cualquier llamada 

  //4. Recoger datos por accion
  recogerDatosPorAccion(companySymbol: string): Observable<datosPorAccion> {
    const headers = new HttpHeaders({
      companySymbol: companySymbol
    })
    return this.http.get<datosPorAccion>(`${this.baseUrl}compania/datosAccion`, { headers });
  }

  //5. Recoger distribucion acciones y cotizacion
  recogerDistribucionAccionesYCotizacion(companySymbol: string): Observable<distribucionAccionesYCotizacion> {
    const headers = new HttpHeaders({
      companySymbol: companySymbol
    })
    return this.http.get<distribucionAccionesYCotizacion>(`${this.baseUrl}compania/cotizacion`, { headers });
  }
  //6. Recoger dividendos
  recogerDividendos(companySymbol: string): Observable<dividendos> {
    const headers = new HttpHeaders({
      companySymbol: companySymbol
    })
    return this.http.get<dividendos>(`${this.baseUrl}compania/dividendos`,{headers})
  }
  //7. Recoger eficiencia en ventas y activos
  recogerEficienciaEnVentasYActivos(companySymbol: string): Observable<eficienciaEnVentasActivos> {
    const headers = new HttpHeaders({
      companySymbol: companySymbol
    })
    return this.http.get<eficienciaEnVentasActivos>(`${this.baseUrl}compania/eficienciaVentas`,{headers})
  }
  //8. Recoger gastos sobre ventas
  recogerGastosSobreVentas(companySymbol: string): Observable<gastosSobreVentas> {
    const headers = new HttpHeaders({
      companySymbol: companySymbol
    })
    return this.http.get<gastosSobreVentas>(`${this.baseUrl}compania/gastosYActivos`, { headers })
  }
  //9. Recoger margenes compañia sobre ventas
  recogerMargenesCompania(companySymbol: string): Observable<margenesDeLaCompañiaSobreVentas> {
    const headers = new HttpHeaders({
      companySymbol: companySymbol
    })
    return this.http.get<margenesDeLaCompañiaSobreVentas>(`${this.baseUrl}compania/margenesCompania`, { headers })
  }
  //10. Recoger posicion financiera
  recogerPosicionFinanciera(companySymbol: string): Observable<posicionFinanciera> {
    const headers = new HttpHeaders({
      companySymbol: companySymbol
    })
    return this.http.get<posicionFinanciera>(`${this.baseUrl}compania/posicionFinanciera`, { headers })
  }
  //11. Recoger precios y datos generales
  recogerPreciosYDatosGenerales(companySymbol: string): Observable<precioYDatosGenerales> {
    const headers = new HttpHeaders({
      companySymbol: companySymbol
    });
    return this.http.get<precioYDatosGenerales>(`${this.baseUrl}compania/precios`, { headers });
  }

  //12. Recoger ratios de valoracion
  recogerRatiosDeValoracion(companySymbol: string): Observable<ratiosDeValoracion> {
    const headers = new HttpHeaders({
      companySymbol: companySymbol
    })
    return this.http.get<ratiosDeValoracion>(`${this.baseUrl}compania/ratiosValoracion`, { headers })
  }
  //13. Recoger ratios de rentabilidad
  recogerRatiosDeRentabilidad(companySymbol: string): Observable<ratiosRentabilidad> {
    const headers = new HttpHeaders({
      companySymbol: companySymbol
    })
    return this.http.get<ratiosRentabilidad>(`${this.baseUrl}compania/ratiosRentabilidad`, { headers })
  }
  //14. Recoger valor intrinseco
  recogerValorIntrinseco(companySymbol: string): Observable<valorIntrinseco> {
    const headers = new HttpHeaders({
      companySymbol: companySymbol
    })
    return this.http.get<valorIntrinseco>(`${this.baseUrl}compania/valorIntrinseco`, { headers })
  }



}
