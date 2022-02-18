import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bra-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  @Input() loading: boolean;
  @Input() mensagem: string;
  @Input() tipo = 'fixo';

  public loadingStyle: string;

  ngOnInit(): void {
    this.definirLoadingStyle();
  }

  private definirLoadingStyle(): void {
    this.loadingStyle = this.tipo === 'absoluto' ? 'loading--absoluto' : 'loading--fixo';
  }
}
