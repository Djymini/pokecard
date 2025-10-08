import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCarouselHome } from './set-carousel-home';

describe('SetCarouselHome', () => {
  let component: SetCarouselHome;
  let fixture: ComponentFixture<SetCarouselHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetCarouselHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetCarouselHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
