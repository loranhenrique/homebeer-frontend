import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'bra-historico-compras',
  templateUrl: './historico-compras.component.html',
  styleUrls: ['./historico-compras.component.scss'],
})
export class HistoricoComprasComponent {
  @Output() clickAction = new EventEmitter();
  public titulo = 'HISTORICO-COMPRAS__LABEL--TITULO';

  constructor() {}

  public clickHandler(): void {
    this.clickAction.emit();
  }
}
