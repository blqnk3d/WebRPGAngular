import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {
  temp = 0

  BUTTONS   = [
     "Standart",
     "Fight",
     "Map",
  ]

  buttonevenLisener: EventEmitter<number> = new EventEmitter<number>()

  constructor() {
  }

  emitState(numb: number) {
    this.temp = numb
    this.buttonevenLisener.emit(numb)
  }

}
