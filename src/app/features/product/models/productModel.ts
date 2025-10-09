import {CardModel} from '../../../share/models/card.model';

export type ProductModel = {
  card: CardModel;
  price: number;
  stock: number;
  discount: number;
}
