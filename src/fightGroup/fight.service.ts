import {Injectable, OnInit} from '@angular/core';
import {Player} from "../Player/player";
import {PlayerEmitService} from "../Player/player-emit.service";
import {Enemy} from "../enemy";

@Injectable({
  providedIn: 'root'
})
export class FightService implements OnInit {


  player: Player = new Player("")

  constructor(private playerService: PlayerEmitService) {
  }

  ngOnInit(): void {

    this.playerService.playerEmitter.subscribe(a => {
      this.player = a
    })
  }

  onFight(enemy: Enemy) { //TODO simulate and set the Fight Gifs if Possible

    let turn = 0

    this.player.name = this.playerService.player.name
    while (this.player.gethealth() > 0 && enemy.gethealth() > 0) {

      if (turn == 0) {
        enemy.fight(this.player.damage)
        turn = 1
      } else {
        this.player.fight(enemy.damage)
        turn = 0
      }
    }

    enemy.reset()
    this.player.gethealth() > 0 ? this.playerService.emitPlayer(this.player) : alert("Player Died")
  }
}
