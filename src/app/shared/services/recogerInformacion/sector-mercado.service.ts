import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { respuestaSector } from '../../modells/respuestaSector-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SectorMercadoService {

  constructor(private http: HttpClient) { }

  recogerEmpresasPorSector(sector: string, pagina: number = 0): Observable<respuestaSector[]> {
    const headers = new HttpHeaders({ sector, page: pagina.toString() });
    return this.http.get<respuestaSector[]>(`${environment.BaseApiUrl}sector/individual`, { headers });
  }
  recogerEmpresasPorPais(pais: string, pagina: number = 0): Observable<respuestaSector[]> {
    const headers = new HttpHeaders({ pais, page: pagina.toString() });
    return this.http.get<respuestaSector[]>(`${environment.BaseApiUrl}sector/pais`, { headers });
  }
  recogerEmpresasPorBolsa(bolsa: string, pagina: number = 0): Observable<respuestaSector[]> {
    const headers = new HttpHeaders({ bolsa, page: pagina.toString() });
    return this.http.get<respuestaSector[]>(`${environment.BaseApiUrl}sector/bolsa`, { headers });
  }

  recogerEmpresasPorPaisSector(sector:string, pais:string, pagina: number = 0,):Observable<respuestaSector[]>
  {
    const headers = new HttpHeaders({
      pais, sector, page:pagina.toString()
    });
    return this.http.get<respuestaSector[]>(`${environment.BaseApiUrl}sector/consulta`,{headers})

  }
}
