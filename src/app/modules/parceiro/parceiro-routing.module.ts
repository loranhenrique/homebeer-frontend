import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParceiroPageComponent } from '@parceiro/pages/parceiro-page.component';

const routes: Routes = [
  {
    path: '',
    component: ParceiroPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParceiroRoutingModule {}
