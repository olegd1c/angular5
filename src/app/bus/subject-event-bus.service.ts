import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {ApplicationEvent} from './application-event';
import {EventConsumer} from './event-consumer';
import {EventBus} from './event-bus';

@Injectable()
export class SubjectEventBusService implements EventBus{

  private subject = new Subject<ApplicationEvent>();

  constructor() {
  }

  sendEvent(event: ApplicationEvent) {
    this.subject.next(event);
  }

  subscribe(consumer: EventConsumer): void {
    this.subject.subscribe({'next' : event => {
      consumer.handleEvent(event);
      }});
  }


}
