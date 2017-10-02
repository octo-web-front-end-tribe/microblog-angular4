import { MessageService } from './../services/message.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';


@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[];

  constructor(private messageService: MessageService) {
  }

  public getMessages() {
    return this.messageService.getMessages().subscribe(messages => this.messages = messages);
  }

  ngOnInit() {
    this.getMessages();
  }
}
