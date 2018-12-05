import { Component, OnInit } from '@angular/core';
import { FrutaService } from 'src/app/providers/fruta.service';
import { FormGroup, FormControl, Validators, FormArray, SelectMultipleControlValueAccessor } from '@angular/forms';
import { Fruta } from 'src/app/model/fruta';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  //formulario: FormGroup; //formulario para agrupar inputs
  frutas: Fruta[];
  //colores: FormArray; //Array de FormControls
  fruta : Fruta;
 
  constructor(public frutaService: FrutaService, private route: ActivatedRoute) { 
    console.trace('FormularioComponent constructor');
    this.fruta = new Fruta();

  }

  ngOnInit() {
    console.trace('FormularioComponent ngOnInit');
    this.cargarFrutas();
    //let fruta = new Fruta();
    this.route.params.subscribe(params => {
      this.fruta.id= +params['id']; // (+) converts string 'id' to a number
       this.frutaService.getByID(this.fruta.id).subscribe(data => {
        console.debug('Datos recibidos %o', data);
        this.fruta=data;
      });

   });
  }



  cargarFrutas() {
    this.frutaService.getAll().subscribe(data => {
      console.debug('Datos recibidos %o', data);
      this.frutas = data.map(el => el);
    });
  }


  eliminar(id: number) {
    console.debug(`formularioComponent eliminar ${id}`);
    this.frutaService.delete(id).subscribe(data => {
      console.debug('Datos recibidos %o', data);
      this.cargarFrutas();
    });
  }

}