# Criando Serviço de Votos (VoteService) e Relacionamentos no Projeto Mindshare

## Destaques

- **VoteService**: Serviço para alternar (toggle) votos em ideias.
- **Mutation toggleVote**: Mutation para votar ou remover voto em uma ideia.
- **Field Resolver para Votos**: Relacionamento entre votos, ideias e usuários.
- **Contagem de Votos**: Field resolver para contar votos em cada ideia.
- **Integração com Playground**: Testes de votação, listagem e contagem de votos.
- **Documentação e SDL**: Visualização dos relacionamentos e schema gerado.

---

## Passo-a-Passo

1. **Criar VoteService com Toggle de Voto**

   - Crie a classe `VoteService` com o método `toggleVote(userId: string, ideaId: string): Promise<boolean>`.
   - No método:
     - Busque se já existe um voto para o par `userId` e `ideaId` usando `prismaClient.vote.findUnique`.
     - Se existir, remova o voto com `prismaClient.vote.delete({ where: { userId, ideaId } })`.
     - Se não existir, crie o voto com `prismaClient.vote.create({ data: { userId, ideaId } })`.
     - Retorne `true` ao final.

2. **Criar Resolver para Toggle de Voto**

   - Crie o arquivo `vote.resolver.ts` e a classe `VoteResolver`.
   - Implemente a mutation `toggleVote(ideaId: string, @GQLUser() user): Promise<boolean>`.
   - Injete o `VoteService` e chame `toggleVote(user.id, ideaId)`.

3. **Registrar o VoteResolver**

   - No arquivo principal, registre o `VoteResolver` no schema do Apollo Server.

4. **Testar Mutation de Voto no Playground**

   - No Playground, execute a mutation `toggleVote` passando o `ideaId`.
   - Autentique-se e adicione o header `authorization: Bearer <token>`.
   - Verifique se o voto é criado ou removido corretamente.

5. **Criar Field Resolver para Listar Votos em Ideias**

   - No `IdeaModel`, adicione o campo `votes` (array de `VoteModel`).
   - No `IdeaResolver`, crie um `@FieldResolver()` para o campo `votes`, buscando votos pelo `ideaId` via `VoteService`.

6. **Criar Field Resolver para Relacionamentos em VoteModel**

   - No `VoteModel`, adicione campos opcionais para `user` e `idea`.
   - No `VoteResolver`, crie `@FieldResolver()` para retornar o usuário (`userService.findUser(vote.userId)`) e a ideia (`ideaService.findIdea(vote.ideaId)`).

7. **Criar Field Resolver para Contagem de Votos**

   - No `VoteService`, implemente o método `countVotes(ideaId: string): Promise<number>`.
   - No `IdeaModel`, adicione o campo `countVotes?: number`.
   - No `IdeaResolver`, crie um `@FieldResolver()` para `countVotes`, retornando a contagem de votos para a ideia.

8. **Testar Listagem e Contagem de Votos**

   - No Playground, liste ideias incluindo os campos `votes`, `countVotes`, e os dados dos usuários que votaram.
   - Verifique se os relacionamentos e contagem estão corretos.

9. **Visualizar Documentação e SDL**

   - Acesse o schema gerado (`schema.graphql`) para visualizar tipos, mutations e relacionamentos.
   - Use a visualização de grafo para entender como as queries, mutations e models se relacionam.

10. **Resumo das Funcionalidades**
    - Cadastro e autenticação de usuários.
    - Criação e listagem de ideias.
    - Criação de comentários e votos.
    - Remoção de ideias.
    - Relacionamentos completos entre usuários, ideias, comentários e votos.

---
