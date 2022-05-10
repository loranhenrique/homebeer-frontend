import { Component, OnInit } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
import { LoadingService } from '@service/app/loading/loading.service';

@Component({
  selector: 'bra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public ariaHidden = false;
  public isLoading = false;
  public loadingMensagem = '';
  public loadingTipo = '';

  constructor(
    private translateService: TranslateService,
    private router: Router,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.setupTranslate();
    this.configurarTransicaoRotas();
    this.configurarLoading();
  }

  private setupTranslate(): void {
    this.translateService.setDefaultLang('pt');
    this.translateService.use('pt');
  }

  private configurarTransicaoRotas(): void {
    this.router.events
      .pipe(
        filter(
          event =>
            event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationCancel ||
            event instanceof NavigationError
        )
      )
      .subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
          this.loadingService.atribuirTipo('fixo');
          this.loadingService.ligar();
          this.ariaHidden = true;
        } else {
          this.loadingService.atribuirMensagem('');
          this.loadingService.desligar();
          this.ariaHidden = false;
        }
      });
  }

  private configurarLoading(): void {
    this.loadingService.pegarTipoLoading().subscribe(tipo => {
      this.loadingTipo = tipo;
    });

    this.loadingService.pegarMensagem().subscribe(mensagem => {
      this.loadingMensagem = mensagem;
    });

    this.loadingService.pegarLoadingStatus().subscribe(status => {
      this.isLoading = status;
    });
  }
}
