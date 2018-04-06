import {Component, OnInit} from '@angular/core';
import {AsyncEventBusService} from '../bus/async-event-bus.service';
import {ApplicationEvent} from '../bus/application-event';
import {EventConsumer} from '../bus/event-consumer';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit, EventConsumer {

  notifications: Array<string> = [];

  constructor(eventBus: AsyncEventBusService) {
    eventBus.subscribe(this);
  }

  ngOnInit() {
  }

  handleEvent(event: ApplicationEvent) {
    this.notifications.push(event.message);
  }

}
