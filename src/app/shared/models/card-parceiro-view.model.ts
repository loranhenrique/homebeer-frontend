import { SafeUrl } from '@angular/platform-browser';

export interface CardParceiroViewModel {
  imagemLoja: SafeUrl;
  nomeLoja: string;
  descricaoLoja: string;
  frete: string;
  descricaoAcessibilidade: string;
}
