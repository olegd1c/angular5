import {ApplicationEvent} from './application-event';

export interface EventConsumer {
  handleEvent(event: ApplicationEvent);
}
