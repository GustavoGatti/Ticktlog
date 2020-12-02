import { TestBed } from '@angular/core/testing';

import { BEAPICommService } from './-beapicomm-service.service';

describe('BEAPICommServiceService', () => {
  let service: BEAPICommService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BEAPICommService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
