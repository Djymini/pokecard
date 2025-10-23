import { ResolveFn } from '@angular/router';
import {inject} from '@angular/core';
import {HomeFacade} from '../../../features/home/services/home-facade';
import {ProductFacade} from '../../../features/product/services/product-facade';
import {ProductList} from '../../../features/product/components/product-list/product-list';
import {ProductModel} from '../../../features/product/models/productModel';

export const productListResolver: ResolveFn<ProductModel[]> = (route, state) => {
  const productFacade = inject(ProductFacade);
  return productFacade.loadProductList();
};
