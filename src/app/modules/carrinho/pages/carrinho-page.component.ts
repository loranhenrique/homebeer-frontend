import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoViewModel } from '@carrinho/models/carrinho-view.model';
import { RedirecionarMenuFooterService } from '@service/app/redirecionar-menu-footer/redirecionar-menu-footer.service';
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
  public carrinho: CardProdutoModel[] = [
    {
      idParceiro: '1',
      idProduto: '1',
      imagemProduto: '',
      nomeParceiro: 'Cervejaria dos amigos',
      nomeProduto: 'Cerveja artesanal 350ml',
      quantidade: 1,
      valorUnitario: 2.49,
    },
    {
      idParceiro: '2',
      idProduto: '2',
      imagemProduto: '',
      nomeParceiro: 'Cervejaria dos amigos',
      nomeProduto: 'Cerveja artesanal 350ml',
      quantidade: 1,
      valorUnitario: 3.49,
    },
    {
      idParceiro: '1',
      idProduto: '2',
      imagemProduto: '',
      nomeParceiro: 'Cervejaria dos amigos',
      nomeProduto: 'Cerveja artesanal 350ml',
      quantidade: 1,
      valorUnitario: 1.49,
    },
    {
      idParceiro: '3',
      idProduto: '1',
      imagemProduto: '',
      nomeParceiro: 'Cervejaria dos amigos',
      nomeProduto: 'Cerveja artesanal 350ml',
      quantidade: 1,
      valorUnitario: 0.49,
    },
    {
      idParceiro: '3',
      idProduto: '2',
      imagemProduto: '',
      nomeParceiro: 'Cervejaria dos amigos',
      nomeProduto: 'Cerveja artesanal 350ml',
      quantidade: 1,
      valorUnitario: 2.49,
    },
    {
      idParceiro: '2',
      idProduto: '5',
      imagemProduto: '',
      nomeParceiro: 'Cervejaria dos amigos',
      nomeProduto: 'Cerveja artesanal 350ml',
      quantidade: 1,
      valorUnitario: 5.49,
    },
  ];
  private TEMPO_ESPERA_CARRINHO_VAZIO = 600;

  constructor(private router: Router, private redirecionarMenuFooterService: RedirecionarMenuFooterService) {}

  ngOnInit(): void {
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
      compras: this.carrinho,
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

  private calcularValorTotalCompra(): number {
    let valorTotalCompra = 0;

    this.carrinho.forEach((produto: CardProdutoModel) => {
      valorTotalCompra += produto.quantidade * produto.valorUnitario;
    });

    return valorTotalCompra;
  }

  private atualizarCarrinho(infoProduto: InfoProdutoModel): void {
    const produtoEncontrado = this.carrinho.find(
      (produto: CardProdutoModel) =>
        produto.idParceiro === infoProduto.idParceiro && produto.idProduto === infoProduto.idProduto
    );

    if (produtoEncontrado) {
      produtoEncontrado.quantidade = infoProduto.quantidade;
    }
  }

  private validarCarrinhoVazio(): boolean {
    return this.carrinho.length < 1 || this.calcularValorTotalCompra() === 0;
  }
}
