import { TestBed, inject } from '@angular/core/testing';

import { SubjectEventBusService } from './subject-event-bus.service';

describe('SubjectEventBusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubjectEventBusService]
    });
  });

  it('should be created', inject([SubjectEventBusService], (service: SubjectEventBusService) => {
    expect(service).toBeTruthy();
  }));
});
