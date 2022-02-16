import { ElementRef } from '@angular/core';

export interface ModalModel {
  mostrar: boolean;
  tipo?: 'parcial' | 'integral';
  textoFecharAcessibilidade?: string;
  focoElementRef?: ElementRef;
}
