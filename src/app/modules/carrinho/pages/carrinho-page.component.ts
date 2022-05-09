import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoViewModel } from '@carrinho/models/carrinho-view.model';
import { RedirecionarMenuFooterService } from '@service/app/redirecionar-menu-footer/redirecionar-menu-footer.service';
import { CarrinhoModel } from '@service/models/carrinho.model';
import { modalAnimation } from '@shared/components/modal/modal-animation';
import { CardProdutoModel } from '@shared/models/card-produto.model';
import { InfoProdutoModel } from '@shared/models/info-produto.model';

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
  private TEMPO_ESPERA_CARRINHO_VAZIO = 600;

  constructor(
    private readonly router: Router,
    private readonly redirecionarMenuFooterService: RedirecionarMenuFooterService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.obterCarrinhoResolver();
    this.construirViewModel();
  }

  public clickComprar(): void {
    this.viewModel.modalPagamento.mostrar = true;
  }

  public infoProduto(infoProduto: InfoProdutoModel): void {
    //salvar nova informacao do produto no banco
    this.atualizarCarrinho(infoProduto);
    this.viewModel.valorTotalCompra = this.calcularValorTotalCompra();
    const carrinhoVazio: boolean = this.validarCarrinhoVazio();

    if (carrinhoVazio) {
      this.viewModel.exibeListaCompra = carrinhoVazio;

      setTimeout(() => {
        this.viewModel.carrinhoVazio = carrinhoVazio;
      }, this.TEMPO_ESPERA_CARRINHO_VAZIO);
    }
  }

  public clickBotaoErro(): void {
    this.router.navigate(['/parceiro']);
  }

  public fecharModalPagamento(): void {
    this.viewModel.modalPagamento.mostrar = false;
  }

  public menuFooterClick(value: string): void {
    const rota = this.redirecionarMenuFooterService.execute(value);
    this.router.navigate([rota]);
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
}
