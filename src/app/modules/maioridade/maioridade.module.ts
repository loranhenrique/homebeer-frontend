import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaioridadePageComponent } from '@maioridade/pages/maioridade-page.component';
import { MaioridadeRoutingModule } from '@maioridade/maioridade-routing.module';
import { InformativoMaioridadeComponent } from '@maioridade/components/informativo-maioridade/informativo-maioridade.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [MaioridadePageComponent, InformativoMaioridadeComponent],
  imports: [CommonModule, MaioridadeRoutingModule, SharedModule, TranslateModule],
})
export class MaioridadeModule {}
