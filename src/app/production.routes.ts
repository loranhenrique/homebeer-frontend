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
  {
    path: 'erro',
    loadChildren: () => import('./modules/erro/erro.module').then(module => module.ErroModule),
  },
  {
    path: 'favorito',
    loadChildren: () => import('./modules/favorito/favorito.module').then(module => module.FavoritoModule),
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./modules/carrinho/carrinho.module').then(module => module.CarrinhoModule),
  },
  {
    path: 'perfil',
    loadChildren: () => import('./modules/perfil/perfil.module').then(module => module.PerfilModule),
  },
  {
    path: 'experiencia',
    loadChildren: () => import('./modules/experiencia/experiencia.module').then(module => module.ExperienciaModule),
  },
  {
    path: 'pesquisar',
    loadChildren: () => import('./modules/pesquisa/pesquisa.module').then(module => module.PesquisaModule),
  },
];
