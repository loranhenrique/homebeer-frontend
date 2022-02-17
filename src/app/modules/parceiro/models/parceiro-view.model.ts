import { MenuFooterModel } from '@shared/models/menu-footer.model';
import { CardSugestaoModel } from './card-sugestao.model';
import { IconeDestaqueModel } from './icone-destaque.model';

export interface ParceiroViewModel {
  orientacaoLista: 'vertical' | 'horizontal';
  parceirosSugeridos: CardSugestaoModel[];
  parceirosDestaque: IconeDestaqueModel[];
  menuFooter: MenuFooterModel;
}
