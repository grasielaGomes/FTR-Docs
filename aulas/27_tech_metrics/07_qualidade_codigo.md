### Fundamentos de Qualidade de Código e Débito Técnico

#### O que é Qualidade de Código?

- Conjunto de práticas e métricas que garantem legibilidade, manutenibilidade, confiabilidade e performance do software.
- Impacta diretamente na prevenção de falhas, redução de custos e evolução sustentável do sistema.
- Débito técnico: acúmulo de atalhos, decisões rápidas ou más práticas que dificultam a manutenção e evolução do código.

---

#### Exemplos Reais e Impacto do Débito Técnico

- Caso Night Capital (2018): empresa perdeu US$ 440 milhões em 45 minutos devido a bug em código legado e feature flags mal gerenciadas.
- Débito técnico pode causar prejuízos financeiros, falhas críticas e até o fechamento de empresas.
- Profissionais de tecnologia são responsáveis por prevenir catástrofes, indo além da simples escrita de código.

---

#### Estatísticas e Realidade do Mercado

- 25% do tempo de desenvolvimento é gasto com débito técnico.
- Custo médio anual de manutenção: US$ 306 mil por milhão de linhas de código.
- Débito técnico é comum devido à pressa, metodologias ágeis e evolução rápida dos sistemas.

---

#### Mecanismos para Garantir Qualidade

- Uso de métricas e indicadores para monitorar qualidade e alertas.
- Ferramentas de dashboard (ex: Datadog) para visibilidade do software.
- Análise estática como ponto de partida: Code Coverage, Complexidade Ciclomática, Duplicação de Código.

---

#### Principais Métricas de Qualidade

**1. Code Coverage (Cobertura de Testes)**

- Mede a porcentagem do código coberto por testes automatizados.
- Exemplo Spotify: código crítico deve ter 80% de cobertura; código geral, 60%.
- Ferramentas: SonarQube, CodeCov, Istanbul.
- Netflix: mantém alta cobertura em serviços críticos para garantir SLA de 99,9%.

**2. Complexidade Ciclomática**

- Mede a quantidade de caminhos lógicos possíveis no código (branching).
- Complexidade alta aumenta risco de bugs e dificulta manutenção.
- Exemplo: funções com muitos ifs aninhados podem ser divididas em funções menores.
- Regra de ouro: máximo de 10 caminhos por método (baseline de grandes empresas).

**3. Duplicação de Código**

- Identifica trechos de código repetidos em diferentes partes do sistema.
- Duplicação dificulta refatoração e aumenta risco de inconsistências.
- Limite recomendado: até 5% de duplicação.
- Ferramentas: SonarQube, Code Climate, JS CPD.

---

#### Métricas Estáticas x Métricas Dinâmicas

- Métricas estáticas: analisam o código sem executá-lo (ex: coverage, complexidade, duplicação).
- Métricas dinâmicas: monitoram o comportamento do sistema em produção (ex: response time, throughput, error count, uso de memória).
- Combinação das duas oferece visão holística da saúde do sistema.
- Ferramentas de monitoramento: Datadog, dashboards customizados.

---

#### Contexto de Negócio e Priorização

- Métricas devem ser adaptadas ao contexto: APIs críticas exigem alta confiabilidade e cobertura; landing pages priorizam performance e UX.
- Exemplo: para landing pages, 60% de cobertura pode ser suficiente; para APIs de pagamento, foco em erros e transações bem-sucedidas.

---

#### Gestão e Priorização do Débito Técnico

- Fórmula para calcular débito técnico: tempo de correção / tempo de desenvolvimento.
- Benchmark Google:
  - <5%: saudável
  - 5-10%: atenção
  - > 10%: crítico
- Priorização baseada em hotspots: arquivos mais modificados e com mais bugs devem ser priorizados.
- Métricas ajudam a justificar ações e priorizar débitos técnicos em sprints.

---

#### Boas Práticas e Considerações Finais

- Qualidade de código não é só sobre números, mas sobre contexto e impacto no negócio.
- Use métricas para embasar decisões e criar sistemas sustentáveis.
- Combine análise estática e dinâmica para visão completa.
- Exercício sugerido: desafio de 4 semanas para mapear e melhorar métricas de qualidade no seu sistema.

---

#### Templates e Desafios Práticos

- Criar um dashboard de métricas estáticas e dinâmicas do seu sistema.
- Identificar hotspots e priorizar refatorações.
- Aplicar ferramentas de análise estática (SonarQube, CodeCov, Istanbul, JS CPD).
- Medir e acompanhar evolução das métricas ao longo de 4 semanas.

---

#### Referências e Exemplos

- Spotify, Netflix, Google: benchmarks e práticas de qualidade de código.
- Ferramentas: SonarQube, CodeCov, Istanbul, Code Climate, Datadog, JS CPD.

---

#### Call to Action

- Acesse o template de desafio de 4 semanas para criar sua baseline de qualidade.
- Dúvidas? Entre em contato: vitormlnky (Instagram, LinkedIn, GitHub).
