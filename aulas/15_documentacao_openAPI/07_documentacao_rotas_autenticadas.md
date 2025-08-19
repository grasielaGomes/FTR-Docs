### Documentação de Rotas Autenticadas com OpenAPI

#### Introdução

- Demonstrar como exibir na documentação que uma rota requer autenticação.
- O método mais comum em APIs REST é o uso de **JWT (JSON Web Token)** enviado no header da requisição.

---

### Configuração de Autenticação Global

#### 1. **Definição no OpenAPI**

- Configurar a autenticação como um esquema global no OpenAPI:
  ```yaml
  components:
    securitySchemes:
      BetterAuth:
        type: http
        scheme: bearer
        bearerFormat: JWT
  ```

#### 2. **Descrição dos Campos**

- **`type`**: Define o tipo de autenticação (ex.: `http`).
- **`scheme`**: Especifica o formato do token (ex.: `bearer`).
- **`bearerFormat`**: Indica que o token segue o padrão JWT.

---

### Configuração de Autenticação em Rotas

#### 1. **Adicionando Autenticação em Rotas Específicas**

- Para rotas que requerem autenticação, adicionar o campo `security`:
  ```yaml
  security:
    - BetterAuth: []
  ```
- **Exemplo:** Rota de criação de usuários (`POST /users`) requer autenticação, enquanto a rota de listagem (`GET /users`) não.

#### 2. **Suporte a Múltiplos Métodos de Autenticação**

- O campo `security` aceita múltiplos métodos de autenticação:
  ```yaml
  security:
    - BetterAuth: []
    - AnotherAuthMethod: []
  ```

---

### Testando a Autenticação

#### 1. **Interface de Teste**

- Ferramentas como Swagger ou Scalar permitem testar rotas autenticadas.
- Ao acessar a rota, será exibida uma opção para inserir o token de autenticação.

#### 2. **Autenticação Global**

- É possível configurar o token de forma global na interface:
  - Todas as rotas que dependem de autenticação herdam automaticamente o token configurado.

---

### Observações Finais

- **Flexibilidade:** O OpenAPI permite configurar múltiplos métodos de autenticação para uma mesma rota.
- **Facilidade:** Configurar o token globalmente simplifica o uso e os testes de rotas autenticadas.
- **Próximos Passos:** Expandir a documentação para incluir mais rotas e métodos de autenticação, se necessário.
