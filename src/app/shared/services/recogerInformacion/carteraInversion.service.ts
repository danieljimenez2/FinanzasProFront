import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environments';
import { respuestaSector } from '../../modells/respuestaSector-interface';

@Injectable({
  providedIn: 'root'
})
export class CarteraInversionService {

  constructor(private http: HttpClient) { }

  // Obtener lista de favoritos
  recogerListaCartera(): Observable<respuestaSector[]> {
    return this.http.get<respuestaSector[]>(`${environment.BaseApiUrl}cartera/lista`);
  }

  // Añadir a favoritos
  anadirAFavoritos(companySymbol: string): Observable<any> {
    const headers = new HttpHeaders({ 'companySymbol': companySymbol });
    return this.http.put(`${environment.BaseApiUrl}cartera/anadir`, null, { headers });
  }

  // Borrar favorito
  borrarFavorito(companySymbol: string): Observable<any> {
    const headers = new HttpHeaders({ 'companySymbol': companySymbol });
    return this.http.delete(`${environment.BaseApiUrl}cartera/borrar`, { headers });
  }

  // Comprobar si es favorito
  comprobarSiEsFavorito(companySymbol: string): Observable<boolean> {
    const headers = new HttpHeaders({ 'companySymbol': companySymbol });
    return this.http.get<boolean>(`${environment.BaseApiUrl}cartera/comprobar`, { headers });
  }
}
