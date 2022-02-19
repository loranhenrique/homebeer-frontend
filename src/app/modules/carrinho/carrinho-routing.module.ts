import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoPageComponent } from '@carrinho/pages/carrinho-page.component';

const routes: Routes = [
  {
    path: '',
    component: CarrinhoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrinhoRoutingModule {}
