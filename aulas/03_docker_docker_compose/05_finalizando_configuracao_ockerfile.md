### Destaques do Conteúdo sobre Docker e PNPM

- **Instalação de Dependências**:

  - Instalar `npm`, `node` e `pnpm`.
  - Rodar `pnpm install` para instalar as dependências do projeto.

  ```Dockerfile
  FROM node:20.18
  RUN npm i -g pnpm
  ```

- **Problemas Comuns**:

  - Erro "no package.json found" ao rodar comandos de instalação de dependências.
  - Necessidade de copiar `package.json` e `pnpm-lock.yaml` para dentro do container.

- **Boas Práticas**:

  - Definir um diretório de trabalho (`workdir`) para organizar os arquivos dentro do container.
  - Evitar copiar arquivos diretamente para a raiz do container.

  ```Dockerfile
  WORKDIR /usr/src/app
  COPY package.json pnpm-lock.yaml ./
  ```

- **Execução de Comandos**:

  - Rodar `pnpm install` e `pnpm dev` dentro do container.
  - Expor a porta correta da API (porta 3333).
  - Executar script dev

    ```Dockerfile
    RUN pnpm install
    COPY . .
    EXPOSE 3333
    CMD ["pnpm", "dev"]
    ```

- **Imutabilidade e Cache**:

  - Conceito de imutabilidade das camadas do Docker.
  - Uso de cache para acelerar a construção da imagem.

- **Problemas de Tamanho da Imagem**:

  - Imagens grandes (1GB) podem ser problemáticas para download e execução.
  - Necessidade de otimizar a imagem para reduzir o tamanho.

- **Uso do `.dockerignore`**:

  - Ignorar arquivos desnecessários como `node_modules`, `.env` e `Dockerfile` ao copiar para o container.

  ```.dockerignore
  node_modules
  .env
  .env.example
  Dockerfile
  dist
  ```

- **Comandos Docker**:

  - `docker build -t widget-server:v1 .` para construir a imagem.
  - `docker run -p 3000:3333 -d widget-server:v1` para executar o container.
  - `docker ps` para listar containers em execução.
  - `docker logs` para visualizar logs do container.
  - `docker stop` e `docker start` para parar e iniciar containers.

- **Problemas de Execução**:
  - Necessidade de corrigir problemas como a ausência do arquivo `.env` dentro do container.
  - Ajustes necessários para seguir boas práticas e garantir a execução correta da aplicação.
