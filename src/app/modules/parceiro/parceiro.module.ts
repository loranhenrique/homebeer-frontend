import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParceiroPageComponent } from '@parceiro/pages/parceiro-page.component';
import { ParceiroRoutingModule } from '@parceiro/parceiro-routing.module';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ParceiroPageComponent],
  imports: [CommonModule, ParceiroRoutingModule, SharedModule, TranslateModule],
})
export class ParceiroModule {}
