### Explorando Camadas e Caching

#### Introdução

- **Objetivo**: Entender melhor sobre as camadas e a estrutura de cache no Docker.
- **Importância**: Otimizar o armazenamento, o tempo de build e a eficiência do Docker.

#### Benefícios das Camadas e Caching

- **Eficiência**: Camadas permitem armazenamento eficiente e flexível.
- **Reaproveitamento**: Camadas podem ser reutilizadas em diferentes builds.
- **Cache**: Acelera o processo de build ao reutilizar camadas inalteradas.

### Conceitos Importantes

1. **Camadas no Docker**

   - **Imagem Base**: Ponto de partida para a construção da imagem.
   - **Camadas de Leitura**: Representam alterações feitas na imagem.
   - **Camada de Escrita (Read-Write)**: Permite modificações enquanto o container está em execução.

2. **Cache no Docker**
   - **Imutabilidade**: Camadas são imutáveis e substituídas quando alteradas.
   - **Reutilização**: Se não houver alterações, o Docker reutiliza o cache existente.
   - **Configuração em Pipeline**: Cache pode ser configurado para otimizar pipelines de CI/CD.

### Passo-a-Passo para Explorar Camadas e Caching

1. **Verificar o Histórico da Imagem**

   - Comando:
     ```sh
     docker history <image_name_or_id>
     ```

2. **Executar Docker Build**

   - Comando:
     ```sh
     docker build -t <image_name> .
     ```

3. **Observar a Estrutura de Cache**

   - Se não houver alterações, o Docker reutiliza o cache:
     ```sh
     docker build -t <image_name> .
     ```

4. **Modificar o Dockerfile e Rebuildar**

   - Exemplo de alteração no Dockerfile:
     ```Dockerfile
     FROM node:20-alpine3.21
     WORKDIR /app
     COPY package.json pnpm-lock.yaml ./
     RUN pnpm install
     COPY . .
     RUN pnpm build
     CMD ["node", "dist/server.mjs"]
     ```
   - Comando para rebuildar:
     ```sh
     docker build -t <new_image_name> .
     ```

5. **Verificar o Tamanho da Nova Imagem**

   - Comando:
     ```sh
     docker image ls
     ```

6. **Executar Docker History na Nova Imagem**
   - Comando:
     ```sh
     docker history <new_image_name_or_id>
     ```

### Exemplo Prático

1. **Alterar a Imagem Base no Dockerfile**

   - Substituir:
     ```Dockerfile
     FROM node:20-alpine3.21
     WORKDIR /app
     COPY package.json pnpm-lock.yaml ./
     RUN pnpm install
     COPY . .
     RUN pnpm build
     CMD ["node", "dist/server.mjs"]
     ```

2. **Construir a Nova Imagem**

   - Comando:
     ```sh
     docker build -t myapp:optimized .
     ```

3. **Verificar o Tamanho da Nova Imagem**

   - Comando:
     ```sh
     docker image ls
     ```

4. **Executar Docker History na Nova Imagem**
   - Comando:
     ```sh
     docker history myapp:optimized
     ```

### Conclusão

- **Resultado**: Melhor compreensão das camadas e do cache no Docker.
- **Próximos Passos**: Implementar outras otimizações, como segurança e uso de volumes.
