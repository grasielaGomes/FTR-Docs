### Monitoramento e Ajuste de Métricas Técnicas

#### Ciclo de Vida das Métricas

- Métricas passam por fases: definição, implementação, monitoramento, análise, ajuste e aposentadoria.
- O monitoramento contínuo é essencial para garantir evolução e relevância das metas.

---

#### Monitoramento Contínuo

- Dashboards visíveis e atualizados facilitam o acompanhamento das métricas por todo o time.
- Ferramentas como Power BI, Grafana, Datadog, Prometheus, CloudWatch, Segment e Amplitude são comuns para coleta e visualização.
- Cadência de visualização:
  - Operacionais: diários (ex: latência de API do Spotify).
  - Táticos: semanais (ex: engajamento).
  - Estratégicos: mensais.
- Mostre tendências e não apenas valores pontuais.

---

#### Análise de Métricas

- Avalie tendências (trends) e anomalias (spikes) para identificar padrões e problemas.
- Considere o contexto: eventos sazonais, deploys, mudanças de produto.
- Diferencie métricas leading (predizem mudanças) e lagging (confirmam mudanças).
- Aja rapidamente em spikes (ex: hotfix, rollback) e ajuste estratégias para tendências.

---

#### Quando e Como Ajustar Métricas

- Sinais de ajuste:
  - Métrica saturada (sempre verde).
  - Otimização forçada prejudicando outras áreas.
  - Mudança de estratégia ou produto.
  - Falsos positivos por baseline desatualizada.
- Use o framework dos 3Rs:
  - Refine: ajuste targets e thresholds (ex: MTTR de 30 para 15 min).
  - Replace: troque por métricas mais relevantes (ex: substituir lines of code por feature delivery frequency).
  - Retire: aposente métricas que não fazem mais sentido.

---

#### Exemplos Reais de Ajuste

- Airbnb: combinou Revenue Per Booking e High Value Booking Rate para melhor refletir o negócio.
- Instagram: mudou de Story Completion Rate para Total Story Watch Time para balancear qualidade e quantidade.
- Uber: ajustou métricas de wait time por região usando Datadog, Tableau e PagerDuty.

---

#### Ferramentas para Monitoramento e Análise

- Coleta: Datadog, New Relic, Data Trace, Prometheus, Grafana, CloudWatch, Segment, Amplitude.
- Análise e alertas: PagerDuty, Opsgenie.
- Insights e experimentação: Tableau, TestShab, ferramentas de teste A/B.

---

#### Boas Práticas para Dashboards

- Estruture dashboards em pirâmide: executivas (high level), por time, individuais.
- Mantenha o signal-to-noise ratio (máx. 7 a 2 métricas principais).
- Use cores semânticas e séries temporais para facilitar a leitura.
- Versione e documente métricas como código.
- Tenha plano de rollback para mudanças.

---

#### Call to Action

- Revise três métricas principais do seu time.
- Verifique se respondem às perguntas certas e, se necessário, aplique o framework dos 3Rs.
