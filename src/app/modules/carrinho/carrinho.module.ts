import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoPageComponent } from '@carrinho/pages/carrinho-page.component';
import { CarrinhoRoutingModule } from '@carrinho/carrinho-routing.module';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ListaComprasComponent } from '@carrinho/components/lista-compras/lista-compras.component';

@NgModule({
  declarations: [CarrinhoPageComponent, ListaComprasComponent],
  imports: [CommonModule, CarrinhoRoutingModule, SharedModule, TranslateModule],
})
export class CarrinhoModule {}
