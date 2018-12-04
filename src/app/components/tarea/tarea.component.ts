import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/providers/tarea.service';
import { Tarea } from 'src/app/model/tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent implements OnInit {

  tareas: Tarea[];
  nueva: string;
  todas:boolean;
  textoFiltro: string;
  
  constructor(public tareaService:TareaService) {
    console.trace('TareaComponents constructor');
    this.tareas=[];
    this.nueva="";
    this.todas=true;
    this.textoFiltro='Todas';
   }

  ngOnInit() {
    console.trace('TareaComponents ngOnInit');
    //llamar al servicio
    //Como el this.tareaService.getAll() retorna un Observable nos tenemos que suscribir
    this.recargarLista();
  }
  nuevaTarea(){
    console.trace('nueva tarea' + this.nueva);
    let tarea= new Tarea();
    tarea.titulo=this.nueva;
    this.tareaService.add(tarea).subscribe(data=>{
      console.debug(data);
      this.recargarLista();
      this.nueva="";
    });

  }
  recargarLista(){
    this.tareaService.getAll().subscribe(data=>{
      console.debug('Datos recibidos %o', data);
      this.tareas= data.map(el=>el);
    });
  }

  eliminar(id: number){
    console.debug(`tareaComponent eliminar ${id}`);
    this.tareaService.delete(id).subscribe(data=>{
      console.debug('Datos recibidos %o', data);
      this.recargarLista();
    });
  }

  terminar(tarea){
    console.debug('tareaComponent terminar %o', tarea);
    this.tareaService.marcarTerminado(tarea).subscribe(data=>{
      console.debug('Datos recibidos %o', data);
      this.recargarLista();
    });
  }
  filtrar(){
    this.todas= !this.todas;
    this.textoFiltro=(this.todas)?'Todas':'Pendientes';
  }

}
