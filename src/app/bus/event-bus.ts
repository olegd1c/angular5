import {ApplicationEvent} from './application-event';
import {EventConsumer} from './event-consumer';

export interface EventBus {
  sendEvent(event: ApplicationEvent): void;

  subscribe(consumer: EventConsumer): void;
}
