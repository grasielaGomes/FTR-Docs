# Listando Comentários em Ideias no Projeto Mindshare

## Destaques

- **Field Resolver de Comentários**: Implementação de um field resolver para listar comentários associados a uma ideia.
- **Relacionamento Prisma**: Uso do relacionamento entre Idea e Comment no Prisma.
- **Service para Listagem**: Criação de método no service para listar comentários por ideia.
- **Consulta Otimizada**: Busca de comentários diretamente pelo `ideaId`.
- **Testes no Playground**: Execução de queries para listar ideias com comentários e autores.
- **Facilidade do GraphQL**: Obtenção de dados relacionados em uma única requisição.

---

## Passo-a-Passo

1. **Adicionar Campo de Comentários no Model Idea**

   - No model Idea, adicione um campo `comments` do tipo array de `CommentModel`.
   - Exemplo:
     ```typescript
     @Field(() => [CommentModel], { nullable: true })
     comments?: CommentModel[];
     ```

2. **Criar Field Resolver para Comentários**

   - No `IdeaResolver`, crie um método com o decorator `@FieldResolver()` para o campo `comments`.
   - O método deve retornar um array de `CommentModel` relacionado à ideia recebida via `@Root()`.

3. **Implementar Service para Listar Comentários por Ideia**

   - No `CommentService`, crie o método `listByIdea` que recebe o `ideaId` como parâmetro.
   - Implemente a busca usando Prisma:
     ```typescript
     return prismaClient.comment.findMany({ where: { ideaId } })
     ```

4. **Utilizar o Service no Field Resolver**

   - No `IdeaResolver`, injete o `CommentService`.
   - No field resolver de `comments`, utilize o método `listByIdea` passando o `idea.id`.

5. **Testar Listagem de Comentários no Playground**

   - Faça login, obtenha o token e adicione o header `authorization: Bearer <token>`.
   - Execute a query de listagem de ideias, incluindo o campo `comments` (ex: id, content, author { name, email }, createdAt).
   - Verifique se os comentários e autores são retornados corretamente junto com as ideias.

6. **Aproveitar o Poder do GraphQL**

   - Observe que, com dois field resolvers (para autor e comentários), é possível obter todos os dados relacionados em uma única requisição.
   - Adicione outros campos como `createdAt` tanto em ideias quanto em comentários para enriquecer a resposta.

7. **Próximos Passos**
   - Implementar a funcionalidade de votos nas ideias para concluir o ecossistema do Mindshare.

---
