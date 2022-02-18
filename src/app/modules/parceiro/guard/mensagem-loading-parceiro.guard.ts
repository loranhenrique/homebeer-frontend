import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoadingService } from '@service/app/loading/loading.service';

@Injectable({
  providedIn: 'root',
})
export class MensagemLoadingParceiroGuard implements CanActivate {
  constructor(private loadingService: LoadingService) {}

  canActivate(): boolean {
    this.loadingService.atribuirMensagem('PARCEIRO__LOADING-MENSAGEM--PARCEIROS');
    return true;
  }
}
