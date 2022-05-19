import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { BuscarParceiroModel } from '@service/models/buscar-parceiro.model';
import { Observable } from 'rxjs';
import { CacheService } from '../cache/cache.service';

@Injectable({
  providedIn: 'root',
})
export class BuscarParceirosService {
  constructor(private readonly cacheService: CacheService) {}

  public execute(idParceiro?: string): Observable<BuscarParceiroModel[]> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('idParceiro', idParceiro || '');

    return idParceiro
      ? this.cacheService.buscarCache<BuscarParceiroModel[]>(environment.api.parceiro, httpParams)
      : this.cacheService.buscarCache<BuscarParceiroModel[]>(environment.api.parceiro);
  }
}
