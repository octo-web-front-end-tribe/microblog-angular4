import { MessageService } from './../services/message.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMessageComponent } from './input-message.component';

describe('InputMessageComponent', () => {
  let component: InputMessageComponent;
  let fixture: ComponentFixture<InputMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputMessageComponent],
      providers : [MessageService]
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
