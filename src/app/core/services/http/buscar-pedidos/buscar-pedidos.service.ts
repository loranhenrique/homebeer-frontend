import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { PedidosModel } from '@service/models/pedidos.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuscarPedidosService {
  constructor(private httpClient: HttpClient) {}

  public execute(idUsuario: string): Observable<PedidosModel[]> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('idUsuario', idUsuario);
    return this.httpClient.get<PedidosModel[]>(environment.api.buscarPedidos, { params: httpParams });
  }
}
