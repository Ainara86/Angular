import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from '../model/persona';

@Pipe({
  name: 'sexo'
})
export class SexoPipe implements PipeTransform {

  transform(personas: Persona[], sexo: number): any {
    console.debug('SexoPipe transform');

    let resul: Persona[] = [];
    personas.forEach(el => {
      if (el.Sexo === sexo) {
        resul.push(el);
      }
    });
    return resul;
  }

}
