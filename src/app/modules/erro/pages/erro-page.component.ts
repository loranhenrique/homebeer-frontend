import { Component, HostListener, OnInit } from '@angular/core';
import { Navigation, Router } from '@angular/router';
import { ErroViewModel } from '@erro/models/erro-view.model';
import { ErroModel } from '@erro/models/erro.model';

@Component({
  selector: 'bra-erro-page',
  templateUrl: './erro-page.component.html',
  styleUrls: ['./erro-page.component.scss'],
})
export class ErroPageComponent implements OnInit {
  public viewModel: ErroViewModel;

  private erroModel: ErroModel;
  private navigation: Navigation | null;
  private SEM_INTERNET_MOMENTO_FRONT = 'SIMF-400';

  constructor(private router: Router) {
    this.navigation = this.router.getCurrentNavigation();
  }

  @HostListener('window:voltar')
  voltar(): void {
    if (this.erroModel && this.erroModel.urlVoltar) {
      this.router.navigateByUrl(this.erroModel.urlVoltar);
    } else {
      history.back();
    }
  }

  ngOnInit(): void {
    if (this.navigation) {
      this.erroModel = this.navigation.extras.state as ErroModel;
    }

    this.construirViewModel();
  }

  private construirViewModel(): void {
    this.viewModel = {
      titulo: 'ERRO__LABEL-TITULO',
      descricao: 'ERRO__LABEL-DESCRICAO',
      codigoErro: this.definirCodigoErro(),
      textoBotao: 'ERRO__LABEL-BOTAO',
    };
  }

  private definirCodigoErro(): string {
    return this.erroModel && this.erroModel.codigoErro ? this.erroModel.codigoErro : this.SEM_INTERNET_MOMENTO_FRONT;
  }
}
