import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardSugestaoModel } from '@parceiro/models/card-sugestao.model';
import { SugestaoViewModel } from '@parceiro/models/sugestao-view.model';

@Component({
  selector: 'bra-sugestao',
  templateUrl: './sugestao.component.html',
  styleUrls: ['./sugestao.component.scss'],
})
export class SugestaoComponent implements OnInit {
  @Input() parceirosSugeridos: CardSugestaoModel[];
  @Output() clickAction = new EventEmitter<string>();
  public viewModel: SugestaoViewModel;

  constructor() {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  public selecionarCard(id: string): void {
    this.clickAction.emit(id);
  }

  private construirViewModel(): void {
    this.viewModel = {
      titulo: 'SUGESTAO__LABEL--TITULO',
      parceirosSugeridos: this.parceirosSugeridos,
    };
  }
}
