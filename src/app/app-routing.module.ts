import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { productionRoutes } from './production.routes';

const routes = productionRoutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
