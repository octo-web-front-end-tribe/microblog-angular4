import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Message } from './message';
import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messagesUrl = 'http://microblog-api.herokuapp.com/api/messages';
  messages: Message[] = [];

  constructor(private http: Http) {
  }

  getMessages(): Observable<Message[]> {
    return this.http.get(this.messagesUrl)
      .map(res => {
        return this.messages = res.json();
      });
  }

  createMessage(message: Message): Observable<any> {
    return this.http.post(this.messagesUrl, message)
      .map(res => {
        this.messages.push(res.json());
      });
  }
}
