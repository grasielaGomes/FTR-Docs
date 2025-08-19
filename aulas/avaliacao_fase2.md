## Quiz Avaliativo – Estratégia e Inovação (Fase 2)

### Avaliação final da fase com base nos conteúdos abordados na Fase 2

---

**1. Qual das alternativas abaixo é um KPI relacionado à qualidade das entregas de um projeto?**

- CPI (Cost Performance Index)
- ROI (Retorno sobre Investimento)
- Tempo médio para aprovação de mudanças
- **Taxa de retrabalho e defeitos identificados**

---

**2. Quais são as categorias principais de métricas técnicas mencionadas nas aulas sobre Tech Metrics e um exemplo para cada uma delas?**

- Métricas de negócio (deployment frequency), métricas de código (test coverage), métricas financeiras (ROI), métricas de equipe (turnover)
- Métricas de usuário (número de acessos), métricas de software (versão), métricas de rede (latência), métricas de hardware (CPU)
- Métricas de segurança (tempo de resposta), métricas de usabilidade (bugs), métricas de desempenho (lead time), métricas de infraestrutura (uptime)
- **Métricas de performance (tempo de resposta), métricas de qualidade (bugs), métricas de processo (lead time), métricas de saúde do sistema (uptime)**

---

**3. Qual dos erros abaixo é comum na etapa de definição do escopo e pode ser evitado com reuniões de validação com stakeholders?**

- Escopo muito técnico para o time de produto
- **Stakeholders não envolvidos**
- Falta de clareza nas metas de marketing
- Entregáveis muito pequenos e detalhados

---

**4. Por que a Netflix considera o Deployment Frequency, o Mean Time To Recovery (MTTR) e o Change Failure Rate métricas tão importantes?**

- **Porque refletem a capacidade de entregar atualizações frequentes, a rapidez na recuperação de falhas, e a confiabilidade das mudanças feitas no sistema.**
- Porque indicam a quantidade de usuários que usam o serviço simultaneamente.
- Porque medem apenas o tempo que a equipe leva para desenvolver novos recursos.
- Porque indicam a frequência de reuniões da equipe e a quantidade de horas trabalhadas.

---

**5. Qual é a estratégia prática apresentada na aula para implementar a idempotência ao processar um evento?**

- O serviço consumidor envia um evento para o serviço publicador para obter a chave primária do registro (ex: url_id) e usá-la para verificar se ele já existe no banco de dados antes de tentar inseri-lo.
- O serviço consumidor, antes de processar um evento, verifica a hora em que ele foi criado e ignora se for muito antigo.
- **O serviço publicador (ex: URL Shortener) gera um ID de evento único (event_id) e o inclui na mensagem enviada ao Kafka. O serviço consumidor (ex: Analytics), antes de executar sua lógica, verifica em uma tabela de controle (ex: ProcessedEvents) se um evento com aquele ID já foi processado. Se sim, ele ignora a mensagem.**
- O Kafka garante nativamente a idempotência, e os serviços não precisam se preocupar com isso.

---

**6. Para evitar ter que distribuir e atualizar manualmente a chave pública em todos os serviços, qual estratégia é apresentada na aula?**

- A chave pública é compilada diretamente no código de cada serviço durante o processo de build.
- **O serviço de autenticação expõe um endpoint público (conhecido como JWKS - JSON Web Key Set) que, ao ser consultado, retorna a chave pública atual. Os outros serviços consomem este endpoint para obter a chave necessária para validação.**
- A chave pública é armazenada em um arquivo de configuração (.env) em cada um dos 500 serviços e atualizada manualmente via deploy.
- Os serviços utilizam um banco de dados compartilhado para ler a chave pública, que é atualizada por um processo de CI/CD.

---

**7. De acordo com as aulas, como os microsserviços devem ser modelados e qual vantagem de escalabilidade isso proporciona?**

- **Devem ser modelados em torno de um domínio de negócio específico (semelhante aos Bounded Contexts do DDD), permitindo a escalabilidade direcionada de cada serviço conforme a demanda.**
- Devem ser modelados em pequenos pacotes de código, e a escalabilidade é sempre horizontal, adicionando mais máquinas ao monolito principal.
- Devem ser modelados com base na tecnologia utilizada, permitindo que a equipe de DevOps gerencie todos os serviços de forma unificada.
- Devem ser modelados para que todos os serviços acessem um banco de dados central, o que permite escalar o banco de dados de forma independente.

---

**8. No exemplo de um serviço de Pedidos (Orders) e um de Notas Fiscais (Invoices), como a informação de um cliente é compartilhada entre eles?**

- **O serviço de Orders emite um evento (ex: pedido.criado) contendo todos os dados do cliente, e o serviço de Invoices armazena em seu próprio banco de dados uma cópia dos dados que são relevantes para ele (como endereço e documento), descartando o que não é (como dados do cartão).**
- O serviço de Invoices armazena apenas o customer_id e, sempre que precisa dos dados, faz uma chamada síncrona para o serviço de Orders.
- O serviço de Invoices realiza uma consulta direta (SELECT) no banco de dados do serviço de Orders para buscar os dados do cliente.
- Todos os dados do cliente são armazenados em um terceiro serviço de Clientes, e tanto Orders quanto Invoices o consultam via gRPC.

---

**9. Qual é uma vantagem de configurar regras de merge (branch rules) em repositórios com CI/CD no GitHub?**

- Permite executar código sem precisar de testes
- **Garante que apenas PRs aprovados e com jobs bem-sucedidos possam ser mesclados na branch principal**
- Permite ignorar testes quando os arquivos modificados forem pequenos
- Força a instalação de dependências sempre que houver um commit

---

**10. As aulas falam sobre "consistência de dados" como um grande desafio. Qual prática é considerada um erro na comunicação e acesso a dados entre microsserviços?**

- Um serviço se comunicar com outro utilizando protocolos como HTTP ou gRPC.
- Um serviço publicar um evento em um sistema de mensageria (como Kafka) para que outro serviço o consuma.
- Um serviço manter uma referência (como um ID) a um dado que é propriedade de outro serviço.
- **Um serviço acessar diretamente o banco de dados de outro serviço para ler ou modificar dados.**

---

**11. Qual é o principal objetivo da definição do escopo em um projeto?**

- Aumentar o número de entregáveis para agradar todos os stakeholders
- Flexibilizar os requisitos ao longo do desenvolvimento
- **Estabelecer os limites do trabalho e garantir alinhamento entre os stakeholders**
- Reduzir os custos do projeto desde o início

---

**12. Qual é um dos principais desafios ao testar a implementação de um Singleton em linguagens que utilizam paralelismo ou múltiplas threads?**

- O Singleton impede o uso de bancos de dados reais
- Os testes se tornam mais lentos por conta da serialização automática
- **É difícil garantir que apenas uma instância será criada simultaneamente**
- Singleton não funciona em ambientes de containers

---

**13. Na comunicação entre microsserviços, quando uma abordagem síncrona é necessária (por exemplo, um serviço de saques bancários que precisa verificar o saldo em tempo real)? Qual protocolo, além do HTTP, é sugerido na aula por ser mais eficiente e tipado?**

- Kafka, pois ele armazena as mensagens e garante a entrega.
- RabbitMQ, por seguir o padrão publish-subscribe.
- **gRPC (Google Remote Procedure Call), por utilizar Protobuf para criar um contrato tipado entre os serviços e usar o protocolo HTTP/2.**
- Redis, por ser uma alternativa rápida para comunicação de baixa latência.

---

**14. Qual é o principal problema que o Saga Pattern se propõe a resolver em uma arquitetura de microsserviços?**

- Gerenciar a autenticação de usuários entre múltiplos serviços.
- Otimizar a performance da comunicação entre serviços, substituindo HTTP por gRPC.
- Centralizar o roteamento de todas as requisições de front-end para os serviços de back-end corretos.
- **Lidar com transações que se estendem por vários serviços, onde uma falha em uma etapa posterior exige que as ações concluídas nas etapas anteriores sejam desfeitas (compensadas).**

---

**15. Qual das opções abaixo descreve corretamente uma das principais diferenças entre Scrum e Kanban?**

- Scrum exige entrega de testes automatizados; Kanban não permite priorização
- **Scrum trabalha com sprints fixas; Kanban possui fluxo contínuo sem sprints definidas**
- Scrum não tem papéis definidos; Kanban exige um Product Owner
- Kanban é usado apenas para startups; Scrum, para manutenção de sistemas

---

**16. Qual das alternativas descreve corretamente a principal diferença entre o AWS Secret Manager e o Parameter Store?**

- O Secret Manager é gratuito e o Parameter Store é pago.
- O Parameter Store permite rotação automática de segredos, enquanto o Secret Manager não.
- **O Secret Manager permite rotação automática de segredos e integração com serviços como RDS, enquanto o Parameter Store apenas armazena parâmetros sem funcionalidades avançadas.**
- O Parameter Store é usado apenas para armazenar logs e não suporta dados sensíveis.

---

**17. Qual é a principal função de um API Gateway em uma arquitetura de microsserviços, conforme explicado nas aulas?**

- Ele serve como um banco de dados centralizado para que todos os outros serviços armazenem suas informações.
- **Ele atua como um ponto de entrada único (proxy) para todas as requisições do cliente (front-end), direcionando cada requisição para o microsserviço correto com base na rota acessada.**
- Sua função é exclusivamente gerenciar a comunicação assíncrona entre os serviços utilizando Kafka ou RabbitMQ.
- Ele é uma ferramenta de deploy que empacota todos os microsserviços em um único contêiner para facilitar a publicação.

---

**18. Qual é o conceito do padrão Event Sourcing e como ele se relaciona com o CQRS?**

- Event Sourcing é o ato de salvar o estado final de uma entidade (ex: estoque = 9) diretamente no banco de dados.
- **Event Sourcing é um padrão onde, em vez de armazenar o estado final de uma entidade, armazena-se a sequência de eventos que a levaram àquele estado (ex: +10 de estoque, -1 de estoque). Ele se combina bem com CQRS, pois esses eventos podem ser usados para construir os "read models" (View Tables).**
- Event Sourcing é uma técnica para enviar eventos de log para uma ferramenta de observabilidade como o Grafana.
- Event Sourcing significa que toda a comunicação entre serviços deve ser feita exclusivamente através de eventos, eliminando o uso de HTTP ou gRPC.

---

**19. Qual é a principal função do padrão de projeto Observer?**

- Permitir que vários objetos compartilhem o mesmo estado sem duplicação
- **Notificar múltiplos objetos observadores quando um evento ocorre em um objeto observado (Subject)**
- Criar uma estrutura hierárquica entre classes usando herança múltipla
- Substituir o uso de promessas e callbacks em chamadas assíncronas

---

**20. Qual é o papel principal de um repositório dentro da arquitetura baseada em DDD?**

- Armazenar dados diretamente no banco de dados sem abstrações
- Gerenciar a lógica de apresentação da aplicação
- **Encapsular o acesso e persistência de dados, oferecendo uma interface para operações como adicionar, buscar, atualizar e excluir entidades**
- Realizar a modelagem de objetos de valor

---

**21. Qual a função principal do AWS KMS (Key Management Service)?**

- Criar e rotacionar senhas de bancos de dados automaticamente.
- Armazenar configurações e secrets simples usados por aplicações.
- **Criar e gerenciar chaves de criptografia usadas para proteger dados em serviços da AWS.**
- Substituir o uso de SDKs na comunicação com o Secret Manager.

---

**22. Qual é o padrão principal utilizado para a comunicação assíncrona entre serviços?**

- O padrão é o Remote Procedure Call (RPC), onde um serviço chama diretamente uma função em outro serviço, esperando uma resposta imediata.
- O padrão é o Client-Server, onde o serviço de shortener envia uma requisição HTTP direta para o serviço de analytics e aguarda a confirmação.
- **O padrão é o Publish-Subscribe, onde um serviço (publisher) envia uma mensagem para um "broker" (como o Kafka), e outro serviço (subscriber) ouve essas mensagens para processá-las, sem comunicação direta entre eles.**
- O padrão é o Data Sharing, onde ambos os serviços acessam e modificam um banco de dados compartilhado para trocar informações.

---

**23. Na analogia usada na aula, qual elemento do mundo real representa o padrão Facade?**

- O cozinheiro que prepara os pratos
- O cardápio que apresenta os itens disponíveis
- **O garçom que interage com o cliente e repassa os pedidos para a cozinha**
- O cliente que faz o pedido

---

**24. Qual ferramenta é mencionada como o padrão de mercado para implementar a coleta de dados de tracing, e qual sua principal vantagem no ecossistema Node.js?**

- A ferramenta é o Kong, e sua vantagem é que ele gera os traces automaticamente ao rotear as requisições.
- A ferramenta é o Docker, e sua vantagem é isolar a coleta de traces em contêineres separados.
- A ferramenta é o Grafana, e sua vantagem é que ele se conecta diretamente ao código da aplicação para extrair os traces.
- **A ferramenta é o OpenTelemetry, e sua principal vantagem é o pacote de instrumentação automática (auto-instrumentations-node), que consegue rastrear operações em bibliotecas populares (Express, Kafka.js, Postgres, etc.) sem a necessidade de alterar o código da aplicação.**

---

**25. Por que a utilização de algoritmos de chave assimétrica (com chave pública e privada, como o RS256) é preferível à chave simétrica (com um único segredo, como o HS256) na autenticação entre microsserviços?**

- Porque a chave simétrica é menos segura e mais fácil de ser quebrada por ataques de força bruta.
- Porque algoritmos de chave assimétrica são mais rápidos para gerar e validar tokens, melhorando a performance geral do sistema.
- Porque a chave simétrica exige que todos os serviços compartilhem o mesmo banco de dados, o que vai contra os princípios dos microsserviços.
- **Porque a chave assimétrica permite que o serviço de autenticação seja o único a possuir a chave privada (usada para criar tokens), enquanto os outros serviços precisam apenas da chave pública (usada para validar tokens), que é menos sensível e pode ser distribuída com mais segurança.**

---

**26. Como funciona, na prática, o Tracing Distribuído?**

- Ele funciona analisando os logs de cada serviço individualmente e tentando conectá-los com base no horário em que ocorreram.
- **Ele funciona gerando um ID de requisição único (ex: x-request-id) no ponto de entrada (como no API Gateway) e garantindo que esse mesmo ID seja propagado através de todas as chamadas subsequentes, sejam elas síncronas (HTTP) ou assíncronas (via Kafka), ligando todas as etapas.**
- Ele funciona ativando um modo de "debug" em todos os serviços, o que faz com que eles enviem informações detalhadas para o console.
- Ele funciona criando uma conexão de banco de dados compartilhada entre todos os serviços para registrar cada etapa da requisição.

---

**27. Por que a Anti-Corruption Layer facilita a manutenção da aplicação?**

- Porque ela atualiza automaticamente os dados externos
- **Porque isola mudanças externas, evitando que elas impactem o núcleo do domínio**
- Porque permite que qualquer alteração no sistema externo afete diretamente o domínio
- Porque transforma o sistema legado em um sistema moderno

---

**28. Qual é o principal objetivo do padrão de projeto Strategy?**

- Reduzir a quantidade de arquivos no projeto
- Criar uma única classe para todas as funcionalidades
- **Permitir a criação de algoritmos intercambiáveis com variações de comportamento**
- Eliminar completamente o uso de classes no código

---

**29. Qual é o principal objetivo da área de conhecimento "Integração", segundo o PMBOK, em projetos de tecnologia?**

- Garantir que todas as tarefas estejam alocadas para os membros do time
- Monitorar continuamente o orçamento do projeto
- Validar entregas com os stakeholders externos ao final do projeto
- **Alinhar todas as partes do projeto e consolidar informações em documentos como o TAP e o plano de gerenciamento**

---

**30. O que diferencia um teste de integração de um teste unitário, conforme explicado na aula?**

- Os testes de integração sempre acessam o banco de dados real
- **Os testes de integração testam múltiplos componentes em colaboração, mesmo que com partes simuladas**
- Os testes de integração não precisam de nenhum tipo de verificação de resultado
- Os testes de integração ignoram completamente o uso de stubs ou mocks
