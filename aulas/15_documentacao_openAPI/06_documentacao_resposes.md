### Documentação da Rota de Criação de Usuários com Exemplos

#### Introdução

- Criar a rota `POST /users` para adicionar novos usuários.
- Demonstrar como documentar a rota com exemplos detalhados utilizando Swagger e OpenAPI.

---

### Estrutura da Rota

#### 1. **Definição do Corpo da Requisição**

- A rota aceita um **body** com as seguintes propriedades:
  - **`name`**: Nome do usuário (tipo `string`).
  - **`email`**: E-mail do usuário (tipo `string`, formato `email`).

#### 2. **Resposta**

- Código HTTP: **201** (Created).
- Retorna um objeto com:
  - **`userId`**: ID do usuário recém-criado.
  - **Descrição:** "New user ID salvo".

---

### Adicionando Exemplos na Documentação

#### 1. **Exemplo de Retorno**

- Adicionar exemplos para a resposta:
  ```json
  {
    "userId": "12345"
  }
  ```
- Exibe o ID do usuário recém-criado.

#### 2. **Exemplo de Corpo da Requisição**

- Adicionar exemplos para o corpo da requisição:
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com"
  }
  ```
- Facilita o teste da API diretamente na interface do Swagger ou Scalar.

---

### Testando a Rota

#### 1. **Execução de Testes**

- A interface do Swagger ou Scalar permite executar requisições diretamente.
- O exemplo pré-preenchido pode ser usado para testar a API.

#### 2. **Testando com Diferentes Cenários**

- Adicionar múltiplos exemplos para diferentes combinações de parâmetros:
  - Exemplo com valores nulos.
  - Exemplo com valores completos.

---

### Observações Finais

- **Prover Exemplos:** Adicionar exemplos para facilitar o uso da API por desenvolvedores.
- **Flexibilidade:** Exemplos podem ser adicionados em qualquer parte da documentação (requisição, resposta, etc.).
- **Melhor Experiência:** Exemplos ajudam a testar a API diretamente na interface, reduzindo erros e aumentando a produtividade.
