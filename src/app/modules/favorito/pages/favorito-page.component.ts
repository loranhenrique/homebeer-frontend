import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritoViewModel } from '@favorito/models/favorito-view.model';
import { RedirecionarMenuFooterService } from '@service/app/redirecionar-menu-footer/redirecionar-menu-footer.service';
import { CardParceiroModel } from '@shared/models/card-parceiro.model';

@Component({
  selector: 'bra-favorito',
  templateUrl: './favorito-page.component.html',
  styleUrls: ['./favorito-page.component.scss'],
})
export class FavoritoPageComponent implements OnInit {
  public viewModel: FavoritoViewModel;
  public favoritosVazio: CardParceiroModel[] = [];
  public favoritos: CardParceiroModel[] = [
    {
      id: '1',
      nomeLoja: 'Nome teste 1 Nome teste 1 Nome teste 1 Nome teste 1 Nome teste 1',
      descricaoLoja: 'Descricao teste 1',
      imagemLoja: '',
      frete: 'Frete grátis',
      descricaoAcessibilidade: '',
    },
    {
      id: '2',
      nomeLoja: 'Nome teste 2',
      descricaoLoja: 'Descricao teste 2',
      imagemLoja: '',
      frete: 'Frete grátis',
      descricaoAcessibilidade: '',
    },
    {
      id: '3',
      nomeLoja: 'Nome teste 3',
      descricaoLoja: 'Descricao teste 3',
      imagemLoja: '',
      frete: 'Frete grátis',
      descricaoAcessibilidade: '',
    },
    {
      id: '4',
      nomeLoja: 'Nome teste 4',
      descricaoLoja: 'Descricao teste 4',
      imagemLoja: '',
      frete: 'Frete grátis',
      descricaoAcessibilidade: '',
    },
    {
      id: '5',
      nomeLoja: 'Nome teste 5',
      descricaoLoja: 'Descricao teste 5',
      imagemLoja: '',
      frete: 'Frete grátis',
      descricaoAcessibilidade: '',
    },
  ];

  constructor(private router: Router, private redirecionarMenuFooterService: RedirecionarMenuFooterService) {}

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
    const rota = this.redirecionarMenuFooterService.execute(value);
    this.router.navigate([rota]);
  }

  private construirViewModel(): void {
    this.viewModel = {
      tituloErro: 'FAVORITO__LABEL--TITULO-ERRO',
      descricaoErro: 'FAVORITO__LABEL--DESCRICAO-ERRO',
      textoBotaoErro: 'FAVORITO__LABEL--BOTAO-ERRO',
      favoritos: this.favoritosVazio,
      menuFooter: {
        selecionado: 'favorito',
      },
      menuHeader: {
        tipo: 'default',
        titulo: 'FAVORITO__LABEL--TITULO-PRINCIPAL',
      },
    };
  }
}
