import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListaFavoritosViewModel } from '@favorito/models/lista-favoritos-view.model';
import { CardParceiroModel } from '@shared/models/card-parceiro.model';

@Component({
  selector: 'bra-lista-favoritos',
  templateUrl: './lista-favoritos.component.html',
  styleUrls: ['./lista-favoritos.component.scss'],
})
export class ListaFavoritosComponent implements OnInit {
  @Input() favoritos: CardParceiroModel[];
  @Output() clickAction = new EventEmitter<string>();
  public viewModel: ListaFavoritosViewModel;

  constructor() {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  public selecionarCard(id: string): void {
    this.clickAction.emit(id);
  }

  private construirViewModel(): void {
    this.viewModel = {
      favoritos: this.favoritos,
    };
  }
}
