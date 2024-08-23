# WhatsApp Web Clone - React

## 📜 Descrição

Este projeto visa reproduzir uma versão simplificada da interface do WhatsApp Web, implementando componentes essenciais como a lista de conversas, pesquisa e filtros. Todos os componentes foram desenvolvidos em React, utilizando TypeScript para tipagem, Zustand para gerenciamento de estado e TailwindCSS juntamente com Shadcn para estilização.

## 🚀 Funcionalidades

- **ChatListItem**: Componente que exibe um item de chat, incluindo nome do contato, última mensagem, hora e ícone de mensagens não lidas.
- **ChatList**: Componente que lista todas as conversas, com dados fornecidos por uma API mockada.
- **ChatListSearch**: Componente de pesquisa que permite buscar conversas na lista.
- **ChatListFilter**: Componente de filtro que permite filtrar as conversas por diferentes critérios.

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca principal para a construção da interface.
- **TypeScript**: Utilizado para tipagem estática e maior robustez no código.
- **Zustand**: Gerenciamento de estado simples e reativo.
- **TailwindCSS**: Framework utilitário para estilização rápida e responsiva.
- **Shadcn**: Complemento para estilização avançada.
- **Storybook**: Ferramenta para documentação dos componentes.

## 🌐 API Mockada

O projeto utiliza uma API mockada para fornecer os dados necessários para a lista de conversas. Esta API simula as interações reais com um backend, permitindo que os dados sejam recuperados de forma assíncrona e utilizados nos componentes de forma semelhante a uma aplicação de produção.

### Endpoints:

- **GET /api**: Retorna uma lista de conversas com detalhes como nome do contato, foto, última mensagem, hora da última interação e status de leitura.


## 📦 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. Instale as dependências em API e WEB individualmente:
   ```bash
   npm install

3. Execute API e WEB individualmente:
   ```bash
   npm run dev
