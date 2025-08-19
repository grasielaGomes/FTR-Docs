### Configurando o Primeiro Alerta no Grafana

#### Introdução

- **Objetivo:** Demonstrar como configurar um alerta no Grafana para monitorar logs e notificar problemas.
- **Contexto:** Utilizar queries e condições para criar alertas personalizados baseados em métricas e logs.

---

### Configuração de Alertas

#### 1. **Função `calcite_over_time`**

- Utilizada para calcular condições ao longo de um intervalo de tempo.
- Exemplo: Verificar logs nos últimos 5 minutos.

#### 2. **Intervalo de Tempo**

- Configurar o intervalo de tempo para análise (ex.: últimos 5 minutos).
- O intervalo pode ser ajustado conforme a criticidade do sistema.

#### 3. **Condição de Alerta**

- Definir a condição que dispara o alerta:
  - Exemplo: Se o número de erros for maior que 0 nos últimos 5 minutos.
  - Pode ser ajustado para tolerar um número específico de erros (ex.: 100).

---

### Organização de Alertas

#### 1. **Pastas**

- Criar pastas para organizar alertas por time ou escopo.
- Exemplo: Pasta `Rocket City Alerts` para alertas relacionados a um time específico.

#### 2. **Labels**

- Adicionar labels para categorizar alertas:
  - **Service Name:** Nome do serviço (ex.: `FTR Upload`).
  - **Team Name:** Nome do time responsável (ex.: `Rocketseat`).

---

### Configuração de Notificações

#### 1. **Pontos de Contato**

- Configurar o método de notificação:
  - Exemplo: E-mail, Slack, ou Webhook.
- Associar o ponto de contato ao alerta.

#### 2. **Descrição e Runbook**

- Adicionar uma descrição clara para o alerta.
- Incluir um link para o **runbook** (documentação com passos para resolver o problema).

---

### Testando e Validando o Alerta

#### 1. **Simulação de Erros**

- Gerar erros propositalmente na aplicação para validar o alerta.
- Exemplo: Criar logs de erro para testar a detecção.

#### 2. **Delay no Alerta**

- O alerta pode ter um pequeno atraso (ex.: 5 minutos) para validar as condições.
- Ajustar o intervalo de tempo conforme a necessidade.

#### 3. **Histórico de Alertas**

- Verificar o histórico de acionamentos para entender o comportamento do alerta.

---

### Boas Práticas

#### 1. **Configuração de Intervalos**

- Ajustar os intervalos de tempo e condições de alerta conforme a severidade do problema.

#### 2. **Documentação**

- Manter o **runbook** atualizado para facilitar a resolução de problemas.

#### 3. **Escalabilidade**

- Configurar notificações para escalar alertas automaticamente em caso de falhas críticas.

---

### Reflexões e Próximos Passos

#### 1. **Desafios**

- Garantir que os alertas sejam acionados apenas em condições críticas.
- Evitar falsos positivos ajustando as condições de alerta.

#### 2. **Próximos Passos**

- Refinar as condições de alerta com base em métricas e logs.
- Explorar integrações com ferramentas externas para notificações avançadas.
