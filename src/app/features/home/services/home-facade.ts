import {inject, Injectable} from '@angular/core';
import {HomeApi} from './home-api';
import {HomeStore} from './home-store';
import {SetDetailModel} from '../../../shared/models/set-detail.model';
import {CardModel} from '../../../shared/models/card.model';
import {SetModel} from '../../../shared/models/set.model';
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
    if(this.homeStore.homeCard().length < 1){
      const homeCard = await this.homeApi.getCard();
      this.homeStore.addCard(homeCard);
      return homeCard;
    }else {
      return this.homeStore.homeCard();
    }
  }

  async getHomeSet(): Promise<SetModel[]> {
    if(this.homeStore.homeSet().length < 1){
      const homeSet = await this.homeApi.getSet();
      this.homeStore.addSet(homeSet);
      return homeSet;
    }else {
      return this.homeStore.homeSet();
    }
  }

  async getPromotion(): Promise<ProductModel[]> {
    if(this.homeStore.homePromotion().length < 1){
      const promotion = await this.homeApi.getPromotion();
      this.homeStore.addPromotion(promotion);
      return promotion;
    }else {
      return this.homeStore.homePromotion();
    }
  }
}
