import { Component, OnInit } from '@angular/core';
import { TipoBotaoConstantes } from '@config/tipo-botao.const';
import { MaioridadeViewModel } from '@maioridade/models/maioridade-view.model';

@Component({
  selector: 'app-maioridade-page',
  templateUrl: './maioridade-page.component.html',
  styleUrls: ['./maioridade-page.component.scss'],
})
export class MaioridadePageComponent implements OnInit {
  public viewModel: MaioridadeViewModel;

  constructor() {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  private construirViewModel(): void {
    this.viewModel = {
      titulo: 'MAIORIDADE__TITULO',
      subtitulo: 'MAIORIDADE__SUBTITULO',
      textoBotaoPrimary: 'MAIORIDADE__BOTAO--SIM',
      textoBotaoSecondary: 'MAIORIDADE__BOTAO--NAO',
      tipoBotaoSecondary: TipoBotaoConstantes.SECONDARY,
    };
  }
}
