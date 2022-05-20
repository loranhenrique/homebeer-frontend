import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PagamentoViewModel } from '@carrinho/models/pagamento-view.model';
import { StatusBotaoService } from '@service/app/status-botao/status-botao.service';

@Component({
  selector: 'bra-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss'],
})
export class PagamentoComponent implements OnInit {
  @Input() valorTotal: number;
  @Output() finalizarHandler = new EventEmitter();

  public viewModel: PagamentoViewModel;

  constructor(private readonly statusBotaoService: StatusBotaoService) {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  public clickFinalizar(): void {
    this.finalizarHandler.emit();
  }

  public clickPagamento(pagamento: string): void {
    if (!this.definirContinuacaoClick()) return;

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

  private definirContinuacaoClick(): boolean {
    let statusBotao = false;
    this.statusBotaoService.obterStatus().subscribe(status => (statusBotao = status));
    if (statusBotao) return false;

    return true;
  }
}
