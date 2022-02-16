import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingPageComponent } from '@onboarding/pages/onboarding-page.component';

const routes: Routes = [
  {
    path: '',
    component: OnboardingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingRoutingModule {}
