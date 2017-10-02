import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
  });

  it('should be created', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));

  it('#getMessages should return array of messages', inject([MessageService], (service: MessageService) => {
    service.getMessages();
    expect(service.messages.length).toBe(2);
  }));

  it('#getMessages should return array of messages', inject([MessageService], (service: MessageService) => {
    service.createMessage({id: 3, author: 'Test', content: 'test'});
    expect(service.messages.length).toBe(3);
  }));
});
