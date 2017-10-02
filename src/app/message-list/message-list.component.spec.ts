import { MessageService } from '../shared/message.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageListComponent } from './message-list.component';
import { MessageComponent } from './message/message.component';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('MessageListComponent', () => {
  let component: MessageListComponent;
  let fixture: ComponentFixture<MessageListComponent>;
  let messageService: MessageService;
  
  const messageServiceStub = {
    getMessages()  {
      return Observable.of();
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessageListComponent, MessageComponent],
      providers: [{ provide: MessageService, useValue: messageServiceStub }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageListComponent);
    component = fixture.componentInstance;
    messageService = fixture.debugElement.injector.get(MessageService);
  });

  describe('#ngOnInit', () => {
    it('should get messages on init', () => {
      // given 
      spyOn(component, 'getMessages');

      // when
      component.ngOnInit();

      // then
      expect(component.getMessages).toHaveBeenCalled();
    });
  });

  describe('#getMessages', () => {
    it('should get messages and set attribute', () => {
      // given 
      spyOn(messageService, 'getMessages').and.returnValue(Observable.of([
        {
          id: 42,
          content: 'hello world',
          author: 'John Doe'
        }
      ]));

      // when
      component.getMessages();

      // then
      expect(messageService.getMessages).toHaveBeenCalled();
      expect(component.messages).toEqual([
        {
          id: 42,
          content: 'hello world',
          author: 'John Doe'
        }
      ])
    });
  });
});
