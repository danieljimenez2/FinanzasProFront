import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    
  providedIn: 'root' 
})

export class ImportarService {

constructor(private http:HttpClient){}

    sendImportCvs(selectedFile: File)
    {
        
    // Aquí se enviaría el archivo al backend
    console.log('Archivo listo para enviar:', selectedFile);
    }
}
