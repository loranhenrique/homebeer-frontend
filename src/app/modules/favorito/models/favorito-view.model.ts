import { CardParceiroModel } from '@shared/models/card-parceiro.model';
import { MenuFooterModel } from '@shared/models/menu-footer.model';

export interface FavoritoViewModel {
  tituloPrincipal: string;
  tituloErro: string;
  descricaoErro: string;
  textoBotaoErro: string;
  menuFooter: MenuFooterModel;
  favoritos: CardParceiroModel[];
}
