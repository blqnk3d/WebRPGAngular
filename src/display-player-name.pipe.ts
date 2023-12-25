import { Pipe, PipeTransform } from '@angular/core';

// Credits to Jakob Eckl :

@Pipe({
  name: 'displayPlayerName'
})
export class DisplayPlayerNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    value = value.trim()

    if (value.length<= 7){
    return  value
    }

    if (value.length <= 0 ){
      return "Player"
    }

    return value.substring(0,7)+"..."

  }

}
