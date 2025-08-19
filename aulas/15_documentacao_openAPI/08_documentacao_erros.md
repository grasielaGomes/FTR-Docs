### Documentação de Erros em Rotas com OpenAPI

#### Introdução

- É essencial documentar os possíveis erros que podem ocorrer em cada rota.
- Exemplos:
  - Na rota `GET /users`, o array pode estar vazio.
  - Na rota `POST /users`, erros como e-mail duplicado podem ocorrer.

---

### Exemplos de Erros

#### 1. **Erro de Conflito (409)**

- **Descrição:** Ocorre quando um e-mail duplicado é enviado.
- **Código HTTP:** 409 (Conflict).
- **Exemplo de Resposta:**
  ```yaml
  409:
    description: 'User email already exists'
    content:
      application/json:
        schema:
          type: object
          properties:
            message:
              type: string
              example: 'User email already exists'
  ```

#### 2. **Erro de Validação (422)**

- **Descrição:** Ocorre quando os dados enviados não atendem aos requisitos.
- **Código HTTP:** 422 (Unprocessable Entity).
- **Exemplo de Resposta:**
  ```yaml
  422:
    description: 'Validation fails'
    content:
      application/json:
        schema:
          type: object
          properties:
            errors:
              type: array
              items:
                type: object
                properties:
                  field:
                    type: string
                    example: 'name'
                  error:
                    type: string
                    example: 'Field is required'
  ```

---

### Estrutura de Erros

#### 1. **Erro de Conflito**

- **Mensagem:** "User email already exists".
- **Formato:** Objeto com uma propriedade `message` do tipo `string`.

#### 2. **Erro de Validação**

- **Mensagem:** "Validation fails".
- **Formato:**
  - Um array de objetos contendo:
    - **`field`**: Nome do campo com erro.
    - **`error`**: Mensagem de erro associada ao campo.

---

### Testando os Erros

#### 1. **Simulação de Erros**

- Testar cenários como:
  - E-mail duplicado.
  - Campos obrigatórios ausentes.

#### 2. **Interface de Teste**

- Ferramentas como Swagger ou Scalar permitem visualizar e testar os erros documentados.

---

### Observações Finais

- **Clareza:** Documentar erros ajuda os desenvolvedores a entenderem como lidar com falhas.
- **Flexibilidade:** A estrutura de erros pode ser ajustada conforme as necessidades do projeto.
- **Próximos Passos:** Expandir a documentação para incluir mais cenários de erro e exemplos detalhados.
