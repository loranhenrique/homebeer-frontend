# Projeto homebeer-frontend

Após baixar o projeto abrir no VsCode, instalar os plugins recomendados e configurar os plugins de formatação (prettier e beautify) conforme abaixo para as configuração de identação:

```
{
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.formatOnSave": true,
  "[html]": {
    "editor.defaultFormatter": "HookyQR.beautify"
  }
}
```

Instalar as dependências do projeto com o comando:

```bash
npm install
```

Após ter todas as dependências instaladas e atualizadas, inicie a aplicação com o comando:

```bash
npm run start
```
