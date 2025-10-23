import {computed, inject, Injectable} from '@angular/core';
import {ProductApi} from './product-api';
import {SetDetailModel} from '../../../shared/models/set-detail.model';
import {ProductModel} from '../models/productModel';
import {ProductStore} from './product-store';

@Injectable({
  providedIn: 'root'
})
export class ProductFacade {
  productApi = inject(ProductApi);
  productStore = inject(ProductStore);

  productList = computed(() => {
    let result: ProductModel[] = [];
    if(this.productStore.query() !== ""){
      result = this.productStore.productList().filter((item: ProductModel) => item.card.name.toLowerCase().includes(this.productStore.query().toLowerCase()));
    }else {
      result = this.productStore.productList();
    }

    console.log(result);
    if(this.productStore.setFilter().length >= 1){
      result = result.filter((item: ProductModel) => this.productStore.setFilter().includes(item.card.id.split("-")[0]))
    }

    return result;
  });

  getQuery(){
    return this.productStore.query;
  }

  getSetFilter(){
    return this.productStore.setFilter;
  }

  getProductList(){
    return this.productStore.productList;
  }

  updateQuery(newQuery:string){
    this.productStore.updateQuery(newQuery);
  }

  addSetFilter(newSetFilter:string){
    this.productStore.addSetFilter(newSetFilter);
  }

  removeSetFilter(newSetFilter:string){
    this.productStore.removeSetFilter(newSetFilter);
  }

  async loadProductList(): Promise<ProductModel[]>{
    const result = await this.productApi.getProductList();
    this.productStore.updateProductList(result);
    return this.productStore.productList();
  }
}
