export const productionRoutes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(module => module.HomeModule) },
  {
    path: 'onboarding',
    loadChildren: () => import('./modules/onboarding/onboarding.module').then(module => module.OnboardingModule),
  },
  {
    path: 'maioridade',
    loadChildren: () => import('./modules/maioridade/maioridade.module').then(module => module.MaioridadeModule),
  },
  {
    path: 'parceiro',
    loadChildren: () => import('./modules/parceiro/parceiro.module').then(module => module.ParceiroModule),
  },
];
