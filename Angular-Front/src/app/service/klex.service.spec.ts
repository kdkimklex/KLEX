import { TestBed, inject } from '@angular/core/testing';

import { KLEXService } from './klex.service';

describe('KLEXService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KLEXService]
    });
  });

  it('should be created', inject([KLEXService], (service: KLEXService) => {
    expect(service).toBeTruthy();
  }));
});
