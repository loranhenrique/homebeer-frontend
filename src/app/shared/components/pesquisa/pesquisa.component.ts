import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { PesquisaViewModel } from '@shared/models/pesquisa-view.model';

@Component({
  selector: 'bra-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss'],
})
export class PesquisaComponent implements OnInit, AfterViewInit {
  @ViewChild('campoBusca', { static: false }) campoBuscaRef: ElementRef;
  @Output() valorPesquisado = new EventEmitter();
  @Input() habilitar: boolean = false;

  public viewModel: PesquisaViewModel;
  public valorInput: string;

  constructor(private renderer2: Renderer2) {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  ngAfterViewInit(): void {
    this.ativaFocoCampoBusca();
    this.capturarEventoEnter();
  }

  public clickPesquisar(): void {
    this.valorPesquisado.emit(this.valorInput);
  }

  private construirViewModel(): void {
    this.viewModel = {
      placeholder: 'PESQUISA-INPUT-PLACEHOLDER',
    };
  }

  private ativaFocoCampoBusca(): void {
    if (this.habilitar) {
      const pesquisar = document.getElementById('pesquisar');

      if (pesquisar) {
        window.onload = function () {
          pesquisar.focus();
        };
      }
    }
  }

  private capturarEventoEnter(): void {
    this.renderer2.listen(this.campoBuscaRef.nativeElement, 'keydown.enter', () => this.clickPesquisar());
  }
}
