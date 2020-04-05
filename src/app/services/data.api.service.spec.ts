import { TestBed } from '@angular/core/testing';

import { DataBaseApiService } from './data.api.service';

describe('DataService', () => {
  let service: DataBaseApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBaseApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
