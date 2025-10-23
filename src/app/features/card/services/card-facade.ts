import {inject, Injectable} from '@angular/core';
import {CardStore} from './card-store';
import {CardModel} from '../../../shared/models/card.model';
import {CardApi} from './card-api';
import {ProductModel} from '../../product/models/productModel';

@Injectable({
  providedIn: 'root'
})
export class CardFacade {
  cardStore = inject(CardStore);
  cardApi = inject(CardApi);

  async loadCardByName(name: string): Promise<CardModel>{
    const result = await this.cardApi.getCardByName(name);
    this.cardStore.addCard(result[0]);
    return result[0]
  }
}
