### Especificação OpenAPI: Introdução e Prática

#### Introdução

- **Objetivo:** Explorar o uso do OpenAPI para documentar APIs REST.
- **Contexto:** Diferente de padrões como GraphQL e gRPC, que são autodocumentáveis, APIs REST requerem documentação manual.

---

### O que é OpenAPI?

- **Definição:** Um padrão de escrita para documentar APIs REST.
- **Integração:** Compatível com ferramentas como Insomnia, Postman e bibliotecas front-end (ex.: Orval, OpenAPIts.dev).
- **Benefícios:**
  - Facilita a geração de requisições automatizadas.
  - Permite importar especificações para ferramentas de teste e desenvolvimento.

---

### Criando uma Especificação OpenAPI

#### Estrutura Básica

1. **Arquivo `spec.yaml`:**

   - Define a especificação da API.
   - Exemplo de início:
     ```yaml
     openapi: 3.1.0
     info:
       title: Example API Docs
       version: 1.0.0
     paths: {}
     ```

2. **Seções Importantes:**
   - **Info:** Informações básicas da API (ex.: título e versão).
   - **Paths:** Define as rotas e métodos HTTP (ex.: `GET`, `POST`).
   - **Components:** Reutiliza esquemas de dados entre rotas.

---

### Exemplo de Documentação

#### Rota `GET /users`

- **Descrição:** Lista todos os usuários.
- **Parâmetros:**
  - `page` (query):
    - Tipo: `integer`
    - Valor padrão: `1`
    - Não obrigatório.
- **Resposta:**
  - Código HTTP: `200`
  - Conteúdo:
    ```yaml
    content:
      application/json:
        schema:
          type: object
          properties:
            data:
              type: array
              items:
                $ref: '#/components/schemas/User'
    ```

#### Rota `POST /users`

- **Descrição:** Cria um novo usuário.
- **Request Body:**
  - Tipo: `application/json`
  - Esquema:
    ```yaml
    $ref: '#/components/schemas/UserInput'
    ```

---

### Reutilização de Esquemas

#### Exemplo de Esquema `User`

- **Definição:**
  ```yaml
  components:
    schemas:
      User:
        type: object
        properties:
          id:
            type: string
          name:
            type: string
            maxLength: 100
          email:
            type: string
            format: email
        required:
          - id
          - name
          - email
      UserInput:
        type: object
        properties:
          name:
            type: string
            maxLength: 100
          email:
            type: string
            format: email
        required:
          - name
          - email
  ```

---

### Ferramentas para Visualização

- **Swagger UI:** Interface tradicional para navegar na documentação.
- **Scalar:** Ferramenta moderna com interface mais amigável.
- **Exemplo de Uso:**
  - Importar o arquivo `spec.yaml` para gerar uma interface navegável.

---

### Observações Finais

- **Documentação Desconectada do Código:**
  - A especificação OpenAPI não executa lógica no backend.
  - Serve como referência para consumidores da API.
- **Próximos Passos:**
  - Usar a especificação para gerar interfaces navegáveis.
  - Explorar ferramentas como Swagger e Scalar para visualização e testes. components:
    schemas:
    User:
    type: object
    properties:
    id:
    type: string
    name:
    type: string
    maxLength: 100
    email:
    type: string
    format: email
    required: - id - name - email
    UserInput:
    type: object
    properties:
    name:
    type: string
    maxLength: 100
    email:
    type: string
    format: email
    required: - name - email

---

### Ferramentas para Visualização

- **Swagger UI:** Interface tradicional para navegar na documentação.
- **Scalar:** Ferramenta moderna com interface mais amigável.
- **Exemplo de Uso:**
  - Importar o arquivo `spec.yaml` para gerar uma interface navegável.

---

### Observações Finais

- **Documentação Desconectada do Código:**
  - A especificação OpenAPI não executa lógica no backend.
  - Serve como referência para consumidores da API.
- **Próximos Passos:**
  - Usar a especificação para gerar interfaces navegáveis.
  - Explorar ferramentas como Swagger e Scalar para visualização e testes.
