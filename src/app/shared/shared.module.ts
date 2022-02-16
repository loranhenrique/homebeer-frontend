import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from './components/button/button.component';
import { LinhaComponent } from './components/linha/linha.component';

@NgModule({
  declarations: [ButtonComponent, LinhaComponent],
  imports: [CommonModule, TranslateModule, FormsModule],
  exports: [ButtonComponent, LinhaComponent],
})
export class SharedModule {}
