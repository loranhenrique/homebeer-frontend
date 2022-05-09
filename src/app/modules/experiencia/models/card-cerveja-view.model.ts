import { SafeUrl } from '@angular/platform-browser';

export interface CardCervejaViewModel {
  id: string;
  nome: string;
  descricao: string;
  imagem: SafeUrl;
  quantidade: number;
  valorTotal: number;
}
