const urlBff = '/api';

export const environment = {
  production: true,
  api: {
    buscarParceiros: `${urlBff}/parceiro`,
    autenticar: `${urlBff}/usuario/autenticar`,
  },
};
