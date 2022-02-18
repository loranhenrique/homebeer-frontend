import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritoPageComponent } from '@favorito/pages/favorito-page.component';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FavoritoRoutingModule } from '@favorito/favorito-routing.module';
import { ListaFavoritosComponent } from '@favorito/components/lista-favoritos/lista-favoritos.component';

@NgModule({
  declarations: [FavoritoPageComponent, ListaFavoritosComponent],
  imports: [CommonModule, FavoritoRoutingModule, SharedModule, TranslateModule],
})
export class FavoritoModule {}
