import { TestBed } from '@angular/core/testing';

import { Serice } from './serice';

describe('Serice', () => {
  let service: Serice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Serice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
