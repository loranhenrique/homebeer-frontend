import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { AutenticarModel } from '@service/models/autenticar.model';
import { UsuarioResponse } from '@shared/models/usuario-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  public execute(model: AutenticarModel): Observable<UsuarioResponse> {
    return this.httpClient.post<UsuarioResponse>(environment.api.autenticar, model);
  }
}
