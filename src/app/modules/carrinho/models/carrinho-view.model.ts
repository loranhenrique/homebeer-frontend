import { CardProdutoModel } from '@shared/models/card-produto.model';
import { MenuFooterModel } from '@shared/models/menu-footer.model';

export interface CarrinhoViewModel {
  tituloPrincipal: string;
  tituloErro: string;
  descricaoErro: string;
  textoBotaoErro: string;
  valorTotalCompra: number;
  carrinhoVazio: boolean;
  exibeListaCompra: boolean;
  menuFooter: MenuFooterModel;
  compras: CardProdutoModel[];
}
