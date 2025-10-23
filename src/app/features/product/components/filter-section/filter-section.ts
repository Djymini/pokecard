import {Component, signal} from '@angular/core';
import {FilterCheckboxList} from '../filter-checkbox-list/filter-checkbox-list';

@Component({
  selector: 'app-filter-section',
  imports: [
    FilterCheckboxList
  ],
  templateUrl: './filter-section.html',
  styleUrl: './filter-section.scss'
})
export class FilterSection {
  titleSection: string = 'Catégorie';
  nameFilter: string = 'Filtre par set';
  arrayCheckboxNames: string[] = ["xyp", "swsh1", "swsh12", "swsh11", "swsh2", "swsh4.5", "swsh12.5", "A2a", "A1a", "A3", "swshp", "swsh4", "swsh3", "swsh9"];
  arrayFilter = signal<string[]>([]);
}
