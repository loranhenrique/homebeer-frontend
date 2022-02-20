import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilPageComponent } from '@perfil/pages/perfil-page.component';
import { PerfilRoutingModule } from '@perfil/perfil-routing.module';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { AcessoAppComponent } from './components/acesso-app/acesso-app.component';
import { PedidosAndamentoComponent } from './components/pedidos-andamento/pedidos-andamento.component';
import { IconePedidoComponent } from './components/icone-pedido/icone-pedido.component';
import { HistoricoComprasComponent } from './components/historico-compras/historico-compras.component';
import { ConfirmarSairComponent } from './components/confirmar-sair/confirmar-sair.component';

@NgModule({
  declarations: [PerfilPageComponent, AcessoAppComponent, PedidosAndamentoComponent, IconePedidoComponent, HistoricoComprasComponent, ConfirmarSairComponent],
  imports: [CommonModule, PerfilRoutingModule, SharedModule, TranslateModule],
})
export class PerfilModule {}
