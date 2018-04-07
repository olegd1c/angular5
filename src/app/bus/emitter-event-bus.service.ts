import {EventEmitter, Injectable} from '@angular/core';
import {EventBus} from './event-bus';
import {ApplicationEvent} from './application-event';
import {EventConsumer} from './event-consumer';

@Injectable()
export class EmitterEventBusService implements EventBus {

  private eventEmitter = new EventEmitter();

  constructor() {
  }

  sendEvent(event: ApplicationEvent): void {
    this.eventEmitter.next(event);
  }

  subscribe(consumer: EventConsumer): void {
    this.eventEmitter.subscribe(event =>
      consumer.handleEvent(event)
    );
  }
}
