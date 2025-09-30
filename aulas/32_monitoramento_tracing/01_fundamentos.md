### Fundamentos da Observabilidade

#### 1. Importância da Observabilidade

- Permite investigar problemas, acompanhar infraestrutura e analisar comportamento dos usuários.
- Ajuda a tomar decisões melhores e entender o funcionamento do sistema.

#### 2. Pilares da Observabilidade

- **Logs:** Registros textuais da aplicação (diário de eventos, erros, execuções).
  - Exemplo: chamada de endpoint, método, tempo de duração.
  - Dica: usar formato estruturado (JSON), priorizar informações úteis, manter padrão, evitar excesso e definir níveis (debug, info, warning, erro).
- **Métricas:** Números agregados que mostram tendências (uso de memória, taxa de erro, requisições por segundo).
  - Usadas para alertas e dashboards.
- **Tracing:** Linha do tempo da requisição, mostrando o caminho completo, tempo em cada etapa e serviços envolvidos.
  - Permite identificar gargalos e pontos de falha.

#### 3. Conceitos-Chave

- **Latência:** Tempo de resposta acima do esperado.
- **Throughput:** Quantidade de requisições processadas por tempo.
- **Erro:** Falhas que resultam em respostas inesperadas ao usuário.
- **Saturação:** Sistema no limite da capacidade.

#### 4. Relação entre Logs, Métricas e Tracing

- Métricas mostram tendências (ex: aumento de latência, queda de throughput).
- Logs detalham eventos e contexto dos erros.
- Tracing revela onde a requisição ficou presa ou demorou (ex: banco de dados, cache, serviço saturado).
- Juntos, fornecem um mapa completo para análise e ação.

#### 5. Boas Práticas para Logs

- Usar formato estruturado (JSON) para facilitar filtros e análises.
- Priorizar informações úteis (IDs, endpoints).
- Definir e seguir padrões em equipe.
- Evitar excesso de logs para não aumentar custos.
- Aplicar níveis de log adequados para cada situação.

#### 6. Próximos Passos

- Montar projeto base e infraestrutura para praticar conceitos de observabilidade.
