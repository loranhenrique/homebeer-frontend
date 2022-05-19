import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ListaParceirosViewModel } from '@parceiro/models/lista-parceiros-view.model';
import { CardParceiroModel } from '@shared/models/card-parceiro.model';

@Component({
  selector: 'bra-lista-pesquisa',
  templateUrl: './lista-pesquisa.component.html',
  styleUrls: ['./lista-pesquisa.component.scss'],
})
export class ListaPesquisaComponent implements OnInit, OnChanges {
  @Input() parceiros: CardParceiroModel[];
  @Output() clickAction = new EventEmitter<string>();
  public viewModel: ListaParceirosViewModel;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.parceiros.firstChange) {
      this.construirViewModel();
    }
  }

  ngOnInit(): void {
    this.construirViewModel();
  }

  public selecionarCard(id: string): void {
    this.clickAction.emit(id);
  }

  private construirViewModel(): void {
    this.viewModel = {
      titulo: 'LISTA-PESQUISA__LABEL--TITULO',
      parceiros: this.parceiros,
    };
  }
}
