import { Injectable } from '@angular/core';
import { CodigoErroConstantes } from '@config/codigo-erro.const';
import { environment } from '@env/environment';
import { ErroModel } from '@erro/models/erro.model';

@Injectable({
  providedIn: 'root',
})
export class DeparaErroRotaService {
  private erroModelPadrao: ErroModel = {
    urlVoltar: '',
    codigoErro: CodigoErroConstantes.ERRO_DEFAULT_FRONT,
  };

  constructor() {}

  public execute(rota: string): ErroModel {
    switch (rota) {
      case environment.api.buscarParceiros:
        return this.construirErroBuscarParceiros();
      case environment.api.buscarFavoritos:
        return this.construirErroBuscarFavoritos();
      default:
        return this.erroModelPadrao;
    }
  }

  private construirErroBuscarParceiros(): ErroModel {
    return {
      ...this.erroModelPadrao,
      codigoErro: CodigoErroConstantes.ERRO_BUSCAR_PARCEIROS,
    };
  }

  private construirErroBuscarFavoritos(): ErroModel {
    return {
      ...this.erroModelPadrao,
      codigoErro: CodigoErroConstantes.ERRO_BUSCAR_FAVORITOS,
    };
  }
}
