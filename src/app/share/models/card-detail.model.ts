import {SetModel} from './set.model';
import {CardVariant} from './card-variant.model';
import {CardAttackModel} from './card-attack.model';
import {CardWeaknessModel} from './card-weakness.model';
import {CardLegalModel} from './card-legal.model';

export type CardDetailModel = {
  category: string;
  id: string;
  illustration: string;
  image: string;
  localId: string;
  name: string;
  rarity: string;
  set: SetModel;
  variants: CardVariant;
  hp: number,
  type: string[];
  eloveFrom: string;
  stage: string;
  attacks: CardAttackModel[];
  weakness: CardWeaknessModel[];
  retreat: number;
  regulationMark: string;
  legal: CardLegalModel;
  updated: string;
}
