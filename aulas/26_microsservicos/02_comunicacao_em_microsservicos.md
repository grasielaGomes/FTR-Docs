### Comunicação entre Microserviços

#### Introdução

- Comunicação entre serviços é fundamental para microserviços funcionarem de forma isolada e independente.
- Projeto de exemplo disponível no GitHub para consulta dos conceitos na prática.

---

#### Independência dos Serviços

- Cada serviço deve operar sem depender do funcionamento dos demais.
- Exemplo: serviço de encurtamento de URL não depende do serviço de Analytics para criar URLs.
- Diferença em relação ao monolito, onde falhas em um serviço podem afetar outros.

---

#### Protocolos de Comunicação

- Comunicação entre serviços pode ser feita de forma síncrona ou assíncrona.
- Síncrona: HTTP ou gRPC (usado quando é necessário resposta imediata, como consulta de estoque).
- gRPC utiliza Protobuf para tipagem e HTTP/2 para maior eficiência.
- Assíncrona: uso de mensageria (Kafka, RabbitMQ, Redis).

---

#### Comunicação Assíncrona

- Padrão Publish/Subscribe: serviços publicam eventos em um broker (ex: Kafka) e outros serviços consomem esses eventos.
- Mensagens podem ser armazenadas por tempo determinado, permitindo reprocessamento futuro.
- Consumer Groups: cada grupo de consumidores pode ler as mensagens de forma independente.
- Tópicos: eventos são organizados em tópicos, facilitando o consumo segmentado por serviço e tipo de evento.

---

#### Exemplos Práticos

- Serviço de Shortener publica evento "URL created" no Kafka.
- Serviço de Analytics consome esse evento e registra a URL no banco de dados.
- Mensagens podem ser processadas em tempo real ou recuperadas após períodos offline.

---

#### Tipagem e Contratos de Mensagens

- É importante definir o formato das mensagens trafegadas entre serviços.
- Pode-se usar JSON Schema para padronizar mensagens entre diferentes tecnologias.
- Em projetos TypeScript, pode-se usar tipagem nativa (ex: Zod) para garantir consistência dos dados.

---

#### Fluxo de Comunicação no Código

- Após criar uma URL, o serviço publica o evento no broker.
- O serviço consumidor (Analytics) escuta o tópico e executa o handler para processar o evento.
- Cada serviço define quais eventos consome e como processá-los.

---

#### Considerações Finais

- Comunicação assíncrona é preferida sempre que possível para garantir independência e resiliência.
- Comunicação síncrona é utilizada apenas quando necessário (ex: dependência de resposta imediata).
- Mensageria e contratos bem definidos são essenciais para o funcionamento eficiente dos microserviços.
