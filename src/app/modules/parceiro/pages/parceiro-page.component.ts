import { Component, OnInit } from '@angular/core';
import { CardSugestaoModel } from '@parceiro/models/card-sugestao.model';
import { IconeDestaqueModel } from '@parceiro/models/icone-destaque.model';
import { ParceiroViewModel } from '@parceiro/models/parceiro-view.model';

@Component({
  selector: 'bra-parceiro-page',
  templateUrl: './parceiro-page.component.html',
  styleUrls: ['./parceiro-page.component.scss'],
})
export class ParceiroPageComponent implements OnInit {
  public viewModel: ParceiroViewModel;
  private listaParceiro: CardSugestaoModel[] = [
    {
      id: '1',
      nomeLoja: 'Nome teste',
      descricaoLoja: 'Descrição teste',
      imagemLoja: '',
    },
    {
      id: '2',
      nomeLoja: 'Nome teste 2',
      descricaoLoja: 'Descrição teste 2',
      imagemLoja: '',
    },
    {
      id: '3',
      nomeLoja: 'Nome teste 3',
      descricaoLoja: 'Descrição teste 3',
      imagemLoja: '',
    },
    {
      id: '4',
      nomeLoja: 'Nome teste 4',
      descricaoLoja: 'Descrição teste 4',
      imagemLoja: '',
    },
    {
      id: '5',
      nomeLoja: 'Nome teste 5',
      descricaoLoja: 'Descrição teste 5',
      imagemLoja: '',
    },
  ];

  private listaDestaque: IconeDestaqueModel[] = [
    {
      id: '1',
      imagemLoja: '',
      nomeLoja: 'Nome teste teste teste 1',
    },
    {
      id: '2',
      imagemLoja: '',
      nomeLoja: 'Nome teste 2',
    },
    {
      id: '3',
      imagemLoja: '',
      nomeLoja: 'Nome teste 3',
    },
    {
      id: '4',
      imagemLoja: '',
      nomeLoja: 'Nome teste 4',
    },
    {
      id: '5',
      imagemLoja: '',
      nomeLoja: 'Nome teste 1',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  public cardSugestaoClick(id: string): void {
    console.log(id);
  }

  public iconeDestaqueClick(id: string): void {
    console.log(id);
  }

  private construirViewModel(): void {
    this.viewModel = {
      orientacaoLista: 'horizontal',
      menuFooter: {
        selecionado: 'home',
      },
      parceirosSugeridos: this.listaParceiro,
      parceirosDestaque: this.listaDestaque,
    };
  }
}
