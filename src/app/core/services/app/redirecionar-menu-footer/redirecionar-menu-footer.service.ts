import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RedirecionarMenuFooterService {
  constructor() {}

  public execute(botaoClicado: string): string | undefined {
    switch (botaoClicado) {
      case 'Home':
        return '/parceiro';
      case 'Carrinho':
        return '/carrinho';
      case 'Favorito':
        return '/favorito';
      case 'Perfil':
        return '/perfil';
    }
  }
}
