import {Component, inject} from '@angular/core';
import {ProductFacade} from '../../services/product-facade';

@Component({
  selector: 'app-filter-search',
  imports: [],
  templateUrl: './filter-search.html',
  styleUrl: './filter-search.scss'
})
export class FilterSearch {
  searchText: string = "";
  productFacade = inject(ProductFacade);

  updateSearchText(event: any) {
    setTimeout(() => {
      this.searchText = event.target.value;
      this.productFacade.updateQuery(this.searchText);
    }, 500);
  }
}
