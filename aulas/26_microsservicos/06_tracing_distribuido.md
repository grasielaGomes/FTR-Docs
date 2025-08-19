### Tracing Distribuído em Microserviços

#### Introdução à Observabilidade

- Observabilidade é fundamental para identificar problemas em sistemas distribuídos.
- Em monolitos, o fluxo de requisição é simples e linear; em microserviços, pode envolver múltiplos serviços e comunicações síncronas/assíncronas.

---

#### Desafios do Tracing em Microserviços

- Requisições podem passar por vários serviços, tornando difícil rastrear o caminho completo.
- Problemas podem ocorrer em qualquer ponto do fluxo, dificultando a identificação da origem.

---

#### Conceito de Tracing Distribuído

- Cada requisição recebe um identificador único (ex: xRequestId) gerado no início do fluxo (API Gateway).
- Esse ID é propagado por todos os serviços e eventos relacionados à requisição.
- Permite correlacionar logs e eventos de diferentes serviços para uma mesma requisição.

---

#### Visualização do Tracing

- Tracing distribuído mostra todo o caminho percorrido pela requisição, tempo gasto em cada etapa e chamadas ao banco de dados.
- Ferramentas como Open Telemetry facilitam a instrumentação automática do tracing em Node.js e outras linguagens.

---

#### Instrumentação Automática

- Pacotes de auto-instrumentation (ex: Open Telemetry para Node) rastreiam automaticamente operações em bibliotecas comuns (HTTP, gRPC, Kafka, RabbitMQ, bancos de dados, etc).
- Basta configurar o tracer em todos os serviços para registrar o tracing distribuído.

---

#### Exemplos Práticos

- Adicionar o require do auto-instrumentation no script de execução dos serviços.
- Operações e comunicações entre serviços são rastreadas automaticamente.
- Para bibliotecas não suportadas, é possível configurar o tracing manualmente.

---

#### Visualização dos Traces

- Ferramentas como Jagger (local) e Grafana (produção) permitem visualizar os traces e identificar gargalos ou falhas.
- Interface gráfica mostra o caminho das requisições, chamadas de banco e tempo de execução.

---

#### Considerações Finais

- Tracing distribuído é essencial para monitorar, depurar e otimizar sistemas de microserviços.
- Facilita a identificação de problemas e a correlação de eventos entre múltiplos serviços.
