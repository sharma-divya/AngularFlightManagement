import { TestBed } from '@angular/core/testing';

import { ManagebookingserviceService } from './managebookingservice.service';

describe('ManagebookingserviceService', () => {
  let service: ManagebookingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagebookingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
