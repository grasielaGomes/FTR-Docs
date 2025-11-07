# Criando Comentários e Votos no Projeto Mindshare

## Destaques

- **Model de Vote**: Criação do model de voto, relacionando usuário e ideia, garantindo voto único por usuário/ideia.
- **Model de Comment**: Criação do model de comentário, relacionando autor e ideia.
- **Migrations**: Geração das migrations para comentários e votos.
- **Models, DTOs, Services e Resolvers**: Estruturação completa para comentários e votos.
- **Field Resolver**: Resolução de campos relacionados (ideia e autor) nos comentários.
- **Testes no Playground**: Execução de mutations autenticadas para criar comentários e votos, e análise dos relacionamentos.

---

## Passo-a-Passo

1. **Criar Models no Prisma**

   - No arquivo `schema.prisma`, adicione os models `Vote` e `Comment`:

     ```prisma
     model Vote {
       id      String @id @default(uuid())
       userId  String
       ideaId  String
       user    User   @relation(fields: [userId], references: [id])
       idea    Idea   @relation(fields: [ideaId], references: [id])
       @@unique([userId, ideaId])
     }

     model Comment {
       id        String   @id @default(uuid())
       content   String
       createdAt DateTime @default(now())
       updatedAt DateTime @updatedAt
       authorId  String
       ideaId    String
       author    User     @relation(fields: [authorId], references: [id])
       idea      Idea     @relation(fields: [ideaId], references: [id])
     }
     ```

   - Relacione os novos models com `User` e `Idea` conforme necessário.

2. **Gerar Migration**

   - Rode a migration para criar as tabelas no banco:
     ```bash
     npx prisma migrate dev --name create_comments_and_votes
     ```

3. **Criar Models no Projeto**

   - Crie os arquivos `vote.model.ts` e `comment.model.ts` com os campos definidos no Prisma.
   - Importe e relacione os models com `UserModel` e `IdeaModel` conforme necessário.

4. **Criar DTOs de Input**

   - Crie `comment.input.ts` com o campo `content` (string).
   - Crie `vote.input.ts` se necessário, ou use argumentos diretos para votar em uma ideia.

5. **Implementar Services**

   - Crie `comment.service.ts` e `vote.service.ts`.
   - No `comment.service.ts`, implemente o método `create` para criar comentários, recebendo `data`, `ideaId` e `authorId`.
   - No `vote.service.ts`, implemente o método para criar votos, garantindo unicidade por usuário/ideia.

6. **Criar Resolvers**

   - Crie `comment.resolver.ts` e `vote.resolver.ts`.
   - Implemente a mutation `createComment` no `CommentResolver`, recebendo o input, o ID da ideia e o usuário autenticado (`@GQLUser()`).
   - Implemente a mutation de voto no `VoteResolver`, recebendo o ID da ideia e o usuário autenticado.

7. **Implementar Field Resolvers**

   - No `CommentResolver`, crie um `@FieldResolver()` para o campo `idea`, buscando a ideia pelo `ideaId`.
   - Crie também um `@FieldResolver()` para o campo `author`, buscando o usuário pelo `authorId`.

8. **Testar no Playground**

   - Inicie o servidor com:
     ```bash
     npm run dev
     ```
   - Autentique-se, obtenha o token e adicione o header er`authorization: Bear <token>`.
   - Execute a mutation `createComment` passando o ID da ideia e o conteúdo do comentário.
   - Verifique se o comentário retorna os dados do autor e da ideia corretamente.
   - Crie um novo usuário, autentique-se e teste a criação de comentários e votos.

9. **Relacionar Comentários e Votos nas Ideias**
   - Implemente resolvers para listar comentários e votos associados a cada ideia.

---
