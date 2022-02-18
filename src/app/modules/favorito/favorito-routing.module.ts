import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritoPageComponent } from '@favorito/pages/favorito-page.component';

const routes: Routes = [
  {
    path: '',
    component: FavoritoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritoRoutingModule {}
