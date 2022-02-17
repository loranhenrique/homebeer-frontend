import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { IconeDestaqueViewModel } from '@parceiro/models/icone-destaque-view.model';
import { IconeDestaqueModel } from '@parceiro/models/icone-destaque.model';

@Component({
  selector: 'bra-icone-destaque',
  templateUrl: './icone-destaque.component.html',
  styleUrls: ['./icone-destaque.component.scss'],
})
export class IconeDestaqueComponent implements OnInit {
  @Input() icone: IconeDestaqueModel;
  @Output() clickAction = new EventEmitter<string>();

  public viewModel: IconeDestaqueViewModel;

  constructor(private domSanitizer: DomSanitizer, private translate: TranslateService) {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  public selecionarCard(): void {
    this.clickAction.emit(this.icone.id);
  }

  private construirViewModel(): void {
    this.viewModel = {
      titulo: this.icone.nomeLoja,
      imagem: this.domSanitizer.bypassSecurityTrustStyle(`url(${this.icone.imagemLoja})`),
      descricaoAcessibilidade: this.construirAcessibilidade(),
    };
  }

  private construirAcessibilidade(): string {
    return this.translate.instant('ICONE-DESTAQUE__DESCRICAO--ACESSIBILIDADE', {
      titulo: this.icone.nomeLoja,
    });
  }
}
