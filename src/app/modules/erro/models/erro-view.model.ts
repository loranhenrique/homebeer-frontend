import { MenuHeaderModel } from '@shared/models/menu-header.model';
export interface ErroViewModel {
  titulo: string;
  descricao: string;
  codigoErro: string;
  textoBotao: string;
  menuHeader: MenuHeaderModel;
}
