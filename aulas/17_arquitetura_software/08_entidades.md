### Entidades no Domain Driven Design (DDD)

#### Elementos do Modelo no DDD

1. **Entidades:**

   - Objetos com identidade única no sistema.
   - Exemplo: Paciente, consulta.
   - Geralmente possuem um ID único associado.
   - Duas entidades podem ter os mesmos atributos, mas são diferentes devido à identidade única.
   - Ciclo de vida: Criadas, modificadas e excluídas.

2. **Objetos de Valor:**

   - Objetos importantes para o sistema, mas sem identidade única.
   - Exemplo: Endereço associado a um paciente.
   - Dependem do domínio e do problema sendo resolvido.

3. **Agregados:**

   - Blocos que relacionam entidades e objetos de valor.
   - Exemplo: Paciente e seu histórico de consultas.

4. **Serviços de Domínio:**

   - Operações que não pertencem a uma entidade específica.
   - Geralmente relacionadas a ações ou verbos no sistema.
   - Exemplo: Agendamento de consultas.

5. **Repositórios:**
   - Responsáveis por persistir e recuperar entidades.
   - Exemplo: Repositório para salvar e buscar pacientes no banco de dados.

---

#### Características das Entidades

- **Identidade Única:**

  - Diferencia uma entidade de outra, mesmo com atributos iguais.
  - Exemplo: Dois pacientes homônimos com a mesma data de nascimento são entidades diferentes devido ao ID único.

- **Ciclo de Vida:**

  - Criadas, modificadas e excluídas.
  - Exclusão pode ser gerenciada pelo coletor de lixo ou explicitamente no banco de dados.

- **Comportamento:**
  - Métodos que refletem regras de negócio.
  - Exemplo: Método `agendarConsulta` em uma entidade `Paciente`.

---

#### Identificação de Entidades

- Depende do domínio e do problema sendo resolvido.
- Necessário entender o domínio e conversar com especialistas para identificar as entidades.
- Exemplo: Paciente e médico são entidades no contexto de um sistema hospitalar.

---

#### Exemplo de Entidades no Sistema Hospitalar

1. **Médico:**
   - Responsável por atender os pacientes.
2. **Paciente:**
   - Entidade central no sistema hospitalar.
3. **Consulta:**
   - Relaciona pacientes e médicos.
4. **Exame:**
   - Exame médico realizado pelo paciente.
5. **Prontuário:**
   - Histórico médico completo do paciente no hospital.
