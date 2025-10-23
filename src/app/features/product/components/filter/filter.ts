import { Component } from '@angular/core';
import {FilterSection} from '../filter-section/filter-section';
import {FilterSearch} from '../filter-search/filter-search';

@Component({
  selector: 'app-filter',
  imports: [
    FilterSection,
    FilterSearch
  ],
  templateUrl: './filter.html',
  styleUrl: './filter.scss'
})
export class Filter {

}
