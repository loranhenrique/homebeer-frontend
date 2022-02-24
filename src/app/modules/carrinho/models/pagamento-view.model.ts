import { ButtonPagamentoModel } from '@shared/models/button-pagamento.model';

export interface PagamentoViewModel {
  tituloPagamento: string;
  tituloDadosPagamento: string;
  tituloTotal: string;
  labelBotao: string;
  formaPagamento?: ButtonPagamentoModel;
}
