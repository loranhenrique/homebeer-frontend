import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuFooterModel } from '@shared/models/menu-footer.model';

@Component({
  selector: 'bra-menu-footer',
  templateUrl: './menu-footer.component.html',
  styleUrls: ['./menu-footer.component.scss'],
})
export class MenuFooterComponent {
  @Input() conteudoFooter: MenuFooterModel;
  @Output() clickActionBotao = new EventEmitter();
  @Output() clickActionLink = new EventEmitter();

  constructor() {}

  public clickHandlerBotao(): void {
    this.clickActionBotao.emit();
  }

  public clickHandlerLink(): void {
    this.clickActionLink.emit();
  }

  public getClass(): string {
    switch (this.conteudoFooter.selecionado) {
      case 'home':
        return 'menu-footer menu-footer--home';

      case 'carrinho':
        return 'menu-footer menu-footer--carrinho';

      case 'favorito':
        return 'menu-footer menu-footer--favorito';

      case 'perfil':
        return 'menu-footer menu-footer--perfil';

      default:
        return 'menu-footer menu-footer--home';
    }
  }
}
