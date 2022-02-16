import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InformativoMaioridadeViewModel } from '@maioridade/models/informativo-maioridade-view.model';

@Component({
  selector: 'bra-informativo-maioridade',
  templateUrl: './informativo-maioridade.component.html',
  styleUrls: ['./informativo-maioridade.component.scss'],
})
export class InformativoMaioridadeComponent implements OnInit {
  @Output() clickFecharHandler = new EventEmitter();

  public viewModel: InformativoMaioridadeViewModel;

  constructor() {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  public clickFechar(): void {
    this.clickFecharHandler.emit();
  }

  private construirViewModel(): void {
    this.viewModel = {
      titulo: 'INFORMATIVO-MAIORIDADE__LABEL--TITULO',
      descricao: 'INFORMATIVO-MAIORIDADE__LABEL-DESCRICAO',
      textoLei: 'INFORMATIVO-MAIORIDADE__TEXTO--LEI',
      textoDenuncia: 'INFORMATIVO-MAIORIDADE__TEXTO--DENUNCIA',
      site: 'INFORMATIVO-MAIORIDADE__TEXTO--SITE',
      textoBotao: 'INFORMATIVO-MAIORIDADE__TEXTO--BOTAO',
    };
  }
}
