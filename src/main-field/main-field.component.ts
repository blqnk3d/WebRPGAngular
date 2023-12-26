import {Component, OnInit} from '@angular/core';
import {ButtonService} from "../ButtonGroup/button/button.service";

@Component({
  selector: 'app-main-field',
  templateUrl: './main-field.component.html',
  styleUrls: ['./main-field.component.css']
})
export class MainFieldComponent implements OnInit{
  state = 0

  constructor(private buttonService : ButtonService) {
  }
  ngOnInit(): void {
    this.buttonService.buttonevenLisener.subscribe(a =>{
      this.state = a
    })
  }



}
