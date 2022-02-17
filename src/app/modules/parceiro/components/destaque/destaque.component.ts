import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DestaqueViewModel } from '@parceiro/models/destaque-view.model';
import { IconeDestaqueModel } from '@parceiro/models/icone-destaque.model';

@Component({
  selector: 'bra-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.scss'],
})
export class DestaqueComponent implements OnInit {
  @Input() parceirosDestaque: IconeDestaqueModel[];
  @Output() clickAction = new EventEmitter<string>();
  public viewModel: DestaqueViewModel;

  constructor() {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  public selecionarIcone(id: string): void {
    this.clickAction.emit(id);
  }

  private construirViewModel(): void {
    this.viewModel = {
      titulo: 'DESTAQUE__LABEL--TITULO',
      parceirosDestaque: this.parceirosDestaque,
    };
  }
}
