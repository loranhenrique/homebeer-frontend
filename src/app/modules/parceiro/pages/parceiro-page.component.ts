import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateConstantes } from '@config/state-constantes.const';
import { CardSugestaoModel } from '@parceiro/models/card-sugestao.model';
import { IconeDestaqueModel } from '@parceiro/models/icone-destaque.model';
import { ParceiroViewModel } from '@parceiro/models/parceiro-view.model';
import { RedirecionarMenuFooterService } from '@service/app/redirecionar-menu-footer/redirecionar-menu-footer.service';
import { StateService } from '@service/app/state/state.service';
import { BuscarParceiroModel } from '@service/models/buscar-parceiro.model';
import { CardParceiroModel } from '@shared/models/card-parceiro.model';

@Component({
  selector: 'bra-parceiro-page',
  templateUrl: './parceiro-page.component.html',
  styleUrls: ['./parceiro-page.component.scss'],
})
export class ParceiroPageComponent implements OnInit {
  public viewModel: ParceiroViewModel;
  private parceiros: BuscarParceiroModel[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private redirecionarMenuFooterService: RedirecionarMenuFooterService,
    private stateService: StateService
  ) {}

  ngOnInit(): void {
    this.obterParceirosResolver();
    this.construirViewModel();
  }

  public cardParceiroClickHandle(id: string): void {
    this.stateService.sessao.set(StateConstantes.ID_PARCEIRO, id);
    this.router.navigate(['/experiencia']);
  }

  public menuFooterClick(value: string): void {
    const rota = this.redirecionarMenuFooterService.execute(value);
    this.router.navigate([rota]);
  }

  private construirViewModel(): void {
    this.viewModel = {
      orientacaoLista: 'horizontal',
      parceirosSugeridos: this.construirParceirosSugeridos(),
      parceirosDestaque: this.construirParceirosDestaque(),
      parceiros: this.construirParceirosGeral(),
      menuFooter: {
        selecionado: 'home',
      },
      menuHeader: {
        tipo: 'pesquisa',
      },
    };
  }

  private construirParceirosDestaque(): IconeDestaqueModel[] {
    return this.parceiros
      .filter(({ categoria }: BuscarParceiroModel) => categoria === 'destaque')
      .map((parceiro: BuscarParceiroModel) => ({
        id: parceiro.id,
        imagemLoja: parceiro.imagemLoja,
        nomeLoja: parceiro.nomeLoja,
      }));
  }

  private construirParceirosSugeridos(): CardSugestaoModel[] {
    return this.parceiros
      .filter(({ categoria }: BuscarParceiroModel) => categoria === 'sugerido')
      .map((parceiro: BuscarParceiroModel) => ({
        id: parceiro.id,
        nomeLoja: parceiro.nomeLoja,
        descricaoLoja: parceiro.descricaoLoja,
        imagemLoja: parceiro.imagemLoja,
      }));
  }

  private construirParceirosGeral(): CardParceiroModel[] {
    return this.parceiros.map((parceiro: BuscarParceiroModel) => ({
      id: parceiro.id,
      nomeLoja: parceiro.nomeLoja,
      descricaoLoja: parceiro.descricaoLoja,
      descricaoAcessibilidade: `${parceiro.nomeLoja} ${parceiro.descricaoLoja}`,
      frete: 'Frete grátis',
      imagemLoja: parceiro.imagemLoja,
    }));
  }

  private obterParceirosResolver(): void {
    this.parceiros = this.activatedRoute.snapshot.data.parceiros;
  }
}
