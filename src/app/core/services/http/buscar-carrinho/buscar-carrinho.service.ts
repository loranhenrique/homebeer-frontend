import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { CarrinhoModel } from '@service/models/carrinho.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuscarCarrinhoService {
  constructor(private httpClient: HttpClient) {}

  public execute(idUsuario: string): Observable<CarrinhoModel[]> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('idUsuario', idUsuario);
    return this.httpClient.get<CarrinhoModel[]>(environment.api.buscarCarrinho, { params: httpParams });
  }
}
