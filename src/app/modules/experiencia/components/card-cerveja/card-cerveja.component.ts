import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CardCervejaViewModel } from '@experiencia/models/card-cerveja-view.model';
import { CardCervejaModel } from '@experiencia/models/card-cerveja.model';
import { IdentificadorCervejaModel } from '@experiencia/models/identificador-cerveja.model';

@Component({
  selector: 'bra-card-cerveja',
  templateUrl: './card-cerveja.component.html',
  styleUrls: ['./card-cerveja.component.scss'],
})
export class CardCervejaComponent implements OnInit {
  @Input() inputModel: CardCervejaModel;
  @Output() clickAction = new EventEmitter<IdentificadorCervejaModel>();

  public viewModel: CardCervejaViewModel;

  constructor(private readonly domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  public clickAdionarCarrinhoHandle(): void {
    this.clickAction.emit({
      id: this.viewModel.id,
      quantidade: this.viewModel.quantidade,
    });
  }

  public clickHandler(operador: string): void {
    this.calcularQuantidade(operador);
  }

  private calcularQuantidade(operador: string): void {
    operador === '-' ? this.menosProduto() : this.maisProduto();
  }

  private menosProduto(): void {
    const quantidade = this.viewModel.quantidade - 1;

    if (quantidade < 1) return;

    this.viewModel.quantidade = quantidade;
    this.viewModel.valorTotal -= this.inputModel.precoUnitario;
  }

  private maisProduto(): void {
    this.viewModel.quantidade += 1;
    this.viewModel.valorTotal += this.inputModel.precoUnitario;
  }

  private construirViewModel(): void {
    this.viewModel = {
      id: this.inputModel.id,
      imagem: this.domSanitizer.bypassSecurityTrustStyle(`url(${this.inputModel.imagem})`),
      nome: this.inputModel.nome,
      descricao: this.inputModel.descricao,
      valorTotal: this.inputModel.precoUnitario,
      quantidade: this.inputModel.quantidade,
    };
  }
}
