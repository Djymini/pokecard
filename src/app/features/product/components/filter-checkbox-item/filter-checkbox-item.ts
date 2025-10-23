import {Component, input, output, signal} from '@angular/core';
import {Checkbox} from 'primeng/checkbox';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-filter-checkbox-item',
  imports: [
    Checkbox,
    FormsModule
  ],
  templateUrl: './filter-checkbox-item.html',
  styleUrl: './filter-checkbox-item.scss'
})
export class FilterCheckboxItem {
  nameCheckbox = input.required<string>();
  isChecked = input.required<boolean>();
  filterChecked = output<string>();
  filterNotChecked = output<string>();

  onToggleCheck(): void {
    if (this.isChecked()) {
      this.filterNotChecked.emit(this.nameCheckbox());
    } else {
      this.filterChecked.emit(this.nameCheckbox());
    }
  }

}
