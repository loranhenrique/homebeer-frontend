import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AcessoAppViewModel } from '@perfil/models/acesso-app-view.model';

@Component({
  selector: 'bra-acesso-app',
  templateUrl: './acesso-app.component.html',
  styleUrls: ['./acesso-app.component.scss'],
})
export class AcessoAppComponent implements OnInit {
  @Output() clickAction = new EventEmitter<string>();

  public viewModel: AcessoAppViewModel;

  constructor() {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  public clickHandler(valor: string): void {
    this.clickAction.emit(valor);
  }

  private construirViewModel(): void {
    this.viewModel = {
      descricao: 'ACESSO-APP__LABEL--DESCRICAO',
      textoBotaoPrimario: 'ACESSO-APP__LABEL--BOTAO-PRIMARIO',
      textoBotaoSecundario: 'ACESSO-APP__LABEL--BOTAO-SECUNDARIO',
    };
  }
}
