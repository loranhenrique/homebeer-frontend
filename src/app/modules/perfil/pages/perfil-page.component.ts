import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StateConstantes } from '@config/state-constantes.const';
import { LoginComponent } from '@perfil/components/login/login.component';
import { IconePedidoModel } from '@perfil/models/icone-pedido.model';
import { ListaPedidosModel } from '@perfil/models/lista-pedidos.model';
import { LoginModel } from '@perfil/models/login.model';
import { PerfilViewModel } from '@perfil/models/perfil-view.model';
import { RedirecionarMenuFooterService } from '@service/app/redirecionar-menu-footer/redirecionar-menu-footer.service';
import { StateService } from '@service/app/state/state.service';
import { AuthenticationService } from '@service/http/authentication/authentication.service';
import { modalAnimation } from '@shared/components/modal/modal-animation';
import { CardPedidoModel } from '@shared/models/card-pedido.model';
import { MenuHeaderModel } from '@shared/models/menu-header.model';
import { UsuarioResponse } from '@shared/models/usuario-response.model';

@Component({
  selector: 'bra-perfil-page',
  templateUrl: './perfil-page.component.html',
  styleUrls: ['./perfil-page.component.scss'],
  animations: [modalAnimation()],
})
export class PerfilPageComponent implements OnInit {
  @ViewChild('paginaLogin', { static: false }) loginComponent: LoginComponent;

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
  private usuario: UsuarioResponse;

  constructor(
    private readonly router: Router,
    private readonly redirecionarMenuFooterService: RedirecionarMenuFooterService,
    private readonly authenticationService: AuthenticationService,
    private readonly stateService: StateService
  ) {}

  ngOnInit(): void {
    this.buscarUsuarioState();
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

  public clickAcesso(valor: 'Entrar' | 'Registrar'): void {
    if (valor === 'Entrar') {
      this.viewModel.modalIntegralModel.titulo = 'Login';
      this.viewModel.modalIntegralModel.mostrar = true;
    }
  }

  public clickSair(sair?: string): void {
    if (sair) {
      this.fecharModal('parcial');
      this.authenticationService.logout();
      this.viewModel.exibirTelaLogada = false;
      this.viewModel.menuHeader = {
        tipo: 'default',
        titulo: 'APP__LABEL-TITULO',
      };
      return;
    }

    this.viewModel.exibeModal = 'sair';
    this.viewModel.modalParcialModel.mostrar = true;
  }

  public fecharModal(tipo: 'parcial' | 'integral'): void {
    tipo === 'parcial'
      ? (this.viewModel.modalParcialModel.mostrar = false)
      : (this.viewModel.modalIntegralModel.mostrar = false);
  }

  public clickLoginHandle(login: LoginModel): void {
    if (!(login.email && login.senha)) return;
    this.viewModel.exibeErroLogin = false;

    this.authenticationService.login({ email: login.email, senha: login.senha }).subscribe(
      _ => {
        this.sucessoLogin();
      },
      _ => {
        this.viewModel.exibeErroLogin = true;
      }
    );
  }

  public menuFooterClick(value: string): void {
    const rota = this.redirecionarMenuFooterService.execute(value);
    this.router.navigate([rota]);
  }

  private sucessoLogin(): void {
    this.buscarUsuarioState();
    this.setarViewModelSucessoLogin();
  }

  private setarViewModelSucessoLogin(): void {
    this.viewModel.menuHeader = {
      tipo: 'perfil',
      titulo: this.usuario.nomeCompleto,
      descricao: this.usuario.dataNascimento,
    };

    this.viewModel.exibirTelaLogada = this.construirExibirTelaLogada();
    this.viewModel.modalIntegralModel.mostrar = false;
  }

  private construirViewModel(): void {
    this.viewModel = {
      textoBotaoSair: 'PERFIL__LABEL--BOTAO-SAIR',
      exibirTelaLogada: this.construirExibirTelaLogada(),
      pedidosAndamento: this.construirPedidosAndamento(),
      historicoPedidos: this.construirHistoricoPedidos(),
      pedidos: this.construirPedidos(),
      menuHeader: this.construirMenuHeader(),
      menuFooter: {
        selecionado: 'perfil',
      },
      modalParcialModel: {
        mostrar: false,
        tipo: 'parcial',
      },
      modalIntegralModel: {
        mostrar: false,
        tipo: 'integral',
      },
    };
  }

  private buscarUsuarioState(): void {
    this.usuario = this.stateService.sessao.get(StateConstantes.USUARIO_LOGADO);
  }

  private construirExibirTelaLogada(): boolean {
    return this.usuario ? true : false;
  }

  private construirMenuHeader(): MenuHeaderModel {
    if (this.usuario) {
      return {
        tipo: 'perfil',
        titulo: this.usuario.nomeCompleto,
        descricao: this.usuario.dataNascimento,
      };
    }

    return {
      tipo: 'default',
      titulo: 'APP__LABEL-TITULO',
    };
  }

  private construirPedidos(): IconePedidoModel | undefined {
    return {
      pagamento: 1,
      envio: 0,
      recebimento: 1,
      recebido: 0,
    };
  }

  private construirHistoricoPedidos(): ListaPedidosModel | undefined {
    return {
      titulo: 'PERFIL__LABEL--TITULO-HISTORICO-PEDIDOS',
      pedidos: this.cardsPedido,
    };
  }

  private construirPedidosAndamento(): ListaPedidosModel | undefined {
    return {
      titulo: 'PERFIL__LABEL--TITULO-PEDIDOS-ANDAMENTO',
      pedidos: this.cardsPedido,
    };
  }
}
