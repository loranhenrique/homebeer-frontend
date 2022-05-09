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
      case environment.api.parceiro:
        return this.construirErroParceiros();
      case environment.api.favoritos:
        return this.construirErroFavoritos();
      case environment.api.pedidos:
        return this.construirErroPedidos();
      case environment.api.carrinho:
        return this.construirErroCarrinho();
      case environment.api.produto:
        return this.construirErroProduto();
      default:
        return this.erroModelPadrao;
    }
  }

  private construirErroParceiros(): ErroModel {
    return {
      ...this.erroModelPadrao,
      codigoErro: CodigoErroConstantes.ERRO_BUSCAR_PARCEIROS,
    };
  }

  private construirErroFavoritos(): ErroModel {
    return {
      ...this.erroModelPadrao,
      codigoErro: CodigoErroConstantes.ERRO_BUSCAR_FAVORITOS,
    };
  }

  private construirErroPedidos(): ErroModel {
    return {
      ...this.erroModelPadrao,
      codigoErro: CodigoErroConstantes.ERRO_BUSCAR_PEDIDOS,
    };
  }

  private construirErroCarrinho(): ErroModel {
    return {
      ...this.erroModelPadrao,
      codigoErro: CodigoErroConstantes.ERRO_BUSCAR_CARRINHO,
    };
  }

  private construirErroProduto(): ErroModel {
    return {
      ...this.erroModelPadrao,
      codigoErro: CodigoErroConstantes.ERRO_BUSCAR_PRODUTO,
    };
  }
}
