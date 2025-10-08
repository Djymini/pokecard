import {CardCountModel} from './card-count.model';
import {CardModel} from './card.model';
import {CardLegalModel} from './card-legal.model';
import {SerieModel} from './serie.model';

export type SetDetailModel = {
  cardCount: CardCountModel;
  cards: CardModel[];
  id: string;
  legal: CardLegalModel;
  logo: string;
  name: string;
  releaseDate: string;
  serie: SerieModel;
  symbol: string;
}
