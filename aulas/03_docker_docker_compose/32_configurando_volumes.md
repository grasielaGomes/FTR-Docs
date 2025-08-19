### Destaques do Texto

1. **Introdução aos Volumes**

   - Volumes são usados tanto em ambientes locais quanto em produção.
   - Containers são stateless e não mantêm estado sem volumes.
   - Volumes permitem a persistência de dados desacoplada do container.

2. **Configuração de Volumes no Docker Compose**

   - Configuração de volumes é simples e trivial no Docker Compose.
   - Volumes são definidos no `docker-compose.yml`.

3. **Persistência de Dados**

   - Volumes garantem que os dados persistam mesmo após a remoção do container.
   - É importante configurar volumes corretamente para evitar perda de dados.

### Passo-a-Passo

1. **Criar o Arquivo Docker Compose**

   - Crie um arquivo chamado `docker-compose.yml` no diretório raiz do seu projeto.

2. **Definir a Estrutura Básica com Volumes**

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
       volumes:
         - db:/var/lib/postgresql/data
   volumes:
     db:
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

5. **Conectar ao Banco de Dados**

   - Utilize uma ferramenta como Beekeeper para se conectar ao banco de dados.
   - Configure a conexão com os seguintes parâmetros:
     - Host: `localhost`
     - Porta: `5432`
     - Usuário: `root`
     - Senha: `root`
     - Nome do banco: `widget_server`

6. **Criar Tabela no Banco de Dados**

   - Após conectar ao banco, crie uma tabela de exemplo:

   ```sql
   CREATE TABLE widget (
     id SERIAL PRIMARY KEY,
     name VARCHAR(200) NOT NULL
   );
   ```

7. **Reiniciar os Serviços**
   - Para aplicar as mudanças, reinicie os serviços:
   ```sh
   docker-compose down
   docker-compose up -d
   ```
