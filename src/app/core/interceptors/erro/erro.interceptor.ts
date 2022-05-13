import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DeparaErroRotaService } from '@service/app/depara-erro-rota/depara-erro-rota.service';
import { Router } from '@angular/router';
import { MapRotasIgnoradas } from '@config/map-rotas-ignoradas';

@Injectable()
export class ErroInterceptor implements HttpInterceptor {
  constructor(private deParaErro: DeparaErroRotaService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let mensagemErro = '';

        const rotaAtual = this.tratarRota(request.url);
        const rotaIgnorada = this.validarRota(rotaAtual);

        if (rotaIgnorada) {
          return next.handle(request);
        }

        const erroModel = error.error ? this.deParaErro.execute(rotaAtual) : this.deParaErro.execute(request.url);

        mensagemErro =
          error.error && error.error.message
            ? `Error: ${error.error.message}`
            : `Error Code: ${error.status}\nMessage: ${error.message}`;

        this.router.navigate(['/erro'], { state: erroModel });

        return throwError(mensagemErro);
      })
    );
  }

  private validarRota(rotaServico: string): unknown | undefined {
    const rotasIgnoradas = MapRotasIgnoradas.buscarRotasIgnoradas();
    return rotasIgnoradas.find(rotaIgnorada => rotaIgnorada.rota === rotaServico);
  }

  private tratarRota(rotaServico: string): string {
    let rotaAtual = rotaServico.split(';');

    rotaAtual = rotaAtual[0].split('?');

    return rotaAtual[0];
  }
}
