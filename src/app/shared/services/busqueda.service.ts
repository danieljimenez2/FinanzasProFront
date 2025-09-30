import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosEmpresa } from '../modells/bd/datos_empresa';
import { environment } from '../../../environments/environments';
@Injectable({
  providedIn: 'root' 
})
export class BusquedaService {
  constructor(private http: HttpClient) {}
  
  private baseUrl = environment.BaseApiUrl;

  searchCompanies(query: string): Observable<DatosEmpresa[]> {
    return this.http.get<DatosEmpresa[]>(`${this.baseUrl}api/company/search?q=${query}`);
  }
  
}
