### Persistência em Microserviços

#### Introdução

- Persistência de dados é um dos principais desafios em microserviços, assim como a comunicação.
- Cada serviço deve ter seu próprio banco de dados ou estrutura de persistência.

---

#### Desafios da Persistência Distribuída

- Não é permitido que um serviço acesse diretamente o banco de dados de outro serviço.
- Muitas vezes é necessário duplicar dados entre serviços para garantir independência.
- Exemplo: serviço de pedidos, serviço de estoque e serviço de nota fiscal possuem suas próprias tabelas de clientes.

---

#### Estratégias de Compartilhamento de Dados

- Cada serviço armazena apenas os dados necessários para sua operação.
- Dados sensíveis ou desnecessários não devem ser replicados entre serviços.
- O serviço que cria a informação é considerado o detentor principal do dado.
- Outros serviços mantêm cópias ou referências dos dados principais.

---

#### Referências e Sincronização

- É comum guardar referências (ex: ID, e-mail, documento) para correlacionar dados entre serviços.
- Recomenda-se prefixar o nome do campo com o serviço de origem (ex: orders_customer_id).
- Modificações nos dados principais podem ser propagadas via eventos para atualização nos demais serviços.

---

#### Exemplos Práticos

- Serviços de Analytics e URL Shortener possuem esquemas de banco de dados independentes.
- Quando uma URL é criada, um evento é emitido e ouvido pelo serviço de Analytics, que cria o registro correspondente.
- Cada serviço mantém sua própria persistência, mas pode referenciar dados de outros serviços via eventos.

---

#### Documentação e Boas Práticas

- Manter documentação clara sobre o fluxo de dados e comunicação entre serviços.
- Utilizar eventos para sincronização e atualização de dados entre bancos distribuídos.
- Preferir Soft References ao invés de Foreign Keys para integridade referencial entre serviços.

---

#### Considerações Finais

- Persistência distribuída exige atenção à duplicidade e integridade dos dados.
- Soft References facilitam a correlação sem dependência direta de banco de dados.
- É um desafio, mas traz flexibilidade e independência para a arquitetura de microserviços.
