import { Component } from '@angular/core';
import {FightService} from "../fight.service";
import {Enemy} from "../../enemy";

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent {
    protected readonly Enemy = Enemy;
}
