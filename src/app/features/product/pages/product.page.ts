import {Component, computed, inject, OnInit} from '@angular/core';
import {Filter} from '../components/filter/filter';
import {ProductModel} from '../models/productModel';
import {ActivatedRoute} from '@angular/router';
import {ProductList} from '../components/product-list/product-list';
import {ProductFacade} from '../services/product-facade';
import {ProductForm} from '../components/product-form/product-form';

@Component({
  selector: 'app-product.page',
  imports: [
    Filter,
    ProductList,
    ProductForm
  ],
  template: `
    <main>
      <app-filter></app-filter>
      <app-product-list [productList]="result()"></app-product-list>
      <app-product-form></app-product-form>
    </main>
  `,
  styles: `
    main{
      padding: 16px;
      display: flex;
    }
  `
})
export default class ProductPage implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  producteFacade = inject(ProductFacade);
  productList: ProductModel[] = [];
  result = computed(() => {
    if (this.producteFacade.productList()){
      console.log("heoh");
      return this.producteFacade.productList();
    }else {
      return this.productList
    }
  })

  ngOnInit() {
    this.productList = this.route.snapshot.data['productList'];
  }
}
