### Agregando Módulos no Domain Driven Design (DDD)

#### Introdução

- Módulos são utilizados para organizar e estruturar o código, agrupando funcionalidades relacionadas.
- No contexto do DDD, os módulos ajudam a manter o domínio no coração do sistema, promovendo reutilização e facilitando a manutenção.
- A organização em módulos permite reaproveitamento de código e melhora a clareza do projeto.

---

#### Benefícios dos Módulos

1. **Reutilização de Código:**
   - Componentes comuns podem ser usados em diferentes partes do sistema ou em outros projetos.
2. **Facilidade de Manutenção:**
   - Código organizado é mais fácil de entender e modificar.
3. **Agrupamento Lógico:**
   - Entidades, objetos de valor e outros elementos relacionados são agrupados de forma lógica.

---

#### Estrutura de Módulos no Projeto

1. **Módulo `patient`:**
   - Contém a entidade `Patient` e elementos relacionados, como consultas, exames e prontuário.
2. **Módulo `doctor`:**
   - Contém a entidade `Doctor` e o objeto de valor `WorkingHours`.
3. **Módulo `shared`:**
   - Contém objetos de valor reutilizáveis, como `Address` e `EmergencyContact`.

---

#### Passo a Passo para Implementação em JavaScript

1. **Criar a Estrutura de Módulos**

   - Organize os arquivos em diretórios separados para cada módulo:
     - `patient/`
     - `doctor/`
     - `shared/`

   Exemplo de estrutura:

   ```
   src/
   ├── doctor/
   │   ├── Doctor.js
   │   ├── WorkingHours.js
   ├── patient/
   │   ├── Patient.js
   │   ├── MedicalRecord.js
   │   ├── Consultation.js
   │   ├── Exam.js
   ├── shared/
   │   ├── Address.js
   │   ├── EmergencyContact.js
   ```

---

2. **Implementar o Módulo `shared`**

   - Crie objetos de valor reutilizáveis.

   Exemplo:

   ```javascript
   // Address.js
   export class Address {
     constructor(street, number, city, state, postalCode) {
       this.street = street
       this.number = number
       this.city = city
       this.state = state
       this.postalCode = postalCode
     }
   }

   // EmergencyContact.js
   export class EmergencyContact {
     constructor(name, phone) {
       this.name = name
       this.phone = phone
     }
   }
   ```

---

3. **Implementar o Módulo `doctor`**

   - Inclua a entidade `Doctor` e o objeto de valor `WorkingHours`.

   Exemplo:

   ```javascript
   // Doctor.js
   import { WorkingHours } from './WorkingHours.js'

   export class Doctor {
     constructor(id, name, crm) {
       this.id = id
       this.name = name
       this.crm = crm
       this.workingHours = new WorkingHours()
     }

     addWorkingHours(day, timeSlot) {
       this.workingHours.addHours(day, timeSlot)
     }
   }

   // WorkingHours.js
   export class WorkingHours {
     constructor() {
       this.hours = []
     }

     addHours(day, timeSlot) {
       this.hours.push({ day, timeSlot })
     }
   }
   ```

---

4. **Implementar o Módulo `patient`**

   - Inclua a entidade `Patient` e elementos relacionados, como consultas e exames.

   Exemplo:

   ```javascript
   // Patient.js
   import { Address } from '../shared/Address.js'
   import { EmergencyContact } from '../shared/EmergencyContact.js'

   export class Patient {
     constructor(id, name, address, emergencyContact) {
       this.id = id
       this.name = name
       this.address = address
       this.emergencyContact = emergencyContact
       this.consultations = []
       this.exams = []
     }

     addConsultation(consultation) {
       this.consultations.push(consultation)
     }

     addExam(exam) {
       this.exams.push(exam)
     }
   }
   ```

---

5. **Testar a Estrutura de Módulos**

   - Crie um arquivo de teste para verificar a integração entre os módulos.

   Exemplo:

   ```javascript
   // hospital.js
   import { Address } from './shared/Address.js'
   import { EmergencyContact } from './shared/EmergencyContact.js'
   import { Patient } from './patient/Patient.js'
   import { Doctor } from './doctor/Doctor.js'

   // Criar endereço e contato de emergência
   const address = new Address(
     'Rua das Flores',
     123,
     'São Paulo',
     'SP',
     '12345-678'
   )
   const emergencyContact = new EmergencyContact('Maria Silva', '1234-5678')

   // Criar paciente
   const patient = new Patient(1, 'Carlos Silva', address, emergencyContact)

   // Criar médico
   const doctor = new Doctor(1, 'Dr. João', '123456')
   doctor.addWorkingHours('Segunda', '14:00-18:00')

   console.log('Paciente:', patient)
   console.log('Médico:', doctor)
   ```

---

6. **Executar o Código**

   - Salve o arquivo e execute-o no terminal para verificar os resultados.

   Comando:

   ```bash
   node hospital.js
   ```

   Saída esperada:

   ```
   Paciente: Patient { id: 1, name: 'Carlos Silva', address: [Address], emergencyContact: [EmergencyContact], consultations: [], exams: [] }
   Médico: Doctor { id: 1, name: 'Dr. João', crm: '123456', workingHours: [ { day: 'Segunda', timeSlot: '14:00-18:00' } ] }
   ```
