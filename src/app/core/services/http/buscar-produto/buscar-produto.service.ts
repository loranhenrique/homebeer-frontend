import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { ProdutoModel } from '@service/models/produto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuscarProdutoService {
  constructor(private httpClient: HttpClient) {}

  public execute(idParceiro: string): Observable<ProdutoModel[]> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('idParceiro', idParceiro);
    return this.httpClient.get<ProdutoModel[]>(environment.api.buscarProduto, { params: httpParams });
  }
}
