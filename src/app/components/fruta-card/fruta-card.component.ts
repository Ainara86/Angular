import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';

@Component({
  selector: 'app-fruta-card',
  templateUrl: './fruta-card.component.html',
  styleUrls: ['./fruta-card.component.scss']
})
export class FrutaCardComponent implements OnInit {

  fruta: Fruta;
  constructor() {
    console.trace('FrutaCardComponent constructor');
    this.fruta=new Fruta();
    this.fruta.nombre = 'Malacaton';
    this.fruta.calorias = 17.4;
    this.fruta.precio = 3.45;
    this.fruta.colores = ['Amarillo', 'Naranja','Verde'];
    this.fruta.oferta = true;
    this.fruta.descuento=10;
    this.fruta.foto='https://www.frutadelasarga.com/server/Portal_0008706/img/products/melocoton-de-cieza_1677407.jpg';

   }

  ngOnInit() {
    console.trace('FrutaCardComponent ngOnInit');
  }

  comprar(){
    console.trace('FrutaCardComponent comprar');
    alert(`Lo sentimos pero de momento esta opcion esta desabilitada ## ${this.fruta.nombre} ##`);
  }

}
