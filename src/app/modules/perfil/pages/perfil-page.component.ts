import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilViewModel } from '@perfil/models/perfil-view.model';
import { RedirecionarMenuFooterService } from '@service/app/redirecionar-menu-footer/redirecionar-menu-footer.service';
import { modalAnimation } from '@shared/components/modal/modal-animation';
import { CardPedidoModel } from '@shared/models/card-pedido.model';

@Component({
  selector: 'bra-perfil-page',
  templateUrl: './perfil-page.component.html',
  styleUrls: ['./perfil-page.component.scss'],
  animations: [modalAnimation()],
})
export class PerfilPageComponent implements OnInit {
  public viewModel: PerfilViewModel;
  private cardsPedido: CardPedidoModel[] = [
    {
      nomeParceiro: 'Cervejaria dos amigos',
      imagemParceiro: '',
      totalProdutos: 4,
      totalCompra: 129.99,
      statusPedido: 'envio',
    },
    {
      nomeParceiro: 'Cervejaria do Romeu',
      imagemParceiro: '',
      totalProdutos: 8,
      totalCompra: 109.99,
      statusPedido: 'confirmacao',
    },
    {
      nomeParceiro: 'Paulaner',
      imagemParceiro: '',
      totalProdutos: 2,
      totalCompra: 199.99,
      statusPedido: 'pagamento',
    },
    {
      nomeParceiro: 'Cervejaria dos amigos',
      imagemParceiro: '',
      totalProdutos: 4,
      totalCompra: 129.99,
      statusPedido: 'envio',
    },
    {
      nomeParceiro: 'Cervejaria do Romeu',
      imagemParceiro: '',
      totalProdutos: 8,
      totalCompra: 109.99,
      statusPedido: 'confirmacao',
    },
    {
      nomeParceiro: 'Paulaner',
      imagemParceiro: '',
      totalProdutos: 2,
      totalCompra: 199.99,
      statusPedido: 'pagamento',
    },
  ];

  constructor(private router: Router, private redirecionarMenuFooterService: RedirecionarMenuFooterService) {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  public clickHistoricoCompras(): void {
    this.viewModel.exibeModal = 'historico';
    this.viewModel.modalParcialModel.mostrar = true;
  }

  public clickPedidosAndamento(): void {
    this.viewModel.exibeModal = 'pedidos';
    this.viewModel.modalParcialModel.mostrar = true;
  }

  public clickAcesso(valor: string): void {
    console.log(valor);
  }

  public clickSair(sair?: string): void {
    if (sair) {
      this.fecharModal();
      console.log('Confirmação sair');
      return;
    }

    this.viewModel.exibeModal = 'sair';
    this.viewModel.modalParcialModel.mostrar = true;
  }

  public fecharModal(): void {
    this.viewModel.modalParcialModel.mostrar = false;
  }

  public menuFooterClick(value: string): void {
    const rota = this.redirecionarMenuFooterService.execute(value);
    this.router.navigate([rota]);
  }

  private construirViewModel(): void {
    this.viewModel = {
      textoBotaoSair: 'PERFIL__LABEL--BOTAO-SAIR',
      pedidos: {
        pagamento: 1,
        envio: 0,
        recebimento: 0,
        recebido: 1,
      },
      menuFooter: {
        selecionado: 'perfil',
      },
      menuHeader: {
        tipo: 'default',
        titulo: 'Home Beer',
      },
      pedidosAndamento: {
        titulo: 'PERFIL__LABEL--TITULO-PEDIDOS-ANDAMENTO',
        pedidos: this.cardsPedido,
      },
      historicoPedidos: {
        titulo: 'PERFIL__LABEL--TITULO-HISTORICO-PEDIDOS',
        pedidos: this.cardsPedido,
      },
      modalParcialModel: {
        mostrar: false,
        tipo: 'parcial',
      },
      modalIntegralModel: {
        mostrar: true,
        tipo: 'integral',
        titulo: 'Login',
      },
    };
  }
}
