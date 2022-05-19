import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateConstantes } from '@config/state-constantes.const';
import { RemoverAcentosService } from '@service/app/remover-acentos/remover-acentos.service';
import { StateService } from '@service/app/state/state.service';
import { StatusBotaoService } from '@service/app/status-botao/status-botao.service';
import { BuscarParceiroModel } from '@service/models/buscar-parceiro.model';
import { CardParceiroModel } from '@shared/models/card-parceiro.model';
import { PesquisaViewModel } from '../models/pesquisa-view.model';

@Component({
  selector: 'bra-pesquisa-page',
  templateUrl: './pesquisa-page.component.html',
  styleUrls: ['./pesquisa-page.component.scss'],
})
export class PesquisaPageComponent implements OnInit {
  private parceiros: BuscarParceiroModel[];
  private parceirosFiltrados: CardParceiroModel[];
  public viewModel: PesquisaViewModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly stateService: StateService,
    private readonly router: Router,
    private readonly statusBotaoService: StatusBotaoService,
    private readonly removerAcentosService: RemoverAcentosService
  ) {}

  ngOnInit(): void {
    this.obterParceirosResolver();
    this.construirViewModel();
  }

  public cardParceiroClickHandle(id: string): void {
    if (!this.definirContinuacaoClick()) return;

    this.stateService.sessao.set(StateConstantes.DE_ONDE_VEIO, '/favorito');
    this.stateService.sessao.set(StateConstantes.ID_PARCEIRO, id);
    this.router.navigate(['/experiencia']);
  }

  public clickVoltarHandle(): void {
    this.router.navigate(['/parceiro']);
  }

  public pesquisaHandle(valorPesquisado: string): void {
    const parceirosPesquisados = this.parceirosFiltrados.filter(({ nomeLoja }: CardParceiroModel) =>
      this.removerAcentosService.execute(nomeLoja).includes(this.removerAcentosService.execute(valorPesquisado))
    );

    this.viewModel.parceiros = parceirosPesquisados;
  }

  private construirViewModel(): void {
    this.parceirosFiltrados = this.construirParceirosGeral();

    this.viewModel = {
      parceiros: this.construirParceirosGeral(),
      menuHeader: {
        tipo: 'pesquisa',
        habilitar: true,
      },
    };
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

  private definirContinuacaoClick(): boolean {
    let statusBotao = false;
    this.statusBotaoService.obterStatus().subscribe(status => (statusBotao = status));
    if (statusBotao) return false;

    return true;
  }
}
