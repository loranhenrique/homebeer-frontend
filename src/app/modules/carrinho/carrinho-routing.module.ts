import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoPageComponent } from '@carrinho/pages/carrinho-page.component';
import { CarrinhoResolver } from './resolver/carrinho.resolver';

const routes: Routes = [
  {
    path: '',
    component: CarrinhoPageComponent,
    resolve: {
      carrinho: CarrinhoResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CarrinhoResolver],
})
export class CarrinhoRoutingModule {}
