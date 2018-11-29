import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';

@Component({
  selector: 'app-fruta-detalle',
  templateUrl: './fruta-detalle.component.html',
  styleUrls: ['./fruta-detalle.component.scss']
})
export class FrutaDetalleComponent implements OnInit {
  precioTotal: number;
  frutas: Fruta[];
  nombresFrutas: string[];
  frutasOferta: Fruta[];
  frutasRojas: Fruta[];
  frutaOferta: Fruta;
  frutaOfertaVerde: Fruta;

  constructor() {
    console.trace('Constructor EjercicioFrutasComponent');
    this.precioTotal = 0;
    this.loadArrayFrutas();
  }

  ngOnInit() {
    console.trace('ngOnInit EjercicioFrutasComponent');
  }

  loadArrayFrutas(): void {
    this.frutas = [];
    let f: Fruta;
    f = new Fruta();
    f.nombre = 'Banana';
    f.precio = 3.15;
    f.calorias = 500;
    f.colores = ['Amarillo', 'Negro'];
    f.oferta = true;
    f.foto='https://www.chedraui.com.mx/medias/2502862-00-CH515Wx515H?context=bWFzdGVyfHJvb3R8MjQ4NDZ8aW1hZ2UvanBlZ3xoYTgvaDVlLzg4MDA3MzQ4Mzg4MTQuanBnfDRjMmNlYzI2M2ZhZjhkN2IyNWM0ZWQ2ODlmNWE1NDQ3MWQ5YzkzNWY0NjYzMzA2NGU2NDkwM2ZlYzQxMDUyODc';
    this.frutas.push(f);

    f = new Fruta();
    f.nombre = 'Pera';
    f.precio = 2;
    f.calorias = 350;
    f.colores = ['Amarillo', 'Verde'];
    f.foto='http://www.cajanature.com/405-large_default/pera-ecologica-.jpg';
    this.frutas.push(f);

    f = new Fruta();
    f.nombre = 'Fresa';
    f.precio = 0.75;
    f.calorias = 100;
    f.colores = ['Rosa', 'Rojo', 'Verde'];
    f.oferta = true;
    f.foto='https://static9.depositphotos.com/1642482/1149/i/450/depositphotos_11491656-stock-photo-strawberry.jpg';
    this.frutas.push(f);

    this.precioTotal = this.frutas.map(el => el.precio).reduce((c, p) => c + p);
    this.nombresFrutas = this.frutas.map(el => el.nombre);
    this.frutasOferta = this.frutas.filter(el => el.oferta);
    this.frutasRojas = this.frutas.filter(el => el.colores.find(c => c === 'Rojo'));
    this.frutaOferta = this.frutas.find(el => el.oferta === true);
    this.frutaOfertaVerde = this.frutas.filter(el => el.colores.find(c => c === 'Verde')).find(el => el.oferta);
  }

}