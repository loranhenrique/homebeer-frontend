import { Component, Input, OnInit } from '@angular/core';
import { PagamentoViewModel } from '@carrinho/models/pagamento-view.model';

@Component({
  selector: 'bra-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss'],
})
export class PagamentoComponent implements OnInit {
  @Input() valorTotal: number = 199.9;
  public viewModel: PagamentoViewModel;

  constructor() {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  public clickPagamento(pagamento: string): void {
    this.viewModel.formaPagamento = {
      selecionado: pagamento as 'boleto' | 'cartao' | 'pix',
    };
  }

  private construirViewModel(): void {
    this.viewModel = {
      tituloPagamento: 'PAGAMENTO__LABEL--TITULO-FORMA-PAGAMENTO',
      tituloDadosPagamento: 'PAGAMENTO__LABEL--TITULO-DADOS-PAGAMENTO',
      tituloTotal: 'PAGAMENTO__LABEL--TITULO-TOTAL',
      labelBotao: 'PAGAMENTO__LABEL--BOTAO',
    };
  }
}
