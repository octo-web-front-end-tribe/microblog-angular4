import { MessageComponent } from './message-list/message/message.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageService } from './shared/message.service';
import { InputMessageComponent } from './input-message/input-message.component';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        InputMessageComponent,
        MessageListComponent,
        MessageComponent
      ],
      providers: [{ provide: MessageService, useValue: {} }]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
