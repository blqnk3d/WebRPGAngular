import {EventEmitter, Injectable} from '@angular/core';
import {Player} from "./player";

@Injectable({
  providedIn: 'any'
})
export class PlayerEmitService {
  playerEmitter: EventEmitter<Player> = new EventEmitter();

  player : Player = new Player("test2")

  constructor() { }

  emitPlayer(player:Player){
    this.player = player
    console.log(player)
    this.playerEmitter.emit(player)
  }

}
