# Criando e Visualizando Ideias no Frontend com GraphQL

## Destaques

- **Mutation de Criação de Ideia**: Implementação da mutation para criar ideias no frontend.
- **Integração com Apollo Client**: Uso do Apollo Client para mutations e queries.
- **Listagem de Ideias**: Query para listar ideias cadastradas.
- **Visualização Detalhada**: Drawer para visualizar detalhes da ideia, comentários e votos.
- **Componentização**: Separação em componentes como IdeaCard, IdeaDetailDrawer, CommentsList e CommentArea.

---

## Passo-a-Passo para Criar e Visualizar Ideias

1. **Criando a Mutation de Ideia**

   - Crie a mutation `CREATE_IDEA` em `src/graphql/mutations/createIdea.ts`.
   - Defina os campos de retorno: `id`, `title`, `description`, `author { id, name, email }`, `countVotes`, `createdAt`, `updatedAt`.
   - Importe e utilize a mutation no componente de criação de ideias com o hook `useMutation` do Apollo Client.

2. **Configurando o ApolloProvider**

   - No arquivo `main.tsx`, envolva o app com o `ApolloProvider` e passe o `client` configurado.
   - Certifique-se de que o `AuthLink` (para o token) está antes do `HttpLink` na configuração do Apollo Client.

3. **Criando Ideias pelo Formulário**

   - No componente de criação (modal/dialog), utilize o `useMutation` para chamar a mutation de criação de ideia.
   - No `handleSubmit`, envie os dados (`title`, `description`) para a mutation.
   - Utilize `onCompleted` para exibir toast de sucesso e fechar o modal.
   - Utilize `onError` para exibir toast de erro.
   - Desabilite campos e botões enquanto `loading` for `true`.

4. **Listando Ideias**

   - Crie a query `LIST_IDEAS` em `src/graphql/queries/listIdeas.ts`.
   - Defina os campos necessários: `id`, `title`, `description`, `author`, `countVotes`, `comments`, `votes`, `createdAt`, `updatedAt`.
   - No componente de listagem, utilize o hook `useQuery` para buscar as ideias e renderizar os cards.

5. **Componentizando a Listagem**

   - Crie o componente `IdeaCard` para exibir informações resumidas de cada ideia.
   - Implemente seleção de ideia para abrir o drawer de detalhes ao clicar no card.

6. **Visualizando Detalhes da Ideia**

   - Crie a query `GET_IDEA` para buscar detalhes de uma ideia pelo `id`.
   - Utilize o hook `useLazyQuery` no componente `IdeaDetailDrawer` para buscar os dados ao abrir o drawer.
   - Exiba título, descrição, autor, comentários e votos.

7. **Renderizando Comentários**

   - Crie o componente `CommentsList` para exibir a lista de comentários da ideia.
   - Crie o componente `CommentArea` para adicionar novos comentários e votar na ideia.
   - Controle o conteúdo do comentário e ações de adicionar comentário e votar via props e funções.

8. **Integração dos Componentes**

   - No drawer de detalhes, utilize `CommentsList` para renderizar os comentários e `CommentArea` para adicionar novos.
   - Garanta que os dados do usuário autenticado estejam disponíveis para ações de comentário e voto.

9. **Testando a Criação e Visualização**

   - Crie uma nova ideia e verifique se ela aparece na listagem.
   - Clique em uma ideia para abrir o drawer e visualizar detalhes e comentários.
   - Teste a adição de comentários e votos (implementação nas próximas etapas).

10. **Próximos Passos**

    - Implementar a mutation de criação de comentários.
    - Implementar a mutation de votos nas ideias.
    - Refatorar e melhorar feedbacks visuais e UX.

---
