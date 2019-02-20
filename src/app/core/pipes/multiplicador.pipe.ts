import { Pipe, PipeTransform } from '@angular/core';
import { type } from 'os';

@Pipe({
  name: 'multiplicador'
})
export class MultiplicadorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let resultado = value;
    if (args === undefined || args === null || args === '') {
      resultado = resultado * 1;
    } else {
      resultado = resultado * args;
    }
    return resultado;
  }

}
