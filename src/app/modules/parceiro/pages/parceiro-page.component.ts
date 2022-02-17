import { Component, OnInit } from '@angular/core';
import { CardSugestaoModel } from '@parceiro/models/card-sugestao.model';
import { ParceiroViewModel } from '@parceiro/models/parceiro-view.model';

@Component({
  selector: 'bra-parceiro-page',
  templateUrl: './parceiro-page.component.html',
  styleUrls: ['./parceiro-page.component.scss'],
})
export class ParceiroPageComponent implements OnInit {
  public viewModel: ParceiroViewModel;
  public listaParceiro: CardSugestaoModel[] = [
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

  constructor() {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  private construirViewModel(): void {
    this.viewModel = {
      orientacaoLista: 'horizontal',
      menuFooter: {
        selecionado: 'home',
      },
      parceirosSugeridos: this.listaParceiro,
    };
  }
}
