import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { StateConstantes } from '@config/state-constantes.const';
import { LoadingService } from '@service/app/loading/loading.service';
import { StateService } from '@service/app/state/state.service';
import { BuscarPedidosService } from '@service/http/buscar-pedidos/buscar-pedidos.service';
import { PedidosModel } from '@service/models/pedidos.model';
import { UsuarioResponse } from '@shared/models/usuario-response.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class PedidoResolver implements Resolve<Observable<PedidosModel[]>> {
  constructor(
    private readonly service: BuscarPedidosService,
    private readonly stateService: StateService,
    private readonly loadingService: LoadingService
  ) {}

  resolve(): Observable<PedidosModel[]> {
    const usuario: UsuarioResponse = this.stateService.sessao.get(StateConstantes.USUARIO_LOGADO);

    if (!(usuario && usuario.id)) return of([]);
    this.loadingService.atribuirMensagem('PERFIL__MENSAGEM--LOADING');
    this.loadingService.atribuirTipo('fixo');

    return this.service.execute(usuario.id);
  }
}
