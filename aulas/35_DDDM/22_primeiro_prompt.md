### Construção de Prompts Específicos para Extração de Insights de Churn

#### 1. Estratégia Geral para Cada IA

- ChatGPT: foco em análises exploratórias, descritivas e narrativas.
- Manus AI: foco em análises quantitativas e modelagem preditiva.
- Lovable: foco em relatórios empáticos, estratégicos e storytelling dos dados.

#### 2. Abordagem Recomendada

- Realizar as análises separadamente em cada IA.
- Iniciar pelo ChatGPT para obter um compilado de informações.
- Em seguida, utilizar Manus AI e Lovable para comparar resultados e abordagens.

#### 3. Prompts para ChatGPT

- **Prompt 1:** Análise geral do perfil dos clientes.
  - Descrever perfil geral: distribuição por idade, gênero, região, tipo de plano, ticket médio, tempo médio de permanência, nota média de satisfação.
  - Identificar padrões comportamentais entre clientes ativos e churnados.
  - Finalizar com resumo narrativo sobre o cliente típico que permanece e o que cancela.
- **Prompt 2:** Fatores de churn.
  - Identificar principais fatores associados ao churn.
  - Analisar satisfação, tipo de plano, frequência de uso, número de chamados, valor pago e região.
  - Montar ranking dos cinco principais fatores de risco e explicar influência de cada um.
- **Prompt 3:** Análise temporal do churn.
  - Analisar tendência do churn ao longo dos meses e apontar possíveis causas.
  - Sugerir três hipóteses para aumento ou redução do churn.
  - Observação: a planilha atual possui apenas um mês de dados, limitando a análise temporal.

#### 4. Considerações sobre os Prompts do ChatGPT

- Alguns prompts podem não ser totalmente aplicáveis devido à limitação dos dados (ex: análise temporal).
- Possibilidade de adaptar prompts conforme a disponibilidade de informações.

#### 5. Prompts para Manus AI

- **Prompt 1:** Correlação e importância de variáveis.
  - Identificar variáveis mais correlacionadas ao churn.
  - Calcular coeficiente de correlação e criar ranking de importância.
  - Explicar influência de cada variável na probabilidade de churn.
- **Prompt 2:** Modelagem preditiva.
  - Construir modelo preditivo (ex: Random Forest, regressão logística) para prever churn.
  - Apresentar métricas de desempenho do modelo (precisão, recall, F1 score).
  - Observação: modelagem preditiva é mais indicada para bases maiores e planos avançados.
- **Prompt 3:** Segmentação de clientes (clustering).
  - Agrupar clientes por comportamento.
  - Descrever grupos e destacar cluster com maior índice de churn.
  - Sugerir estratégias para retenção de cada grupo.
  - Observação: pode ser simplificado para análise quantitativa sem clustering avançado.

#### 6. Considerações sobre os Prompts do Manus AI

- Modelagem preditiva e clustering podem ser complexos para a base atual.
- Recomenda-se simplificar prompts para garantir resultados completos e aplicáveis.

#### 7. Prompts para Lovable

- **Prompt 1:** Storytelling dos dados.
  - Contar uma história sobre os dados, destacando clientes fiéis e churnados.
  - Usar tom empático e envolvente, ressaltando sentimentos, dores e motivações.
- **Prompt 2:** Insights emocionais e recomendações.
  - Identificar dores e frustrações dos clientes.
  - Apontar padrões emocionais ligados ao churn.
  - Sugerir oportunidades de melhoria em comunicação, suporte e experiência.
  - Finalizar com três recomendações práticas para retenção.
- **Prompt 3:** Relatório executivo para líderes.
  - Criar resumo executivo para diretoria.
  - Destacar principais achados, fatores críticos de churn, recomendações práticas e impacto potencial.

#### 8. Considerações Finais

- Prompts podem ser ajustados conforme necessidade e limitações dos dados.
- Importante adaptar a complexidade dos prompts ao contexto e à ferramenta utilizada.
- Recomenda-se revisar e aprimorar os prompts para garantir resultados mais direcionados e úteis.

---
