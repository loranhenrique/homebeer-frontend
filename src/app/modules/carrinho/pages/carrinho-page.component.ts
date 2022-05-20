import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoViewModel } from '@carrinho/models/carrinho-view.model';
import { StateConstantes } from '@config/state-constantes.const';
import { LoadingService } from '@service/app/loading/loading.service';
import { RedirecionarMenuFooterService } from '@service/app/redirecionar-menu-footer/redirecionar-menu-footer.service';
import { StateService } from '@service/app/state/state.service';
import { StatusBotaoService } from '@service/app/status-botao/status-botao.service';
import { DeletarCarrinhoService } from '@service/http/deletar-carrinho/deletar-carrinho.service';
import { SalvarCarrinhoService } from '@service/http/salvar-carrinho/salvar-carrinho.service';
import { SalvarPedidoService } from '@service/http/salvar-pedido/salvar-pedido.service';
import { CarrinhoModel } from '@service/models/carrinho.model';
import { SalvarPedidoModel } from '@service/models/salvar-pedido.model';
import { modalAnimation } from '@shared/components/modal/modal-animation';
import { CardProdutoModel } from '@shared/models/card-produto.model';
import { InfoProdutoModel } from '@shared/models/info-produto.model';
import { UsuarioResponse } from '@shared/models/usuario-response.model';

@Component({
  selector: 'bra-carrinho-page',
  templateUrl: './carrinho-page.component.html',
  styleUrls: ['./carrinho-page.component.scss'],
  animations: [modalAnimation()],
})
export class CarrinhoPageComponent implements OnInit {
  public viewModel: CarrinhoViewModel;
  public carrinhoVazio: CardProdutoModel[] = [];
  private carrinho: CarrinhoModel[];

  constructor(
    private readonly router: Router,
    private readonly redirecionarMenuFooterService: RedirecionarMenuFooterService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly salvarCarrinhoService: SalvarCarrinhoService,
    private readonly deletarCarrinhoService: DeletarCarrinhoService,
    private readonly loadingService: LoadingService,
    private readonly stateService: StateService,
    private readonly statusBotaoService: StatusBotaoService,
    private readonly salvarPedidosService: SalvarPedidoService
  ) {}

  ngOnInit(): void {
    this.obterCarrinhoResolver();
    this.construirViewModel();
  }

  public finalizarCompraHandle(): void {
    const pedidos = this.construirPedidos();

    this.definirPropriedadesLoading('Finalizando compra...');
    this.loadingService.ligar();

    this.salvarPedidosService.execute(pedidos).subscribe(_ => {
      this.loadingService.desligar();
      this.router.navigate(['/perfil']);
    });
  }

  public clickComprar(): void {
    if (!this.definirContinuacaoClick()) return;
    this.viewModel.modalPagamento.mostrar = true;
  }

  public infoProduto(infoProduto: InfoProdutoModel): void {
    if (!this.definirContinuacaoClick()) return;

    const usuario: UsuarioResponse = this.stateService.sessao.get(StateConstantes.USUARIO_LOGADO);
    if (!usuario) {
      this.router.navigate(['/perfil']);
      return;
    }
    const mensagem = infoProduto.operador === '-' ? 'Removendo produto...' : 'Salvando produto...';
    this.definirPropriedadesLoading(mensagem);
    this.loadingService.ligar();

    infoProduto.operador === '+'
      ? this.adicionarItemCarrinho(usuario.id, infoProduto.idProduto, infoProduto.idParceiro, infoProduto)
      : this.deletarItemCarrinho(usuario.id, infoProduto.idProduto, infoProduto.idParceiro, infoProduto);
  }

  public clickBotaoErro(): void {
    this.router.navigate(['/parceiro']);
  }

  public fecharModalPagamento(): void {
    if (!this.definirContinuacaoClick()) return;
    this.viewModel.modalPagamento.mostrar = false;
  }

  public menuFooterClick(value: string): void {
    if (!this.definirContinuacaoClick()) return;
    const rota = this.redirecionarMenuFooterService.execute(value);
    this.router.navigate([rota]);
  }

  private construirPedidos(): SalvarPedidoModel[] {
    const usuario: UsuarioResponse = this.stateService.sessao.get(StateConstantes.USUARIO_LOGADO);
    const listagemCompras: SalvarPedidoModel[] = [];

    this.viewModel.compras.map((produto: CardProdutoModel) => {
      let quantidade = 0;

      while (quantidade !== produto.quantidade) {
        listagemCompras.push({
          idParceiro: produto.idParceiro,
          idProduto: produto.idProduto,
          idUsuario: usuario.id,
        });

        quantidade++;
      }
    });

    return listagemCompras;
  }

  private adicionarItemCarrinho(
    idUsuario: string,
    idProduto: string,
    idParceiro: string,
    infoProduto: InfoProdutoModel
  ): void {
    this.salvarCarrinhoService.execute(idUsuario, idProduto, idParceiro).subscribe(
      _ => {
        this.rotinaClickMaisOuMenos(infoProduto);
      },
      _ => {
        this.loadingService.desligar();
      }
    );
  }

  private deletarItemCarrinho(
    idUsuario: string,
    idProduto: string,
    idParceiro: string,
    infoProduto: InfoProdutoModel
  ): void {
    this.deletarCarrinhoService.execute(idUsuario, idProduto, idParceiro).subscribe(
      _ => {
        this.rotinaClickMaisOuMenos(infoProduto);
      },
      _ => {
        this.loadingService.desligar();
      }
    );
  }

  private rotinaClickMaisOuMenos(infoProduto: InfoProdutoModel): void {
    this.atualizarCarrinho(infoProduto);
    this.viewModel.valorTotalCompra = this.calcularValorTotalCompra();
    const carrinhoVazio: boolean = this.validarCarrinhoVazio();

    if (carrinhoVazio) {
      this.viewModel.exibeListaCompra = carrinhoVazio;
      this.viewModel.carrinhoVazio = carrinhoVazio;
    }

    this.loadingService.desligar();
  }

  private construirViewModel(): void {
    this.viewModel = {
      tituloErro: 'CARRINHO__LABEL--TITULO-ERRO',
      descricaoErro: 'CARRINHO__LABEL--DESCRICAO-ERRO',
      textoBotaoErro: 'CARRINHO__LABEL--BOTAO-ERRO',
      compras: this.construirCarrinho(),
      valorTotalCompra: this.calcularValorTotalCompra(),
      carrinhoVazio: this.validarCarrinhoVazio(),
      exibeListaCompra: this.validarCarrinhoVazio(),
      menuFooter: {
        selecionado: 'carrinho',
      },
      menuHeader: {
        tipo: 'default',
        titulo: 'CARRINHO__LABEL--TITULO-PRINCIPAL',
      },
      modalPagamento: {
        mostrar: false,
        tipo: 'integral',
        titulo: 'Finalizar compra',
      },
    };
  }

  private construirCarrinho(): CardProdutoModel[] {
    return this.carrinho.map((item: CarrinhoModel) => ({
      idParceiro: item.idParceiro,
      idProduto: item.idProduto,
      nomeParceiro: item.nomeParceiro,
      nomeProduto: item.nomeProduto,
      imagemProduto: item.imagemProduto,
      valorUnitario: item.precoProduto,
      quantidade: item.quantidade,
    }));
  }

  private calcularValorTotalCompra(): number {
    let valorTotalCompra = 0;

    this.carrinho.forEach((produto: CarrinhoModel) => {
      valorTotalCompra += produto.quantidade * produto.precoProduto;
    });

    return valorTotalCompra;
  }

  private atualizarCarrinho(infoProduto: InfoProdutoModel): void {
    const produtoEncontrado = this.carrinho.find(
      (produto: CarrinhoModel) =>
        produto.idParceiro === infoProduto.idParceiro && produto.idProduto === infoProduto.idProduto
    );

    if (produtoEncontrado) {
      produtoEncontrado.quantidade = infoProduto.quantidade;
    }
  }

  private validarCarrinhoVazio(): boolean {
    return this.carrinho.length < 1 || this.calcularValorTotalCompra() === 0;
  }

  private obterCarrinhoResolver(): void {
    this.carrinho = this.activatedRoute.snapshot.data.carrinho;
  }

  private definirPropriedadesLoading(mensagem: string): void {
    this.loadingService.atribuirMensagem(mensagem);
    this.loadingService.atribuirTipo('fade');
  }

  private definirContinuacaoClick(): boolean {
    let statusBotao = false;
    this.statusBotaoService.obterStatus().subscribe(status => (statusBotao = status));
    if (statusBotao) return false;

    return true;
  }
}
