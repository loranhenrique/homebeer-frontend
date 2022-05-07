import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CardPedidoComponent } from './components/card-pedido/card-pedido.component';
import { ControleModalDirective } from './directives/controle-modal/controle-modal.directive';
import { ButtonPagamentoComponent } from './components/button-pagamento/button-pagamento.component';
import { InputComponent } from './components/input/input.component';

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
    CardPedidoComponent,
    ControleModalDirective,
    ButtonPagamentoComponent,
    InputComponent,
  ],
  imports: [CommonModule, TranslateModule, FormsModule, ReactiveFormsModule],
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
    CardPedidoComponent,
    ButtonPagamentoComponent,
    InputComponent,
  ],
})
export class SharedModule {}
