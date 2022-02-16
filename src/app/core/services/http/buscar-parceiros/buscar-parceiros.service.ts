import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { BuscarParceiroModel } from '@service/models/buscar-parceiro.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuscarParceirosService {
  constructor(private httpClient: HttpClient) {}

  public execute(): Observable<BuscarParceiroModel[]> {
    return this.httpClient.get<BuscarParceiroModel[]>(environment.api.buscarParceiros);
  }
}
