import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCheckboxItem } from './filter-checkbox-item';

describe('FilterCheckboxItem', () => {
  let component: FilterCheckboxItem;
  let fixture: ComponentFixture<FilterCheckboxItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterCheckboxItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterCheckboxItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
