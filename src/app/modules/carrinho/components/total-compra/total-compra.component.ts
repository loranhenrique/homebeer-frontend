import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TotalCompraViewModel } from '@carrinho/models/total-compra-view.model';

@Component({
  selector: 'bra-total-compra',
  templateUrl: './total-compra.component.html',
  styleUrls: ['./total-compra.component.scss'],
})
export class TotalCompraComponent implements OnInit, OnChanges {
  @Input() valorTotal: number;
  @Output() clickAction = new EventEmitter();

  public viewModel: TotalCompraViewModel;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.valorTotal.firstChange) {
      this.construirViewModel();
    }
  }

  ngOnInit(): void {
    this.construirViewModel();
  }

  public clickHandler(): void {
    this.clickAction.emit();
  }

  private construirViewModel(): void {
    this.viewModel = {
      valorTotal: this.valorTotal,
      textoBotao: 'TOTAL-COMPRA__LABEL--BOTAO',
    };
  }
}
