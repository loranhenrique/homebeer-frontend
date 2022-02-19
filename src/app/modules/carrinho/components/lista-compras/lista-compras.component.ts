import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListaComprasViewModel } from '@carrinho/models/lista-compras-view.model';
import { cardAnimation } from '@shared/components/card-produto/card-produto-animation';
import { CardProdutoModel } from '@shared/models/card-produto.model';
import { InfoProdutoModel } from '@shared/models/info-produto.model';

@Component({
  selector: 'bra-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.scss'],
  animations: [cardAnimation()],
})
export class ListaComprasComponent implements OnInit {
  @Input() compras: CardProdutoModel[];
  @Output() clickAction = new EventEmitter<InfoProdutoModel>();
  public viewModel: ListaComprasViewModel;

  constructor() {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  public infoProduto(infoProduto: InfoProdutoModel): void {
    this.clickAction.emit(infoProduto);
  }

  private construirViewModel(): void {
    this.viewModel = {
      compras: this.compras,
    };
  }
}
