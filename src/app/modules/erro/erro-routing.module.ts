import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErroPageComponent } from '@erro/pages/erro-page.component';

const routes: Routes = [
  {
    path: '',
    component: ErroPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErroRoutingModule {}
