### Arquitetura Hexagonal no Domain Driven Design (DDD)

#### Introdução

- A arquitetura hexagonal, também conhecida como "portas e adaptadores", é uma evolução da arquitetura em camadas.
- Criada em 2005, tem como objetivo isolar o domínio de dependências externas, como frameworks e bancos de dados.
- O domínio se torna o coração da aplicação, protegido de mudanças externas.

---

#### Estrutura da Arquitetura Hexagonal

1. **Domínio no Centro:**

   - O domínio é o núcleo do sistema, onde estão as regras de negócio.
   - Ele é acessado por meio de portas e adaptadores.

2. **Portas:**

   - **Portas Primárias (Entrada):**
     - Especificam como o domínio pode ser acessado por agentes externos, como usuários ou sistemas.
     - Exemplos: Terminal, aplicação web.
   - **Portas Secundárias (Saída):**
     - Especificam como o domínio interage com elementos externos, como bancos de dados ou APIs.
     - Exemplos: Persistência de dados, comunicação com APIs de pagamento ou laboratórios.

3. **Adaptadores:**
   - Implementam as especificações definidas pelas portas.
   - **Adaptadores de Entrada:** Implementam como o sistema recebe informações.
   - **Adaptadores de Saída:** Implementam como o sistema envia informações para elementos externos.

---

#### Benefícios da Arquitetura Hexagonal

- **Isolamento Total do Domínio:**
  - Regras de negócio ficam protegidas de mudanças externas.
  - O domínio não depende de frameworks, bancos de dados ou APIs.
- **Flexibilidade:**
  - Permite trocar adaptadores (ex.: mudar o banco de dados) sem alterar o domínio.
- **Facilidade de Testes:**
  - O domínio pode ser testado isoladamente, simulando dependências externas.
- **Escalabilidade:**
  - Adição de novas portas e adaptadores sem impactar o domínio.
  - Ideal para projetos de grande porte.
- **Reutilização:**
  - Componentes do domínio podem ser reutilizados em diferentes contextos.

---

#### Exemplo Prático: Sistema Hospitalar

- **Regra de Negócio:** O paciente não pode agendar duas consultas no mesmo horário.
- **Implementação:**
  - A regra é implementada no domínio, garantindo que ela não seja afetada por mudanças na interface ou infraestrutura.
  - Portas de entrada especificam como o serviço de agendamento será acessado.
  - Adaptadores de saída lidam com a persistência no banco de dados.

---

#### Comparação com a Arquitetura em Camadas

- **Semelhanças:**
  - Ambas isolam o domínio e facilitam testes.
  - A arquitetura hexagonal pode ser vista como uma evolução da arquitetura em camadas.
- **Diferenças:**
  - A arquitetura hexagonal oferece maior flexibilidade e isolamento.
  - É mais adequada para projetos de grande porte.

---

#### Desafios da Arquitetura Hexagonal

- **Complexidade:**
  - Pode ser excessiva para projetos pequenos.
  - Exige maior planejamento e organização.
- **Curva de Aprendizado:**
  - Requer que o time de desenvolvimento esteja alinhado e capacitado.
  - A falta de conhecimento pode levar a implementações inadequadas.

---

#### Conclusão

- A arquitetura hexagonal é uma abordagem poderosa para isolar o domínio e garantir a escalabilidade do sistema.
- É ideal para projetos de grande porte, mas pode ser excessiva para sistemas menores.
- O domínio permanece protegido de mudanças externas, permitindo evolução modular e flexível.
- Nas próximas aulas, será explorada a aplicação prática dessa arquitetura no contexto de um sistema hospitalar.
