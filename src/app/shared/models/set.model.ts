import {CardCountModel} from './card-count.model';

export type SetModel = {
  id: string,
  name: string,
  logo: string,
  cardCount: CardCountModel,
  symbol?: string,
}
