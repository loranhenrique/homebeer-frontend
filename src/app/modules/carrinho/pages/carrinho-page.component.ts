import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoViewModel } from '@carrinho/models/carrinho-view.model';
import { CardProdutoModel } from '@shared/models/card-produto.model';

@Component({
  selector: 'bra-carrinho-page',
  templateUrl: './carrinho-page.component.html',
  styleUrls: ['./carrinho-page.component.scss'],
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
      quantidade: 3,
      valorUnitario: 2.49,
    },
    {
      idParceiro: '2',
      idProduto: '2',
      imagemProduto: '',
      nomeParceiro: 'Cervejaria dos amigos',
      nomeProduto: 'Cerveja artesanal 350ml',
      quantidade: 6,
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
      quantidade: 10,
      valorUnitario: 0.49,
    },
    {
      idParceiro: '3',
      idProduto: '2',
      imagemProduto: '',
      nomeParceiro: 'Cervejaria dos amigos',
      nomeProduto: 'Cerveja artesanal 350ml',
      quantidade: 3,
      valorUnitario: 2.49,
    },
    {
      idParceiro: '2',
      idProduto: '5',
      imagemProduto: '',
      nomeParceiro: 'Cervejaria dos amigos',
      nomeProduto: 'Cerveja artesanal 350ml',
      quantidade: 4,
      valorUnitario: 5.49,
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  public clickCardFavorito(id: string): void {
    console.log(id);
  }

  public clickBotaoErro(): void {
    this.router.navigate(['/parceiro']);
  }

  public menuFooterClick(value: string): void {
    if (value === 'Home') {
      this.router.navigate(['/parceiro']);
    }
  }

  private construirViewModel(): void {
    this.viewModel = {
      tituloPrincipal: 'CARRINHO__LABEL--TITULO-PRINCIPAL',
      tituloErro: 'CARRINHO__LABEL--TITULO-ERRO',
      descricaoErro: 'CARRINHO__LABEL--DESCRICAO-ERRO',
      textoBotaoErro: 'CARRINHO__LABEL--BOTAO-ERRO',
      menuFooter: {
        selecionado: 'carrinho',
      },
      compras: this.carrinho,
    };
  }
}
