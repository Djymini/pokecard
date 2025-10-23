import { ResolveFn } from '@angular/router';
import {SetDetailModel} from '../../../shared/models/set-detail.model';
import {inject} from '@angular/core';
import {HomeFacade} from '../../../features/home/services/home-facade';

export const bannerResolver: ResolveFn<SetDetailModel> = (route, state) => {
  const homeFacade = inject(HomeFacade);
  return homeFacade.getSet();
};
