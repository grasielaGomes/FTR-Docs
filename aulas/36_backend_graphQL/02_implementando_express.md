# Implementando Express, Prisma e Cadastro de Usuário no Projeto Mindshare

## Destaques

- **Express**: Integração do Apollo Server com Express para maior flexibilidade.
- **Prisma + SQLite**: ORM para manipulação do banco de dados local.
- **TypeGraphQL**: Tipagem e decorators para GraphQL no Node.js.
- **Cadastro de Usuário**: Implementação de mutation para registro de usuários.
- **Hash de Senha e JWT**: Segurança no cadastro e autenticação.

---

## Passo-a-Passo

1. **Instalar Bibliotecas Necessárias**

   - No terminal, execute:
     ```bash
     npm install @prisma/client express reflect-metadata type-graphql
     npm install apollo-server-express @apollo/server graphql
     npm install @apollo/server-express4
     ```
   - Instale dependências de desenvolvimento:
     ```bash
     npm install -D prisma @types/express
     ```

2. **Inicializar Prisma e Configurar SQLite**

   - Gere a configuração inicial do Prisma:
     ```bash
     npx prisma init --datasource-provider sqlite
     ```
   - Isso criará a pasta `prisma` e o arquivo `schema.prisma`.
   - No arquivo `.env`, confira a variável `DATABASE_URL` apontando para o arquivo SQLite.

3. **Definir o Model de Usuário no Prisma**

   - No arquivo `prisma/schema.prisma`, defina o model:
     ```prisma
     model User {
       id         String   @id @default(uuid())
       name       String
       email      String   @unique
       password   String
       createdAt  DateTime @default(now())
       updatedAt  DateTime @updatedAt
     }
     ```
   - Salve o arquivo para formatar automaticamente (recomenda-se instalar a extensão do Prisma no VS Code).

4. **Criar a Migration do Banco de Dados**

   - Execute:
     ```bash
     npx prisma migrate dev --name create_user
     ```

5. **Configurar o Apollo Server com Express**

   - Importe e configure o Express no seu arquivo principal (`src/index.ts`).
   - Utilize o `buildSchema` do TypeGraphQL para gerar o schema automaticamente.
   - Configure o Apollo Server para usar o schema gerado e integre com o Express.

6. **Criar o Resolver de Cadastro (Mutation)**

   - Crie a pasta `src/resolvers` e o arquivo `auth.resolver.ts`.
   - Implemente a mutation `register` usando decorators do TypeGraphQL.
   - Crie DTOs de input e output em `src/dtos/input` e `src/dtos/output`.

7. **Criar o Model de Usuário para GraphQL**

   - Em `src/models/user.model.ts`, defina a classe `UserModel` com decorators `@ObjectType` e `@Field`.

8. **Implementar Serviço de Cadastro**

   - Crie a pasta `src/services` e o arquivo `auth.service.ts`.
   - Implemente a lógica de cadastro: verifique se o usuário existe, faça hash da senha, crie o usuário no banco e gere tokens JWT.

9. **Criar Utilitários para Hash e JWT**

   - Em `src/utils/hash.ts`, implemente a função para hash de senha usando `bcryptjs`.
   - Em `src/utils/jwt.ts`, implemente a função para gerar JWT usando `jsonwebtoken`.

   - Instale as dependências:
     ```bash
     npm install bcryptjs jsonwebtoken
     npm install -D @types/jsonwebtoken
     ```

10. **Ajustar o Model Prisma para Email Único**

    - No `schema.prisma`, adicione `@unique` ao campo `email` se ainda não estiver.
    - Rode nova migration se necessário:
      ```bash
      npx prisma migrate dev --name change_user_email_unique
      ```

11. **Testar o Cadastro de Usuário**

    - Inicie o servidor:
      ```bash
      npm run dev
      ```
    - Use o Playground do Apollo Server para executar a mutation de cadastro.

12. **Criar Query Simples para Inicialização**

    - Crie uma query simples (ex: buscar usuário por ID) para garantir que o servidor GraphQL suba corretamente.

---
