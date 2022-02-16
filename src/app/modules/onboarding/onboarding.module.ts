import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { OnboardingPageComponent } from './pages/onboarding-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [OnboardingPageComponent],
  imports: [CommonModule, OnboardingRoutingModule, SharedModule, TranslateModule],
})
export class OnboardingModule {}
