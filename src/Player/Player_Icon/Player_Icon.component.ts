import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PlayerEmitService} from "../player-emit.service";

@Component({
  selector: 'app-player-icon',
  templateUrl: './Player_Icon.component.html',
  styleUrls: ['./Player_Icon.component.css']
})


export class Player_IconComponent implements OnInit{

  name = "PlaceholderName"

  constructor(private playerService:PlayerEmitService) {
  }

  ngOnInit(): void {
    this.playerService.playerEmitter.subscribe(a =>{
    this.name = a.name
    })
  }




}
