import {CardModel} from '../../../shared/models/card.model';

export type ProductModel = {
  card: CardModel;
  price: number;
  stock: number;
  discount: number;
}
