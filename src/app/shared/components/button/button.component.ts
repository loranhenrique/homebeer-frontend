import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TipoBotaoConstantes } from '@config/tipo-botao.const';

@Component({
  selector: 'bra-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() texto: string;
  @Input() tipo = TipoBotaoConstantes.PRIMARY;
  @Output() clickAction = new EventEmitter();

  constructor() {}

  clickHandler(): void {
    this.clickAction.emit();
  }

  getClass(): unknown {
    return {
      'bra-button': true,
      'bra-button--primary': this.tipo === TipoBotaoConstantes.PRIMARY,
      'bra-button--secondary': this.tipo === TipoBotaoConstantes.SECONDARY,
    };
  }
}
