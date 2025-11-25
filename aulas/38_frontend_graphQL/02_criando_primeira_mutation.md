# Criando a Primeira Mutation no Frontend com GraphQL

## Destaques

- **Integração com Apollo Client**: Configuração do Apollo Client para conectar o frontend ao backend GraphQL.
- **Gerenciamento de Estado**: Uso do Zustand para autenticação e armazenamento de tokens.
- **Primeira Mutation**: Implementação da mutation de cadastro (register) e integração com o fluxo de autenticação.

---

## Passo-a-Passo para Criar a Primeira Mutation

1. **Instalando Apollo Client e GraphQL**

   - No terminal, execute:
     ```bash
     npm install @apollo/client graphql
     ```

2. **Configurando o Apollo Client**

   - Crie a pasta `src/lib` e o arquivo `Apollo.ts`.
   - Importe e configure o `HttpLink` com a URL do backend (`http://localhost:4000/graphql`).
   - Crie o `ApolloClient` com `ApolloLink.from` e configure o cache com `InMemoryCache`.
   - (Opcional) Adicione links para autenticação (AuthLink) e tratamento de erros (ErrorLink).

3. **Criando a Mutation de Cadastro**

   - Crie a pasta `src/graphql/mutations` e o arquivo `register.ts`.
   - Importe `gql` do Apollo Client.
   - Declare a mutation `register`, recebendo um objeto `data` do tipo `RegisterInput` e retornando `token`, `refreshToken` e os dados do usuário (`id`, `name`, `email`, `createdAt`, `updatedAt`).

4. **Gerenciando Estado de Autenticação com Zustand**

   - Instale o Zustand:
     ```bash
     npm install zustand
     ```
   - Crie a pasta `src/stores` e o arquivo `auth.ts`.
   - Importe `create` e `persist` do Zustand.
   - Crie a interface `User` em `src/types/index.ts` com os campos: `id`, `name`, `email`, `role?`, `createdAt`, `updatedAt?`.
   - Implemente o store `useAuthStore` com os estados: `user`, `token`, `isAuthenticated` e o método assíncrono `signup`.

5. **Implementando o Método de Cadastro (signup)**

   - No método `signup`, utilize o `ApolloClient.mutate` para executar a mutation de cadastro.
   - Passe as variáveis necessárias (`name`, `email`, `password`).
   - Ao receber a resposta, armazene o usuário, token e defina `isAuthenticated` como `true`.
   - Implemente tratamento de erros e retorne `true` ou `false` conforme o sucesso da operação.

6. **Tipando as Respostas da Mutation**

   - Crie o tipo `RegisterMutationData` para tipar o retorno da mutation (`token`, `refreshToken`, `user`).
   - Utilize essa tipagem ao chamar o método `mutate` do Apollo Client.

7. **Testando a Mutation**

   - Inicie o backend com:
     ```bash
     npm run dev
     ```
   - No frontend, acione o cadastro pelo formulário de signup.
   - Verifique se o usuário é autenticado e os dados são armazenados corretamente.

8. **Próximos Passos**

   - Conectar o fluxo de cadastro à interface de signup.
   - Implementar o login e demais mutations.
   - Tratar autenticação nas rotas protegidas e exibir mensagens de erro.

---
