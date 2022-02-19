import { Component, Input } from '@angular/core';

@Component({
  selector: 'bra-linha',
  templateUrl: './linha.component.html',
  styleUrls: ['./linha.component.scss'],
})
export class LinhaComponent {
  @Input() tipo: string = 'default';

  public getClass(): unknown {
    return this.tipo === 'default' ? 'linha linha--default' : 'linha linha--completa';
  }
}
