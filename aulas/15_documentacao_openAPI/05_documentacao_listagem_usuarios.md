### Documentação da Rota de Listagem de Usuários com Fastify e Swagger

#### Introdução

- Criar uma rota para listar usuários (`GET /users`) com documentação integrada ao Swagger.
- Utilizar o **Fastify** para configurar a rota e adicionar a documentação diretamente no código.

---

### Estrutura da Rota

#### 1. **Criação do Arquivo**

- Criar o arquivo `getUsersRoute.ts` na pasta de rotas.

#### 2. **Definição da Rota**

- Exportar a rota como um plugin do Fastify:
  ```typescript
  export const getUsersRoute = async (app: FastifyInstance) => {
    app.get('/users', {
      schema: {
        summary: 'Get all users',
        querystring: {
          type: 'object',
          properties: {
            page: { type: 'integer', minimum: 1, default: 1 },
          },
        },
        response: {
          200: {
            description: 'A list of users',
            type: 'object',
            properties: {
              data: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    id: { type: 'string' },
                    name: { type: ['string', 'null'] },
                    email: { type: 'string', format: 'email' },
                  },
                  required: ['id', 'name', 'email'],
                },
              },
            },
          },
        },
      },
      handler: async () => {
        return { data: [] } // Retorna um array vazio como exemplo
      },
    })
  }
  ```

---

### Documentação da Rota

#### 1. **Query Parameters**

- Adicionar parâmetros de consulta (querystring):
  - **`page`**:
    - Tipo: `integer`
    - Valor mínimo: `1`
    - Valor padrão: `1`

#### 2. **Resposta**

- Adicionar a documentação da resposta HTTP 200:
  - **Descrição:** "A list of users"
  - **Estrutura do objeto de resposta:**
    - **`data`**: Um array de objetos contendo:
      - **`id`**: Tipo `string`, obrigatório.
      - **`name`**: Tipo `string` ou `null`, obrigatório.
      - **`email`**: Tipo `string`, formato `email`, obrigatório.

---

### Configuração no Servidor

#### 1. **Registro da Rota**

- Registrar a rota no servidor:
  ```typescript
  app.register(getUsersRoute)
  ```

#### 2. **Testando a Rota**

- Acessar a documentação gerada pelo Swagger para verificar:
  - Parâmetros de consulta (`page`).
  - Estrutura da resposta (`data` com `id`, `name`, `email`).

---

### Observações Finais

- A rota está documentada com suporte ao Swagger, permitindo visualização interativa.
- A documentação inclui:
  - Parâmetros de consulta.
  - Estrutura detalhada da resposta.
- O próximo passo seria adicionar mais rotas e expandir a documentação.
