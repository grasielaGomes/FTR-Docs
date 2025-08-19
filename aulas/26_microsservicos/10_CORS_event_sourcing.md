### CQRS e Event Sourcing em Microserviços

#### Fundamentos do CQRS

- CQRS (Command Query Responsibility Segregation) é um padrão que separa operações de escrita (comandos) das operações de leitura (queries) em sistemas distribuídos.
- Cada microserviço é responsável apenas por comandos (create, update, delete), sem rotas de leitura (GET).

---

#### Estratégia de Leitura com View Tables

- A leitura dos dados é feita por meio de bancos de dados de leitura, que possuem View Tables.
- View Tables são tabelas populadas automaticamente com dados agregados de múltiplos serviços, já no formato ideal para consumo pelo front-end.
- Exemplo: tabela `orders_with_invoices` contém dados de pedidos e URLs de invoices, preenchida a partir dos bancos dos serviços de orders e invoices.

---

#### Ferramentas para Sincronização de Dados

- Ferramentas de Data Warehouse podem consumir eventos de bancos de dados dos microserviços e preencher as View Tables.
- O front-end faz requisições GET para o serviço que expõe essas tabelas agregadas, facilitando o consumo dos dados.

---

#### Event Sourcing

- Event Sourcing é um padrão que armazena apenas os eventos que ocorreram sobre uma entidade, e não o estado final.
- Exemplo: em vez de salvar o estoque atual de um produto, salva-se cada operação (increase/decrease) realizada sobre o estoque.
- Os eventos são processados para atualizar o banco de dados de leitura, refletindo o estado atual para o usuário final.

---

#### Integração entre CQRS e Event Sourcing

- Os eventos registrados pelos microserviços são enviados para o banco de leitura, que converte os eventos em dados agregados e atualizados.
- Essa segregação permite que cada serviço foque em registrar eventos, enquanto o banco de leitura mantém o estado final para consultas.

---

#### Considerações Finais

- CQRS e Event Sourcing são padrões essenciais para resolver problemas de agregação e consistência de dados em microserviços.
- Permitem escalabilidade, performance e flexibilidade na modelagem dos dados.
- Event Sourcing é geralmente utilizado em conjunto com CQRS para evitar perda de performance e facilitar a conversão dos eventos em dados de leitura.
