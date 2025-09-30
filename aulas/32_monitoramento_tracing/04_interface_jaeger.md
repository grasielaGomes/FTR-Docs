### Interface do Jaeger: Visão Geral e Passo a Passo

#### 1. O que é o Jaeger?

- Ferramenta open source de tracing distribuído.
- Criada pela Uber e mantida pela CNCF (Cloud Native Computing Foundation).
- Permite monitorar fluxos de trabalho, encontrar gargalos, rastrear causas raiz e analisar dependências.
- Muito utilizada no mercado, com selo de autoridade da CNCF.

#### 2. Recursos e Benefícios

- Monitoramento de requisições distribuídas.
- Identificação de gargalos de performance.
- Análise de dependências entre serviços.
- Diagnóstico rápido de falhas e erros.
- Visualização de payloads e atributos customizados.

#### 3. Acessando a Interface

- Site oficial: [jaegertracing.io](https://www.jaegertracing.io)
- Demonstração online disponível no site.
- Para projetos locais, acesse `localhost:8081` após subir a infraestrutura.

#### 4. Navegando na Interface do Jaeger

- Painel de busca à esquerda:
  - **Service:** selecione o serviço instrumentado (ex: alunos-api).
  - **Operations:** escolha endpoints/handlers específicos ou todos.
  - **Tags:** filtre por status code, atributos, etc.
  - **Lookback:** defina o período de busca (últimos 5 min, 30 min, 1h).
  - **Duration:** filtre por duração mínima/máxima das requisições.
  - **Limite de resultados:** defina quantos traces exibir.
- Clique em "Find Traces" para buscar e visualizar os resultados.

#### 5. Interpretando os Resultados

- Gráfico:
  - Eixo X: momento em que a requisição ocorreu.
  - Eixo Y: duração da requisição.
  - Cada ponto representa um trace.
- Lista de traces:

  - Cada linha é uma execução.
  - Clique para ver detalhes do trace.

- Detalhes do trace:
  - Visualize spans (chamadas HTTP, banco de dados, etc).
  - Veja status code, duração, payloads e atributos customizados.
  - Analise gargalos (ex: tempo maior em banco de dados que na API).
  - Compare múltiplos spans para identificar repetições ou problemas.

#### 6. Passo a Passo para Usar o Jaeger

1. Suba a infraestrutura (Collector, Jaeger, etc) e rode sua aplicação instrumentada.
2. Acesse `localhost:8081` no navegador para abrir o Jaeger.
3. No painel de busca, selecione o serviço desejado (ex: alunos-api).
4. Defina filtros (operation, tags, lookback, duration) conforme necessário.
5. Clique em "Find Traces" para listar as requisições.
6. Analise o gráfico para identificar requisições lentas ou fora do padrão.
7. Clique em um trace para ver detalhes:
   - Veja os spans, duração, status code e payloads.
   - Identifique gargalos (ex: consultas repetidas ao banco).
   - Use as estatísticas e tabelas para comparar execuções.
8. Utilize as informações para ajustar código, corrigir gargalos e melhorar a performance.

#### 7. Boas Práticas

- Não registre dados sensíveis sem anonimização.
- Use atributos customizados para enriquecer os traces.
- Analise tanto performance quanto erros de negócio.
- Utilize os filtros para investigações mais precisas.

---

### Resumo

- O Jaeger facilita o diagnóstico de performance e erros em aplicações distribuídas.
- Permite visualizar o caminho completo das requisições, identificar gargalos e analisar payloads.
- É uma ferramenta essencial para observabilidade em ambientes modernos.
