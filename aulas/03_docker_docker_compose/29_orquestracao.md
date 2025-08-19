# Orquestração de Containers

## Destaques Importantes

### Introdução à Orquestração

- **Importância**: Orquestração é crucial para gerenciar múltiplos containers e suas dependências.
- **Dependências Externas**: Aplicações podem depender de serviços externos como bancos de dados e caches.
- **Isolamento de Containers**: Containers são ambientes isolados, mas fazem parte do mesmo ecossistema da aplicação.

### Problemas e Soluções

- **Sem Orquestração**: Gerenciar containers manualmente pode ser complicado e propenso a erros.
- **Com Orquestração**: Ferramentas de orquestração facilitam o gerenciamento e a comunicação entre containers.

### Ferramentas de Orquestração

- **Docker Compose**: Ferramenta para definir e rodar multi-containers em ambiente local.
- **Cloud Providers**: Ferramentas de orquestração em provedores de nuvem, como AWS, para ambientes produtivos.

## Passo-a-Passo

### Configuração do Docker Compose

1. **Criar Arquivo Docker Compose**

   - Crie um arquivo `docker-compose.yml` na raiz do seu projeto.

     ```yaml
     version: '3.8'

     services:
       app:
         build:
           context: .
           dockerfile: Dockerfile
         ports:
           - '3000:3000'
         depends_on:
           - db

       db:
         image: postgres:latest
         environment:
           POSTGRES_USER: user
           POSTGRES_PASSWORD: password
           POSTGRES_DB: mydb
         ports:
           - '5432:5432'
     ```

2. **Definir Serviços no Docker Compose**

   - Defina os serviços necessários no arquivo `docker-compose.yml`.
     - **App**: Serviço da aplicação que será construído a partir do Dockerfile.
     - **DB**: Serviço do banco de dados utilizando a imagem do Postgres.

3. **Rodar Docker Compose**
   - No terminal, navegue até o diretório do projeto e execute:
     ```sh
     docker-compose up
     ```

### Verificação e Ajustes

1. **Verificar Execução dos Containers**

   - Verifique se os containers estão em execução corretamente.
     ```sh
     docker ps
     ```

2. **Ajustar Configurações conforme Necessário**
   - Adicione ou remova serviços e configurações conforme a necessidade do seu projeto.

## Conclusão

- **Configuração Inicial**: Docker Compose configurado para gerenciar múltiplos containers.
- **Próximos Passos**: Explorar ferramentas de orquestração em provedores de nuvem para ambientes produtivos.
- **Ferramentas**: Utilizar Docker Compose para ambiente local e explorar outras ferramentas para orquestração em produção.
