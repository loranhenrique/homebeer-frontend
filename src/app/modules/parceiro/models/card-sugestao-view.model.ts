import { SafeUrl } from '@angular/platform-browser';

export interface CardSugestaoViewModel {
  imagem: SafeUrl;
  titulo: string;
  descricao: string;
  descricaoAcessibilidade: string;
}
