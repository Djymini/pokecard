import { TestBed } from '@angular/core/testing';

import { CardStore } from './card-store';

describe('CardStore', () => {
  let service: CardStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
