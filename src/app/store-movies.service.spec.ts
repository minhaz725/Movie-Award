import { TestBed } from '@angular/core/testing';

import { StoreMoviesService } from './store-movies.service';

describe('StoreMoviesService', () => {
  let service: StoreMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
