import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateConstantes } from '@config/state-constantes.const';
import { FavoritoViewModel } from '@favorito/models/favorito-view.model';
import { RedirecionarMenuFooterService } from '@service/app/redirecionar-menu-footer/redirecionar-menu-footer.service';
import { StateService } from '@service/app/state/state.service';
import { StatusBotaoService } from '@service/app/status-botao/status-botao.service';
import { BuscarParceiroModel } from '@service/models/buscar-parceiro.model';
import { CardParceiroModel } from '@shared/models/card-parceiro.model';

@Component({
  selector: 'bra-favorito',
  templateUrl: './favorito-page.component.html',
  styleUrls: ['./favorito-page.component.scss'],
})
export class FavoritoPageComponent implements OnInit {
  public viewModel: FavoritoViewModel;
  private favoritos: BuscarParceiroModel[];

  constructor(
    private readonly router: Router,
    private readonly redirecionarMenuFooterService: RedirecionarMenuFooterService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly stateService: StateService,
    private readonly statusBotaoService: StatusBotaoService
  ) {}

  ngOnInit(): void {
    this.obterParceirosResolver();
    this.construirViewModel();
  }

  public clickCardFavorito(id: string): void {
    let statusBotao = false;
    this.statusBotaoService.obterStatus().subscribe(status => (statusBotao = status));
    if (statusBotao) return;

    this.stateService.sessao.set(StateConstantes.DE_ONDE_VEIO, '/favorito');
    this.stateService.sessao.set(StateConstantes.ID_PARCEIRO, id);
    this.router.navigate(['/experiencia']);
  }

  public clickBotaoErro(): void {
    this.router.navigate(['/parceiro']);
  }

  public menuFooterClick(value: string): void {
    if (!this.definirContinuacaoClick()) return;
    const rota = this.redirecionarMenuFooterService.execute(value);
    this.router.navigate([rota]);
  }

  private construirViewModel(): void {
    this.viewModel = {
      tituloErro: 'FAVORITO__LABEL--TITULO-ERRO',
      descricaoErro: 'FAVORITO__LABEL--DESCRICAO-ERRO',
      textoBotaoErro: 'FAVORITO__LABEL--BOTAO-ERRO',
      favoritos: this.construirFavoritos(),
      menuFooter: {
        selecionado: 'favorito',
      },
      menuHeader: {
        tipo: 'default',
        titulo: 'FAVORITO__LABEL--TITULO-PRINCIPAL',
      },
    };
  }

  private construirFavoritos(): CardParceiroModel[] {
    if (!this.favoritos) return [];

    return this.favoritos.map((favorito: BuscarParceiroModel) => ({
      id: favorito.id,
      nomeLoja: favorito.nomeLoja,
      descricaoLoja: favorito.descricaoLoja,
      imagemLoja: favorito.imagemLoja,
      frete: 'Frete grátis',
      descricaoAcessibilidade: '',
    }));
  }

  private obterParceirosResolver(): void {
    this.favoritos = this.activatedRoute.snapshot.data.favoritos;
  }

  private definirContinuacaoClick(): boolean {
    let statusBotao = false;
    this.statusBotaoService.obterStatus().subscribe(status => (statusBotao = status));
    if (statusBotao) return false;

    return true;
  }
}
