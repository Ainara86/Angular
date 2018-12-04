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

  add(fruta: Fruta): Observable<any> {
    let body = {

      "nombre": fruta.nombre,
      "precio": fruta.precio,
      "calorias": fruta.calorias,
      "oferta": fruta.oferta,
      "descuento": fruta.descuento,
      "foto": fruta.foto,
      "cantidad": fruta.cantidad

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


  /* TODO cambiar por llamada a Servicio Rest */
 /*private loadFrutas() {
    console.trace('ComparadorComponent loadFrutas');
    let f: Fruta;

    f = new Fruta();
    f.nombre = 'Banana';
    f.precio = 3.15;
    f.calorias = 500;
    f.colores = ['Amarillo', 'Negro'];
    f.oferta = true;
    f.foto = 'http://padeladdict.com/wp-content/uploads/2012/12/platano2.jpg';
    this.frutas.push(f);

    f = new Fruta();
    f.nombre = 'Pera';
    f.precio = 2;
    f.calorias = 350;
    f.colores = ['Amarillo', 'Verde'];
    f.foto = 'http://www.cajanature.com/405-large_default/pera-ecologica-.jpg';
    this.frutas.push(f);

    f = new Fruta();
    f.nombre = 'Kiwi';
    f.precio = 2.34;
    f.calorias = 720;
    f.colores = ['Amarillo', 'Verde'];
    f.foto = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Kiwi_%28Actinidia_chinensis%29_2_Luc_Viatour.jpg/220px-Kiwi_%28Actinidia_chinensis%29_2_Luc_Viatour.jpg';
    this.frutas.push(f);

    f = new Fruta();
    f.nombre = 'Fresa';
    f.precio = 0.75;
    f.calorias = 100;
    f.colores = ['Rosa', 'Rojo', 'Verde'];
    f.oferta = true;
    f.foto = 'http://libbys.es/wordpress/wp-content/uploads/2018/05/fresas.jpg';
    this.frutas.push(f);

  }*/


}