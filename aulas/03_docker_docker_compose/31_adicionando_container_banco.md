### Destaques do Texto

1. **Introdução ao Container de Banco de Dados**

   - Adicionar um container de banco de dados ao Docker Compose.
   - Utilizar o Postgres como exemplo.

2. **Configuração do Container de Banco de Dados**

   - Utilizar a imagem `postgres:latest`.
   - Definir o nome do container.
   - Mapear a porta padrão do Postgres (5432).
   - Definir variáveis de ambiente para configuração do banco.

3. **Execução e Verificação**

   - Subir os serviços com `docker-compose up -d`.
   - Verificar os containers em execução com `docker ps`.
   - Verificar logs do container com `docker logs <container_id>`.

4. **Persistência de Dados**
   - Containers são efêmeros e não mantêm estado por padrão.
   - Necessidade de configurar volumes para persistência de dados.

### Passo-a-Passo

1. **Criar o Arquivo Docker Compose**

   - Crie um arquivo chamado `docker-compose.yml` no diretório raiz do seu projeto.

2. **Definir a Estrutura Básica**

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
     db:
       image: postgres:latest
       container_name: postgres
       ports:
         - '5432:5432'
       environment:
         - POSTGRES_USER=root
         - POSTGRES_PASSWORD=root
         - POSTGRES_DB=widget_server
   ```

3. **Subir os Serviços**

   - No terminal, navegue até o diretório do projeto e execute:

   ```sh
   docker-compose up -d
   ```

4. **Verificar Containers e Logs**

   - Verifique os containers em execução:

   ```sh
   docker ps
   ```

   - Verifique os logs de um container específico:

   ```sh
   docker logs <container_id>
   ```
