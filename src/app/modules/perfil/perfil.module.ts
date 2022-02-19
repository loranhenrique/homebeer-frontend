import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilPageComponent } from '@perfil/pages/perfil-page.component';
import { PerfilRoutingModule } from '@perfil/perfil-routing.module';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [PerfilPageComponent],
  imports: [CommonModule, PerfilRoutingModule, SharedModule, TranslateModule],
})
export class PerfilModule {}
