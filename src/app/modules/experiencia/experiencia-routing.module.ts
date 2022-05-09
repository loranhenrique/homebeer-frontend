import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciaPageComponent } from '@experiencia/pages/experiencia-page.component';
import { ParceiroResolver } from '@experiencia/resolver/parceiro.resolver';
import { ProdutoResolver } from '@experiencia/resolver/produto.resolver';

const routes: Routes = [
  {
    path: '',
    component: ExperienciaPageComponent,
    resolve: {
      parceiro: ParceiroResolver,
      produto: ProdutoResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ParceiroResolver, ProdutoResolver],
})
export class ExperienciaRoutingModule {}
