import { Observable } from 'rxjs/Observable';
import { MessageService } from '../shared/message.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMessageComponent } from './input-message.component';

describe('MessageInputComponent', () => {
  let component: InputMessageComponent;
  let fixture: ComponentFixture<InputMessageComponent>;


  const messageServiceStub = {
    getMessages()  {
      return Observable.create(observer => {
        observer.next([{ id: 1, content: 'fake message', author: 'cri' }]);
        observer.complete();
      });
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
