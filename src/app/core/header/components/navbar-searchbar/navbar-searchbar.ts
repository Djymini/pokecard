import {Component, inject} from '@angular/core';
import {FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {NavbarSearchbarModel} from '../../models/navbarSearchbar.model';

@Component({
  selector: 'app-navbar-searchbar',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './navbar-searchbar.html',
  styleUrl: './navbar-searchbar.scss'
})
export class NavbarSearchbar {
  private fb = inject(NonNullableFormBuilder);

  searchForm: FormGroup<NavbarSearchbarModel> = this.fb.group({
    search: this.fb.control('', Validators.required),
  });

  onSubmit() {
    console.log('SearchbarNavbar', this.searchForm.value);
  }
}
