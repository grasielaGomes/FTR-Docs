### Configurando uma Aplicação com Fastify e Swagger

#### Introdução

- O objetivo é integrar o **Fastify** com o **Swagger** para gerar documentação de APIs.
- O Swagger possui plugins que podem ser usados com diversos frameworks ou até sem framework.

---

### Configuração Inicial

#### 1. **Inicializando o Projeto**

- Criar o projeto com:
  ```bash
  pnpm init
  ```
- Instalar as dependências:
  ```bash
  pnpm install fastify @fastify/cors @fastify/swagger typescript @types/node
  ```

#### 2. **Configuração do TypeScript**

- Criar o arquivo `tsconfig.json` com base no **tsconfig base** da Microsoft para Node.js 23+.
- Adicionar as opções:
  ```json
  "compilerOptions": {
    "allowImportingTsExtensions": true,
    "noEmit": true
  }
  ```

---

### Criando o Servidor com Fastify

#### 1. **Estrutura do Servidor**

- Criar o arquivo `server.ts` na pasta `src`.
- Configurar o servidor:

  ```typescript
  import Fastify from 'fastify'
  import FastifyCors from '@fastify/cors'
  import FastifySwagger from '@fastify/swagger'

  const app = Fastify()

  app.register(FastifyCors, { origin: '*' })
  app.register(FastifySwagger, {
    openapi: {
      info: {
        title: 'Example API Docs',
        version: '1.0.0',
      },
      components: {},
      paths: {},
    },
  })

  app.listen({ port: 3333 }).then(() => {
    console.log('HTTP Server running on http://localhost:3333')
  })
  ```

#### 2. **Adicionando Rotas**

- Criar uma rota para exibir a documentação:
  ```typescript
  app.get('/spec.json', async () => app.swagger())
  ```

---

### Configuração do Swagger

#### 1. **Formato da Documentação**

- O Swagger gera a documentação no formato **JSON** por padrão.
- Para gerar no formato **YAML**, adicionar a opção:
  ```typescript
  yaml: true
  ```

#### 2. **Separação de Rotas**

- A documentação pode ser separada por rotas para facilitar a organização.

---

### Scripts e Execução

#### 1. **Script de Desenvolvimento**

- Adicionar no `package.json`:
  ```json
  "scripts": {
    "dev": "node --experimental-specifier-resolution=node --watch src/server.ts"
  }
  ```

#### 2. **Executando o Servidor**

- Rodar o servidor:
  ```bash
  pnpm run dev
  ```
- Acessar a aplicação em `http://localhost:3333`.

---

### Observações Finais

- **NoEmit:** Configurado para evitar a conversão de TypeScript para JavaScript, usando TypeScript apenas para tipagem.
- **Swagger:** A documentação gerada pode ser acessada em `/spec.json`.
- **Formato JSON:** É mais legível e fácil de manipular em comparação ao YAML.
