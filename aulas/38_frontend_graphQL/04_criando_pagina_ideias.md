# Criando a Página de Ideias no Frontend com GraphQL

## Destaques

- **Rotas Protegidas**: Implementação de rotas públicas e protegidas para acesso à página de ideias.
- **Layout Personalizado**: Estrutura com logo, menu central e informações do usuário.
- **Página de Ideias**: Listagem de ideias, botão para nova ideia e modal de criação.
- **Integração com Auth**: Uso do token de autenticação nas requisições GraphQL.
- **Componentização**: Separação de componentes como Header, Page e CreateIdeaDialog.

---

## Passo-a-Passo para Criar a Página de Ideias

1. **Configurando Rotas Públicas e Protegidas**

   - Importe o estado de autenticação do store (`useAuthStore`) e o `navigate` do `react-router-dom`.
   - Crie funções para rotas públicas (`PublicRoute`) e protegidas (`ProtectedRoute`).
   - No `App.tsx`, envolva as rotas de login e cadastro com `PublicRoute`.
   - Prepare a rota de ideias para ser protegida com `ProtectedRoute`.

2. **Montando o Layout da Aplicação**

   - No componente `Layout`, crie a estrutura com logo à esquerda, menu ao centro e informações do usuário à direita.
   - Crie um novo componente `Page.tsx` para receber o conteúdo principal via `children`.
   - Defina a interface `PageProps` para tipar o `children` como `React.ReactNode`.
   - Adicione estilos ao componente `Page` para centralizar o conteúdo.

3. **Criando o Header**

   - Crie o componente `Header` para exibir a logo, menu e informações do usuário.
   - Importe o usuário e o estado de autenticação do store.
   - Estruture o header com classes utilitárias do Tailwind CSS.
   - Importe a logo do projeto dos assets e exiba no header.

4. **Criando a Página de Ideias**

   - Crie o componente `IdeasPage` para listar as ideias.
   - Importe o componente `Page` e utilize para estruturar o conteúdo.
   - Adicione título, botão "Nova Ideia" e espaço para listagem dos cards de ideias.
   - Importe e utilize ícones conforme necessário (ex: ícone de "plus" para o botão).

5. **Configurando o Apollo Client com Token de Autenticação**

   - No arquivo de configuração do Apollo Client, crie um `AuthLink` usando `setContext` para adicionar o token de autenticação nos headers das requisições.
   - Busque o token do estado global (`useAuthStore.getState()`).
   - Adicione o `AuthLink` à configuração do Apollo Client.

6. **Organizando Estrutura de Pastas e Componentes**

   - Reestruture as pastas para separar componentes e páginas (ex: `pages/ideas/index.tsx`, `components/Header.tsx`).
   - Atualize os imports no `App.tsx` conforme a nova estrutura.

7. **Criando o Modal de Nova Ideia**

   - Adicione o componente de modal (Dialog) utilizando a biblioteca shadcn/ui.
   - Crie o componente `CreateIdeaDialog` para o formulário de criação de ideias.
   - Controle a abertura do modal com estado (`useState`).
   - No modal, adicione campos controlados para título e descrição da ideia.
   - Implemente botões de cancelar e salvar, controlando os estados dos campos.

8. **Montando o Formulário de Nova Ideia**

   - No `CreateIdeaDialog`, adicione um formulário com campos para título (`Input`) e descrição (`TextArea`).
   - Controle os valores dos campos com estados locais.
   - Implemente as funções `handleSubmit` e `handleCancel` para submissão e limpeza do formulário.

9. **Testando a Página de Ideias**

   - Execute o projeto e verifique se a página de ideias está acessível apenas para usuários autenticados.
   - Teste a abertura do modal de nova ideia e o funcionamento dos campos do formulário.

10. **Próximos Passos**

    - Integrar o formulário de criação de ideias com a mutation GraphQL.
    - Implementar a listagem dinâmica das ideias cadastradas.
    - Melhorar a navegação e feedbacks visuais conforme o protótipo.

---
