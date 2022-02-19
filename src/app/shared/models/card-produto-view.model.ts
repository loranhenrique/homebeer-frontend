import { SafeUrl } from '@angular/platform-browser';

export interface CardProdutoViewModel {
  imagem: SafeUrl;
  nomeProduto: string;
  nomeParceiro: string;
  quantidade: number;
  valorTotal: number;
  textoBotaoExcluirProduto: string;
  exibeBotaoExcluirProduto: boolean;
  exibeCardProduto: boolean;
}
