import { Observable } from 'rxjs/Observable';
import { TestBed, inject, async, fakeAsync, tick } from '@angular/core/testing';
import { HttpModule, Http, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { MessageService } from './message.service';
describe('MessageService', () => {
  it('should be created', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));
  const API_URL: String = 'http://example.com';
  let httpStub;
  let service: MessageService;
  beforeEach(() => {
    httpStub = {
      get: () => {
        return Observable.create(observer => {
          observer.next({ json: () => ([{ id: 1, content: 'fake content', author: 'fhi' }]) });
          observer.complete();
        });
      },
      post: () => {
        return Observable.create(observer => {
          observer.next({ json: () => ({ id: 1, content: 'hello world', author: 'abc' })});
          observer.complete();
        });
      }
    };

    TestBed.configureTestingModule({
      providers: [
        MessageService,
        { provide: Http, useValue: httpStub }
      ]
    });
    service = TestBed.get(MessageService);
  });

  it('should inject message service', () => {
    expect(service).toBeTruthy();
  });

  it('should have messageUrl property set', () => {
    expect(service.messagesUrl).toEqual('http://microblog-api.herokuapp.com/api/messages');
  });

  it('should set messages array to empty by default', () => {
    expect(service.messages).toEqual([]);
  });

  it('#getMessages should fetch messages and set `messages` property', fakeAsync(inject([Http],
    (http: Http) => {

      service.messagesUrl = 'http://fake.base.url';

      const spy = spyOn(http, 'get').and.callThrough();
      tick();
      service.getMessages().subscribe(response => {
        expect(spy).toHaveBeenCalledWith('http://fake.base.url');
        expect(response).toEqual([{ id: 1, content: 'fake content', author: 'fhi' }]);
      });
    })));
});
