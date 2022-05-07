import { Component, Input } from '@angular/core';

@Component({
  selector: 'bra-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  @Input() loading: boolean;
  @Input() mensagem: string;
  @Input() tipo = 'fixo';

  public getClass(): unknown {
    return this.tipo === 'fade' ? 'loading loading--fade' : 'loading loading--fixo';
  }
}
