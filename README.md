# CRUD Node.js com MongoDB

Este é um projeto simples de CRUD (Criar, Ler, Atualizar, Deletar) desenvolvido com Node.js, Express e MongoDB.

## Funcionalidades

- **Criar:** Adicionar novos registros de vendas.
- **Ler:** Listar todos os registros de vendas.
- **Atualizar:** Modificar informações de um registro de venda existente.
- **Deletar:** Remover um registro de venda.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Dotenv](https://github.com/motdotla/dotenv)

## Pré-requisitos

- Node.js instalado
- MongoDB instalado e em execução

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/mrigueti/crud-nodejs.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd crud-nodejs
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Configuração

1. Crie um arquivo `.env` na raiz do projeto.
2. Adicione a seguinte variável de ambiente, substituindo pela sua string de conexão do MongoDB:
   ```
   MONGO_DB=mongodb://localhost:27017/nome-do-seu-banco
   ```

## Como Executar

Para iniciar o servidor, execute o seguinte comando:

```bash
cd src
```
Execute

```bash
node .\index.js --watch
```

O servidor estará disponível em `http://localhost:3000`.

## Endpoints da API

- `POST /vendas`: Cria um novo registro de venda.
- `GET /vendas`: Retorna todos os registros de vendas.
- `PUT /vendas/:id`: Atualiza um registro de venda existente.
- `DELETE /vendas/:id`: Deleta um registro de venda.
