# Criando Autenticação e Protegendo Rotas no Projeto Mindshare

## Destaques

- **Mutation de Login**: Implementação da mutation para autenticação de usuários.
- **DTOs de Login**: Criação dos tipos de input e output para login.
- **Validação de Senha**: Função para comparar senha informada com hash.
- **Geração e Verificação de JWT**: Emissão e validação de tokens JWT.
- **Contexto do GraphQL**: Criação de contexto para identificar usuário autenticado.
- **Middleware de Autenticação**: Proteção de resolvers e queries com middleware.
- **Testes no Playground**: Execução de login e acesso a rotas protegidas.

---

## Passo-a-Passo

1. **Criar Mutation de Login**

   - No `auth.resolver.ts`, crie a mutation `login`.
   - Crie DTOs de input (`LoginInput`) e output (`LoginOutput`) para login.
   - Mutation deve receber email e password, e retornar token, refresh token e dados do usuário autenticado.

2. **Implementar Serviço de Login**

   - No `auth.service.ts`, crie o método `login`.
   - Verifique se o usuário existe pelo email.
   - Implemente função `comparePassword` em `utils/hash.ts` usando `bcryptjs` para comparar senha informada e hash.
   - Se a senha for válida, gere os tokens JWT e retorne os dados do usuário.

3. **Criar Função de Verificação de JWT**

   - Em `utils/jwt.ts`, crie a função `verifyJWT` para validar o token e extrair o payload (id do usuário).

4. **Configurar Contexto do GraphQL**

   - Crie a pasta `src/graphql/context` e o arquivo `index.ts`.
   - Implemente a função `buildContext` para extrair o token do header `authorization`, validar o JWT e disponibilizar o id do usuário no contexto.

5. **Integrar Contexto ao Apollo Server**

   - No arquivo principal (`src/index.ts`), configure o Apollo Server para usar o `buildContext` como contexto das requisições.

6. **Criar Middleware de Autenticação**

   - Crie a pasta `src/middlewares` e o arquivo `auth.middleware.ts`.
   - Implemente a função `isAuth` que verifica se o usuário está autenticado (existe no contexto).
   - Caso não esteja autenticado, lance erro; caso esteja, prossiga para o próximo middleware ou resolver.

7. **Proteger Resolvers e Queries**

   - Utilize o decorator `@UseMiddleware(isAuth)` do TypeGraphQL para proteger resolvers ou queries específicas.
   - Pode ser aplicado na classe inteira ou em métodos específicos.

8. **Testar no Playground**

   - Inicie o servidor com:
     ```bash
     npm run dev
     ```
   - Execute a mutation de login para obter o token.
   - Tente acessar a query protegida (`getUser`) sem o token: deve retornar erro de autenticação.
   - Adicione o header er`authorization: Bear <token>` e execute novamente: deve retornar os dados do usuário.

9. **Próximos Passos**
   - Criar mutation de `createUser` protegida.
   - Implementar decorator para identificar o usuário autenticado nas próximas requisições.

---
