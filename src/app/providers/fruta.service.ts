import { Injectable } from '@angular/core';
import { Fruta } from '../model/fruta';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrutaService {

  //frutas: Fruta[];
  endpoint: string ='http://localhost:3000/frutas';

  constructor(public http: HttpClient) { 
    console.log('FrutaService constructor');
   // this.frutas = [];
  }

  getAll():  Observable<any> {
    //this.frutas = [];
    //this.loadFrutas();
    return this.http.get(this.endpoint);
  }

  getByID(id: number): Observable<any>{
    let uri = this.endpoint + "/" + id;
    return this.http.get(uri);
  }

  add(fruta: Fruta): Observable<any> {
    let body = {

      "nombre": fruta.nombre,
      "precio": fruta.precio,
      "calorias": fruta.calorias,
      "oferta": fruta.oferta,
      "descuento": fruta.descuento,
      "foto": fruta.foto,
      "cantidad": fruta.cantidad,
      "colores":{
        "nombre": fruta.colores
      }

    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.endpoint, body, httpOptions);
  }

  delete(id: number): Observable<any> {
    let uri = this.endpoint + "/" + id;
    console.debug(`TareaService delete ${uri}`);
    return this.http.delete(uri);
  }

  update(fruta:Fruta): Observable<any>{
    let uri = this.endpoint + "/" + fruta.id;
    console.debug(`TareaService marcarTerminado ${uri}`);
    let body = {
        "nombre": fruta.nombre,
         "precio": fruta.precio,
         "calorias": fruta.calorias,
         "oferta": fruta.oferta,
         "descuento": fruta.descuento,
         "foto": fruta.foto,
         "cantidad": fruta.cantidad,
         "colores": [
             {
                 "nombre": fruta.colores
             }
         ]
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put(uri, body, httpOptions);
  }
}