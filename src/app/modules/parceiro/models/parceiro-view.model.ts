import { MenuFooterModel } from '@shared/models/menu-footer.model';
import { CardSugestaoModel } from './card-sugestao.model';

export interface ParceiroViewModel {
  orientacaoLista: 'vertical' | 'horizontal';
  parceirosSugeridos: CardSugestaoModel[];
  menuFooter: MenuFooterModel;
}
