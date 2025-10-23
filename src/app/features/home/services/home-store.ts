import {computed, Injectable, signal} from '@angular/core';
import {SetModel} from '../../../shared/models/set.model';
import {CardModel} from '../../../shared/models/card.model';
import {ProductModel} from '../../product/models/productModel';
import {SetDetailModel, setDetailPlaceholder} from '../../../shared/models/set-detail.model';

@Injectable({
  providedIn: 'root'
})
export class HomeStore {
  private bannerSetSignal = signal<SetDetailModel>(setDetailPlaceholder);
  private homeSetSignal = signal<SetModel[]>([]);
  private homeCardSignal = signal<CardModel[]>([]);
  private homePromotionSignal = signal<ProductModel[]>([]);

  bannerSet = computed(() => this.bannerSetSignal());
  homeSet = computed(() => this.homeSetSignal());
  homeCard = computed(() => this.homeCardSignal());
  homePromotion = computed(() => this.homePromotionSignal());

  addBannerSet(set: SetDetailModel): void {
    this.bannerSetSignal.update(sets => set);
  }

  addSet(set: SetModel[]): void {
    this.homeSetSignal.update(sets => [...sets, ...set]);
  }

  addCard(cardsToAdd: CardModel[]): void {
    this.homeCardSignal.update(cards => [...cards, ...cardsToAdd]);
  }

  addPromotion(product: ProductModel[]): void {
    this.homePromotionSignal.update(products => [...products, ...product]);
  }

  removeSet(id: string): void {
    this.homeSetSignal.update(sets => sets.filter(set => set.id !== id));
  }
  removeCard(id: string): void {
    this.homeCardSignal.update(cards => cards.filter(card => card.id !== id));
  }
  removePromotion(id: string): void {
    this.homePromotionSignal.update(products => products.filter(product => product.card.id !== id));
  }
}
