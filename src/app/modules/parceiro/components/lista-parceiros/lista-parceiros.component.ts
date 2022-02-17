import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListaParceirosViewModel } from '@parceiro/models/lista-parceiros-view.model';
import { CardParceiroModel } from '@shared/models/card-parceiro.model';

@Component({
  selector: 'bra-lista-parceiros',
  templateUrl: './lista-parceiros.component.html',
  styleUrls: ['./lista-parceiros.component.scss'],
})
export class ListaParceirosComponent implements OnInit {
  @Input() parceiros: CardParceiroModel[];
  @Output() clickAction = new EventEmitter<string>();
  public viewModel: ListaParceirosViewModel;

  constructor() {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  public selecionarCard(id: string): void {
    this.clickAction.emit(id);
  }

  private construirViewModel(): void {
    this.viewModel = {
      titulo: 'LISTA-PARCEIROS__LABEL--TITULO',
      parceiros: this.parceiros,
    };
  }
}
