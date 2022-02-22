import { CardProdutoModel } from '@shared/models/card-produto.model';
import { MenuFooterModel } from '@shared/models/menu-footer.model';
import { MenuHeaderModel } from '@shared/models/menu-header.model';
import { ModalModel } from '@shared/models/modal.model';

export interface CarrinhoViewModel {
  tituloErro: string;
  descricaoErro: string;
  textoBotaoErro: string;
  valorTotalCompra: number;
  carrinhoVazio: boolean;
  exibeListaCompra: boolean;
  compras: CardProdutoModel[];
  menuHeader: MenuHeaderModel;
  menuFooter: MenuFooterModel;
  modalPagamento: ModalModel;
}
