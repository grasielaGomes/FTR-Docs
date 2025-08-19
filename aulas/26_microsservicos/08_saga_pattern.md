### Saga Pattern em Microserviços

#### Introdução ao Saga Pattern

- Saga Pattern é um padrão comum para gerenciar transações distribuídas em microserviços.
- Resolve o problema de rollback e compensação quando operações em múltiplos serviços falham.

---

#### Exemplo Prático de Saga

- E-commerce: criação de pedido, emissão de nota fiscal, consulta de pontuação, envio de PDF.
- Se algum serviço falhar (ex: nota fiscal não emitida por CPF inválido), é necessário desfazer operações anteriores (rollback/compensação).

---

#### Funcionamento do Saga

- Cada operação assíncrona pode ter dois status: sucesso ou erro.
- Para cada ação, é necessário definir uma ação de compensação (rollback) caso ocorra erro.
- Compensações podem afetar múltiplos serviços em sequência, desfazendo operações anteriores.

---

#### Implementação de Saga

- Orquestrador centraliza o gerenciamento dos sagas e dos eventos.
- Cada serviço implementa funções para executar a ação principal e a compensação (ex: handleDeleteUserAccount e handleRestoreUserAccount).
- Soft delete é utilizado para facilitar o rollback (ex: restaurar URLs ou contas apagadas).

---

#### Workflow do Saga

- Orquestrador mantém o estado dos sagas e dos passos executados.
- Workflow define a sequência de operações e suas compensações.
- Exemplo: deletar URLs, deletar Analytics, deletar conta do usuário; rollback restaura todos os passos anteriores em caso de erro.

---

#### Ferramentas e Frameworks

- Orquestrador pode ser implementado manualmente ou com frameworks (ex: NestJS possui suporte automatizado a sagas).
- Node.js é mais usado para serviços finais; Java e Go são comuns para orquestradores de sagas.

---

#### Considerações Finais

- Saga Pattern garante consistência e integridade em transações distribuídas.
- Permite desfazer operações em múltiplos serviços de forma coordenada.
- Essencial para sistemas complexos e integrados com múltiplos microserviços.
