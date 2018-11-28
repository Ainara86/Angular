import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/model/videojuego';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  fecha: Date;
  numero: number;
  videojuegos: Videojuego[];
  constructor() {
    console.trace('PipeComponent constructor');
    this.fecha = new Date();
    this.numero = 3.14161820231;
    this.videojuegos = [];
    this.loadVideojuegos();
  }

  ngOnInit() {
    console.trace('PipeComponent ngOnInit');
  }

  loadVideojuegos(): void {
    console.trace('PipeComponent loadVideojuegos');
    let v: Videojuego;
    v = new Videojuego();
    v.titulo = 'Mario Bross';
    this.videojuegos.push(v);//Meter dentro

    v = new Videojuego();
    v.titulo = 'Donkey Kong';
    this.videojuegos.push(v);

    v = new Videojuego();
    v.titulo = 'Space Invader';
    v.alquilado=true;
    this.videojuegos.push(v);

    v = new Videojuego();
    v.titulo = 'Zelda';
    v.alquilado=true;
    this.videojuegos.push(v);
  }
}
