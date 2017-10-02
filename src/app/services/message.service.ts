import { Message } from './../models/message';
import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages: Message[] = [ {id: 1, author: 'Bob', content: 'Hello' }, {id: 2, author: 'Alice', content: 'Hi' }];

  constructor() {
  }

  getMessages(): Message[] {
    return this.messages;
  }

  createMessage(data): void {
    console.log(data);
    this.messages.push(data);
  }
}
