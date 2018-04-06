import { TestBed, inject } from '@angular/core/testing';

import { AsyncEventBusService } from './async-event-bus.service';

describe('AsyncEventBusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsyncEventBusService]
    });
  });

  it('should be created', inject([AsyncEventBusService], (service: AsyncEventBusService) => {
    expect(service).toBeTruthy();
  }));
});
