import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ButtonPagamentoViewModel } from '@shared/models/button-pagamento-view.model';
import { ButtonPagamentoModel } from '@shared/models/button-pagamento.model';

@Component({
  selector: 'bra-button-pagamento',
  templateUrl: './button-pagamento.component.html',
  styleUrls: ['./button-pagamento.component.scss'],
})
export class ButtonPagamentoComponent implements OnInit, OnChanges {
  @Input() buttonPagamento: ButtonPagamentoModel;
  @Output() clickAction = new EventEmitter<string>();
  public viewModel: ButtonPagamentoViewModel;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.buttonPagamento.firstChange) {
      this.construirViewModel();
    }
  }

  ngOnInit(): void {
    this.construirViewModel();
  }

  public clickHandler(pagamento: string): void {
    this.clickAction.emit(pagamento);
  }

  public getClass(): unknown {
    if (this.buttonPagamento && this.buttonPagamento.selecionado) {
      return `button-pagamento button-pagamento--${this.buttonPagamento.selecionado}`;
    }

    return 'button-pagamento';
  }

  private construirViewModel(): void {
    this.viewModel = {
      tituloCartao: 'PAGAMENTO__LABEL--CARTAO',
      tituloBoleto: 'PAGAMENTO__LABEL--BOLETO',
      tituloPix: 'PAGAMENTO__LABEL--PIX',
    };
  }
}
