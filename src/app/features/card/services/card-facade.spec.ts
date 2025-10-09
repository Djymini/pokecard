import { TestBed } from '@angular/core/testing';

import { CardFacade } from './card-facade';

describe('CardFacade', () => {
  let service: CardFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
