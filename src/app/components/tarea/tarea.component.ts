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
  
  constructor(public tareaService:TareaService) {
    console.trace('TareaComponents constructor');
    this.tareas=[];
   }

  ngOnInit() {
    console.trace('TareaComponents ngOnInit');
    //llamar al servicio
    //Como el this.tareaService.getAll() retorna un Observable nos tenemos que suscribir
    this.tareaService.getAll().subscribe(data=>{
      console.debug('Datos recibidos %o', data);
      this.tareas= data.map(el=>el);
    });

  }

}
