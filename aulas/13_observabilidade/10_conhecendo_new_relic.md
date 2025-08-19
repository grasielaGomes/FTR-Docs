### Conhecendo o New Relic

#### Introdução

- **Objetivo:** Apresentar o New Relic como uma ferramenta de observabilidade amplamente utilizada no mercado.
- **Contexto:**
  - O New Relic é uma solução **100% autogerenciada**, que abstrai complexidades de configuração.
  - Oferece um plano gratuito com até **100 GB de armazenamento**, ideal para estudos e testes.
  - Não exige cartão de crédito para cadastro.

---

### Principais Características do New Relic

#### 1. **Armazenamento e Cotas**

- Logs e métricas são armazenados com base em cotas definidas.
- Estratégias de armazenamento:
  - Manter logs por um período curto (ex.: 7 dias) e transferir para serviços como **AWS S3** para economizar espaço.

#### 2. **Modos de Integração**

- **Cluster ECS:** Monitoramento de todo o cluster e suas aplicações.
- **Aplicação Individual:** Configuração direta na aplicação para envio de logs e métricas.

#### 3. **Comparação com Outras Ferramentas**

- Similar ao Grafana Cloud e Datadog em funcionalidades.
- Diferenças principais:
  - Abordagem de preços.
  - Estratégias de armazenamento e integração.

---

### Configuração do New Relic

#### 1. **Criação de Conta**

- Cadastro gratuito sem necessidade de cartão de crédito.
- Após o login, o painel inicial permite selecionar o ambiente de execução (ex.: Linux, Docker, Kubernetes).

#### 2. **Integração com Aplicações**

- **Auto-Instrumentação:**
  - Configuração simples para monitorar aplicações em **Node.js**.
  - Suporte a diferentes ambientes, como Docker e Kubernetes.
- **Configuração Manual:**
  - Instalar a biblioteca do New Relic:
    ```bash
    pnpm install newrelic
    ```
  - Adicionar variáveis de ambiente:
    - **APP_NAME:** Nome da aplicação.
    - **LICENSE_KEY:** Chave de licença fornecida pelo New Relic.

#### 3. **Testando a Conexão**

- Após configurar a aplicação, é possível testar a conexão para verificar o envio de dados de telemetria.

---

### Visualização de Dados no New Relic

#### 1. **Dashboards Automáticos**

- O New Relic gera dashboards pré-configurados com:
  - **Logs**
  - **Throughput**
  - **Taxa de Erros**
  - **Métricas de Performance**

#### 2. **Application Performance Monitoring (APM)**

- Monitora o desempenho da aplicação em tempo real.
- Exibe gráficos e insights sobre logs, erros e métricas.

---

### Boas Práticas

#### 1. **Armazenamento**

- Transferir logs antigos para serviços como AWS S3 para economizar espaço no New Relic.

#### 2. **Segurança**

- Armazenar chaves de licença e informações sensíveis como **secrets** em serviços apropriados (ex.: AWS Secrets Manager).

#### 3. **Integração**

- Utilizar auto-instrumentação para simplificar a configuração inicial.
- Explorar integrações com ferramentas como OpenTelemetry para maior flexibilidade.

---

### Reflexões e Próximos Passos

#### 1. **Desafios**

- Configurar corretamente o New Relic para diferentes ambientes (ex.: ECS, Kubernetes).
- Garantir que a aplicação esteja enviando dados de telemetria corretamente.

#### 2. **Próximos Passos**

- Configurar o deploy da aplicação para monitorar logs e métricas diretamente na AWS.
- Explorar o uso do New Relic em clusters Kubernetes com o conceito de **DaemonSet**.
