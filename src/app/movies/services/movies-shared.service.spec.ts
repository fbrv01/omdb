import { TestBed } from '@angular/core/testing';

import { MoviesSharedService } from './movies-shared.service';

describe('MoviesSharedService', () => {
  let service: MoviesSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
