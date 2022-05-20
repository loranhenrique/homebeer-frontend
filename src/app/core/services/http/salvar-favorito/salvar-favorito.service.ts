import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { SalvarFavoritoModel } from '@service/models/salvar-favorito.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SalvarFavoritoService {
  constructor(private httpClient: HttpClient) {}
  public execute(idUsuario: string, idParceiro: string): Observable<unknown> {
    const request: SalvarFavoritoModel = this.construirRequest(idUsuario, idParceiro);
    return this.httpClient.post(environment.api.favoritos, request);
  }

  private construirRequest(idUsuario: string, idParceiro: string): SalvarFavoritoModel {
    return { idUsuario, idParceiro };
  }
}
