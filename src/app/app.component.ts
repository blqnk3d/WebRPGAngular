import { Component } from '@angular/core';
import {ButtonService} from "../ButtonGroup/button/button.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebRPG';
  test = false

  constructor(public buttonService: ButtonService) {
  }

  change(){
    this.test  = !this.test
  }

}
