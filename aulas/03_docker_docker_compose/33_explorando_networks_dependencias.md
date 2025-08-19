### Destaques do Texto

1. **Introdução ao Controle de Networks**

   - Networks são essenciais para a comunicação entre containers.
   - Docker Compose cria uma rede padrão automaticamente.
   - Redes permitem que containers se comuniquem internamente sem precisar sair para a internet.

2. **Criação e Inspeção de Networks**

   - Docker Compose cria uma rede com o nome do diretório seguido de `_default`.
   - Comando `docker network ls` lista todas as redes.
   - Comando `docker network inspect <network_name>` exibe detalhes da rede.

3. **Configuração de Networks no Docker Compose**

   - É possível definir redes personalizadas no `docker-compose.yml`.
   - Redes podem ser configuradas com diferentes drivers, como `bridge`.

4. **Dependências entre Serviços**
   - Serviços podem depender de outros para garantir a ordem de inicialização.
   - A configuração `depends_on` no `docker-compose.yml` define dependências entre serviços.
   - Ferramentas como `WaitForIt` e `Dockerize` podem ser usadas para garantir que serviços estejam prontos antes de iniciar outros.

### Passo-a-Passo

1. **Criar o Arquivo Docker Compose**

   - Crie um arquivo chamado `docker-compose.yml` no diretório raiz do seu projeto.

2. **Definir a Estrutura Básica com Networks**

   ```yaml
   version: '3'
   services:
     app:
       build: .
       ports:
         - '3000:3000'
       environment:
         - ENV_VAR1=value1
         - ENV_VAR2=value2
       networks:
         - widget_net
     db:
       image: postgres:latest
       container_name: postgres
       ports:
         - '5432:5432'
       environment:
         - POSTGRES_USER=root
         - POSTGRES_PASSWORD=root
         - POSTGRES_DB=widget_server
       networks:
         - db_net
   networks:
     widget_net:
       driver: bridge
     db_net:
       driver: bridge
   ```

3. **Subir os Serviços**

   - No terminal, navegue até o diretório do projeto e execute:

   ```sh
   docker-compose up -d
   ```

4. **Verificar Networks e Containers**

   - Verifique as redes criadas:

   ```sh
   docker network ls
   ```

   - Inspecione uma rede específica:

   ```sh
   docker network inspect widget_net
   ```

5. **Configurar Dependências entre Serviços**

   - Adicione a configuração `depends_on` para garantir a ordem de inicialização:

   ```yaml
   services:
     app:
       build: .
       ports:
         - '3000:3000'
       environment:
         - ENV_VAR1=value1
         - ENV_VAR2=value2
       networks:
         - widget_net
       depends_on:
         - db
     db:
       image: postgres:latest
       container_name: postgres
       ports:
         - '5432:5432'
       environment:
         - POSTGRES_USER=root
         - POSTGRES_PASSWORD=root
         - POSTGRES_DB=widget_server
       networks:
         - db_net
   networks:
     widget_net:
       driver: bridge
     db_net:
       driver: bridge
   ```

6. **Utilizar Ferramentas de Health Check**

   - Utilize `WaitForIt` ou `Dockerize` para garantir que o banco de dados esteja pronto antes de iniciar o app:

   ```yaml
   services:
     app:
       build: .
       ports:
         - '3000:3000'
       environment:
         - ENV_VAR1=value1
         - ENV_VAR2=value2
       networks:
         - widget_net
       depends_on:
         - db
       command: ['./wait-for-it.sh', 'db:5432', '--', 'npm', 'start']
     db:
       image: postgres:latest
       container_name: postgres
       ports:
         - '5432:5432'
       environment:
         - POSTGRES_USER=root
         - POSTGRES_PASSWORD=root
         - POSTGRES_DB=widget_server
       networks:
         - db_net
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
