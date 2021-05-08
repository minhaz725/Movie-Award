import { TestBed } from '@angular/core/testing';

import { NominateMoviesService } from './nominate-movies.service';

describe('NominateMoviesService', () => {
  let service: NominateMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NominateMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
