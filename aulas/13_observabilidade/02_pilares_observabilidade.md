### Explorando os Pilares da Observabilidade com Ferramentas Open Source

#### Introdução

- **Objetivo:** Entender o conceito de observabilidade no contexto de DevOps e explorar ferramentas open source para logs, métricas e rastreamento.
- **Ferramentas Focadas:**
  - **LGTM Stack:** Loki, Grafana, Tempo e Mimir.
  - **Grafana Cloud:** Solução autogerenciada para simplificar a configuração e uso.

---

### Ferramentas da LGTM Stack

#### 1. **Loki (Logs)**

- **Descrição:** Sistema de agregação e armazenamento de logs.
- **Características:**
  - Projetado para armazenar logs de forma econômica.
  - Sistema de indexação inteligente e performático.
- **Uso:** Resolver problemas relacionados a logs e integrá-los com métricas no Grafana.

#### 2. **Grafana (Visualização)**

- **Descrição:** Plataforma de visualização de dados.
- **Características:**
  - Permite criar dashboards interativos e gráficos.
  - Integra-se com múltiplos data sources (logs, métricas, rastreamento).
  - Centraliza a visualização de dados de ferramentas como Loki, Tempo e Prometheus.
- **Uso:** Construir dashboards para monitorar logs, métricas e rastreamento.

#### 3. **Tempo (Rastreamento - Traces)**

- **Descrição:** Serviço de rastreamento distribuído.
- **Características:**
  - Registra o caminho percorrido por requisições entre serviços.
  - Gera IDs de rastreamento (Trace IDs) para acompanhar a execução de chamadas.
- **Uso:** Identificar gargalos e rastrear problemas em sistemas distribuídos.

#### 4. **Prometheus (Métricas)**

- **Descrição:** Sistema de coleta de métricas de sistemas e serviços.
- **Características:**
  - Coleta métricas de endpoints HTTP configurados.
  - Suporta instrumentação automática para métricas como tempo de requisição.
- **Uso:** Monitorar métricas de desempenho, como uso de CPU, memória e tempo de resposta.

---

### Benefícios do Grafana Cloud

- **Autogerenciado:** Simplifica a configuração e uso das ferramentas da LGTM Stack.
- **Flexibilidade:** Permite usar ferramentas open source sem a necessidade de gerenciar infraestrutura local.
- **Gratuidade:** Oferece um plano gratuito para estudos e testes.

---

### Integração com o Ecossistema

- **Conexão com Ferramentas:** O Grafana pode se conectar a diferentes data sources (logs, métricas, rastreamento).
- **Exporters:** Ferramentas que expõem dados para serem consumidos pelo Grafana.
- **Flexibilidade de Vendors:** Possibilidade de migrar para outras ferramentas (ex.: Elastic, DataDog, New Relic) sem alterar os serviços.

---

### Reflexões e Próximos Passos

- **Desafios:** Como gerenciar mudanças de ferramentas em um ambiente com múltiplos microserviços.
- **Próxima Aula:** Explorar como conectar aplicações ao ecossistema de observabilidade e configurar ferramentas na prática.
