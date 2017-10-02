import { MessageService } from '../shared/message.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '../shared/message';


@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[];

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.getMessages();
  }

  public getMessages() {
    return this.messageService.getMessages().subscribe(messages => this.messages = messages);
  }
}
