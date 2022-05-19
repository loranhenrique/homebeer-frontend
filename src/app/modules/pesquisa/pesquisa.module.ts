import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { PesquisaPageComponent } from './pages/pesquisa-page.component';
import { PesquisaRoutingModule } from './pesquisa-routing.module';
import { ListaPesquisaComponent } from './components/lista-pesquisa/lista-pesquisa.component';

@NgModule({
  declarations: [PesquisaPageComponent, ListaPesquisaComponent],
  imports: [CommonModule, PesquisaRoutingModule, SharedModule, TranslateModule],
})
export class PesquisaModule {}
