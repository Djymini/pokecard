import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMainPresentation } from './product-main-presentation';

describe('ProductMainPresentation', () => {
  let component: ProductMainPresentation;
  let fixture: ComponentFixture<ProductMainPresentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductMainPresentation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductMainPresentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
