import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StateConstantes } from '@config/state-constantes.const';
import { environment } from '@env/environment';
import { StateService } from '@service/app/state/state.service';
import { AutenticarModel } from '@service/models/autenticar.model';
import { UsuarioResponse } from '@shared/models/usuario-response.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private readonly httpClient: HttpClient, private readonly stateService: StateService) {
    this.carregarDadosDoLocalStorage();
  }

  public login(model: AutenticarModel): Observable<UsuarioResponse> {
    return this.httpClient
      .post<UsuarioResponse>(environment.api.autenticar, model)
      .pipe(tap(response => this.armazenarDadosAutenticacao(response)));
  }

  public logout(): void {
    this.stateService.sessao.set(StateConstantes.USUARIO_LOGADO, undefined);
    localStorage.clear();
  }

  private carregarDadosDoLocalStorage() {
    const authenticationTokenString = localStorage.getItem(StateConstantes.USUARIO_LOGADO);
    if (authenticationTokenString) {
      const authenticationToken = JSON.parse(authenticationTokenString) as UsuarioResponse;
      this.stateService.sessao.set(StateConstantes.USUARIO_LOGADO, authenticationToken);
    }
  }

  private armazenarDadosAutenticacao(response: UsuarioResponse): void {
    this.stateService.sessao.set(StateConstantes.USUARIO_LOGADO, response);
    localStorage.setItem(StateConstantes.USUARIO_LOGADO, this.construirTokenAuthorization(response));
  }

  private construirTokenAuthorization(response: UsuarioResponse): string {
    return JSON.stringify(response);
  }
}
