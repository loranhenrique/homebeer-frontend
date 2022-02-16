import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoBotaoConstantes } from '@config/tipo-botao.const';
import { MaioridadeViewModel } from '@maioridade/models/maioridade-view.model';
import { modalAnimation } from '@shared/components/modal/modal-animation';

@Component({
  selector: 'bra-maioridade-page',
  templateUrl: './maioridade-page.component.html',
  styleUrls: ['./maioridade-page.component.scss'],
  animations: [modalAnimation()],
})
export class MaioridadePageComponent implements OnInit {
  public viewModel: MaioridadeViewModel;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  public clickBotaoNao(): void {
    this.viewModel.modalInformativo.mostrar = true;
  }

  public clickBotaoSim(): void {
    this.router.navigate(['/parceiro']);
  }

  public fecharModalConfirmacao(): void {
    this.viewModel.modalInformativo.mostrar = false;
  }

  private construirViewModel(): void {
    this.viewModel = {
      titulo: 'MAIORIDADE__TITULO',
      subtitulo: 'MAIORIDADE__SUBTITULO',
      textoBotaoPrimary: 'MAIORIDADE__BOTAO--SIM',
      textoBotaoSecondary: 'MAIORIDADE__BOTAO--NAO',
      tipoBotaoSecondary: TipoBotaoConstantes.SECONDARY,
      modalInformativo: {
        mostrar: false,
        tipo: 'parcial',
      },
    };
  }
}
