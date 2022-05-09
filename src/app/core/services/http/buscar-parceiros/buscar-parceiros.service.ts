import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { BuscarParceiroModel } from '@service/models/buscar-parceiro.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuscarParceirosService {
  constructor(private httpClient: HttpClient) {}

  public execute(idParceiro?: string): Observable<BuscarParceiroModel[]> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('idParceiro', idParceiro || '');

    return idParceiro
      ? this.httpClient.get<BuscarParceiroModel[]>(environment.api.buscarParceiros, { params: httpParams })
      : this.httpClient.get<BuscarParceiroModel[]>(environment.api.buscarParceiros);
  }
}
