import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '@shared/components/button/button.component';
import { LinhaComponent } from '@shared/components/linha/linha.component';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { MenuFooterComponent } from './components/menu-footer/menu-footer.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';

@NgModule({
  declarations: [
    ButtonComponent,
    LinhaComponent,
    ModalComponent,
    MenuFooterComponent,
    MenuHeaderComponent,
    PesquisaComponent,
  ],
  imports: [CommonModule, TranslateModule, FormsModule],
  exports: [
    ButtonComponent,
    LinhaComponent,
    ModalComponent,
    MenuFooterComponent,
    MenuHeaderComponent,
    PesquisaComponent,
  ],
})
export class SharedModule {}
