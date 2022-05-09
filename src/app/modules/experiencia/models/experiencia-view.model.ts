import { SafeUrl } from '@angular/platform-browser';
import { CardCervejaModel } from './card-cerveja.model';

export interface ExperienciaViewModel {
  imagemParceiro: SafeUrl;
  nomeParceiro: string;
  descricaoParceiro: string;
  cervejas: CardCervejaModel[];
}
