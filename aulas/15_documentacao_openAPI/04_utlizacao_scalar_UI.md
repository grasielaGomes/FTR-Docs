### Utilizando o Scalar UI para Documentação de APIs

#### Introdução

- O **Scalar UI** é uma ferramenta moderna para criar interfaces de documentação de APIs.
- Ele pode ser integrado com frameworks como **Fastify** para exibir a documentação de forma visual e interativa.

---

### Configuração do Scalar UI

#### 1. **Instalação**

- Instalar o pacote do Scalar para Fastify:
  ```bash
  pnpm install @scalar/fastify-api-reference
  ```

#### 2. **Configuração no Projeto**

- Importar o Scalar UI no servidor:
  ```javascript
  import ScalarUI from '@scalar/fastify-api-reference'
  ```
- Adicionar o Scalar ao servidor Fastify:
  ```javascript
  app.register(ScalarUI, {
    routePrefix: '/docs',
    specPath: 'openapi.json', // Caminho do arquivo de especificação
  })
  ```

#### 3. **Configuração Adicional**

- No arquivo `package.json`, adicionar:
  ```json
  "type": "module"
  ```

---

### Acessando a Documentação

#### 1. **Executando o Servidor**

- Rodar o servidor:
  ```bash
  pnpm run dev
  ```
- Acessar a documentação no navegador em:  
  `http://localhost:3333/docs`

#### 2. **Visualização**

- O Scalar carrega o arquivo `openapi.json` por padrão.
- A interface exibe as rotas documentadas de forma interativa.

---

### Personalização do Scalar UI

#### 1. **Configuração de Tema**

- Alterar o tema da interface:
  ```javascript
  theme: 'modern' // Opções: 'modern' ou 'classic'
  ```
- **Modern:** Interface com sidebar para navegação.
- **Classic:** Layout centralizado, similar ao Swagger UI.

#### 2. **Configuração de Layout**

- Configurar o layout para atender às preferências do projeto:
  ```javascript
  layout: 'modern' // Padrão é 'modern'
  ```

---

### Observações Finais

- O Scalar UI é altamente configurável, permitindo ajustes de tema e layout.
- Ele oferece uma experiência moderna e amigável para navegar pela documentação.
- Após configurar o Scalar, o próximo passo é criar e documentar as rotas da aplicação com base na especificação OpenAPI.
