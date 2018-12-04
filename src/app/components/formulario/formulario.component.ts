import { Component, OnInit } from '@angular/core';
import { FrutaService } from 'src/app/providers/fruta.service';
import { FormGroup, FormControl, Validators, SelectMultipleControlValueAccessor } from '@angular/forms';
import { Fruta } from 'src/app/model/fruta';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup; //formulario para agrupar inputs
  frutas: Fruta[];

  constructor(public frutaService:FrutaService) {
    console.trace('FormularioComponent constructor');
    //agrupacion de controles==formilario
    this.formulario= new FormGroup({
      nombre: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ),
      precio: new FormControl(
        //Valor inicial
        '0',
        //Validaciones
        [
          Validators.required,
          Validators.minLength(0),
          Validators.maxLength(5)
        ]
      ),
      calorias: new FormControl(
        //Valor inicial
        '0',
        //Validaciones
        [
          Validators.required,
          Validators.minLength(0),
          Validators.maxLength(5)
        ]
      ),
      descuento: new FormControl(
        //Valor inicial
        '0',
        //Validaciones
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(2)
        ]
      ),
      oferta: new FormControl(
        //Valor inicial
        'false',
      ),
      foto: new FormControl(
        //Valor inicial
        '',
        [
          Validators.required,
          Validators.minLength(0),
          Validators.maxLength(255)
        ]
      ),
    });

  
  }

  ngOnInit() {
    console.trace('FormularioComponent ngOnInit');
    this.cargarFrutas();
  }

  cargarFrutas() {
    this.frutaService.getAll().subscribe(data => {
      console.debug('Datos recibidos %o', data);
      this.frutas = data.map(el => el);
    });
  }

  cargarFormulario(){
    this.formulario.controls.nombre.setValue('fresa');
    this.formulario.controls.precio.setValue('6');
    this.formulario.controls.calorias.setValue('0');
    this.formulario.controls.descuento.setValue('0');
    this.formulario.controls.oferta.setValue('false');
    this.formulario.controls.foto.setValue('');
  }

  sumitar(){
    console.trace('FormularioComponent sumitar %o', this.formulario);

    let fruta=new Fruta();
    fruta.nombre=this.formulario.controls.nombre.value;
    fruta.precio=this.formulario.controls.precio.value;
    fruta.calorias=this.formulario.controls.calorias.value;
    fruta.descuento=this.formulario.controls.descuento.value;
    fruta.oferta=this.formulario.controls.oferta.value;
    fruta.foto=this.formulario.controls.foto.value;
    this.frutaService.add(fruta).subscribe(data=>{
      console.debug(data);
      this.cargarFrutas();
    });
    console.trace('Pasando la fruta'+ fruta);
  }

  eliminar(id: number){
    console.debug(`tareaComponent eliminar ${id}`);
    this.frutaService.delete(id).subscribe(data=>{
      console.debug('Datos recibidos %o', data);
      this.cargarFrutas();
    });
  }

}
