
# Order Station

**Order Station** é uma aplicação React desenvolvida para gerenciar pedidos e produtos. A aplicação simula um backend utilizando o `json-server` e permite realizar operações como listagem e adição de produtos a pedidos.

## Requisitos

- [Node.js](https://nodejs.org) instalado na sua máquina.
- [Git](https://github.com/WBorges1984/order-station) para clonar o repositório.

## Como Rodar o Projeto Localmente

Siga os passos abaixo para baixar e executar o projeto localmente.

### Passo 1: Clonar o Repositório

Clone o repositório para a sua máquina local:

```bash
git clone https://github.com/WBorges1984/order-station
cd order-station
```

### Passo 2: Instalar Dependências

Instale as dependências necessárias usando o npm:

```bash
npm install
```

### Passo 3: Executar o Projeto

#### 1. Iniciar o Servidor de Desenvolvimento React

Para iniciar o servidor de desenvolvimento e executar a aplicação React, utilize o seguinte comando:

```bash
npm start
```

A aplicação será iniciada no navegador em [http://localhost:3000](http://localhost:3000).

#### 2. Iniciar o JSON Server

Para simular o backend e fornecer dados para a aplicação, execute o seguinte comando para rodar o `json-server`:

```bash
npx json-server --watch db.json --port 3001
```

O servidor será iniciado em [http://localhost:3001](http://localhost:3001), utilizando o arquivo `db.json` como base de dados.

### Passo 4: Acessar a Aplicação

Abra o navegador e acesse [http://localhost:3000](http://localhost:3000) para visualizar e interagir com a aplicação. Os dados de pedidos e produtos serão obtidos via a API simulada no `json-server`.

## Scripts Disponíveis

No projeto, você pode rodar os seguintes scripts:

- **`npm start`**: Inicia a aplicação no ambiente de desenvolvimento.
- **`npm run server`**: Inicia o `json-server` para simular a API backend.
- **`npm run build`**: Compila a aplicação para produção na pasta `build`.
- **`npm test`**: Executa testes usando o ambiente de testes do React.
- **`npm run eject`**: Remove as dependências configuradas por padrão, permitindo modificações avançadas na configuração.

## Tecnologias Utilizadas

- **React**: Biblioteca principal para a construção da interface de usuário.
- **JSON Server**: Simula uma API RESTful para facilitar o desenvolvimento local.

---

Este projeto foi desenvolvido como uma demonstração de uma aplicação React que integra simulação de backend com `json-server` e utiliza hooks como `useState` e `useEffect` para gerenciar o estado da aplicação.
