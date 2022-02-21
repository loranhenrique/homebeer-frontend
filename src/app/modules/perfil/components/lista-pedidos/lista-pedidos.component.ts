import { Component, Input, OnInit } from '@angular/core';
import { ListaPedidosViewModel } from '@perfil/models/lista-pedidos-view.model';
import { ListaPedidosModel } from '@perfil/models/lista-pedidos.model';

@Component({
  selector: 'bra-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.scss'],
})
export class ListaPedidosComponent implements OnInit {
  @Input() listaPedidos: ListaPedidosModel;
  public viewModel: ListaPedidosViewModel;

  constructor() {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  private construirViewModel(): void {
    this.viewModel = {
      titulo: this.listaPedidos.titulo,
      pedidos: this.listaPedidos.pedidos,
    };
  }
}
