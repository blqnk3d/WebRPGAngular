import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {Player_IconComponent} from "../Player/Player_Icon/Player_Icon.component";
import {FormsModule} from "@angular/forms";
import {PlayerInputFieldComponent} from "../Player/PlayerInputField/PlayerInputField.component";
import {InputFieldComponent} from "../InputField/InputField.component";
import { ButtonComponent } from '../ButtonGroup/button/button.component';
import { ButtonControlPanelComponent } from '../ButtonGroup/button-control-panel/button-control-panel.component';
import { DisplayPlayerNamePipe } from '../display-player-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Player_IconComponent,
    PlayerInputFieldComponent,
    InputFieldComponent,
    ButtonComponent,
    ButtonControlPanelComponent,
    DisplayPlayerNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
