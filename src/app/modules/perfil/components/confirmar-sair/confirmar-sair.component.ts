import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConfirmarSairViewModel } from '@perfil/models/confirmar-sair-view.model';

@Component({
  selector: 'bra-confirmar-sair',
  templateUrl: './confirmar-sair.component.html',
  styleUrls: ['./confirmar-sair.component.scss'],
})
export class ConfirmarSairComponent implements OnInit {
  @Output() clickAction = new EventEmitter();
  public viewModel: ConfirmarSairViewModel;

  constructor() {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  public clickHandler(): void {
    this.clickAction.emit();
  }

  private construirViewModel(): void {
    this.viewModel = {
      titulo: 'CONFIRMAR-SAIR__LABEL--TITULO',
      descricao: 'CONFIRMAR-SAIR__LABEL--DESCRICAO',
      textoBotao: 'CONFIRMAR-SAIR__LABEL--BOTAO',
    };
  }
}
