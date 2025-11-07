# Criando Model, Mutation e Decorator para Ideias no Projeto Mindshare

## Destaques

- **User com Password Opcional**: Ajuste do model para permitir criação de usuário sem senha.
- **Mutation createUser**: Cadastro de usuário apenas com nome e e-mail.
- **Model de Ideia**: Criação do model Idea no Prisma e relacionamento com User.
- **Migration para Ideias**: Geração da migration para a tabela de ideias.
- **Model, DTO, Service e Resolver de Ideia**: Estruturação completa para criação de ideias.
- **Decorator para Usuário Autenticado**: Criação de decorator para obter o usuário autenticado no contexto GraphQL.

---

## Passo-a-Passo

1. **Tornar o Password Opcional no Model User**

   - No model do usuário, altere o campo `password` para opcional.
   - Atualize o Prisma schema (`schema.prisma`) e rode a migration:
     ```bash
     npx prisma migrate dev --name change_user_password_nullable
     ```

2. **Criar Mutation createUser**

   - Crie um DTO `UserInput.ts` com os campos `name` e `email`.
   - Implemente o método `createUser` no service:
     - Verifique se o usuário já existe pelo e-mail.
     - Se não existir, crie o usuário apenas com nome e e-mail.
   - Implemente a mutation no resolver para cadastrar o usuário.

3. **Criar Model de Ideia no Prisma**

   - No `schema.prisma`, adicione o model `Idea`:
     ```prisma
     model Idea {
       id          String   @id @default(uuid())
       title       String
       description String?
       createdAt   DateTime @default(now())
       updatedAt   DateTime @updatedAt
       authorId    String
       author      User     @relation(fields: [authorId], references: [id], onDelete: Cascade)
     }
     ```
   - Relacione o model `User` com o campo `ideas` (array de ideias).
   - Rode a migration:
     ```bash
     npx prisma migrate dev --name create_ideas
     ```

4. **Criar Model, DTO, Service e Resolver de Ideia**

   - Crie o arquivo `idea.model.ts` com os campos do model Idea.
   - Crie o DTO `Idea.input.ts` com os campos `title` e `description` (opcional).
   - Implemente o service `idea.service.ts` com o método `createIdea`, recebendo `data` e `authorId`.
   - Implemente o resolver `idea.resolver.ts` com a mutation `createIdea`, chamando o service.

5. **Criar Decorator para Usuário Autenticado**

   - Crie a pasta `src/graphql/decorators` e o arquivo `user.decorator.ts`.
   - Implemente o decorator `GQLUser` usando `createParameterDecorator` do TypeGraphQL.
   - O decorator deve buscar o usuário autenticado no contexto e retornar o objeto User do banco.

6. **Utilizar o Decorator nas Mutations**

   - Use o decorator `@GQLUser()` nas mutations para obter o usuário autenticado e acessar o `authorId` ao criar ideias.

7. **Testar Criação de Ideias**
   - No Playground, autentique-se e execute a mutation `createIdea` passando os dados necessários.
   - Verifique se a ideia é criada corretamente e associada ao usuário autenticado.

---
