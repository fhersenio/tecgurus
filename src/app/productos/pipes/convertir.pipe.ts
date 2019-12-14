import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertir'
})
export class ConvertirPipe implements PipeTransform {

  transform(value: string, tipo:string): any {
    if(tipo == 'm'){
      return value.toLowerCase();
    } else if(tipo == 'M'){
      return value.toUpperCase();
    }
    return value.toUpperCase();
  }

}
