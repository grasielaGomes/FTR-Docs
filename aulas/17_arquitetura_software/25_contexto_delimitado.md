### **Contexto Delimitado em DDD**

#### Introdução

- Em Domain Driven Design (DDD), tudo gira em torno do domínio e do entendimento claro dos seus conceitos.
- Um **contexto delimitado** (Bounded Context) define onde um termo ou conceito tem um significado específico dentro do sistema.
- Em sistemas grandes, como um hospital, o termo “Paciente” pode ter significados diferentes em agendamento, faturamento ou estoque de medicamentos.
- Delimitar contextos evita confusões, facilita a manutenção e permite que equipes trabalhem de forma independente.

---

#### Tópicos

1. **Definição de Contexto Delimitado**
2. **Variação de Significado por Contexto**
   - Exemplo: `Paciente` em agendamento × `Paciente` em faturamento
3. **Subdomínios e Contextos Isolados**
4. **Identificação de Termos Exclusivos**
5. **Correlações Entre Contextos**
   - Consulta ↔ Financeiro ↔ Inventário
6. **Benefícios da Delimitação**
   - Clareza e organização do código
   - Independência e isolamento entre equipes
   - Facilidade de manutenção e evolução
7. **Evolução e Dinamismo de Contextos**
8. **Alinhamento e Testes**
   - Testes unitários por contexto
   - Testes de integração antes e depois da unificação dos domínios

---

### Passo a Passo para Entender Contexto Delimitado

1. **Compreenda o Domínio**

   - Antes de delimitar contextos, entenda o negócio e os termos usados.
   - Exemplo: O que é um “Paciente” para o agendamento? E para o financeiro?

2. **Identifique Subdomínios**

   - Separe áreas do sistema que têm regras próprias (ex: agendamento, faturamento, estoque).

3. **Defina os Contextos**

   - Cada subdomínio vira um contexto delimitado.
   - O mesmo termo pode ter atributos e comportamentos diferentes em cada contexto.

4. **Mapeie Termos Exclusivos**

   - Liste termos que só fazem sentido em um contexto (ex: “saldo devedor” só no financeiro).

5. **Relacione os Contextos**

   - Identifique onde os contextos se conectam (ex: paciente do agendamento precisa pagar no financeiro).

6. **Implemente Separação no Código**

   - Crie módulos, classes ou pastas separadas para cada contexto.
   - Evite misturar regras de contextos diferentes.

7. **Benefícios Práticos**

   - Código mais claro e organizado.
   - Equipes podem trabalhar em contextos diferentes sem conflitos.
   - Mudanças em um contexto não afetam os outros.

8. **Teste e Evolua**
   - Escreva testes unitários para cada contexto.
   - Faça testes de integração ao conectar contextos.
   - Contextos podem evoluir e se conectar conforme o sistema cresce.

---

### Exemplo Prático

Imagine um hospital com três contextos principais:

- **Agendamento:** Paciente agenda consultas e exames.
- **Financeiro:** Paciente tem faturas, pagamentos e saldo devedor.
- **Estoque:** Paciente pode consumir medicamentos do hospital.

Cada contexto tem sua própria definição de “Paciente” e suas regras. Separando assim, o sistema fica mais fácil de entender, manter e evoluir.

---

> **Resumo:**  
> Contexto delimitado é uma das bases do DDD. Ele garante que cada parte do sistema tenha regras e significados claros, evitando confusões e facilitando o trabalho em equipe e a evolução do software.
