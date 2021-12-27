import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ListaPhpService {
  baseUrl:string;
 

  constructor(private http:HttpClient) { 
    this.baseUrl='https://almacentdv.000webhostapp.com/wsTdv/ListaPrueba.php'
  }

  listar(): Promise<any[]>{
  
   return this.http.get<any[]>(this.baseUrl).toPromise();
 
  }
}
