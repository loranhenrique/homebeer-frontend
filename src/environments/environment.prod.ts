const urlBff = '/api';

export const environment = {
  production: true,
  api: {
    autenticar: `${urlBff}/usuario/autenticar`,
    cadastrar: `${urlBff}/usuario/registrar`,
    parceiro: `${urlBff}/parceiro`,
    favoritos: `${urlBff}/favorito`,
    pedidos: `${urlBff}/pedido`,
    carrinho: `${urlBff}/carrinho`,
    produto: `${urlBff}/produto`,
  },
};
