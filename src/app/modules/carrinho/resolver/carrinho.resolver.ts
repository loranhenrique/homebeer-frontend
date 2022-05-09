import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { StateConstantes } from '@config/state-constantes.const';
import { LoadingService } from '@service/app/loading/loading.service';
import { StateService } from '@service/app/state/state.service';
import { BuscarCarrinhoService } from '@service/http/buscar-carrinho/buscar-carrinho.service';
import { CarrinhoModel } from '@service/models/carrinho.model';
import { UsuarioResponse } from '@shared/models/usuario-response.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class CarrinhoResolver implements Resolve<Observable<CarrinhoModel[]>> {
  constructor(
    private readonly service: BuscarCarrinhoService,
    private readonly stateService: StateService,
    private readonly loadingService: LoadingService
  ) {}

  resolve(): Observable<CarrinhoModel[]> {
    const usuario: UsuarioResponse = this.stateService.sessao.get(StateConstantes.USUARIO_LOGADO);

    if (!(usuario && usuario.id)) return of([]);
    this.loadingService.atribuirMensagem('CARRINHO__MENSAGEM--LOADING');

    return this.service.execute(usuario.id);
  }
}
