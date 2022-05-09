import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardCervejaModel } from '@experiencia/models/card-cerveja.model';
import { IdentificadorCervejaModel } from '@experiencia/models/identificador-cerveja.model';
import { ListaProdutosViewModel } from '@experiencia/models/lista-produtos-view.model';

@Component({
  selector: 'bra-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss'],
})
export class ListaProdutosComponent implements OnInit {
  @Input() cervejas: CardCervejaModel[];
  @Output() clickAction = new EventEmitter<IdentificadorCervejaModel>();
  public viewModel: ListaProdutosViewModel;

  constructor() {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  public clickHandle(identificadorCerveja: IdentificadorCervejaModel): void {
    this.clickAction.emit(identificadorCerveja);
  }

  private construirViewModel(): void {
    this.viewModel = {
      cervejas: this.cervejas,
    };
  }
}
