import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconePedidoViewModel } from '@perfil/models/icone-pedido-view.model';
import { IconePedidoModel } from '@perfil/models/icone-pedido.model';

@Component({
  selector: 'bra-icone-pedido',
  templateUrl: './icone-pedido.component.html',
  styleUrls: ['./icone-pedido.component.scss'],
})
export class IconePedidoComponent implements OnInit {
  @Input() icone: IconePedidoModel;
  @Output() clickAction = new EventEmitter();

  public viewModel: IconePedidoViewModel[];

  constructor() {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  public clickHandler(): void {
    this.clickAction.emit();
  }

  private construirViewModel(): void {
    this.viewModel = [
      {
        identificador: 'pagamento',
        titulo: 'ICONE-PEDIDO__LABEL--PAGAMENTO',
        quantidade: this.icone.pagamento,
      },
      {
        identificador: 'envio',
        titulo: 'ICONE-PEDIDO__LABEL--ENVIO',
        quantidade: this.icone.envio,
      },
      {
        identificador: 'recebimento',
        titulo: 'ICONE-PEDIDO__LABEL--RECEBIMENTO',
        quantidade: this.icone.recebimento,
      },
    ];
  }
}
