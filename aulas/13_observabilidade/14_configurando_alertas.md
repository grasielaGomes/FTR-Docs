### Configurando Alertas no New Relic

#### Introdução

- **Objetivo:** Demonstrar como configurar alertas no New Relic para monitorar serviços e detectar problemas.
- **Contexto:** Configuração de alertas para métricas como tempo de resposta, throughput e taxa de erros.

---

### Criando Alertas

#### 1. **Tipos de Alertas**

- **Golden Metrics:** Métricas principais que indicam se a aplicação está funcionando corretamente.
  - Exemplo: Tempo de resposta, throughput, taxa de erros.
- **Custom Metrics:** Métricas personalizadas baseadas em necessidades específicas.

#### 2. **Configuração de Alertas**

- Escolher entre:
  - **Static Thresholds:** Limites fixos para disparar alertas.
  - **Anomaly Detection:** Detecta anomalias com base em aprendizado de máquina e histórico de dados.
- Configurar severidades:
  - **Warning:** Indica uma possível anomalia.
  - **Critical:** Indica um problema grave.

#### 3. **Exemplo de Configuração**

- Monitorar tempo de resposta:
  - **Threshold:** Tempo de resposta maior que 0.1 segundos nos últimos 1 minuto.
  - Configurar severidade como **Critical** para tempos acima de 0.5 segundos.

---

### Configuração de Políticas e Notificações

#### 1. **Políticas de Alerta**

- Criar políticas para agrupar alertas relacionados.
- Exemplo: Política "Widget Server Policy" para monitorar o serviço "Widget Server".

#### 2. **Notificações**

- Configurar canais de notificação:
  - **E-mail**
  - **Slack**
  - **PagerDuty**
  - **Webhooks**
- Personalizar templates de notificação com informações como título do alerta e runbook (documentação para resolução).

---

### Testando e Validando Alertas

#### 1. **Testes**

- Enviar alertas de teste para validar configurações.
- Simular condições críticas para verificar se os alertas são disparados corretamente.

#### 2. **Monitoramento de Incidentes**

- Acompanhar incidentes abertos no painel do New Relic.
- Configurar fechamento automático de incidentes após um período (ex.: 3 dias).

---

### Boas Práticas

#### 1. **Configuração de Alertas**

- Utilizar **Warning** para identificar possíveis problemas antes que se tornem críticos.
- Configurar **Critical** para problemas graves que exigem ação imediata.

#### 2. **Notificações**

- Evitar o uso de e-mails como principal canal de notificação, pois podem ser ignorados.
- Priorizar canais como Slack, SMS ou chamadas telefônicas para alertas críticos.

#### 3. **Runbook**

- Sempre incluir um link para o runbook com instruções claras para resolver o problema.

---

### Reflexões e Próximos Passos

#### 1. **Desafios**

- Garantir que os alertas sejam acionados apenas em condições críticas para evitar falsos positivos.
- Configurar corretamente os canais de notificação para garantir que os alertas sejam recebidos.

#### 2. **Próximos Passos**

- Explorar integrações com Kubernetes para monitorar infraestrutura.
- Configurar alertas para monitorar uso de CPU, memória e outros recursos em clusters Kubernetes.
- Continuar aprimorando a configuração de alertas e notificações para maior eficiência no monitoramento.
