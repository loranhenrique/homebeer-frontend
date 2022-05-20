import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { StateConstantes } from '@config/state-constantes.const';
import { LoadingService } from '@service/app/loading/loading.service';
import { StateService } from '@service/app/state/state.service';
import { BuscarParceirosService } from '@service/http/buscar-parceiros/buscar-parceiros.service';
import { BuscarParceiroModel } from '@service/models/buscar-parceiro.model';
import { UsuarioResponse } from '@shared/models/usuario-response.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class ParceiroResolver implements Resolve<Observable<BuscarParceiroModel[]>> {
  constructor(
    private readonly service: BuscarParceirosService,
    private readonly loadingService: LoadingService,
    private readonly stateService: StateService
  ) {}

  resolve(): Observable<BuscarParceiroModel[]> {
    const idParceiro: string = this.stateService.sessao.get(StateConstantes.ID_PARCEIRO);
    const usuario: UsuarioResponse = this.stateService.sessao.get(StateConstantes.USUARIO_LOGADO);

    if (!(idParceiro && usuario)) return of([]);
    this.loadingService.atribuirMensagem('EXPERIENCIA__MENSAGEM--LOADING');

    return this.service.execute(idParceiro, usuario.id);
  }
}
