import { CardPedidoModel } from '@shared/models/card-pedido.model';

export interface ListaPedidosModel {
  titulo: string;
  pedidos: CardPedidoModel[];
}
