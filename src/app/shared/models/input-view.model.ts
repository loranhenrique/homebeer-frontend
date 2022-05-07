import { FormControl } from '@angular/forms';

export interface InputViewModel {
  inputControl: FormControl;
  titulo: string;
  textoCampoObrigatorio: string;
  inputType: string;
}
