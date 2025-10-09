import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationPromotion } from './presentation-promotion';

describe('PresentationPromotion', () => {
  let component: PresentationPromotion;
  let fixture: ComponentFixture<PresentationPromotion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationPromotion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationPromotion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
