import { CardParceiroModel } from '@shared/models/card-parceiro.model';

export interface ListaParceirosViewModel {
  titulo: string;
  parceiros: CardParceiroModel[];
}
