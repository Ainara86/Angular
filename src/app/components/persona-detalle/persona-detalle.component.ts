import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-persona-detalle',
  templateUrl: './persona-detalle.component.html',
  styleUrls: ['./persona-detalle.component.scss']
})
export class PersonaDetalleComponent implements OnInit {
  titulo: String;
  personas: Persona[];

  constructor() { 

    console.trace(`PersonaDetalleComponent constructor`);
    this.titulo='Persona' ;
    this.personas = [];
    this.loadPersonas();

  }

  ngOnInit() {
    console.trace(`VideojuegoDetalleComponent ngOnInit`);
  }

  loadPersonas(): void {
    console.trace('PipeComponent loadPersonas');
    let p: Persona;
    p = new Persona();
    p.nombre='Anonimo';
    p.apellidos=' ';
    p.Sexo=2;
    p.email=' ';
    p.edad=16;
    this.personas.push(p);//Meter dentro

    p = new Persona();
    p.nombre='Ainara';
    p.apellidos='Goitia';
    p.Sexo=1;
    p.email='aaaa@aaa.com';
    p.edad=32;
    this.personas.push(p);//Meter dentro

    p = new Persona();
    p.nombre='Adrian';
    p.apellidos=' ';
    p.Sexo=0;
    p.email=' ';
    p.edad=16;
    this.personas.push(p);//Meter dentro

    p = new Persona();
    p.nombre='Adriana';
    p.apellidos=' ';
    p.Sexo=1;
    p.email=' ';
    p.edad=16;
    this.personas.push(p);//Meter dentro

    p = new Persona();
    p.nombre='Andrea';
    p.apellidos=' ';
    p.Sexo=1;
    p.email=' ';
    p.edad=16;
    this.personas.push(p);//Meter dentro

    p = new Persona();
    p.nombre='Valeria';
    p.apellidos=' ';
    p.Sexo=1;
    p.email=' ';
    p.edad=16;
    this.personas.push(p);//Meter dentro

    p = new Persona();
    p.nombre='Luis';
    p.apellidos=' ';
    p.Sexo=0;
    p.email=' ';
    p.edad=16;
    this.personas.push(p);//Meter dentro

    p = new Persona();
    p.nombre='Raul';
    p.apellidos=' ';
    p.Sexo=0;
    p.email=' ';
    p.edad=16;
    this.personas.push(p);//Meter dentro

    p = new Persona();
    p.nombre='P';
    p.apellidos=' ';
    p.Sexo=2;
    p.email=' ';
    p.edad=16;
    this.personas.push(p);//Meter dentro

    p = new Persona();
    p.nombre='A';
    p.apellidos=' ';
    p.Sexo=2
    p.email=' ';
    p.edad=16;
    this.personas.push(p);//Meter dentro
  }

}