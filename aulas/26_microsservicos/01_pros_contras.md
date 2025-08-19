### Fundamentos de Microserviços

#### O que são Microserviços?

- Arquitetura voltada principalmente para infraestrutura e deploy de aplicações.
- Serviços funcionam de forma independente: se um serviço falhar, os outros continuam operando normalmente.
- Cada serviço pode ter sua própria tecnologia, banco de dados e forma de deploy.
- Modelagem dos serviços deve ser feita em torno de domínios de negócio específicos.

---

#### Relação com Domain Driven Design (DDD)

- Microserviços são frequentemente estudados junto com DDD.
- DDD ajuda a entender como separar os serviços usando Bounded Contexts (fronteiras de domínios).
- Cada contexto tem suas próprias regras e significados, facilitando a separação de áreas em sistemas grandes (ERP, CRM, e-commerce).

---

#### Vantagens dos Microserviços

- Infraestrutura específica por necessidade de cada serviço.
- Possibilidade de usar diferentes tecnologias e bancos de dados por serviço.
- Escalabilidade individual: cada serviço pode ser escalado separadamente conforme a demanda.
- Desenvolvimento paralelo: times podem trabalhar em diferentes serviços sem conflitos de código.
- Independência de deploy: cada serviço pode ser implantado sem afetar os demais.

---

#### Exemplos Práticos

- Serviço de encurtamento de URL pode usar banco NoSQL (ex: MongoDB).
- Serviço de Analytics pode usar banco especializado em séries temporais (ex: Clickhouse).
- Front-end se comunica com serviço de encurtamento, que por sua vez aciona o serviço de Analytics para registrar acessos.
- Escalabilidade: serviços podem ser distribuídos em múltiplas máquinas conforme a necessidade.

---

#### Desafios e Contras dos Microserviços

- Complexidade multiplicada: cada novo serviço traz desafios de latência, debug, observabilidade, tracing e transações.
- Monitoramento e CI/CD precisam ser implementados para cada serviço individualmente.
- Consistência de dados: manter dados sincronizados entre serviços é difícil, especialmente com muitos microserviços.
- Cada serviço deve ter seu próprio banco de dados; compartilhar banco entre serviços não é recomendado.
- Comunicação entre serviços deve ser feita por protocolos como HTTP, gRPC, Kafka, RabbitMQ, Redis, etc.

---

#### Considerações Finais

- Microserviços são recomendados para empresas grandes, com muitos desenvolvedores e operações complexas.
- Exigem conhecimento em arquitetura, DevOps e boas práticas de comunicação entre serviços.
- Apesar dos desafios, são essenciais para escalabilidade e organização de grandes sistemas.

#### Repositório exemplo

- https://github.com/rocketseat-education/ftr-fundamentos-microsservicos
