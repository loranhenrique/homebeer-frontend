import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { SalvarPedidoModel } from '@service/models/salvar-pedido.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SalvarPedidoService {
  constructor(private httpClient: HttpClient) {}
  public execute(request: SalvarPedidoModel[]): Observable<unknown> {
    return this.httpClient.post(environment.api.pedidos, request);
  }
}
