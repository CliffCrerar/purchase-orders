import { TestBed } from '@angular/core/testing';

import { WhoopsDialogService } from './whoops-dialog.service';

describe('WhoopsDialogService', () => {
  let service: WhoopsDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhoopsDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
