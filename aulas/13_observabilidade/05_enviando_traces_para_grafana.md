### Enviando Traces para o Grafana com OpenTelemetry

#### Introdução

- **Objetivo:** Configurar a aplicação para enviar dados de telemetria (traces, métricas e logs) para o Grafana Cloud utilizando o OpenTelemetry.
- **Contexto:** O OpenTelemetry atua como intermediário, enviando dados para o endpoint configurado no Grafana Cloud.

---

### Configuração do OpenTelemetry

#### 1. **Endpoint e Token**

- O Grafana Cloud fornece:
  - **Endpoint:** URL para envio de dados (`/otlp`).
  - **Token:** Para autenticação e envio de dados para a conta correta.
- **Configuração Sensível:** Informações como o token devem ser armazenadas como **secrets** em ambientes de produção (ex.: AWS Secrets Manager).

#### 2. **Variáveis de Ambiente**

- Configurar variáveis de ambiente para o OpenTelemetry:
  - **OTEL_EXPORTER_OTLP_ENDPOINT:** URL do endpoint.
  - **OTEL_EXPORTER_OTLP_HEADERS:** Token de autenticação.
  - **OTEL_EXPORTER_OTLP_PROTOCOL:** Protocolo utilizado (HTTP ou gRPC com Protobuf).

---

### Auto-Instrumentação com OpenTelemetry

#### 1. **Instalação de Dependências**

- Instalar bibliotecas necessárias:
  ```bash
  pnpm add @opentelemetry/api @opentelemetry/auto-instrumentations-node
  ```

#### 2. **Configuração de Auto-Instrumentação**

- Configurar a auto-instrumentação para o Node.js:
  - Adicionar as variáveis de ambiente necessárias.
  - Utilizar a opção `NODE_OPTIONS` para inicializar a auto-instrumentação antes do bootstrap da aplicação.

#### 3. **Service Name e Atributos**

- Configurar o nome do serviço e atributos adicionais:
  - **Service Name:** Nome da aplicação (ex.: `FTR Upload`).
  - **Environment:** Ambiente de execução (ex.: local, staging, produção).
  - **Host e Sistema Operacional:** Informações do host e SO para rastreamento.

---

### Envio de Dados para o Grafana Cloud

#### 1. **Traces**

- O OpenTelemetry coleta e envia traces automaticamente para o Grafana Cloud.
- Cada trace contém:
  - **Trace ID:** Identificador único para rastreamento.
  - **Spans:** Eventos individuais dentro de uma transação (ex.: chamadas a banco de dados ou serviços externos).

#### 2. **Métricas**

- Métricas como tempo de requisição HTTP e contadores são enviadas automaticamente.
- Exemplos:
  - Duração de requisições HTTP.
  - Contagem de requisições por endpoint.

#### 3. **Logs**

- Logs ainda precisam ser configurados para serem enviados ao Loki no Grafana Cloud.

---

### Visualização no Grafana Cloud

#### 1. **Traces**

- Acesse o painel de **Traces** no Grafana Cloud.
- Utilize o **TraceQL** para consultar traces específicos.
- Visualize detalhes como:
  - Tempo de execução.
  - Caminho percorrido pela requisição.

#### 2. **Métricas**

- Métricas são exibidas no painel do Prometheus no Grafana.
- Exemplos:
  - Tempo médio de requisição.
  - Contagem de requisições HTTP.

#### 3. **Logs**

- Logs ainda não configurados, mas podem ser integrados ao Loki para análise.

---

### Boas Práticas

#### 1. **Segurança**

- Armazenar tokens e informações sensíveis como **secrets**.
- Evitar expor variáveis sensíveis diretamente no código.

#### 2. **Desempenho**

- A auto-instrumentação pode impactar o desempenho em sistemas grandes.
- Configurar spans e métricas de forma eficiente para evitar sobrecarga.

#### 3. **Atributos Personalizados**

- Adicionar atributos como:
  - Versão da aplicação.
  - ID do container.
  - Ambiente de execução.

---

### Reflexões e Próximos Passos

#### 1. **Desafios**

- Configurar logs para serem enviados ao Loki.
- Garantir que a aplicação permaneça desacoplada do vendor.

#### 2. **Próximos Passos**

- Adicionar logs na aplicação e integrá-los ao Grafana Cloud.
- Explorar configurações avançadas de métricas e spans no OpenTelemetry.
