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
  primeraFrutaOferta: Fruta;
  primeraFrutaOfertaVerde: Fruta;

  constructor() {
    console.trace('Constructor EjercicioFrutasComponent');
    this.precioTotal = 0;
    this.loadArrayFrutas();

    // programacion funcional
    this.nombresFrutas = this.frutas.map( el => el.nombre );
    this.precioTotal = this.frutas.map( el => el.precio ).reduce( (c, p) =>  c + p  );
    this.frutasOferta = this.frutas.filter( el => el.oferta );
    this.primeraFrutaOferta = this.frutas.find( el => el.oferta );
    // this.primeraFrutaOfertaVerde = this.frutas.find( f => f.oferta && ( f.colores.find( color => color === 'Verde') === 'Verde') );
    this.primeraFrutaOfertaVerde = this.frutas.filter( f => f.colores.find( c => c === 'Verde')).find( f => f.oferta );
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
    f.descuento=10;
    f.foto = 'https://i5.walmartimages.ca/images/Large/580/6_r/875806_R.jpg';
    this.frutas.push(f);

    f = new Fruta();
    f.nombre = 'Pera';
    f.precio = 2;
    f.calorias = 350;
    f.colores = ['Amarillo', 'Verde'];
    f.oferta = false;
    f.descuento=0;
    
    f.foto = 'data:image/jpeg;base64,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';
   
    this.frutas.push(f);

    f = new Fruta();
    f.nombre = 'Fresa';
    f.precio = 0.75;
    f.calorias = 100;
    f.colores = ['Rosa', 'Rojo', 'Verde'];
    f.oferta = true;
    f.descuento=20;
    f.foto = 'http://libbys.es/wordpress/wp-content/uploads/2018/05/fresas.jpg';
    this.frutas.push(f);
  }

}