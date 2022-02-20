import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconePedidoModel } from '@perfil/models/icone-pedido.model';

@Component({
  selector: 'bra-pedidos-andamento',
  templateUrl: './pedidos-andamento.component.html',
  styleUrls: ['./pedidos-andamento.component.scss'],
})
export class PedidosAndamentoComponent {
  @Input() icone: IconePedidoModel;
  @Output() clickAction = new EventEmitter();
  public titulo = 'PEDIDOS-ANDAMENTO__LABEL--TITULO';

  constructor() {}

  public clickHandler(): void {
    this.clickAction.emit();
  }
}
