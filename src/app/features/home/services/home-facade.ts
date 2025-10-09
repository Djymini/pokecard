import {inject, Injectable} from '@angular/core';
import {HomeApi} from './home-api';
import {HomeStore} from './home-store';
import {SetDetailModel} from '../../../share/models/set-detail.model';
import {CardModel} from '../../../share/models/card.model';
import {SetModel} from '../../../share/models/set.model';
import {ProductModel} from '../../product/models/productModel';

@Injectable({
  providedIn: 'root'
})
export class HomeFacade {
  private homeApi = inject(HomeApi);
  private homeStore = inject(HomeStore);

  async getSet(): Promise<SetDetailModel > {
    if (this.homeStore.bannerSet().id === "") {
      console.log("Nouvelle banniere")
      const bannerSet = await this.homeApi.getRecentSet();
      this.homeStore.addBannerSet(bannerSet);
      return bannerSet;
    }else {
      console.log("Ancienne banniere")
      return this.homeStore.bannerSet();
    }
  }

  async getHomeCard(): Promise<CardModel[]> {
    const homeCard = await this.homeApi.getCard();
    this.homeStore.addCard(homeCard);
    return homeCard;
  }

  async getHomeSet(): Promise<SetModel[]> {
    const homeSet = await this.homeApi.getSet();
    this.homeStore.addSet(homeSet);
    return homeSet;
  }

  async getPromotion(): Promise<ProductModel[]> {
    const promotion = await this.homeApi.getPromotion();
    this.homeStore.addPromotion(promotion);
    return promotion;
  }
}
