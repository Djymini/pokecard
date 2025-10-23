import { ResolveFn } from '@angular/router';
import {inject} from '@angular/core';
import {HomeFacade} from '../../../features/home/services/home-facade';
import {CardModel} from '../../../shared/models/card.model';

export const homeCardResolver: ResolveFn<CardModel[]> = (route, state) => {
  const homeFacade = inject(HomeFacade);
  return homeFacade.getHomeCard();
};
