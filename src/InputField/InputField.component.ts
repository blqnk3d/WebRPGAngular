import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-Input-Field',
  templateUrl: './InputField.component.html',
  styleUrls: ['./InputField.component.css']
})
export class InputFieldComponent {
  anzeigen = true

  eingabe = ""
  @Output()ausgabe: EventEmitter<any> = new EventEmitter();

  send(){
    this.ausgabe.emit(this.eingabe)
    this.anzeigen = false
  }
}
