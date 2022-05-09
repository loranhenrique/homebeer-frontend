import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ExperienciaPageComponent } from '@experiencia/pages/experiencia-page.component';
import { ExperienciaRoutingModule } from '@experiencia/experiencia-routing.module';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';
import { CardCervejaComponent } from './components/card-cerveja/card-cerveja.component';

@NgModule({
  declarations: [ExperienciaPageComponent, ListaProdutosComponent, CardCervejaComponent],
  imports: [CommonModule, ExperienciaRoutingModule, SharedModule, TranslateModule],
})
export class ExperienciaModule {}
