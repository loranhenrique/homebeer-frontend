import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuHeaderModel } from '@shared/models/menu-header.model';

@Component({
  selector: 'bra-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss'],
})
export class MenuHeaderComponent {
  @Input() menuHeader: MenuHeaderModel;
  @Output() valorPesquisado = new EventEmitter<string>();

  constructor() {}

  public pesquisaHandle(valorPesquisado: string): void {
    this.valorPesquisado.emit(valorPesquisado);
  }
}
