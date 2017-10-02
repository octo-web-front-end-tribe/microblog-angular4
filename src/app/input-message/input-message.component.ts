import { MessageService } from './../services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-message',
  templateUrl: './input-message.component.html',
  styleUrls: ['./input-message.component.css']
})
export class InputMessageComponent implements OnInit {
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  addMessage(content) {
    this.messageService.createMessage({
      author: 'John Doe',
      content: content.value
    });

    content.value = null;
  }
}
