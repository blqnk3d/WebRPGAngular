import {EventEmitter, Injectable} from '@angular/core';
import {Player} from "./player";

@Injectable({
  providedIn: 'any'
})
export class PlayerEmitService {
  playerEmitter: EventEmitter<Player> = new EventEmitter();

  Player : Player = new Player("")

  constructor() { }

  emitPlayer(player:Player){
    this.playerEmitter.emit(player)
  }
  getPlayer(){
    return this.Player
  }
}
