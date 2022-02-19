import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListaComprasViewModel } from '@carrinho/models/lista-compras-view.model';
import { cardAnimation } from '@shared/components/card-produto/card-produto-animation';
import { CardProdutoModel } from '@shared/models/card-produto.model';

@Component({
  selector: 'bra-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.scss'],
  animations: [cardAnimation()],
})
export class ListaComprasComponent implements OnInit {
  @Input() compras: CardProdutoModel[];
  @Output() clickAction = new EventEmitter<string>();
  public viewModel: ListaComprasViewModel;

  constructor() {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  public selecionarCard(id: string): void {
    this.clickAction.emit(id);
  }

  private construirViewModel(): void {
    this.viewModel = {
      compras: this.compras,
    };
  }
}
