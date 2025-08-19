### Explorando o OpenTelemetry

#### Introdução

- **Objetivo:** Entender o conceito de OpenTelemetry e sua aplicação em observabilidade.
- **Contexto:** O OpenTelemetry é um framework open source mantido pela CNCF (Cloud Native Computing Foundation) que padroniza a geração, processamento e transmissão de dados de telemetria.

---

### Principais Conceitos do OpenTelemetry

#### 1. **O que é OpenTelemetry?**

- **Descrição:** Framework open source para telemetria unificada.
- **Função:** Gera, processa e transmite dados de telemetria em um formato unificado.
- **Compatibilidade:** Suporta diversas ferramentas como Grafana, Prometheus, Tempo, DataDog, New Relic, Elastic, entre outras.

#### 2. **Benefícios do OpenTelemetry**

- **Independência de Vendor:**
  - A aplicação só precisa conhecer o OpenTelemetry, não o vendor específico.
  - Permite trocar de ferramenta (ex.: de Grafana para DataDog) sem alterar a aplicação.
- **Flexibilidade:**
  - O OpenTelemetry atua como intermediário, conectando a aplicação ao vendor escolhido.
  - Apenas o collector do OpenTelemetry precisa ser configurado para apontar para outro vendor.

#### 3. **Funcionamento**

- **Coleta de Dados:**
  - A aplicação envia dados de telemetria para o OpenTelemetry.
  - O OpenTelemetry processa e encaminha os dados para o vendor configurado.
- **Padronização:**
  - Oferece suporte a múltiplos vendors e ferramentas populares.
  - Garante que a aplicação permaneça desacoplada de ferramentas específicas.

---

### Aplicação Prática com Grafana

#### 1. **Integração com Grafana**

- A aplicação se conecta ao OpenTelemetry.
- O OpenTelemetry encaminha os dados para a stack Grafana
