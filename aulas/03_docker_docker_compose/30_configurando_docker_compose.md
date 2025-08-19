### Destaques do Texto

1. **Introdução ao Docker Compose**

   - Docker Compose é um manifesto declarativo.
   - Arquivo padrão: `docker-compose.yml`.

2. **Criação do Arquivo Docker Compose**

   - Nome padrão: `docker-compose.yml`.
   - Pode ser referenciado com o comando `-f` se estiver em outro diretório.

3. **Instalação do Docker Compose**

   - Docker Compose é instalado automaticamente com o Docker.
   - Verifique a versão com `docker-compose --version`.

4. **Estrutura do Arquivo Docker Compose**

   - Definição de serviços (`services`).
   - Nome do serviço (`app`).
   - Definição de imagem ou build.
   - Definição de portas (`ports`).
   - Definição de variáveis de ambiente (`environment`).

5. **Comandos Docker Compose**
   - Subir serviços: `docker-compose up --build -d`.
   - Verificar containers: `docker ps`.
   - Verificar logs: `docker logs <container_id>`.

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
   ```

3. **Adicionar Configurações de Build e Imagem**

   - Se você tiver um `Dockerfile` no mesmo diretório, use `build: .`.
   - Se você quiser usar uma imagem do Docker Hub, use `image: <image_name>`.

4. **Definir Portas**

   - Mapeie as portas do host para o container.

   ```yaml
   ports:
     - '3000:3000'
   ```

5. **Definir Variáveis de Ambiente**

   - Adicione as variáveis de ambiente necessárias.

   ```yaml
   environment:
     - ENV_VAR1=value1
     - ENV_VAR2=value2
   ```

6. **Subir os Serviços**

   - No terminal, navegue até o diretório do projeto e execute:

   ```sh
   docker-compose up --build -d
   ```

7. **Verificar Containers e Logs**

   - Verifique os containers em execução:

   ```sh
   docker ps
   ```

   - Verifique os logs de um container específico:

   ```sh
   docker logs <container_id>
   ```

8. **Testar Alterações**
   - Faça alterações no `docker-compose.yml` conforme necessário.
   - Suba novamente os serviços para aplicar as mudanças:
   ```sh
   docker-compose up --build -d
   ```
