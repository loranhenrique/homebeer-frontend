import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StatusBotaoService } from '../status-botao/status-botao.service';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private mensagemBehavior: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private tipoBehavior: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private loadingBehavior: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private readonly statusBotaoService: StatusBotaoService) {}

  public atribuirMensagem(mensagem: string): void {
    this.mensagemBehavior.next(mensagem);
  }

  public atribuirTipo(tipo: string): void {
    this.tipoBehavior.next(tipo);
  }

  public pegarMensagem(): Observable<string> {
    return this.mensagemBehavior.asObservable();
  }

  public pegarLoadingStatus(): Observable<boolean> {
    return this.loadingBehavior.asObservable();
  }

  public pegarTipoLoading(): Observable<string> {
    return this.tipoBehavior.asObservable();
  }

  public ligar(): void {
    this.statusBotaoService.desabilitar();
    this.loadingBehavior.next(true);
  }

  public desligar(): void {
    this.statusBotaoService.habilitar();
    this.loadingBehavior.next(false);
  }
}
