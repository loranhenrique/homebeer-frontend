import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { LoadingService } from '@service/app/loading/loading.service';
import { BuscarParceirosService } from '@service/http/buscar-parceiros/buscar-parceiros.service';
import { BuscarParceiroModel } from '@service/models/buscar-parceiro.model';
import { Observable } from 'rxjs';

@Injectable()
export class ParceiroResolver implements Resolve<Observable<BuscarParceiroModel[]>> {
  constructor(private readonly service: BuscarParceirosService, private readonly loadingService: LoadingService) {}

  resolve(): Observable<BuscarParceiroModel[]> {
    this.loadingService.atribuirMensagem('EXPERIENCIA__MENSAGEM--LOADING');

    return this.service.execute('d788c3f8-5152-43ff-bbeb-e5288270675c');
  }
}
