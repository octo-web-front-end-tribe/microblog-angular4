import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { MessageService } from '../shared/message.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMessageComponent } from './input-message.component';

describe('MessageInputComponent', () => {
  let component: InputMessageComponent;
  let fixture: ComponentFixture<InputMessageComponent>;
  let messageService: MessageService;

  const messageServiceStub = {
    createMessage()  {
      return Observable.of();
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputMessageComponent],
      providers: [{provide: MessageService, useValue: messageServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMessageComponent);
    component = fixture.componentInstance;
    messageService = fixture.debugElement.injector.get(MessageService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#addMessage', () => {
    it('should create a new message with right content value', () => {
      // given
      spyOn(messageService, 'createMessage').and.returnValue(Observable.of());
      
      // when
      component.addMessage({value: 'hello world'});
      
      // then
      expect(messageService.createMessage).toHaveBeenCalledWith({
        author: 'John Doe',
        content: 'hello world'
      });
    });
  });
});
