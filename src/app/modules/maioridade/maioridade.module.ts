import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaioridadePageComponent } from './pages/maioridade-page.component';
import { MaioridadeRoutingModule } from './maioridade-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [MaioridadePageComponent],
  imports: [CommonModule, MaioridadeRoutingModule, SharedModule, TranslateModule],
})
export class MaioridadeModule {}
