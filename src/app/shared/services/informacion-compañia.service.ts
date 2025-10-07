import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { Observable } from 'rxjs';
import { DatosCompania } from '../modells/bd/datos_compañia';
import { Analistas_score } from '../modells/bd/analistas_score';
import { Datos_por_accion } from '../modells/bd/datos_por_accion';
import { Precio_y_datos_generales } from '../modells/bd/precioYDatosGenerales';

@Injectable({
  providedIn: 'root'
})
export class InformacionCompañiaService {


  private baseUrl = environment.BaseApiUrl;

  constructor(private http: HttpClient) { }

  getCompanyScore(companySymbol: string): Observable<Analistas_score> {
    const headers = new HttpHeaders({
      companySymbol: companySymbol
    });
    return this.http.get<Analistas_score>(`${this.baseUrl}compania/score`, { headers });
  }

  recogerCrecimientoAccion(companySymbol: string): Observable<Analistas_score> {
    const headers = new HttpHeaders({
      companySymbol: companySymbol
    })
    return this.http.get<Analistas_score>(`${this.baseUrl}compania/crecimiento`, { headers })
  }

  getCompanyInfo(companySymbol: string): Observable<DatosCompania> {
    const headers = new HttpHeaders({
      companySymbol: companySymbol
    });

    return this.http.get<DatosCompania>(`${this.baseUrl}compania/info`, { headers });
  }

  recogerDatosPorAccion(companySymbol: string): Observable<Datos_por_accion> {
    const headers = new HttpHeaders({
      companySymbol: companySymbol
    })
    return this.http.get<Datos_por_accion>(`${this.baseUrl}compania/datosAccion`, { headers });
  }


  recogerPreciosYDatosGenerales(companySymbol: string): Observable<Precio_y_datos_generales> {
    const headers = new HttpHeaders({
      companySymbol: companySymbol
    });
    return this.http.get<Precio_y_datos_generales>(`${this.baseUrl}compania/precios`, { headers });
  }

  




}
