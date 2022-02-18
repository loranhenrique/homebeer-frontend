import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { BuscarParceirosService } from '@service/http/buscar-parceiros/buscar-parceiros.service';
import { BuscarParceiroModel } from '@service/models/buscar-parceiro.model';
import { Observable } from 'rxjs';

@Injectable()
export class ParceiroResolver implements Resolve<Observable<BuscarParceiroModel[]>> {
  constructor(private service: BuscarParceirosService) {}

  resolve(): Observable<BuscarParceiroModel[]> {
    return this.service.execute();
  }
}
