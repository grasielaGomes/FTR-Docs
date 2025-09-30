### Projeto Base para Observabilidade

#### 1. Pré-requisitos

- Node.js instalado
- npm ou yarn para gerenciamento de dependências
- Docker e Docker Compose para infraestrutura
- Editor de código (VS Code recomendado)
- Conhecimentos básicos de API, JavaScript, Node, terminal e Git

##### Como verificar instalações:

- Node: `node -v`
- npm: `npm -v`
- Docker: `docker -v`
- Docker Compose: `docker compose version`
- Git: `git --version`

---

### Passo a Passo para Criar o Projeto Base

#### Passo 1: Preparar o Ambiente

1. Certifique-se de que todos os pré-requisitos estão instalados.
2. Abra o VS Code ou seu editor preferido.
3. Crie uma nova pasta para o projeto (ex: `aula-monitoramento-tracing`).

#### Passo 2: Inicializar o Projeto Node.js

1. Abra o terminal na pasta do projeto.
2. Execute o comando:
   ```bash
   npm init -y
   ```
   - Isso criará o arquivo `package.json` para gerenciar dependências.

#### Passo 3: Criar a Infraestrutura com Docker Compose

1. Crie um arquivo chamado `docker-compose.yml`.
2. Defina os serviços necessários:
   - **Postgres:** banco de dados relacional.
   - **Jaeger:** ferramenta para visualizar traces.
   - **Collector:** recebe dados da aplicação e envia para o Jaeger.
3. Configure variáveis de ambiente, portas e volumes conforme necessário.

#### Passo 4: Configurar o Collector

1. Crie o arquivo de configuração do coletor (ex: `collector-config.yml`).
2. Defina:
   - **Receivers:** protocolos que o coletor irá escutar (gRPC, HTTP).
   - **Exporters:** destinos dos dados (Jaeger, debug).
   - **Processamento:** batching para otimizar envios.
   - **Extensões:** health check para monitorar o coletor.
   - **Service:** conecta as configurações acima e define as pipelines de traces e métricas.

#### Passo 5: Subir a Infraestrutura

1. No terminal, execute:
   ```bash
   docker compose up -d
   ```
2. Verifique se os serviços estão rodando:
   ```bash
   docker compose ps
   ```
   - Confirme que Postgres, Jaeger e Collector estão em execução.

#### Passo 6: Recapitulação

- O projeto base agora possui:
  - `package.json` para dependências Node.js.
  - `docker-compose.yml` para orquestrar a infraestrutura.
  - Arquivo de configuração do coletor para definir como os dados de observabilidade serão recebidos e exportados.
- Com tudo pronto, é possível iniciar o monitoramento e tracing da aplicação Node.js.

---

### Conclusão

- O projeto base garante um ambiente pronto para implementar observabilidade em aplicações Node.js.
- Docker Compose facilita a orquestração dos serviços necessários.
- O próximo passo é instrumentar a aplicação para enviar logs, métricas e traces para o coletor.
