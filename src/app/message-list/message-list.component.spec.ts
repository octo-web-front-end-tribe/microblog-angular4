import { MessageService } from './../services/message.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageListComponent } from './message-list.component';

describe('MessageListComponent', () => {
  let component: MessageListComponent;
  let fixture: ComponentFixture<MessageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessageListComponent],
      providers: [{ provide: MessageService, useValue: {} }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
