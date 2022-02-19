import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '@shared/components/button/button.component';
import { LinhaComponent } from '@shared/components/linha/linha.component';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { MenuFooterComponent } from '@shared/components/menu-footer/menu-footer.component';
import { MenuHeaderComponent } from '@shared/components/menu-header/menu-header.component';
import { PesquisaComponent } from '@shared/components/pesquisa/pesquisa.component';
import { ListaComponent } from '@shared/components/lista/lista.component';
import { CardParceiroComponent } from '@shared/components/card-parceiro/card-parceiro.component';
import { LoadingComponent } from '@shared/components/loading/loading.component';
import { CardProdutoComponent } from '@shared/components/card-produto/card-produto.component';
import { BraCurrencyPipe } from '@shared/pipes/bra-currency/bra-currency.pipe';

@NgModule({
  declarations: [
    ButtonComponent,
    LinhaComponent,
    ModalComponent,
    MenuFooterComponent,
    MenuHeaderComponent,
    PesquisaComponent,
    ListaComponent,
    CardParceiroComponent,
    LoadingComponent,
    CardProdutoComponent,
    BraCurrencyPipe,
  ],
  imports: [CommonModule, TranslateModule, FormsModule],
  exports: [
    ButtonComponent,
    LinhaComponent,
    ModalComponent,
    MenuFooterComponent,
    MenuHeaderComponent,
    PesquisaComponent,
    ListaComponent,
    CardParceiroComponent,
    LoadingComponent,
    CardProdutoComponent,
    BraCurrencyPipe,
  ],
})
export class SharedModule {}
