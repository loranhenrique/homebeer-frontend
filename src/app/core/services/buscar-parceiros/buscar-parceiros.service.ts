import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuscarParceirosService {
  constructor(private httpClient: HttpClient) {}

  public execute(): Observable<any> {
    return this.httpClient.get<any>(environment.api.buscarParceiros);
  }
}
