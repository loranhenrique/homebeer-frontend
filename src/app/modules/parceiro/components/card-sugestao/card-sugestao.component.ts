import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { CardSugestaoViewModel } from '@parceiro/models/card-sugestao-view.model';
import { CardSugestaoModel } from '@parceiro/models/card-sugestao.model';

@Component({
  selector: 'bra-card-sugestao',
  templateUrl: './card-sugestao.component.html',
  styleUrls: ['./card-sugestao.component.scss'],
})
export class CardSugestaoComponent implements OnInit {
  @Input() card: CardSugestaoModel;
  @Output() clickAction = new EventEmitter<string>();

  public viewModel: CardSugestaoViewModel;

  constructor(private domSanitizer: DomSanitizer, private translate: TranslateService) {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  public selecionarCard(): void {
    this.clickAction.emit(this.card.id);
  }

  private construirViewModel(): void {
    this.viewModel = {
      titulo: this.card.nomeLoja,
      descricao: this.card.descricaoLoja,
      imagem: this.domSanitizer.bypassSecurityTrustStyle(`url(${this.card.imagemLoja})`),
      descricaoAcessibilidade: this.construirAcessibilidade(),
    };
  }

  private construirAcessibilidade(): string {
    return this.translate.instant('CARD-SUGESTAO__DESCRICAO--ACESSIBILIDADE', {
      titulo: this.card.nomeLoja,
      descricao: this.card.descricaoLoja,
    });
  }
}
