import { Routes } from '@angular/router';
import {bannerResolver} from './resolver/home/banner-resolver';
import {homeCardResolver} from './resolver/home/home-card-resolver';
import {homeSetResolver} from './resolver/home/home-set-resolver';
import {promotionResolver} from './resolver/home/promotion-resolver';
import {productListResolver} from './resolver/product/product-list-resolver';

export const routes: Routes = [
  {
    path:"",
    loadComponent: () => import("../features/home/pages/home.page"),
    resolve: {bannerSet: bannerResolver, homeCard: homeCardResolver, homeSet: homeSetResolver, promotion: promotionResolver},
  },

  {
    path:"login",
    loadComponent: () => import("../features/authentification/pages/login.page")
  },

  {
    path:"register",
    loadComponent: () => import("../features/authentification/pages/register.page")
  },

  {
    path:"products",
    loadComponent: () => import("../features/product/pages/product.page"),
    resolve: {productList: productListResolver},
  },

  {
    path:"cart",
    loadComponent: () => import("../features/cart/pages/cart.page")
  },

  {
    path: 'error',
    loadComponent: () => import('../features/error/pages/error.page')
  },
  {path: '**', redirectTo: 'error' }
];
