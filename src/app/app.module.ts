import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {Player_IconComponent} from "../Player/Player_Icon/Player_Icon.component";
import {FormsModule} from "@angular/forms";
import {PlayerInputFieldComponent} from "../Player/PlayerInputField/PlayerInputField.component";
import {InputFieldComponent} from "../InputField/InputField.component";

@NgModule({
  declarations: [
    AppComponent,
    Player_IconComponent,
    PlayerInputFieldComponent,
    InputFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
