import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { BuscarProdutoService } from '@service/http/buscar-produto/buscar-produto.service';
import { ProdutoModel } from '@service/models/produto.model';
import { Observable } from 'rxjs';

@Injectable()
export class ProdutoResolver implements Resolve<Observable<ProdutoModel[]>> {
  constructor(private readonly service: BuscarProdutoService) {}

  resolve(): Observable<ProdutoModel[]> {
    return this.service.execute('d788c3f8-5152-43ff-bbeb-e5288270675c');
  }
}
