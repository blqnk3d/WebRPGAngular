import {Component, Input, OnInit} from '@angular/core';
import {Enemy} from "../../enemy";
import {Player} from "../../Player/player";
import {PlayerEmitService} from "../../Player/player-emit.service";

@Component({
  selector: 'app-fight-choose',
  templateUrl: './fight-choose.component.html',
  styleUrls: ['./fight-choose.component.css']
})
export class FightChooseComponent implements OnInit{

  constructor(private playerEmitter : PlayerEmitService) {
  }

  @Input() enemy : Enemy = new Enemy("",0,0,0)
  player : Player = new Player("")

  ngOnInit(): void {
    this.playerEmitter.playerEmitter.subscribe(a =>{
      this.player = a
    })
  }

}
