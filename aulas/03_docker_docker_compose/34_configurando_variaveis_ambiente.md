### Destaques do Texto

1. **Variáveis de Ambiente**

   - Utilização de variáveis de ambiente no Docker Compose.
   - Boa prática: não expor variáveis diretamente no código.
   - Utilizar arquivos `.env` para armazenar variáveis de ambiente.

2. **Configuração de Platform**

   - Definir a arquitetura do container utilizando a configuração `platform`.
   - Importante para garantir compatibilidade em diferentes ambientes.

3. **Controle de Restart**
   - Configurar políticas de reinício para containers.
   - Opções: `always`, `on-failure`, `unless-stopped`.
   - Utilizar `restart` para garantir que containers se recuperem automaticamente de falhas.

### Passo-a-Passo

1. **Criar o Arquivo Docker Compose**

   - Crie um arquivo chamado `docker-compose.yml` no diretório raiz do seu projeto.

2. **Criar o Arquivo .env**

   - Crie um arquivo chamado `.env` no diretório raiz do seu projeto.
   - Adicione as variáveis de ambiente necessárias:
     ```env
     POSTGRES_USER=root
     POSTGRES_PASSWORD=root
     POSTGRES_DB=widget_server
     POSTGRES_PORT=5432
     APP_PORT=3000
     ```

3. **Definir a Estrutura Básica com Variáveis de Ambiente e Restart**

   ```yaml
   version: '3'
   services:
     app:
       build: .
       ports:
         - '${APP_PORT}:${APP_PORT}'
       environment:
         - ENV_VAR1=value1
         - ENV_VAR2=value2
       networks:
         - widget_net
       depends_on:
         - db
       restart: always
     db:
       image: postgres:latest
       container_name: postgres
       ports:
         - '${POSTGRES_PORT}:${POSTGRES_PORT}'
       environment:
         - POSTGRES_USER=${POSTGRES_USER}
         - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
         - POSTGRES_DB=${POSTGRES_DB}
       networks:
         - db_net
       restart: on-failure
   networks:
     widget_net:
       driver: bridge
     db_net:
       driver: bridge
   ```

4. **Subir os Serviços**

   - No terminal, navegue até o diretório do projeto e execute:

   ```sh
   docker-compose up -d
   ```

5. **Verificar Containers e Logs**

   - Verifique os containers em execução:

   ```sh
   docker ps
   ```

   - Verifique os logs de um container específico:

   ```sh
   docker logs <container_id>
   ```

6. **Configurar Platform (Opcional)**

   - Adicione a configuração `platform` para definir a arquitetura do container:

   ```yaml
   services:
     app:
       build: .
       ports:
         - '${APP_PORT}:${APP_PORT}'
       environment:
         - ENV_VAR1=value1
         - ENV_VAR2=value2
       networks:
         - widget_net
       depends_on:
         - db
       restart: always
       platform: linux/amd64
     db:
       image: postgres:latest
       container_name: postgres
       ports:
         - '${POSTGRES_PORT}:${POSTGRES_PORT}'
       environment:
         - POSTGRES_USER=${POSTGRES_USER}
         - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
         - POSTGRES_DB=${POSTGRES_DB}
       networks:
         - db_net
       restart: on-failure
       platform: linux/amd64
   networks:
     widget_net:
       driver: bridge
     db_net:
       driver: bridge
   ```

7. **Reiniciar os Serviços**
   - Para aplicar as mudanças, reinicie os serviços:
   ```sh
   docker-compose down
   docker-compose up -d
   ```
