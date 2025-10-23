import {computed, Injectable, signal} from '@angular/core';
import {CardModel} from '../../../shared/models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardStore {
  private newCardSignal = signal<CardModel | null>(null);

  newCard = computed(() => this.newCardSignal())

  addCard(card: CardModel): void {
    this.newCardSignal.set(card);
  }

  removeCard(): void {
    this.newCardSignal.set(null);
  }
}
