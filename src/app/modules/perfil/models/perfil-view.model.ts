import { MenuFooterModel } from '@shared/models/menu-footer.model';
import { MenuHeaderModel } from '@shared/models/menu-header.model';
import { ModalModel } from '@shared/models/modal.model';
import { IconePedidoModel } from './icone-pedido.model';
import { ListaPedidosModel } from './lista-pedidos.model';

export interface PerfilViewModel {
  textoBotaoSair: string;
  menuHeader: MenuHeaderModel;
  menuFooter: MenuFooterModel;
  modalParcialModel: ModalModel;
  modalIntegralModel: ModalModel;
  exibirTelaLogada: boolean;
  exibeModal?: 'sair' | 'historico' | 'pedidos';
  pedidosAndamento?: ListaPedidosModel;
  historicoPedidos?: ListaPedidosModel;
  pedidos?: IconePedidoModel;
  exibeErroLogin?: boolean;
}
