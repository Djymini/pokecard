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

export const setDetailPlaceholder: SetDetailModel = {
  cardCount: {
    total: 0,
    official: 0,
  },
  cards: [
    {
      id: '',
      localId: '',
      name: 'Nom de la carte',
      image: '',
    },
  ],
  id: '',
  legal: {
    standard: false,
    expanded: false,
  },
  logo: '',
  name: 'Nom du set',
  releaseDate: '2025-01-01', // ou une autre date par défaut
  serie: {
    id: '',
    name: 'Nom de la série',
    logo: '',
  },
  symbol: '',
};

