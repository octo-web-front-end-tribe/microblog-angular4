import { HttpModule } from '@angular/http';
import { InputMessageComponent } from './input-message/input-message.component';
import { MessageService } from './services/message.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageComponent } from './message-list/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    InputMessageComponent,
    MessageListComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
