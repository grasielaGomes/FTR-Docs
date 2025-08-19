### Destaques do Conteúdo sobre Docker e PNPM

- **Primeira Correção no Container**:

  - Melhorar o arquivo `package.json` adicionando novas instruções.

- **Instruções Adicionadas**:

  - **Build**: Utilizar `tsup` para gerar a pasta `dist` com arquivos em formato ECMAScript Modules (ESM).
  - **Start**: Utilizar `node` para rodar o arquivo `dist/server.mjs`.

  ```script
   "build": "tsup src --format esm",
   "start": "node dist/server.mjs"
  ```

- **Instalação de Dependências**:

  - Rodar `pnpm install` para instalar `tsup` como dependência de desenvolvimento.

- **Execução do Build**:

  - Rodar `pnpm run build` para gerar a pasta `dist` e o arquivo `server.mjs`.

  ```Dockerfile
  RUN pnpm build
  ```

- **Configuração do Dockerfile**:

  - Adicionar comandos para instalar dependências, rodar o build e remover dependências de desenvolvimento.
  - Utilizar `pnpm prune --prod` para descartar dependências de desenvolvimento.
  - Alterar CMD para `start`.

  ```Dockerfile
  RUN pnpm prune --prod
  ...
  CMD ["pnpm", "start"]
  ```

- **Otimização da Imagem Docker**:

  - Reduzir o tamanho da imagem Docker utilizando `.dockerignore` para ignorar arquivos desnecessários.
  - Utilizar multi-stage build para otimizar a construção da imagem.

- **Configuração de Variáveis de Ambiente**:

  - Declarar variáveis de ambiente necessárias para a aplicação dentro do Dockerfile.
  - Ajustar a configuração para garantir que a aplicação funcione corretamente em diferentes ambientes (produção, staging, etc.).

  ```Dockerfile
  ENV CLOUDFLARE_ACCESS_KEY_ID="#"
  ENV CLOUDFLARE_SECRET_ACCESS_KEY="#"
  ENV CLOUDFLARE_BUCKET="#"
  ENV CLOUDFLARE_ACCOUNT_ID="#"
  ENV CLOUDFLARE_PUBLIC_URL="http://localhost"


  EXPOSE 3333
  ```

  - **Execução e Teste do Container**:

  - Rodar `docker build` para construir a imagem.
  - Rodar `docker run` para executar o container e verificar se ele funciona corretamente.
  - Utilizar `docker logs` para diagnosticar problemas de execução.

- **Próximos Passos**:
  - Introdução ao conceito de multi-stage build para melhorar a eficiência e reduzir o tamanho da imagem Docker.
