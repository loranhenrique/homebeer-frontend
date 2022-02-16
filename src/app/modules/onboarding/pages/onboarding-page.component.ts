import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingViewModel } from '../models/onboarding-view.model';

@Component({
  selector: 'bra-onboarding-page',
  templateUrl: './onboarding-page.component.html',
  styleUrls: ['./onboarding-page.component.scss'],
})
export class OnboardingPageComponent implements OnInit {
  public viewModel: OnboardingViewModel;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  public clickProximo(): void {
    this.router.navigate(['/maioridade']);
  }

  private construirViewModel(): void {
    this.viewModel = {
      tituloBotao: 'ONBOARDING__TITULO--BOTAO',
      descricao: 'ONBOARDING__DESCRICAO--01',
      subDescricao: 'ONBOARDING__DESCRICAO--02',
    };
  }
}
