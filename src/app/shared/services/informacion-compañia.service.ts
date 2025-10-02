import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { Observable } from 'rxjs';
import { DatosCompania } from '../modells/bd/datos_compañia';
import { Analistas_score } from '../modells/bd/analistas_score';

@Injectable({
  providedIn: 'root' 
})
export class InformacionCompañiaService {


  private baseUrl = environment.BaseApiUrl;

  constructor(private http: HttpClient) { }

  getCompanyInfo(companySymbol: string): Observable<DatosCompania> {
    const headers = new HttpHeaders({
      companySymbol: companySymbol
    });

    return this.http.get<DatosCompania>(`${this.baseUrl}compañia/info`, { headers });
  }
  getCompanyScore(companySymbol:string): Observable<Analistas_score>
  {
    const headers = new HttpHeaders({
      companySymbol: companySymbol
    });
    return this.http.get<Analistas_score>(`${this.baseUrl}compañia/score`, {headers});
  }
  

}
