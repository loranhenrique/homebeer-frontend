import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { BuscarParceiroModel } from '@service/models/buscar-parceiro.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuscarFavoritosService {
  constructor(private httpClient: HttpClient) {}

  public execute(idUsuario: string): Observable<BuscarParceiroModel[]> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('idUsuario', idUsuario);
    return this.httpClient.get<BuscarParceiroModel[]>(environment.api.buscarFavoritos, { params: httpParams });
  }
}
