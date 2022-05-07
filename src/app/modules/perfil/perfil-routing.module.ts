import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilPageComponent } from '@perfil/pages/perfil-page.component';
import { PedidoResolver } from './resolver/pedido.resolver';

const routes: Routes = [
  {
    path: '',
    component: PerfilPageComponent,
    resolve: {
      pedidos: PedidoResolver,
    },
    runGuardsAndResolvers: 'always',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PedidoResolver],
})
export class PerfilRoutingModule {}
