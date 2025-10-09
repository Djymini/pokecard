import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCard } from './set-card';

describe('SetCard', () => {
  let component: SetCard;
  let fixture: ComponentFixture<SetCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
