import { Component } from '@angular/core';
import {Enemy} from "../../enemy";

@Component({
  selector: 'app-map-control',
  templateUrl: './map-control.component.html',
  styleUrls: ['./map-control.component.css']
})
export class MapControlComponent {
  currentState = "forest"

  protected readonly Enemy = Enemy;
  protected readonly Object = Object;
}
