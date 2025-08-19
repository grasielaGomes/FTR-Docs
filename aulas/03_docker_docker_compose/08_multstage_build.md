### Conhecendo e Implementando Multi-Stage Build

#### Introdução

- **Objetivo**: Implementar o Multi-Stage Build para otimizar o tamanho da imagem Docker.
- **Importância**: Reduzir o tamanho da imagem impacta no armazenamento, no tempo de pull e na superfície de ataque.

#### Benefícios do Multi-Stage Build

- **Menor Superfície de Ataque**: Menos pacotes e camadas.
- **Maior Eficiência**: Menor tempo de pull e armazenamento.
- **Otimização**: Utilizar uma imagem maior para construção e uma menor para execução.

### Passo-a-Passo para Implementar Multi-Stage Build

1. **Manter a Imagem Base Atual**

   - Utilizar a imagem maior para a instalação do PNPM.
   - Exemplo de Dockerfile:
     ```Dockerfile
     FROM node:20.18 AS base
     ```

2. **Instalar o PNPM na Imagem Base**

   - Instalar o PNPM na imagem base.
   - Exemplo de Dockerfile:
     ```Dockerfile
     RUN npm install -g pnpm
     ```

3. **Criar um Alias para a Imagem Base**

   - Utilizar um alias para a imagem base.
   - Exemplo de Dockerfile:
     ```Dockerfile
     FROM base AS dependencies
     ```

4. **Definir o Diretório de Trabalho e Copiar Dependências**

   - Definir o diretório de trabalho e copiar `package.json` e `pnpm-lock.yaml`.
   - Exemplo de Dockerfile:
     ```Dockerfile
     WORKDIR /app
     COPY package.json pnpm-lock.yaml ./
     RUN pnpm install
     ```

5. **Criar a Etapa de Build**

   - Utilizar a imagem base para a etapa de build.
   - Exemplo de Dockerfile:
     ```Dockerfile
     FROM base AS build
     WORKDIR /app
     COPY . .
     RUN pnpm build
     ```

6. **Criar a Imagem Final com Alpine**

   - Utilizar a imagem menor para a execução.
   - Exemplo de Dockerfile:
     ```Dockerfile
     FROM node:20-alpine3.21 AS run
     WORKDIR /app
     COPY --from=build /app/dist ./dist
     COPY --from=dependencies /app/node_modules ./node_modules
     COPY --from=dependencies /app/package.json ./
     CMD ["node", "dist/server.mjs"]
     ```

7. **Construir a Nova Imagem**

   - Comando:
     ```sh
     docker build -t myapp:multistage .
     ```

8. **Verificar o Tamanho da Nova Imagem**

   - Comando:
     ```sh
     docker image ls
     ```

9. **Executar Docker History na Nova Imagem**
   - Comando:
     ```sh
     docker history myapp:multistage
     ```

### Exemplo Prático

1. **Alterar a Imagem Base no Dockerfile**

   - Substituir:
     ```Dockerfile
     FROM node:20.18 AS base
     RUN npm install -g pnpm
     FROM base AS dependencies
     WORKDIR /app
     COPY package.json pnpm-lock.yaml ./
     RUN pnpm install
     FROM base AS build
     WORKDIR /app
     COPY . .
     RUN pnpm build
     FROM node:20-alpine3.21 AS run
     WORKDIR /app
     COPY --from=build /app/dist ./dist
     COPY --from=dependencies /app/node_modules ./node_modules
     COPY --from=dependencies /app/package.json ./
     CMD ["node", "dist/server.mjs"]
     ```

2. **Construir a Nova Imagem**

   - Comando:
     ```sh
     docker build -t myapp:multistage .
     ```

3. **Verificar o Tamanho da Nova Imagem**

   - Comando:
     ```sh
     docker image ls
     ```

4. **Executar Docker History na Nova Imagem**
   - Comando:
     ```sh
     docker history myapp:multistage
     ```

### Conclusão

- **Resultado**: Redução significativa do tamanho da imagem.
- **Próximos Passos**: Implementar outras otimizações, como distroless e segurança.
