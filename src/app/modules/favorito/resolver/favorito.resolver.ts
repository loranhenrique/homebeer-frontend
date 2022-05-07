import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { StateConstantes } from '@config/state-constantes.const';
import { LoadingService } from '@service/app/loading/loading.service';
import { StateService } from '@service/app/state/state.service';
import { BuscarFavoritosService } from '@service/http/buscar-favoritos/buscar-favoritos.service';
import { BuscarParceiroModel } from '@service/models/buscar-parceiro.model';
import { UsuarioResponse } from '@shared/models/usuario-response.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class FavoritoResolver implements Resolve<Observable<BuscarParceiroModel[]>> {
  constructor(
    private readonly service: BuscarFavoritosService,
    private readonly stateService: StateService,
    private readonly loadingService: LoadingService
  ) {}

  resolve(): Observable<BuscarParceiroModel[]> {
    const usuario: UsuarioResponse = this.stateService.sessao.get(StateConstantes.USUARIO_LOGADO);

    if (!(usuario && usuario.id)) return of([]);
    this.loadingService.atribuirMensagem('FAVORITO__MENSAGEM--LOADING');

    return this.service.execute(usuario.id);
  }
}
