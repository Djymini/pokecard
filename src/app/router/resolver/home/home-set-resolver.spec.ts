import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { homeSetResolver } from './home-set-resolver';

describe('homeSetResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => homeSetResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
