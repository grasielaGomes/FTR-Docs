# Usando o Decorator GQLUser e Field Resolver no Projeto Mindshare

## Destaques

- **Uso do Decorator GQLUser**: Como acessar o usuário autenticado dentro do resolver.
- **Proteção com Middleware**: Garantia de autenticação usando o middleware `isAuth`.
- **Testes no Playground**: Execução de mutations autenticadas e análise do retorno.
- **Uso de Field Resolver**: Resolução de campos relacionados (ex: autor da ideia) via Field Resolver.
- **Atualização de Ideias**: Implementação da mutation para atualizar ideias existentes.

---

## Passo-a-Passo

1. **Utilizar o Decorator GQLUser no Resolver**

   - No método da mutation, após os argumentos, adicione o decorator `@GQLUser()` para acessar o usuário autenticado.
   - Use `user.id` para associar o autor ao criar uma ideia.

2. **Proteger a Mutation com Middleware**

   - Adicione o middleware `@UseMiddleware(isAuth)` ao resolver/mutation para garantir que apenas usuários autenticados possam executar a ação.

3. **Testar Criação de Ideia no Playground**

   - No Playground, crie uma mutation `createIdea` com os campos desejados (id, title, description, author).
   - Se não estiver autenticado, será retornado erro.
   - Faça login, obtenha o token e adicione o header `authorization: Bearer <token>` para autenticar a requisição.

4. **Implementar Field Resolver para Autor**

   - No `IdeaResolver`, crie um método com o decorator `@FieldResolver()` para o campo `author`.
   - Use o decorator `@Root()` para acessar a ideia e buscar o usuário pelo `authorId` usando o `UserService`.
   - Retorne o objeto do usuário relacionado.

5. **Testar Field Resolver no Playground**

   - Execute a mutation `createIdea` e verifique se o campo `author` retorna os dados completos do usuário.
   - O Field Resolver pode ser usado para buscar dados relacionados de outros bancos ou APIs externas.

6. **Implementar Mutation de Atualização de Ideia**

   - Crie um DTO `UpdateIdeaInput` com campos opcionais para atualização (title, description) e campo obrigatório `id`.
   - No `IdeaService`, implemente o método `updateIdea`:
     - Verifique se o ID foi informado.
     - Busque a ideia pelo ID, lance erro se não existir.
     - Atualize os campos informados usando Prisma.
   - No `IdeaResolver`, crie a mutation `updateIdea`, recebendo o ID e os dados a serem atualizados.

7. **Testar Atualização de Ideia no Playground**
   - Crie uma mutation `updateIdea` passando o ID da ideia e os campos a serem atualizados.
   - Verifique se a ideia é atualizada corretamente e se o campo `author` retorna os dados do usuário.

---
