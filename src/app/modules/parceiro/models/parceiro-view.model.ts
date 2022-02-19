import { CardParceiroModel } from '@shared/models/card-parceiro.model';
import { MenuFooterModel } from '@shared/models/menu-footer.model';
import { MenuHeaderModel } from '@shared/models/menu-header.model';
import { CardSugestaoModel } from './card-sugestao.model';
import { IconeDestaqueModel } from './icone-destaque.model';

export interface ParceiroViewModel {
  orientacaoLista: 'vertical' | 'horizontal';
  parceirosSugeridos: CardSugestaoModel[];
  parceirosDestaque: IconeDestaqueModel[];
  parceiros: CardParceiroModel[];
  menuHeader: MenuHeaderModel;
  menuFooter: MenuFooterModel;
}
