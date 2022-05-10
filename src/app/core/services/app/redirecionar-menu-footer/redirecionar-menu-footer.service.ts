import { Injectable } from '@angular/core';
import { StatusBotaoService } from '../status-botao/status-botao.service';

@Injectable({
  providedIn: 'root',
})
export class RedirecionarMenuFooterService {
  constructor(private readonly statusBotaoService: StatusBotaoService) {}

  public execute(botaoClicado: string): string | undefined {
    let statusBotao = false;
    this.statusBotaoService.obterStatus().subscribe(status => (statusBotao = status));
    if (statusBotao) return;

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
