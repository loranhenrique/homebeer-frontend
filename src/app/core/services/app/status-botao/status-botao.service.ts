import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatusBotaoService {
  private statusBotaoBehavior: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  public obterStatus(): Observable<boolean> {
    return this.statusBotaoBehavior.asObservable();
  }

  public habilitar(): void {
    this.statusBotaoBehavior.next(false);
  }

  public desabilitar(): void {
    this.statusBotaoBehavior.next(true);
  }
}
