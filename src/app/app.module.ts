import { InputMessageComponent } from './input-message/input-message.component';
import { MessageService } from './services/message.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    InputMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
