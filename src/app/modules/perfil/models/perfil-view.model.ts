import { MenuFooterModel } from '@shared/models/menu-footer.model';
import { ModalModel } from '@shared/models/modal.model';

export interface PerfilViewModel {
  nomeCliente: string;
  dataInclusao: string;
  textoBotaoSair: string;
  tituloPrincipal: string;
  modalModel: ModalModel;
  menuFooter: MenuFooterModel;
}
