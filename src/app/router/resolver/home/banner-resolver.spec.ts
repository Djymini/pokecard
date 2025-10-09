import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { bannerResolver } from './banner-resolver';

describe('bannerResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => bannerResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
