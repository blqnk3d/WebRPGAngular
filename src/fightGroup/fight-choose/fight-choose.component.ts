import {Component, Input, OnInit} from '@angular/core';
import {Enemy} from "../../enemy";
import {Player} from "../../Player/player";
import {PlayerEmitService} from "../../Player/player-emit.service";
import {FightService} from "../fight.service";

@Component({
  selector: 'app-fight-choose',
  templateUrl: './fight-choose.component.html',
  styleUrls: ['./fight-choose.component.css']
})
export class FightChooseComponent implements OnInit{

  constructor(private playerEmitter : PlayerEmitService , private fightService : FightService) {
  }

  @Input() enemy : Enemy = new Enemy("",0,0,0)
  player : Player = new Player("1")

  ngOnInit(): void {
    this.playerEmitter.playerEmitter.subscribe(a =>{
      this.player = a
    })
  }

  fight(){
    this.fightService.onFight(this.enemy)
  }

}
