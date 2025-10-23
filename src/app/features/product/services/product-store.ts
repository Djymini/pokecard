import {computed, Injectable, signal} from '@angular/core';
import {SetDetailModel, setDetailPlaceholder} from '../../../shared/models/set-detail.model';
import {SetModel} from '../../../shared/models/set.model';
import {CardModel} from '../../../shared/models/card.model';
import {ProductModel} from '../models/productModel';

@Injectable({
  providedIn: 'root'
})
export class ProductStore {
  private querySignal = signal<string>("");
  private setFilterSignal = signal<string[]>([]);
  private productListSignal = signal<ProductModel[]>([]);

  query = computed(() => this.querySignal());
  setFilter = computed(() => this.setFilterSignal());
  productList = computed(() => this.productListSignal());

  addproduct(product: ProductModel): void  {
    this.productListSignal.update(products => [...products, product]);
  }

  updateQuery(newQuery: string): void {
    this.querySignal.set(newQuery);
  }

  setSetFilter(newSetFilter: string[]): void {
    this.setFilterSignal.set(newSetFilter);
  }

  addSetFilter(newSetFilter: string): void {
    this.setFilterSignal.update(stringArray => [...stringArray, newSetFilter]);
  }

  removeSetFilter(valueToRemove: string): void {
    this.setFilterSignal.update(currentArray =>
      currentArray.filter(item => item !== valueToRemove)
    );
  }

  updateProductList(newProductList: ProductModel[]): void {
    this.productListSignal.set(newProductList);
  }
}
