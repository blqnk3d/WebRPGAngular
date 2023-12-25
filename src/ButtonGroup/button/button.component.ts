import {Component, Inject, Input} from '@angular/core';
import {ButtonService} from "./button.service";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() state =  0
  constructor(public buttonService : ButtonService) {
  }


  clicked(){
    this.buttonService.emitState(this.state)
  }

}
