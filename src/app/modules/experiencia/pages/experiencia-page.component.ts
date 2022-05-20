import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { StateConstantes } from '@config/state-constantes.const';
import { CardCervejaModel } from '@experiencia/models/card-cerveja.model';
import { ExperienciaViewModel } from '@experiencia/models/experiencia-view.model';
import { IdentificadorCervejaModel } from '@experiencia/models/identificador-cerveja.model';
import { LoadingService } from '@service/app/loading/loading.service';
import { StateService } from '@service/app/state/state.service';
import { StatusBotaoService } from '@service/app/status-botao/status-botao.service';
import { SalvarCarrinhoService } from '@service/http/salvar-carrinho/salvar-carrinho.service';
import { SalvarFavoritoService } from '@service/http/salvar-favorito/salvar-favorito.service';
import { BuscarParceiroModel } from '@service/models/buscar-parceiro.model';
import { ProdutoModel } from '@service/models/produto.model';
import { UsuarioResponse } from '@shared/models/usuario-response.model';

@Component({
  selector: 'bra-experiencia-page',
  templateUrl: './experiencia-page.component.html',
  styleUrls: ['./experiencia-page.component.scss'],
})
export class ExperienciaPageComponent implements OnInit {
  public viewModel: ExperienciaViewModel;

  private parceiro: BuscarParceiroModel;
  private produtos: ProdutoModel[];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly domSanitizer: DomSanitizer,
    private readonly statusBotaoService: StatusBotaoService,
    private readonly salvarCarrinhoService: SalvarCarrinhoService,
    private readonly stateService: StateService,
    private readonly loadingService: LoadingService,
    private readonly router: Router,
    private readonly salvarFavoritoService: SalvarFavoritoService
  ) {}

  ngOnInit(): void {
    this.carregarDadosResolver();
    this.construirViewModel();
  }

  public clickFecharHandle(): void {
    if (!this.definirContinuacaoClick()) return;
    const rota = this.stateService.sessao.get(StateConstantes.DE_ONDE_VEIO);
    this.router.navigate([rota]);
  }

  public clickFavoritarHandle(): void {
    if (!this.definirContinuacaoClick()) return;
    this.loadingService.atribuirMensagem('Salvando favorito...');
    this.loadingService.atribuirTipo('fade');
    const usuario: UsuarioResponse = this.stateService.sessao.get(StateConstantes.USUARIO_LOGADO);
    this.loadingService.ligar();
    this.salvarFavoritoService.execute(usuario.id, this.parceiro.id).subscribe(_ => {
      this.viewModel.favorito ? (this.viewModel.favorito = false) : (this.viewModel.favorito = true);

      this.loadingService.desligar();
    });
  }

  public clickHandle(identificadorCerveja: IdentificadorCervejaModel): void {
    if (!this.definirContinuacaoClick()) return;
    this.adicionarProdutoCarrinho(identificadorCerveja);
  }

  public definirClasseFavorito(): string {
    return this.viewModel.favorito ? 'experiencia__favorito--selecionado' : 'experiencia__favorito';
  }

  private definirContinuacaoClick(): boolean {
    let statusBotao = false;
    this.statusBotaoService.obterStatus().subscribe(status => (statusBotao = status));
    if (statusBotao) return false;

    return true;
  }

  private adicionarProdutoCarrinho(identificadorCerveja: IdentificadorCervejaModel): void {
    const usuario: UsuarioResponse = this.stateService.sessao.get(StateConstantes.USUARIO_LOGADO);
    if (!usuario) {
      this.router.navigate(['/perfil']);
      return;
    }

    this.definindoPropriedadesLoading(identificadorCerveja.quantidade);
    this.loadingService.ligar();
    let quantidadeRetornos = 1;

    for (let index = 0; index < identificadorCerveja.quantidade; index++) {
      this.salvarCarrinhoService.execute(usuario.id, identificadorCerveja.id, this.parceiro.id).subscribe(
        _ => {
          if (quantidadeRetornos === identificadorCerveja.quantidade) {
            this.loadingService.desligar();
          }

          quantidadeRetornos++;
        },
        _ => {
          if (quantidadeRetornos === identificadorCerveja.quantidade) {
            this.loadingService.desligar();
          }

          quantidadeRetornos++;
        }
      );
    }
  }

  private construirViewModel(): void {
    this.viewModel = {
      imagemParceiro: this.domSanitizer.bypassSecurityTrustStyle(`url(${this.parceiro.imagemLoja})`),
      nomeParceiro: this.parceiro.nomeLoja,
      descricaoParceiro: this.parceiro.descricaoLoja,
      cervejas: this.construirCervejas(),
      favorito: this.parceiro.favorito ? true : false,
    };
  }

  private construirCervejas(): CardCervejaModel[] {
    return this.produtos.map((produto: ProdutoModel) => ({
      id: produto.id,
      nome: produto.nome,
      descricao: produto.descricao,
      imagem: produto.imagem,
      precoUnitario: produto.preco,
      quantidade: 1,
    }));
  }

  private carregarDadosResolver(): void {
    this.parceiro = this.activatedRoute.snapshot.data.parceiro;
    this.produtos = this.activatedRoute.snapshot.data.produto;
  }

  private definindoPropriedadesLoading(quantidadeProdutos: number): void {
    const mensagemLoading =
      quantidadeProdutos > 1 ? 'Adionando produtos ao carrinho!' : 'Adionando produto ao carrinho!';
    this.loadingService.atribuirMensagem(mensagemLoading);
    this.loadingService.atribuirTipo('fade');
  }
}
