# Listando e Removendo Ideias no Projeto Mindshare

## Destaques

- **Query de Listagem**: Implementação da query para listar todas as ideias.
- **Retorno em Array**: Query retorna um array de modelos de ideias.
- **Integração com Prisma**: Busca de ideias no banco de dados.
- **Testes no Playground**: Execução da query de listagem e visualização dos dados.
- **Mutation de Remoção**: Implementação da mutation para remover uma ideia por ID.
- **Retorno Booleano**: Mutation retorna `true` se a ideia foi removida com sucesso.
- **Tratamento de Erros**: Verificação de existência da ideia antes de remover.

---

## Passo-a-Passo

1. **Criar Query de Listagem de Ideias**

   - No resolver de ideias, crie o método `listIdeas` que retorna um array de `IdeaModel`.
   - No service, implemente o método `listIdeas` usando:
     ```typescript
     return prismaClient.idea.findMany()
     ```
   - No Playground, crie a query `listIdeas` e selecione os campos desejados (ex: id, title, description, author { id, name, email }).

2. **Testar Listagem de Ideias**

   - Execute a query no Playground.
   - Caso não esteja autenticado, faça login e adicione headero `authorization: Bearer <token>`.
   - Verifique se todas as ideias cadastradas são listadas corretamente.

3. **Criar Mutation para Remover Ideia**

   - No resolver de ideias, crie a mutation `deleteIdea` que recebe o `id` da ideia e retorna um boolean.
   - No service, implemente o método `deleteIdea`:
     - Busque a ideia pelo ID usando `findUnique`.
     - Se não encontrar, lance erro "Ideia não encontrada".
     - Caso exista, remova usando `prismaClient.idea.delete({ where: { id } })`.
     - Retorne `true` para indicar sucesso.

4. **Testar Remoção de Ideia**

   - No Playground, execute a mutation `deleteIdea` passando o ID da ideia a ser removida.
   - Verifique que a ideia foi removida da listagem.
   - A mutation deve retornar `true` se a remoção foi bem-sucedida.

5. **Próximos Passos**
   - Implementar o módulo de comentários e relacionar com ideias e usuários.

---
