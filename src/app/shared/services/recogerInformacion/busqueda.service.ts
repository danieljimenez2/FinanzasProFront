import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { datosEmpresa } from '../../modells/bd/datosEmpresa';
import { environment } from '../../../../environments/environments';
@Injectable({
  providedIn: 'root' 
})
export class BusquedaService {
  constructor(private http: HttpClient) {}
  
  private baseUrl = environment.BaseApiUrl;

  searchCompanies(query: string): Observable<datosEmpresa[]> {
    return this.http.get<datosEmpresa[]>(`${this.baseUrl}api/company/search?q=${query}`);
  }
  
}
