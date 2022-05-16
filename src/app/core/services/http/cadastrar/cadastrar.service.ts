import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { SalvarUsuarioModel } from '@service/models/salvar-usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastrarService {
  constructor(private httpClient: HttpClient) {}

  public execute(email: string, senha: string, nomeCompleto: string, dataNascimento: string): Observable<unknown> {
    const request: SalvarUsuarioModel = this.construirRequest(email, senha, nomeCompleto, dataNascimento);
    return this.httpClient.post(environment.api.cadastrar, request);
  }

  private construirRequest(
    email: string,
    senha: string,
    nomeCompleto: string,
    dataNascimento: string
  ): SalvarUsuarioModel {
    return { email, senha, nomeCompleto, dataNascimento, cpf: 11111111111, telefone: 19999999999 };
  }
}
