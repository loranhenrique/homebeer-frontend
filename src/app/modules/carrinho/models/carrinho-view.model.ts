import { CardProdutoModel } from '@shared/models/card-produto.model';
import { MenuFooterModel } from '@shared/models/menu-footer.model';
import { MenuHeaderModel } from '@shared/models/menu-header.model';

export interface CarrinhoViewModel {
  tituloErro: string;
  descricaoErro: string;
  textoBotaoErro: string;
  valorTotalCompra: number;
  carrinhoVazio: boolean;
  exibeListaCompra: boolean;
  menuHeader: MenuHeaderModel;
  menuFooter: MenuFooterModel;
  compras: CardProdutoModel[];
}
