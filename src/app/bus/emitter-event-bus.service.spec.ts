import { TestBed, inject } from '@angular/core/testing';

import { EmitterEventBusService } from './emitter-event-bus.service';

describe('EmitterEventBusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmitterEventBusService]
    });
  });

  it('should be created', inject([EmitterEventBusService], (service: EmitterEventBusService) => {
    expect(service).toBeTruthy();
  }));
});
