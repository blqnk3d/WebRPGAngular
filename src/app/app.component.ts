import { Component } from '@angular/core';
import {ButtonService} from "../ButtonGroup/button/button.service";
import {PlayerEmitService} from "../Player/player-emit.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  test = false

  constructor(public playerservice :PlayerEmitService) {
  }

  change(){
    this.test  = !this.test
  }

}
