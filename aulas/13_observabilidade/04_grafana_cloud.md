### Explorando o Grafana Cloud

#### Introdução

- **Objetivo:** Demonstrar como configurar e utilizar o Grafana Cloud para observabilidade.
- **Ferramentas Relacionadas:**
  - **K6:** Ferramenta de teste de carga mantida pela Grafana Labs.
  - **Grafana Cloud Free:** Plano gratuito para estudos e testes.

---

### Configuração do Grafana Cloud

#### 1. **Criação de Conta**

- Acesse o site do Grafana Cloud e clique em **Sign In**.
- Registre-se ou faça login com uma conta existente (ex.: GitHub).
- Após criar a conta, você terá 14 dias de uso ilimitado no período trial.

#### 2. **Criação de Stack**

- No portal do Grafana Cloud, clique em **Adicionar Stack**.
- Dê um nome e uma descrição para a stack.
- Aguarde a criação da stack (leva cerca de 1-2 minutos).

#### 3. **Acesso ao Grafana**

- Após a criação da stack, clique em **Launch** para acessar o Grafana.
- O Grafana gera um endereço único para sua stack (ex.: `nomedastack.grafana.net`).
- Configure data sources para logs, métricas e rastreamento.

---

### Funcionalidades do Grafana

#### 1. **Visualização de Logs**

- O Grafana permite visualizar logs enviados por aplicações.
- Logs podem ser filtrados e analisados diretamente no painel.

#### 2. **Dashboards**

- Dashboards interativos podem ser criados para monitorar métricas e logs.
- Exemplos de data sources suportados: MongoDB, MySQL, Prometheus, Loki.

#### 3. **Linguagens de Consulta**

- **LogQL:** Para consultas em logs (Loki).
- **PromQL:** Para métricas (Prometheus).
- **TraceQL:** Para rastreamento (Tempo).

---

### Boas Práticas de Observabilidade com Grafana

#### 1. **Desacoplamento de Logs**

- Logs devem ser enviados para serviços externos (ex.: Loki) e não armazenados diretamente na aplicação.
- **Motivo:** Aplicações em containers são stateless por padrão, e logs armazenados localmente podem ser perdidos.

#### 2. **Separação de Responsabilidades**

- A aplicação deve emitir logs, enquanto um serviço especializado (ex.: Loki) os armazena e indexa.
- **Benefício:** Garantia de persistência e facilidade de análise.

---

### Configuração do OpenTelemetry no Grafana Cloud

#### 1. **Configuração do OpenTelemetry**

- No portal do Grafana Cloud, clique em **OpenTelemetry**.
- Configure o protocolo OTLP para enviar telemetria, métricas e logs.
- O Grafana fornece:
  - **Endpoint:** URL para envio de dados.
  - **Token:** Para autenticação.
  - **Configurações específicas:** Baseadas na linguagem de programação utilizada (ex.: Node.js com TypeScript).

#### 2. **Envio de Dados**

- A aplicação envia dados de telemetria para o endpoint configurado.
- Logs, métricas e traces são processados e exibidos no Grafana.

---

### Reflexões e Próximos Passos

#### 1. **Desafios**

- Configurar corretamente o OpenTelemetry para diferentes linguagens e ferramentas.
- Garantir que a aplicação permaneça agnóstica ao vendor.

#### 2. **Próximos Passos**

- Configurar o envio de logs e métricas da aplicação para o Grafana Cloud.
- Explorar integrações práticas com OpenTelemetry e ferramentas da stack Grafana.
