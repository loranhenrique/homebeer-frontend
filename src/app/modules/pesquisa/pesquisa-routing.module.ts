import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesquisaPageComponent } from './pages/pesquisa-page.component';
import { ParceiroResolver } from './resolver/parceiro.resolver';

const routes: Routes = [
  {
    path: '',
    component: PesquisaPageComponent,
    resolve: {
      parceiros: ParceiroResolver,
    },
    runGuardsAndResolvers: 'always',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ParceiroResolver],
})
export class PesquisaRoutingModule {}
