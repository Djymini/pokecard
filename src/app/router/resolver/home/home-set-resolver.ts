import { ResolveFn } from '@angular/router';
import {inject} from '@angular/core';
import {HomeFacade} from '../../../features/home/services/home-facade';
import {SetModel} from '../../../shared/models/set.model';

export const homeSetResolver: ResolveFn<SetModel[]> = (route, state) => {
  const homeFacade = inject(HomeFacade);
  return homeFacade.getHomeSet();
};
