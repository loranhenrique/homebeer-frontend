import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { OnboardingPageComponent } from './pages/onboarding-page.component';

@NgModule({
  declarations: [OnboardingPageComponent],
  imports: [CommonModule, OnboardingRoutingModule],
})
export class OnboardingModule {}
