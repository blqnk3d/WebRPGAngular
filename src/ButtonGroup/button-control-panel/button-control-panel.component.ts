import { Component } from '@angular/core';
import {ButtonService} from "../button/button.service";

@Component({
  selector: 'app-button-control-panel',
  templateUrl: './button-control-panel.component.html',
  styleUrls: ['./button-control-panel.component.css']
})
export class ButtonControlPanelComponent {

constructor(public buttonService : ButtonService) {
}

}
