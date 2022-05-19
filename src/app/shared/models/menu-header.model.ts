export interface MenuHeaderModel {
  tipo: 'pesquisa' | 'perfil' | 'default';
  titulo?: string;
  descricao?: string;
  habilitar?: boolean;
}
