import { TestBed } from '@angular/core/testing';

import { SearchbookingserviceService } from './searchbookingservice.service';

describe('SearchbookingserviceService', () => {
  let service: SearchbookingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchbookingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
