import { CardParceiroModel } from '@shared/models/card-parceiro.model';
import { MenuHeaderModel } from '@shared/models/menu-header.model';

export interface PesquisaViewModel {
  menuHeader: MenuHeaderModel;
  parceiros: CardParceiroModel[];
}
