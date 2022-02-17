import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParceiroPageComponent } from '@parceiro/pages/parceiro-page.component';
import { ParceiroRoutingModule } from '@parceiro/parceiro-routing.module';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { CardSugestaoComponent } from './components/card-sugestao/card-sugestao.component';
import { SugestaoComponent } from './components/sugestao/sugestao.component';
import { DestaqueComponent } from './components/destaque/destaque.component';
import { IconeDestaqueComponent } from './components/icone-destaque/icone-destaque.component';

@NgModule({
  declarations: [ParceiroPageComponent, CardSugestaoComponent, SugestaoComponent, DestaqueComponent, IconeDestaqueComponent],
  imports: [CommonModule, ParceiroRoutingModule, SharedModule, TranslateModule],
})
export class ParceiroModule {}
