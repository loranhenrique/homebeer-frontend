import { FormControl } from '@angular/forms';

export interface LoginViewModel {
  labelInpuEmail: string;
  labelInpuSenha: string;
  controlEmail: FormControl;
  controlSenha: FormControl;
  inputTypeEmail: string;
  inputTypeSenha: string;
  textoBotao: string;
}
