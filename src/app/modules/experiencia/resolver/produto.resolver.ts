import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { StateConstantes } from '@config/state-constantes.const';
import { StateService } from '@service/app/state/state.service';
import { BuscarProdutoService } from '@service/http/buscar-produto/buscar-produto.service';
import { ProdutoModel } from '@service/models/produto.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class ProdutoResolver implements Resolve<Observable<ProdutoModel[]>> {
  constructor(private readonly service: BuscarProdutoService, private readonly stateService: StateService) {}

  resolve(): Observable<ProdutoModel[]> {
    const idParceiro: string = this.stateService.sessao.get(StateConstantes.ID_PARCEIRO);

    if (!idParceiro) return of([]);
    return this.service.execute(idParceiro);
  }
}
