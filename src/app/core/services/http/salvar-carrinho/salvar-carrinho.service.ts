import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { SalvarCarrinhoModel } from '@service/models/salvar-carrinho.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SalvarCarrinhoService {
  constructor(private httpClient: HttpClient) {}
  public execute(idUsuario: string, idProduto: string, idParceiro: string): Observable<unknown> {
    const request: SalvarCarrinhoModel = this.construirRequest(idUsuario, idProduto, idParceiro);
    return this.httpClient.post(environment.api.carrinho, request);
  }

  private construirRequest(idUsuario: string, idProduto: string, idParceiro: string): SalvarCarrinhoModel {
    return { idUsuario, idProduto, idParceiro };
  }
}
