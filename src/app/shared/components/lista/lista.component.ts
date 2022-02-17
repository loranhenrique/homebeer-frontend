import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, share, throttleTime, delay } from 'rxjs/operators';

@Component({
  selector: 'bra-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements AfterViewInit {
  @ViewChild('containerLista', { static: false }) containerLista: ElementRef;
  @Input() orientacao: 'vertical' | 'horizontal' = 'vertical';
  @Output() posicaoScrollHorizontal = new EventEmitter<number>();

  constructor() {}

  ngAfterViewInit(): void {
    if (this.orientacao === 'horizontal') {
      this.configurarEventoScrollHorizontal();
    }
  }

  private configurarEventoScrollHorizontal(): void {
    fromEvent(this.containerLista.nativeElement, 'scroll')
      .pipe(
        delay(1000),
        throttleTime(1000),
        map(() => this.obterPosicaoHorizontal()),
        share()
      )
      .subscribe(scrollAtual => this.posicaoScrollHorizontal.emit(scrollAtual));
  }

  private obterPosicaoHorizontal(): number {
    const elementoHtml = this.containerLista.nativeElement;
    const scrollMaximo = elementoHtml.scrollWidth - elementoHtml.offsetWidth;
    const scrollAtual = elementoHtml.scrollLeft;
    let porcentagemScroll = Math.ceil((scrollAtual / scrollMaximo) * 100);

    // Cálculo necessário devido ao efeito de scroll no iphone.
    if (porcentagemScroll < 0) {
      porcentagemScroll = 0;
    } else if (porcentagemScroll > 100) {
      porcentagemScroll = 100;
    }

    return porcentagemScroll;
  }
}
