import { CardParceiroModel } from '@shared/models/card-parceiro.model';
import { MenuFooterModel } from '@shared/models/menu-footer.model';
import { MenuHeaderModel } from '@shared/models/menu-header.model';

export interface FavoritoViewModel {
  tituloErro: string;
  descricaoErro: string;
  textoBotaoErro: string;
  menuHeader: MenuHeaderModel;
  menuFooter: MenuFooterModel;
  favoritos: CardParceiroModel[];
}
