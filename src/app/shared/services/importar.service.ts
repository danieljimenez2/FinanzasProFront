import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';

@Injectable({
    
  providedIn: 'root' 
})

export class ImportarService {

constructor(private http:HttpClient){}

    sendImportCvs(selectedFile: File)
    {
      
    // Aquí se enviaría el archivo al backend
    console.log('Archivo listo para enviar pre ENVIO:', selectedFile);

      const formData = new FormData();
      formData.append('file',selectedFile);

      this.http.post(`${environment.BaseApiUrl}excel/importar`,formData).subscribe({
        next: res=>{
          console.log('importado correctamente',res)
        },
        error: err =>{
          console.error('error al importar',err);
        }
      })

    }
}
