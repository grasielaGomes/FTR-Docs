# Criando Query de Usuário (getUser) no Projeto Mindshare

## Destaques

- **Query getUser**: Implementação de uma query para buscar usuário por ID.
- **UserResolver e UserService**: Separação da lógica de busca em resolver e service.
- **Integração com Prisma**: Busca de usuário no banco de dados.
- **Testes no Playground**: Execução de queries e mutations para cadastro e busca de usuário.
- **Correção de problemas comuns**: Importação do Reflect Metadata e ajustes no construtor.

---

## Passo-a-Passo

1. **Criar UserResolver e UserService**

   - Crie o arquivo `src/resolvers/user.resolver.ts`.
   - Crie o arquivo `src/services/user.service.ts`.

2. **Implementar Query getUser**

   - No `UserResolver`, crie uma classe `UserResolver` com uma query `getUser`.
   - A query deve receber um argumento `id` (string) e retornar o `UserModel`.
   - No `UserService`, implemente o método `findUser` que busca o usuário pelo ID usando Prisma:
     ```typescript
     const user = await prismaClient.user.findUnique({ where: { id } })
     if (!user) throw new Error('Usuário não existe')
     return user
     ```

3. **Injetar UserService no Resolver**

   - No construtor do `UserResolver`, injete o `UserService` como dependência.
   - Utilize o método `findUser` para retornar o usuário na query.

4. **Importar Reflect Metadata**

   - No arquivo principal (`src/index.ts`), adicione:
     ```typescript
     import 'reflect-metadata'
     ```
   - Isso é necessário para o funcionamento dos decorators do TypeGraphQL.

5. **Registrar o UserResolver**

   - No arquivo de inicialização do Apollo Server, adicione o `UserResolver` ao schema.

6. **Testar no Playground**

   - Inicie o servidor com:
     ```bash
     npm run dev
     ```
   - No Playground, execute a mutation de cadastro (`register`) e copie o ID do usuário criado.
   - Execute a query `getUser` passando o ID para buscar os dados do usuário.

7. **Ajustar Retorno e Campos**

   - No Playground, selecione apenas os campos desejados na query (ex: id, name, email).
   - Verifique que o password está encriptado e os tokens são retornados corretamente na mutation.

8. **Próximos Passos**
   - Implementar a mutation de login.
   - Criar rotas protegidas e middleware de autenticação.
   - Desenvolver decorator para identificar o usuário autenticado nas próximas mutations.

---
