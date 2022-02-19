import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilViewModel } from '@perfil/models/perfil-view.model';
import { RedirecionarMenuFooterService } from '@service/app/redirecionar-menu-footer/redirecionar-menu-footer.service';

@Component({
  selector: 'bra-perfil-page',
  templateUrl: './perfil-page.component.html',
  styleUrls: ['./perfil-page.component.scss'],
})
export class PerfilPageComponent implements OnInit {
  public viewModel: PerfilViewModel;

  constructor(private router: Router, private redirecionarMenuFooterService: RedirecionarMenuFooterService) {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  public clickAcesso(valor: string): void {
    console.log(valor);
  }

  public menuFooterClick(value: string): void {
    const rota = this.redirecionarMenuFooterService.execute(value);
    this.router.navigate([rota]);
  }

  private construirViewModel(): void {
    this.viewModel = {
      textoBotaoSair: 'Sair',
      menuFooter: {
        selecionado: 'perfil',
      },
      menuHeader: {
        tipo: 'perfil',
        titulo: 'Loran Henrique',
        descricao: '18/02/2022',
      },
      modalModel: {
        mostrar: false,
        tipo: 'parcial',
      },
    };
  }
}
