import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StateConstantes } from '@config/state-constantes.const';
import { LoginComponent } from '@perfil/components/login/login.component';
import { LoginModel } from '@perfil/models/login.model';
import { PerfilViewModel } from '@perfil/models/perfil-view.model';
import { RedirecionarMenuFooterService } from '@service/app/redirecionar-menu-footer/redirecionar-menu-footer.service';
import { StateService } from '@service/app/state/state.service';
import { LoginService } from '@service/http/login/login.service';
import { modalAnimation } from '@shared/components/modal/modal-animation';
import { CardPedidoModel } from '@shared/models/card-pedido.model';
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

  constructor(
    private readonly router: Router,
    private readonly redirecionarMenuFooterService: RedirecionarMenuFooterService,
    private readonly loginService: LoginService,
    private readonly stateService: StateService
  ) {}

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

  public clickAcesso(valor: 'Entrar' | 'Registrar'): void {
    if (valor === 'Entrar') {
      this.viewModel.modalIntegralModel.titulo = 'Login';
      this.viewModel.modalIntegralModel.mostrar = true;
    }
  }

  public clickSair(sair?: string): void {
    if (sair) {
      this.fecharModal('parcial');
      this.stateService.sessao.delete(StateConstantes.USUARIO_LOGADO);
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

    this.loginService.execute({ email: login.email, senha: login.senha }).subscribe(
      (usuario: UsuarioResponse) => {
        this.sucessoLogin(usuario);
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

  private sucessoLogin(usuario: UsuarioResponse): void {
    this.stateService.sessao.set(StateConstantes.USUARIO_LOGADO, usuario);
    this.viewModel.modalIntegralModel.mostrar = false;
    this.viewModel.menuHeader.tipo = 'perfil';
    this.viewModel.menuHeader.titulo = usuario.nomeCompleto;
    this.viewModel.menuHeader.descricao = usuario.dataNascimento;
    this.viewModel.exibirTelaLogada = true;
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
        titulo: 'APP__LABEL-TITULO',
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
        mostrar: false,
        tipo: 'integral',
      },
    };
  }
}
