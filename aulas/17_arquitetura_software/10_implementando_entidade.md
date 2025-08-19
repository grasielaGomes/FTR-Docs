### Implementação das Entidades no Contexto Hospitalar

#### Introdução

- Foco em três entidades principais: **Médico**, **Exame** e **Consulta**.
- Cada entidade possui atributos e comportamentos específicos para atender às necessidades do sistema hospitalar.
- Discussão sobre possíveis melhorias e refatorações futuras, como o uso de objetos de valor e enumeradores.

---

#### Entidade Médico

- **Atributos:**
  - `ID`: Identidade única do médico.
  - `CRM`: Registro obrigatório que identifica o médico.
  - Nome.
  - Especialidade.
  - Telefone.
  - Horário de atendimento (pode ser simplificado ou detalhado com dias e turnos).

---

#### Entidade Exame

- **Atributos:**
  - `ID`: Identidade única do exame.
  - Tipo do exame (pode ser representado por um enumerador).
  - Resultado.
  - Data de realização.
  - Local de realização.
  - Responsável (médico, enfermeiro ou laboratório).
  - Paciente que realizou o exame.

---

#### Entidade Consulta

- **Atributos:**
  - `ID`: Identidade única da consulta.
  - Data da consulta.
  - Paciente.
  - Médico responsável.
  - Motivo da consulta (opcional).
  - Status da consulta (agendada, realizada, cancelada).
  - Observações (informações complementares ou anotações do médico).

---

#### Passo a Passo para Implementação em JavaScript

1. **Criar a Classe Médico**

   - Defina os atributos básicos e métodos para representar o médico.

   Exemplo:

   ```javascript
   class Medico {
     constructor(id, crm, nome, especialidade, telefone, horarioAtendimento) {
       this.id = id
       this.crm = crm
       this.nome = nome
       this.especialidade = especialidade
       this.telefone = telefone
       this.horarioAtendimento = horarioAtendimento
     }
   }
   ```

---

2. **Criar a Classe Exame**

   - Defina os atributos básicos e métodos para representar o exame.

   Exemplo:

   ```javascript
   class Exame {
     constructor(id, tipo, resultado, data, local, responsavel, paciente) {
       this.id = id
       this.tipo = tipo
       this.resultado = resultado
       this.data = data
       this.local = local
       this.responsavel = responsavel
       this.paciente = paciente
     }
   }
   ```

---

3. **Criar a Classe Consulta**

   - Defina os atributos básicos e métodos para representar a consulta.

   Exemplo:

   ```javascript
   class Consulta {
     constructor(id, data, paciente, medico, motivo, status, observacoes) {
       this.id = id
       this.data = data
       this.paciente = paciente
       this.medico = medico
       this.motivo = motivo
       this.status = status
       this.observacoes = observacoes
     }
   }
   ```

---

4. **Testar as Entidades**

   - Crie instâncias das classes e teste os atributos e métodos implementados.

   Exemplo:

   ```javascript
   // Criar um médico
   const medico = new Medico(
     1,
     '123456',
     'Dr. João',
     'Cardiologista',
     '1234-5678',
     'Seg-Sex 08:00-18:00'
   )

   // Criar um paciente
   const paciente = { id: 1, nome: 'Carlos Silva' }

   // Criar um exame
   const exame = new Exame(
     1,
     'Hemograma',
     'Normal',
     '2025-12-10',
     'Laboratório Central',
     'Dr. João',
     paciente
   )

   // Criar uma consulta
   const consulta = new Consulta(
     1,
     '2025-12-12',
     paciente,
     medico,
     'Dor no peito',
     'Agendada',
     'Paciente relatou dor intensa.'
   )
   ```

---

5. **Executar o Código**

   - Salve o arquivo e execute-o no terminal para verificar os resultados.

   Comando:

   ```bash
   node hospital.js
   ```

   Saída esperada:

   ```
   Médico: Dr. João, Especialidade: Cardiologista
   Exame: Hemograma, Resultado: Normal
   Consulta: Data: 2025-12-12, Status: Agendada
   ```
