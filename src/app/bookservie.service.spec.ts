import { TestBed } from '@angular/core/testing';

import { BookservieService } from './bookservie.service';

describe('BookservieService', () => {
  let service: BookservieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookservieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
