import {Component, Input} from '@angular/core';
import {Enemy} from "../../enemy";
import {FightService} from "../../fightGroup/fight.service";

@Component({
  selector: 'app-map-area',
  templateUrl: './map-area.component.html',
  styleUrls: ['./map-area.component.css']
})
export class MapAreaComponent {

  @Input() area = "forest"

  constructor(public fighservice : FightService) {
  }
  getEnemyList() : Enemy[] {
    return Enemy.newEnemys[this.area]

  }
}
