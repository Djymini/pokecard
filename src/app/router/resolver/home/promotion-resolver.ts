import { ResolveFn } from '@angular/router';
import {ProductModel} from '../../../features/product/models/productModel';
import {inject} from '@angular/core';
import {HomeFacade} from '../../../features/home/services/home-facade';

export const promotionResolver: ResolveFn<ProductModel[]> = (route, state) => {
  const homeFacade = inject(HomeFacade);
  return homeFacade.getPromotion();
};
