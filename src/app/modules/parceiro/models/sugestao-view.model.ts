import { CardSugestaoModel } from './card-sugestao.model';

export interface SugestaoViewModel {
  titulo: string;
  parceirosSugeridos: CardSugestaoModel[];
}
