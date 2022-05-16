import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateConstantes } from '@config/state-constantes.const';
import { LoginComponent } from '@perfil/components/login/login.component';
import { CadastrarModel } from '@perfil/models/cadastrar.model';
import { IconePedidoModel } from '@perfil/models/icone-pedido.model';
import { ListaPedidosModel } from '@perfil/models/lista-pedidos.model';
import { LoginModel } from '@perfil/models/login.model';
import { PerfilViewModel } from '@perfil/models/perfil-view.model';
import { LoadingService } from '@service/app/loading/loading.service';
import { RedirecionarMenuFooterService } from '@service/app/redirecionar-menu-footer/redirecionar-menu-footer.service';
import { StateService } from '@service/app/state/state.service';
import { StatusBotaoService } from '@service/app/status-botao/status-botao.service';
import { AuthenticationService } from '@service/http/authentication/authentication.service';
import { CadastrarService } from '@service/http/cadastrar/cadastrar.service';
import { PedidosModel } from '@service/models/pedidos.model';
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
  private pedidos: PedidosModel[];
  private usuario: UsuarioResponse;

  constructor(
    private readonly router: Router,
    private readonly redirecionarMenuFooterService: RedirecionarMenuFooterService,
    private readonly authenticationService: AuthenticationService,
    private readonly cadastrarService: CadastrarService,
    private readonly stateService: StateService,
    private readonly loadingService: LoadingService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly statusBotaoService: StatusBotaoService
  ) {}

  ngOnInit(): void {
    this.carregarPedidosResvoler();
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
      this.viewModel.exibeModalIntegral = 'login';
      this.viewModel.modalIntegralModel.titulo = 'Login';
      this.viewModel.modalIntegralModel.mostrar = true;
      return;
    }

    this.viewModel.exibeModalIntegral = 'cadastrar';
    this.viewModel.modalIntegralModel.titulo = 'Cadastrar';
    this.viewModel.modalIntegralModel.mostrar = true;
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
    if (!this.definirContinuacaoClick()) return;
    if (!(login.email && login.senha)) return;

    this.viewModel.exibeErroLogin = false;
    this.definirPropriedadesLoading('Autenticando...');
    this.loadingService.ligar();

    this.authenticationService.login({ email: login.email, senha: login.senha }).subscribe(
      _ => {
        this.loadingService.desligar();
        this.viewModel.modalIntegralModel.mostrar = false;
        this.recarregarPagina();
      },
      _ => {
        this.viewModel.exibeErroLogin = true;
        this.loadingService.desligar();
      }
    );
  }

  public clickCadastrarHandle(cadastrar: CadastrarModel): void {
    if (!this.definirContinuacaoClick()) return;
    if (!(cadastrar.nomeCompleto && cadastrar.email && cadastrar.dataNascimento && cadastrar.senha)) return;
    this.definirPropriedadesLoading('Cadastrando...');
    this.loadingService.ligar();

    this.cadastrarService
      .execute(cadastrar.email, cadastrar.senha, cadastrar.nomeCompleto, cadastrar.dataNascimento)
      .subscribe(
        _ => {
          this.loadingService.desligar();
          this.viewModel.modalIntegralModel.mostrar = false;
          this.recarregarPagina();
        },
        (response: HttpErrorResponse) => {
          this.viewModel.exibeErroCadastrar = response.error.mensagem || 'Existem dados inconsistentes.';
          this.loadingService.desligar();
        }
      );
  }

  public menuFooterClick(value: string): void {
    if (!this.definirContinuacaoClick()) return;
    const rota = this.redirecionarMenuFooterService.execute(value);
    this.router.navigate([rota]);
  }

  private definirPropriedadesLoading(mensagem: string): void {
    this.loadingService.atribuirMensagem(mensagem);
    this.loadingService.atribuirTipo('fade');
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

  private construirPedidos(): IconePedidoModel {
    let pagamento = 0;
    let envio = 0;
    let recebimento = 0;
    let recebido = 0;

    this.pedidos.map((pedidos: PedidosModel) => {
      pedidos.itensPedido
        .map(item => item.parceiro.status)
        .map(status => {
          if (status === 'Aguardando pagamento') pagamento++;
          if (status === 'Aguardando envio') envio++;
          if (status === 'Aguardando recebimento') recebimento++;
          if (status === 'Recebido') recebido++;
        });
    });

    return { pagamento, envio, recebimento, recebido };
  }

  private construirHistoricoPedidos(): ListaPedidosModel {
    const cardsPedido: CardPedidoModel[] = [];

    this.pedidos.map((pedidos: PedidosModel) => {
      pedidos.itensPedido
        .map(item => item.parceiro)
        .map(parceiro => {
          if (!(parceiro.status === 'Recebido')) return;

          let totalCompra = 0;

          parceiro.produtos.map(({ precoProduto }) => {
            totalCompra += precoProduto;
          });

          cardsPedido.push({
            nomeParceiro: parceiro.nomeParceiro,
            imagemParceiro: parceiro.imagemParceiro,
            statusPedido: parceiro.status,
            totalProdutos: parceiro.produtos.length,
            totalCompra,
          });
        });
    });

    return {
      titulo: 'PERFIL__LABEL--TITULO-HISTORICO-PEDIDOS',
      pedidos: cardsPedido,
    };
  }

  private construirPedidosAndamento(): ListaPedidosModel {
    const cardsPedido: CardPedidoModel[] = [];

    this.pedidos.map((pedidos: PedidosModel) => {
      pedidos.itensPedido
        .map(item => item.parceiro)
        .map(parceiro => {
          if (parceiro.status === 'Recebido') return;

          let totalCompra = 0;

          parceiro.produtos.map(({ precoProduto }) => {
            totalCompra += precoProduto;
          });

          cardsPedido.push({
            nomeParceiro: parceiro.nomeParceiro,
            imagemParceiro: parceiro.imagemParceiro,
            statusPedido: parceiro.status,
            totalProdutos: parceiro.produtos.length,
            totalCompra,
          });
        });
    });

    return {
      titulo: 'PERFIL__LABEL--TITULO-PEDIDOS-ANDAMENTO',
      pedidos: cardsPedido,
    };
  }

  private carregarPedidosResvoler(): void {
    this.pedidos = this.activatedRoute.snapshot.data.pedidos;
  }

  private recarregarPagina(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate(['/perfil']);
  }

  private definirContinuacaoClick(): boolean {
    let statusBotao = false;
    this.statusBotaoService.obterStatus().subscribe(status => (statusBotao = status));
    if (statusBotao) return false;

    return true;
  }
}
