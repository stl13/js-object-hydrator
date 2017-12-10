import { TestBed, inject } from '@angular/core/testing';

import { HydratorService } from './hydrator.service';

describe('HydratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HydratorService]
    });
  });

  it('should be created', inject([HydratorService], (service: HydratorService) => {
    expect(service).toBeTruthy();
  }));
});
