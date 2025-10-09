import { Routes } from '@angular/router';
import {bannerResolver} from './resolver/home/banner-resolver';
import {homeCardResolver} from './resolver/home/home-card-resolver';
import {homeSetResolver} from './resolver/home/home-set-resolver';
import {promotionResolver} from './resolver/home/promotion-resolver';

export const routes: Routes = [
  {
    path:"",
    loadComponent: () => import("../features/home/pages/home.page"),
    resolve: {bannerSet: bannerResolver, homeCard: homeCardResolver, homeSet: homeSetResolver, promotion: promotionResolver},
  },

  {
    path: 'error',
    loadComponent: () => import('../features/error/pages/error.page')
  },
  {path: '**', redirectTo: 'error' }
];
