import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeletarCarrinhoService {
  constructor(private httpClient: HttpClient) {}
  public execute(idUsuario: string, idProduto: string, idParceiro: string): Observable<unknown> {
    const httpParams = new HttpParams()
      .append('idUsuario', idUsuario)
      .append('idProduto', idProduto)
      .append('idParceiro', idParceiro);

    return this.httpClient.delete(environment.api.carrinho, { params: httpParams });
  }
}
