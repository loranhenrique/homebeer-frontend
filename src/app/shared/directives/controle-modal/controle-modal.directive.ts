import { Directive, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[braControleModal]',
})
export class ControleModalDirective implements OnInit, OnDestroy {
  private listaElementos: NodeListOf<Element>;

  constructor() {}

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';

    this.listaElementos = document.querySelectorAll('.bra-controle-modal');

    this.listaElementos.forEach(elemento => elemento.setAttribute('aria-hidden', 'true'));
  }

  ngOnDestroy(): void {
    document.body.style.overflow = 'auto';

    this.listaElementos.forEach(elemento => elemento.setAttribute('aria-hidden', 'false'));
  }
}
