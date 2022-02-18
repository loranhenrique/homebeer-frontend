import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErroPageComponent } from '@erro/pages/erro-page.component';
import { ErroRoutingModule } from '@erro/erro-routing.module';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ErroPageComponent],
  imports: [CommonModule, ErroRoutingModule, SharedModule, TranslateModule],
})
export class ErroModule {}
