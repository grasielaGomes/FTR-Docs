### Agregados no Domain Driven Design (DDD)

#### Introdução

- Agregados são grupos de entidades e objetos de valor relacionados que são tratados como uma única unidade.
- Eles ajudam a estruturar e manter a integridade do domínio, garantindo que as regras de negócio sejam aplicadas dentro de um escopo bem definido.
- Cada agregado possui uma **raiz**, que controla o acesso a todas as partes do agregado.

---

#### Características dos Agregados

1. **Raiz do Agregado:**
   - A entidade principal que controla o acesso ao agregado.
   - Exemplo: No agregado de pacientes, o paciente é a raiz.
2. **Relacionamento com Entidades e Objetos de Valor:**
   - Inclui entidades e objetos de valor relacionados à raiz.
   - Exemplo: Consultas, exames e prontuário estão relacionados ao paciente.
3. **Escopo de Regras de Negócio:**
   - Todas as regras de negócio são aplicadas dentro do agregado.
   - Exemplo: Adicionar diagnósticos ao prontuário de um paciente.

---

#### Benefícios dos Agregados

- **Consistência:**
  - Garante que as regras de negócio sejam aplicadas corretamente.
- **Simplificação do Acesso:**
  - Facilita a navegação e o acesso às informações relacionadas.
- **Melhoria de Desempenho:**
  - Reduz o número de transações no banco de dados, acessando apenas o necessário.

---

#### Exemplo no Contexto Hospitalar

1. **Agregado de Pacientes:**
   - Raiz: Paciente.
   - Inclui: Consultas, exames, prontuário, contato de emergência e endereço.
2. **Agregado de Médicos:**
   - Raiz: Médico.
   - Inclui: Horários de atendimento (WorkingHours).

---

#### Passo a Passo para Implementação em JavaScript

1. **Criar a Classe Patient (Paciente)**

   - Defina a raiz do agregado e inclua os objetos relacionados.

   Exemplo:

   ```javascript
   class Patient {
     constructor(id, name, address, emergencyContact) {
       this.id = id
       this.name = name
       this.address = address // Objeto de valor Address
       this.emergencyContact = emergencyContact // Objeto de valor EmergencyContact
       this.medicalRecord = new MedicalRecord() // Prontuário
       this.consultations = [] // Lista de consultas
       this.exams = [] // Lista de exames
     }

     // Método para adicionar uma consulta
     addConsultation(consultation) {
       this.consultations.push(consultation)
       console.log(`Consulta adicionada para o paciente ${this.name}.`)
     }

     // Método para adicionar um exame
     addExam(exam) {
       this.exams.push(exam)
       console.log(`Exame adicionado para o paciente ${this.name}.`)
     }
   }
   ```

---

2. **Criar a Classe MedicalRecord (Prontuário)**

   - Inclua listas de diagnósticos, tratamentos e medicamentos.

   Exemplo:

   ```javascript
   class MedicalRecord {
     constructor() {
       this.diagnoses = []
       this.treatments = []
       this.medications = []
     }

     // Método para adicionar um diagnóstico
     addDiagnosis(diagnosis) {
       this.diagnoses.push(diagnosis)
       console.log(`Diagnóstico "${diagnosis}" adicionado ao prontuário.`)
     }

     // Método para adicionar um tratamento
     addTreatment(treatment) {
       this.treatments.push(treatment)
       console.log(`Tratamento "${treatment}" adicionado ao prontuário.`)
     }

     // Método para adicionar um medicamento
     addMedication(medication) {
       this.medications.push(medication)
       console.log(`Medicamento "${medication}" adicionado ao prontuário.`)
     }
   }
   ```

---

3. **Criar a Classe Doctor (Médico)**

   - Inclua horários de atendimento como um objeto de valor.

   Exemplo:

   ```javascript
   class Doctor {
     constructor(id, name, crm) {
       this.id = id
       this.name = name
       this.crm = crm
       this.workingHours = new WorkingHours() // Objeto de valor WorkingHours
     }

     // Métodos para gerenciar horários de atendimento
     addWorkingHours(day, timeSlot) {
       this.workingHours.addHours(day, timeSlot)
     }

     removeWorkingHours(day, timeSlot) {
       this.workingHours.removeHours(day, timeSlot)
     }

     listWorkingHours() {
       return this.workingHours.listHours()
     }
   }
   ```

---

4. **Testar os Agregados**

   - Crie instâncias das classes e teste os métodos implementados.

   Exemplo:

   ```javascript
   // Criar um paciente
   const patient = new Patient(
     1,
     'Carlos Silva',
     'Rua das Flores, 123',
     'Maria Silva'
   )

   // Adicionar uma consulta
   patient.addConsultation({ date: '2025-12-12', doctor: 'Dr. João' })

   // Adicionar um exame
   patient.addExam({ type: 'Hemograma', result: 'Normal' })

   // Adicionar um diagnóstico ao prontuário
   patient.medicalRecord.addDiagnosis('Hipertensão')

   // Criar um médico
   const doctor = new Doctor(1, 'Dr. João', '123456')

   // Adicionar horários de atendimento
   doctor.addWorkingHours('Segunda', '14:00-18:00')
   doctor.addWorkingHours('Quarta', '08:00-12:00')

   console.log('Horários do médico:', doctor.listWorkingHours())
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
   Consulta adicionada para o paciente Carlos Silva.
   Exame adicionado para o paciente Carlos Silva.
   Diagnóstico "Hipertensão" adicionado ao prontuário.
   Horário adicionado: Segunda, 14:00-18:00
   Horário adicionado: Quarta, 08:00-12:00
   Horários do médico: [ { day: 'Segunda', timeSlot: '14:00-18:00' }, { day: 'Quarta', timeSlot: '08:00-12:00' } ]
   ```

---

6. **Próximos Passos**
   - Refatorar os agregados para incluir validações adicionais.
   - Implementar repositórios para persistir os agregados no banco de dados.
   - Garantir que as regras de negócio sejam aplicadas dentro do escopo de cada agregado.
