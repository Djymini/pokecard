import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { homeCardResolver } from './home-card-resolver';

describe('homeCardResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => homeCardResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
