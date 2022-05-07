import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritoPageComponent } from '@favorito/pages/favorito-page.component';
import { FavoritoResolver } from './resolver/favorito.resolver';

const routes: Routes = [
  {
    path: '',
    component: FavoritoPageComponent,
    resolve: {
      favoritos: FavoritoResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [FavoritoResolver],
})
export class FavoritoRoutingModule {}
