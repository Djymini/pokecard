import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCheckboxList } from './filter-checkbox-list';

describe('FilterCheckboxList', () => {
  let component: FilterCheckboxList;
  let fixture: ComponentFixture<FilterCheckboxList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterCheckboxList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterCheckboxList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
