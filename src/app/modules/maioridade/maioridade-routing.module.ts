import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaioridadePageComponent } from './pages/maioridade-page.component';

const routes: Routes = [
  {
    path: '',
    component: MaioridadePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaioridadeRoutingModule {}
