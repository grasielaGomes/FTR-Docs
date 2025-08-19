### Isolando o Domínio com Arquitetura em Camadas

#### Revisão de Conceitos

- Revisamos a linguagem ubíqua e a comunicação eficiente.
- Discutimos o domínio como o coração do software.
- Exploramos a orientação a objetos e sua relação com o domínio.
- Introduzimos o conceito de isolamento do domínio.

---

#### O que é Arquitetura em Camadas?

- **Definição:** Abordagem clássica para organizar o software em camadas com responsabilidades bem definidas.
- **Popularidade:** Uma das arquiteturas mais utilizadas, especialmente desde o lançamento do livro _Domain Driven Design_ (2003).
- **Evolução:** Outras arquiteturas, como a hexagonal, surgiram posteriormente para aprimorar o isolamento do domínio.

---

#### Estrutura da Arquitetura em Camadas

1. **Camada de Apresentação:**

   - Responsável pela interface do usuário.
   - Exemplos: Front-end, aplicações desktop, terminais ou APIs.
   - Permite múltiplas implementações (web, mobile, desktop).
   - Envia dados inseridos pelo usuário para a camada de aplicação.

2. **Camada de Aplicação:**

   - Orquestra as operações do sistema.
   - Validações que não podem ser feitas na camada de apresentação.
   - Gatilho para execução das regras de negócio no domínio.

3. **Camada de Domínio:**

   - Contém as entidades, regras de negócio e lógica central do sistema.
   - Foco exclusivo no negócio, sem dependências técnicas.
   - Exemplo: Regra de negócio que impede um paciente de agendar duas consultas no mesmo horário.

4. **Camada de Infraestrutura:**
   - Lida com detalhes técnicos, como persistência de dados e integração com APIs externas.
   - Exemplo: Comunicação com serviços de pagamento ou laboratórios externos.

---

#### Benefícios da Arquitetura em Camadas

- **Isolamento do Domínio:**
  - Regras de negócio centralizadas e protegidas de mudanças externas.
- **Facilidade de Testes:**
  - O domínio pode ser testado isoladamente, simulando outras camadas.
- **Escalabilidade:**
  - Novas funcionalidades podem ser adicionadas diretamente no domínio.
- **Adequação a Projetos Pequenos e Médios:**
  - Ideal para sistemas de menor porte, como sistemas hospitalares.

---

#### Desafios da Arquitetura em Camadas

- **Manutenção em Projetos Grandes:**
  - Pode se tornar difícil de manter em sistemas maiores, dependendo da organização do time.
- **Dependência entre Camadas:**
  - As camadas superiores dependem das inferiores, o que pode gerar acoplamento.

---

#### Exemplos de Implementação

- **MVC (Model-View-Controller):**
  - Uma das implementações mais comuns da arquitetura em camadas.
  - Amplamente utilizada em projetos pequenos e médios.

---

#### Conclusão

- A arquitetura em camadas é uma abordagem robusta para organizar sistemas.
- Isola o domínio, facilita testes e é escalável para projetos pequenos e médios.
- Para projetos maiores, exige maior planejamento e organização.
- Nas próximas aulas, exploraremos outras arquiteturas, como a hexagonal, para aprimorar o isolamento do domínio.
