import { Component } from '@angular/core';
import {Player} from "../player";
import {PlayerEmitService} from "../player-emit.service";

@Component({
  selector: 'app-Player-Input-Field',
  templateUrl: './PlayerInputField.component.html',
  styleUrls: ['./PlayerInputField.component.css']
})
export class PlayerInputFieldComponent {
  sumitted = true
  name = ""


  constructor(private playerService:PlayerEmitService) {
  }


  sendIt(){
    this.playerService.emitPlayer(new Player(this.name))
    this.sumitted = false
  }

}
