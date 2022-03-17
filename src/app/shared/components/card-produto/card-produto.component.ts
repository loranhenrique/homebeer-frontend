import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CardProdutoViewModel } from '@shared/models/card-produto-view.model';
import { CardProdutoModel } from '@shared/models/card-produto.model';
import { InfoProdutoModel } from '@shared/models/info-produto.model';

@Component({
  selector: 'bra-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss'],
})
export class CardProdutoComponent implements OnInit {
  @Input() cardProduto: CardProdutoModel;
  @Output() clickAction = new EventEmitter<InfoProdutoModel>();

  public viewModel: CardProdutoViewModel;

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  public clickHandler(operador: string): void {
    this.calcularQuantidade(operador);

    if (this.viewModel.exibeBotaoExcluirProduto) {
      return;
    }

    this.emitirValores();
  }

  public excluirProduto(): void {
    this.viewModel.exibeCardProduto = false;
    this.emitirValores('remover produto');
  }

  private construirViewModel(): void {
    this.viewModel = {
      imagem: this.domSanitizer.bypassSecurityTrustStyle(`url(${this.cardProduto.imagemProduto})`),
      nomeProduto: this.cardProduto.nomeProduto,
      nomeParceiro: this.cardProduto.nomeParceiro,
      quantidade: this.cardProduto.quantidade,
      valorTotal: this.calcularValorTotal(),
      textoBotaoExcluirProduto: 'CARD-PRODUTO__LABEL--BOTAO-EXCLUIR',
      exibeBotaoExcluirProduto: false,
      exibeCardProduto: true,
    };
  }

  private emitirValores(value?: string): void {
    this.clickAction.emit({
      idParceiro: this.cardProduto.idParceiro,
      idProduto: this.cardProduto.idProduto,
      quantidade: value ? 0 : this.viewModel.quantidade,
      valorTotal: value ? 0 : this.viewModel.valorTotal,
    });
  }

  private calcularValorTotal(): number {
    return this.cardProduto.quantidade * this.cardProduto.valorUnitario;
  }

  private calcularQuantidade(operador: string): void {
    operador === '-' ? this.menosProduto() : this.maisProduto();
  }

  private menosProduto(): void {
    const quantidade = this.viewModel.quantidade - 1;

    if (quantidade < 1) {
      this.viewModel.exibeBotaoExcluirProduto = true;
    } else {
      this.viewModel.quantidade = quantidade;
      this.viewModel.valorTotal -= this.cardProduto.valorUnitario;
    }
  }

  private maisProduto(): void {
    this.viewModel.quantidade += 1;
    this.viewModel.valorTotal += this.cardProduto.valorUnitario;
    this.viewModel.exibeBotaoExcluirProduto = false;
  }
}
