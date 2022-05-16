import { FormControl } from '@angular/forms';

export interface CadastrarViewModel {
  labelNomeCompleto: string;
  labelInpuEmail: string;
  labelInpuSenha: string;
  labelDataNascimento: string;
  controlNomeCompleto: FormControl;
  controlEmail: FormControl;
  controlSenha: FormControl;
  controlDataNascimento: FormControl;
  inputTypeTexto: string;
  inputTypeSenha: string;
  textoBotao: string;
  exibirErroCadastrar: string;
}
