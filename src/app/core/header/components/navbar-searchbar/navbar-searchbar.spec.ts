import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSearchbar } from './navbar-searchbar';

describe('NavbarSearchbar', () => {
  let component: NavbarSearchbar;
  let fixture: ComponentFixture<NavbarSearchbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarSearchbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarSearchbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
