import { Message } from './../models/message';
import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messagesUrl = 'http://microblog-api.herokuapp.com/api/messages';
  messages: Message[] = [];

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
