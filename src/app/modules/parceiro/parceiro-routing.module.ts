import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParceiroPageComponent } from '@parceiro/pages/parceiro-page.component';
import { MensagemLoadingParceiroGuard } from './guard/mensagem-loading-parceiro.guard';
import { ParceiroResolver } from './resolver/parceiro.resolver';

const routes: Routes = [
  {
    path: '',
    component: ParceiroPageComponent,
    canActivate: [MensagemLoadingParceiroGuard],
    resolve: {
      parceiros: ParceiroResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ParceiroResolver],
})
export class ParceiroRoutingModule {}
