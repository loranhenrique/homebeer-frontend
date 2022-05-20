import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PagamentoViewModel } from '@carrinho/models/pagamento-view.model';

@Component({
  selector: 'bra-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss'],
})
export class PagamentoComponent implements OnInit {
  @Input() valorTotal: number;
  @Output() finalizarHandler = new EventEmitter();

  public viewModel: PagamentoViewModel;

  constructor() {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  public clickFinalizar(): void {
    this.finalizarHandler.emit();
  }

  public clickPagamento(pagamento: string): void {
    this.viewModel.formaPagamento = {
      selecionado: pagamento as 'boleto' | 'cartao' | 'pix',
    };
  }

  private construirViewModel(): void {
    this.viewModel = {
      tituloPagamento: 'PAGAMENTO__LABEL--TITULO-FORMA-PAGAMENTO',
      tituloDadosPagamento: 'Isso é apenas uma simulação de compra. Muito obrigado!',
      tituloTotal: 'PAGAMENTO__LABEL--TITULO-TOTAL',
      labelBotao: 'PAGAMENTO__LABEL--BOTAO',
    };
  }
}
