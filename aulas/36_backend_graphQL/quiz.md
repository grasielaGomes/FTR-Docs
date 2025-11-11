## Quiz Avaliativo – Backend com GraphQL

### Questionário baseado nos conteúdos do módulo de Backend com GraphQL

---

**1. O que é o GraphQL?**

- Um banco de dados relacional
- Um framework para front-end
- Uma biblioteca de autenticação
- **Uma linguagem de consulta criada pelo Facebook**

---

**2. Qual é a principal diferença entre REST e GraphQL?**

- REST utiliza apenas um endpoint
- GraphQL precisa de vários endpoints
- REST retorna apenas JSON
- **GraphQL utiliza um único endpoint e o cliente define os dados desejados**

---

**3. Qual biblioteca foi usada durante as aulas para criar o servidor GraphQL do projeto?**

- Koa
- Fastify
- Express
- **Apollo Server**

---

**4. O que é um _resolver_ no contexto do GraphQL?**

- Um tipo de banco de dados
- Um arquivo de configuração
- Um tipo de autenticação
- **Uma função que resolve e retorna os dados de uma query ou mutation**

---

**5. No projeto desenvolvido em aula, qual biblioteca foi utilizada para aplicar tipagem ao GraphQL?**

- Apollo Types
- GraphType
- TypeScript
- **TypeGraphQL**

---

**6. Qual é a função principal de uma _mutation_?**

- Consultar dados
- Apagar cache
- Gerar schemas
- **Criar ou alterar dados**

---

**7. Qual é o propósito do _JWT_ no projeto?**

- Validar tipos de dados
- Criar schemas GraphQL
- Criptografar o banco de dados
- **Fazer autenticação e geração de tokens**

---

**8. O que o _middleware_ de autenticação faz?**

- Cria novos usuários
- Faz log de erros
- Conecta ao banco de dados
- **Valida se o usuário está autenticado antes de executar resolvers**

---

**9. O que é o _decorator_ `@UseMiddleware`?**

- Cria um novo schema
- Substitui a função resolver
- Serve para criar novas tabelas no banco
- **Define uma função como middleware no resolver**

---

**10. Qual é a função do _Field Resolver_?**

- Atualizar tokens expirados
- Subir o servidor
- Validar inputs do usuário
- **Resolver campos de relacionamento, como autor de uma ideia**

---

**11. O que o _decorator_ `@GQLUser` faz no projeto?**

- Cria um novo usuário no banco
- Atualiza o token JWT
- Define um novo tipo GraphQL
- **Recupera o usuário autenticado a partir do contexto**

---

**12. Qual é a principal vantagem de usar Prisma no projeto?**

- Permite criar endpoints REST automaticamente
- **Facilita o acesso e manipulação do banco de dados com tipagem e migrations**
- Substitui o Apollo Server
- Gera tokens JWT automaticamente

---

**13. O que garante a unicidade do voto de um usuário em uma ideia?**

- O campo `id` do voto ser único
- **A restrição `@@unique([userId, ideaId])` no model Vote**
- O uso de JWT
- O uso de Field Resolver

---

**14. Para que serve o método `toggleVote` no VoteService?**

- Apenas para listar votos
- **Alternar entre votar e remover o voto de um usuário em uma ideia**
- Criar comentários em ideias
- Atualizar o conteúdo de uma ideia

---

**15. Como o relacionamento entre comentários e ideias é resolvido no GraphQL do projeto?**

- Por meio de queries REST
- **Usando Field Resolver para buscar comentários pelo `ideaId`**
- Apenas via mutation
- Por meio de JWT

---
