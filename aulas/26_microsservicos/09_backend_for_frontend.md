### Backend for Frontend (BFF) em Microserviços

#### Fundamentos do Backend for Frontend

- O BFF é um padrão arquitetural que cria um back-end específico para atender às necessidades do front-end.
- Resolve desafios de consumo e combinação de dados provenientes de múltiplos microserviços.
- Facilita a entrega de dados no formato ideal para cada interface (web, mobile, etc).

---

#### Desafios de Consumo de Dados em Microserviços

- Microserviços aumentam a complexidade na comunicação e no consumo de dados pelo front-end.
- API Gateway centraliza requisições, mas não resolve o problema de combinar dados de múltiplos serviços.
- Exemplo: listagem de pedidos que precisa exibir dados de orders e invoices, cada um em seu próprio serviço e banco de dados.

---

#### Estratégias de Consumo

- O front-end pode fazer múltiplas chamadas para diferentes serviços, mas isso gera muitos requests e problemas de performance.
- Alternativa: criar rotas agregadoras que retornam dados já combinados, reduzindo o número de requisições.
- O back-end passa a ser modelado para atender ao formato que o front-end precisa consumir.

---

#### Implementação do BFF

- Em vez de modificar os microserviços existentes, cria-se um serviço BFF separado.
- O BFF agrega dados de múltiplos serviços (ex: orders, invoices) e retorna no formato ideal para o front-end.
- Comunicação entre BFF e microserviços pode ser feita via HTTP ou gRPC.

---

#### Exemplo Prático

- Serviço BFF de purchases: rota `getOrdersWithInvoices` busca dados de orders e invoices e retorna para o front-end.
- O BFF centraliza a lógica de agregação e formatação dos dados, simplificando o consumo pelo front-end.

---

#### Considerações Finais

- Backend for Frontend é uma solução comum para facilitar o consumo de dados em arquiteturas de microserviços.
- Permite entregar dados prontos para o front-end, reduzindo complexidade e melhorando performance.
- Não é a única solução para agregação de dados; outras estratégias podem ser utilizadas conforme o contexto.
