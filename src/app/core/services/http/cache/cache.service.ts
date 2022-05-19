import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  public cacheState: Map<string, Map<string, Observable<any>>> = new Map();

  constructor(private http: HttpClient) {}

  public buscarCache<T>(endPoint: string, queryParams?: HttpParams): Observable<T> {
    const cacheEndPoint = this.cacheState.get(endPoint);
    const chaveParametros = this.construirChave(queryParams);

    let retorno: Observable<T>;

    if (!cacheEndPoint) {
      retorno = this.buscarDados(endPoint, queryParams);
      this.cacheState.set(endPoint, this.constuirNovoCache(retorno, chaveParametros));
      return retorno;
    }

    const cacheParametros = cacheEndPoint.get(chaveParametros);
    if (cacheParametros) {
      retorno = cacheParametros;
    } else {
      retorno = this.buscarDados(endPoint, queryParams);
      cacheEndPoint.set(chaveParametros, retorno);
    }

    return retorno;
  }

  public limparCache(endPoint: string, queryParams?: HttpParams): void {
    const cacheEndPoint = this.cacheState.get(endPoint);

    if (cacheEndPoint) {
      const chaveParametros = this.construirChave(queryParams);
      cacheEndPoint.delete(chaveParametros);
    }
  }

  private constuirNovoCache<T>(dados: Observable<T>, queryParams: string): Map<string, Observable<T>> {
    const cache = new Map();
    cache.set(queryParams, dados);
    return cache;
  }

  private construirChave(queryParams?: HttpParams): string {
    return queryParams ? queryParams.toString() : 'default';
  }

  private buscarDados<T>(endPoint: string, queryParams?: HttpParams): Observable<T> {
    return this.http.get<T>(endPoint, { params: queryParams }).pipe(shareReplay(1), delay(1));
  }
}
