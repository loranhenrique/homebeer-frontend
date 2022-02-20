import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilPageComponent } from '@perfil/pages/perfil-page.component';
import { PerfilRoutingModule } from '@perfil/perfil-routing.module';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { AcessoAppComponent } from './components/acesso-app/acesso-app.component';
import { PedidosAndamentoComponent } from './components/pedidos-andamento/pedidos-andamento.component';
import { IconePedidoComponent } from './components/icone-pedido/icone-pedido.component';

@NgModule({
  declarations: [PerfilPageComponent, AcessoAppComponent, PedidosAndamentoComponent, IconePedidoComponent],
  imports: [CommonModule, PerfilRoutingModule, SharedModule, TranslateModule],
})
export class PerfilModule {}
