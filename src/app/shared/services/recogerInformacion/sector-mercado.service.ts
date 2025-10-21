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
}
