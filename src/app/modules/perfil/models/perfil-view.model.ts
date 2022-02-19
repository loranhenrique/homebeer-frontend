import { MenuFooterModel } from '@shared/models/menu-footer.model';
import { MenuHeaderModel } from '@shared/models/menu-header.model';
import { ModalModel } from '@shared/models/modal.model';

export interface PerfilViewModel {
  textoBotaoSair: string;
  menuHeader: MenuHeaderModel;
  modalModel: ModalModel;
  menuFooter: MenuFooterModel;
}
