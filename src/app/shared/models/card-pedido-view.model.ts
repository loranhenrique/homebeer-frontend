import { SafeUrl } from '@angular/platform-browser';

export interface CardPedidoViewModel {
  titulo: string;
  imagemParceiro: SafeUrl;
  totalProdutos: number;
  valorCompra: number;
}
