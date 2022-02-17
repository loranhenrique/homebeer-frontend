import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CardParceiroViewModel } from '@shared/models/card-parceiro-view.model';
import { CardParceiroModel } from '@shared/models/card-parceiro.model';

@Component({
  selector: 'bra-card-parceiro',
  templateUrl: './card-parceiro.component.html',
  styleUrls: ['./card-parceiro.component.scss'],
})
export class CardParceiroComponent implements OnInit {
  @Input() cardParceiro: CardParceiroModel;
  @Output() clickAction = new EventEmitter<string>();

  public viewModel: CardParceiroViewModel;

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  public clickHandler(): void {
    this.clickAction.emit(this.cardParceiro.id);
  }

  private construirViewModel(): void {
    this.viewModel = {
      nomeLoja: this.cardParceiro.nomeLoja,
      descricaoLoja: this.cardParceiro.descricaoLoja,
      imagemLoja: this.domSanitizer.bypassSecurityTrustStyle(`url(${this.cardParceiro.imagemLoja})`),
      frete: this.cardParceiro.frete,
      descricaoAcessibilidade: this.cardParceiro.descricaoAcessibilidade,
    };
  }
}
