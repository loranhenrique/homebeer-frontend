import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { StatusPedidoConstantes } from '@config/status-pedido.const';
import { CardPedidoViewModel } from '@shared/models/card-pedido-view.model';
import { CardPedidoModel } from '@shared/models/card-pedido.model';

@Component({
  selector: 'bra-card-pedido',
  templateUrl: './card-pedido.component.html',
  styleUrls: ['./card-pedido.component.scss'],
})
export class CardPedidoComponent implements OnInit {
  @Input() cardPedido: CardPedidoModel;
  public viewModel: CardPedidoViewModel;

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  public getClass(): unknown {
    switch (this.cardPedido.statusPedido) {
      case StatusPedidoConstantes.PAGAMENTO:
        return 'card-pedido card-pedido--pagamento';
      case StatusPedidoConstantes.ENVIO:
        return 'card-pedido card-pedido--envio';
      case StatusPedidoConstantes.RECEBIMENTO:
        return 'card-pedido card-pedido--recebimento';
      case StatusPedidoConstantes.CONFIRMACAO:
        return 'card-pedido card-pedido--confirmacao';
    }
  }

  private construirViewModel(): void {
    this.viewModel = {
      titulo: this.cardPedido.nomeParceiro,
      imagemParceiro: this.domSanitizer.bypassSecurityTrustStyle(`url(${this.cardPedido.imagemParceiro})`),
      totalProdutos: this.cardPedido.totalProdutos,
      valorCompra: this.cardPedido.totalCompra,
    };
  }
}
