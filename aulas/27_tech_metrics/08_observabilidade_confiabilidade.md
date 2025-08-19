### Fundamentos de Observabilidade e Confiabilidade

#### O que é Observabilidade?

- Capacidade de entender o que está acontecendo em sistemas complexos, identificando falhas rapidamente e garantindo previsibilidade.
- Essencial para responder a incidentes e manter alta disponibilidade.

---

#### Custo do Downtime e Importância dos "9s"

- 99,9% de uptime: até 8h45min de indisponibilidade por ano.
- 99,99% de uptime: até 52min de indisponibilidade por ano.
- Cada "9" a mais reduz drasticamente o tempo permitido de falha e aumenta a confiabilidade exigida.

---

#### Pilares da Observabilidade

1. **Métricas (Golden Signals)**
   - Latência (ex: P95 < 200ms)
   - Tráfego (RPS - Requests Per Second)
   - Taxa de Erros (ex: <5%)
   - Saturação (uso de CPU/memória, ex: <70%)
2. **Logs**
   - Devem ser estruturados, pesquisáveis e conter contexto (nível, serviço, local, mensagem, código, ID de tracing)
   - Facilitam debugging e identificação de root cause
3. **Tracing**
   - Permite rastrear requisições entre múltiplos serviços (ex: Uber, Jaeger)
   - Essencial para sistemas distribuídos e microserviços
4. **Alertas**
   - Devem acionar apenas quem pode agir
   - Template: tipo, condição, impacto, ação requerida, severidade, documentação (runbook), responsável

---

#### Exemplos Práticos

- Amazon: cada 100ms de latência = 1% de perda de conversão.
- Uber: tracing com Jaeger para rastrear requests entre mais de 20 microserviços.
- Spotify: uptime de 99,95%, budget de erro de 0,05%, alertas inteligentes baseados em SLO.

---

#### SLI, SLO e SLA

- **SLI (Service Level Indicator):** Métrica específica de performance (ex: P95 de latência).
- **SLO (Service Level Objective):** Objetivo interno de performance (ex: SLI > 99,9%).
- **SLA (Service Level Agreement):** Compromisso contratual de disponibilidade (ex: 99,5% uptime).
- Relação: SLI define o que medir, SLO define o objetivo, SLA formaliza o compromisso.

---

#### Como Implementar Observabilidade e Confiabilidade

1. Identifique os serviços mais críticos do sistema.
2. Defina os Golden Signals relevantes para o negócio.
3. Configure alertas inteligentes e documente ações (runbooks).
4. Utilize ferramentas adequadas para métricas, logs e tracing.

---

#### Ferramentas Recomendadas

- **Métricas:** Prometheus, Grafana, Datadog, New Relic
- **Logs:** ELK Stack (Elasticsearch, Logstash, Kibana), Splunk, AWS CloudWatch
- **Tracing:** Jaeger, Zipkin, AWS X-Ray

---

#### Boas Práticas e Considerações Finais

- Monitore o que o usuário sente, não só o que o sistema reporta.
- Alertas devem ser acionáveis e direcionados.
- Documentação (runbooks) facilita resposta rápida a incidentes.
- Observabilidade é fundamental para sistemas modernos, especialmente em microserviços.

---

#### Templates e Desafios Práticos

- Criar dashboard com Golden Signals do seu sistema.
- Estruturar logs e implementar tracing distribuído.
- Definir SLI, SLO e SLA para serviços críticos.
- Elaborar runbooks para alertas recorrentes.

---

#### Referências e Exemplos

- Casos: Amazon, Uber, Spotify
- Ferramentas: Prometheus, Grafana, Datadog, Jaeger, ELK Stack, AWS X-Ray

---

#### Call to Action

- Implemente pelo menos um Golden Signal e um alerta inteligente no seu sistema.
- Dúvidas? Entre em contato: vitormlnky (Instagram, LinkedIn, GitHub).
