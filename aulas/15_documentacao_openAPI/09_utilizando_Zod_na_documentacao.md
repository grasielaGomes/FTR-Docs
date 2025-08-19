### Utilizando Zod na Documentação com OpenAPI e Fastify

#### Introdução

- O OpenAPI permite documentar APIs de forma independente da linguagem ou framework.
- O **Zod** é uma biblioteca de esquemas que pode ser usada para:
  - **Validação:** Verificar dados de entrada.
  - **Serialização:** Modificar dados de saída.
- O Zod pode ser integrado ao **Fastify** para gerar documentação automaticamente.

---

### Configuração Inicial

#### 1. **Instalação**

- Instalar o Zod e o provedor de tipagem para Fastify:
  ```bash
  pnpm install zod @fastify/type-provider-zod
  ```

#### 2. **Configuração no Servidor**

- Configurar o Fastify para usar o Zod:

  ```typescript
  import {
    validatorCompiler,
    serializerCompiler,
  } from '@fastify/type-provider-zod'

  app.setValidatorCompiler(validatorCompiler)
  app.setSerializerCompiler(serializerCompiler)
  ```

#### 3. **Transformação para Swagger**

- Adicionar suporte para transformar esquemas Zod em documentação Swagger:

  ```typescript
  import { jsonSchemaTransform } from '@fastify/type-provider-zod';

  app.register(FastifySwagger, {
    openapi: { ... },
    transform: jsonSchemaTransform,
  });
  ```

---

### Benefícios do Zod

#### 1. **Validação**

- Valida dados de entrada automaticamente.
- Exemplo: Validar query string:
  ```typescript
  querystring: z.object({
    page: z.number().int().min(1).default(1),
  })
  ```

#### 2. **Serialização**

- Modifica dados de saída antes de enviá-los.
- Exemplo: Remover campos sensíveis como senhas.

#### 3. **Documentação Automática**

- A documentação é gerada automaticamente com base nos esquemas Zod.

---

### Exemplo de Uso com Rotas

#### 1. **Query String**

- Substituir a definição manual por um esquema Zod:
  ```typescript
  querystring: z.object({
    page: z.number().int().min(1).default(1),
  })
  ```

#### 2. **Resposta**

- Documentar a resposta com Zod:
  ```typescript
  response: {
    200: z.object({
      data: z.array(
        z.object({
          id: z.string(),
          name: z.string().nullable().max(100),
          email: z.string().email(),
        })
      ),
    }),
  };
  ```

#### 3. **Corpo da Requisição**

- Documentar o corpo da requisição:
  ```typescript
  body: z.object({
    name: z.string().nullable().max(100),
    email: z.string().email(),
  })
  ```

---

### Limitações Atuais

- O Zod ainda não suporta adicionar **exemplos** diretamente na documentação.
- Uma PR está em andamento para permitir a inclusão de metadados como exemplos.

---

### Vantagens da Integração

- **Validação e Documentação Unificadas:** A validação e a documentação são geradas a partir do mesmo esquema.
- **Erros Automáticos:** O Fastify detecta automaticamente inconsistências entre os dados e os esquemas.
- **Produtividade:** Reduz a duplicação de código ao conectar validação, serialização e documentação.

---

### Observações Finais

- A integração do Zod com Fastify, Swagger e Scalar é altamente eficiente.
- A documentação é gerada automaticamente e acompanha as mudanças no código.
- Essa abordagem é recomendada para projetos que buscam produtividade e consistência.
