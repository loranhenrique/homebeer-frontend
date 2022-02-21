import { CardPedidoModel } from '@shared/models/card-pedido.model';

export interface ListaPedidosViewModel {
  titulo: string;
  pedidos: CardPedidoModel[];
}
