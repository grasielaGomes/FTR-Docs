# Realizando Login no Frontend com GraphQL

## Destaques

- **Cadastro e Login**: Integração do fluxo de cadastro e login com o backend GraphQL.
- **Gerenciamento de Estado**: Uso do Zustand para autenticação e controle de loading.
- **Mutations**: Implementação das mutations de cadastro (register) e login.
- **Feedback ao Usuário**: Exibição de mensagens de sucesso e erro com toast.
- **Redirecionamento**: Preparação para redirecionar o usuário autenticado para a página de ideias.

---

## Passo-a-Passo para Implementar o Login

1. **Ajustando o Cadastro (Signup)**

   - Na página de Signup, controle o estado de loading com `useState`.
   - Importe o método `signup` do store de autenticação (`useAuthStore`).
   - No `handleSubmit`, defina loading como `true` e utilize um bloco `try/catch` para executar o cadastro.
   - Chame o método `signup` passando os dados (`name`, `email`, `password`).
   - Se o cadastro for bem-sucedido, exiba um toast de sucesso; em caso de erro, exiba um toast de erro.
   - No bloco `finally`, defina loading como `false`.
   - No botão de cadastro, utilize a propriedade `disabled` quando estiver em loading.

2. **Testando o Cadastro**

   - Inicie o backend e o frontend.
   - Preencha o formulário de cadastro e verifique se o cadastro é realizado com sucesso e os dados são enviados corretamente para o backend.

3. **Criando a Mutation de Login**

   - Crie o arquivo `login.ts` em `src/graphql/mutations`.
   - Importe `gql` do Apollo Client.
   - Declare a mutation `login`, recebendo um objeto `data` do tipo `LoginInput` e retornando `token`, `refreshToken`, `role` e os dados do usuário.

4. **Adicionando o Método de Login no Store**

   - No store de autenticação (`auth.ts`), crie o método assíncrono `login`.
   - O método deve receber os dados de login (`email`, `password`) e executar a mutation de login usando o Apollo Client.
   - Tipar a resposta da mutation (`LoginMutationData`).
   - Se o login for bem-sucedido, armazene o usuário e o token, e defina `isAuthenticated` como `true`.
   - Em caso de erro, retorne `false`.

5. **Implementando o Login na Página de Login**

   - Importe o método `login` do store de autenticação.
   - Controle o estado de loading com `useState`.
   - No `handleSubmit`, previna o comportamento padrão do formulário, defina loading como `true` e utilize um bloco `try/catch` para executar o login.
   - Chame o método `login` passando `email` e `password`.
   - Se o login for bem-sucedido, exiba um toast de sucesso; em caso de erro, exiba um toast de erro.
   - No bloco `finally`, defina loading como `false`.
   - No botão de login, utilize a propriedade `disabled` quando estiver em loading.

6. **Testando o Login**

   - Preencha o formulário de login e verifique se o login é realizado com sucesso.
   - Confirme que o usuário autenticado é armazenado corretamente no estado.

7. **Próximos Passos**

   - Redirecionar o usuário autenticado para a página de ideias após o login ou cadastro.
   - Implementar a página de ideias e proteger rotas para usuários autenticados.

---
