### **Serviços de Domínio em DDD**

#### Tópicos

1. O que são serviços de domínio
2. Categorias de serviços em DDD
3. Foco do exemplo: `PatientService`
4. Métodos essenciais do serviço
5. Demonstração de uso em JavaScript

---

### Passo a Passo em JavaScript

1. **Estrutura de diretórios**

   ```text
   src/
   ├── shared/
   │   └── Repository.js
   ├── patient/
   │   ├── PatientRepository.js
   │   └── PatientService.js
   └── index.js
   ```

2. **Criar `PatientService.js`**

   ```javascript
   // filepath: src/patient/PatientService.js
   import { PatientRepository } from './PatientRepository.js'

   export class PatientService {
     constructor(repository = new PatientRepository()) {
       this.repo = repository
     }

     // 2.1 Cadastrar paciente
     addPatient(id, patient) {
       if (this.repo.findById(id)) {
         throw new Error(`Paciente com id=${id} já existe`)
       }
       this.repo.add(id, {
         ...patient,
         allergies: [],
         diagnoses: [],
         medications: [],
         treatments: [],
       })
       return this.repo.findById(id)
     }

     // 2.2 Buscar paciente pelo ID
     findPatientById(id) {
       const p = this.repo.findById(id)
       if (!p) throw new Error(`Paciente com id=${id} não encontrado`)
       return p
     }

     // 2.3 Listar todos os pacientes
     findAllPatients() {
       return this.repo.findAll()
     }

     // 2.4 Filtrar por nome
     findPatientsByName(name) {
       return this.repo.findAll().filter((p) => p.name === name)
     }

     // 2.5 Filtrar por tipo sanguíneo
     findPatientsByBloodType(type) {
       return this.repo.findAll().filter((p) => p.bloodType === type)
     }

     // 2.6 Atualizar paciente
     updatePatient(id, updatedData) {
       const p = this.findPatientById(id)
       const merged = { ...p, ...updatedData }
       this.repo.update(id, merged)
       return merged
     }

     // 2.7 Excluir paciente
     deletePatient(id) {
       const p = this.findPatientById(id)
       this.repo.delete(id)
       return p
     }

     // 2.8 Adicionar alergia
     addPatientAllergy(id, allergy) {
       const p = this.findPatientById(id)
       if (p.allergies.includes(allergy)) {
         throw new Error(`Alergia já cadastrada: ${allergy}`)
       }
       p.allergies.push(allergy)
       return this.updatePatient(id, { allergies: p.allergies })
     }

     // 2.9 Adicionar diagnóstico
     addPatientDiagnosis(id, diagnosis) {
       const p = this.findPatientById(id)
       p.diagnoses.push(diagnosis)
       return this.updatePatient(id, { diagnoses: p.diagnoses })
     }

     // 2.10 Adicionar medicação
     addPatientMedication(id, medication) {
       const p = this.findPatientById(id)
       p.medications.push(medication)
       return this.updatePatient(id, { medications: p.medications })
     }

     // 2.11 Adicionar tratamento
     addPatientTreatment(id, treatment) {
       const p = this.findPatientById(id)
       p.treatments.push(treatment)
       return this.updatePatient(id, { treatments: p.treatments })
     }
   }
   ```

3. **Demonstrar uso em `index.js`**

   ```javascript
   // filepath: src/index.js
   import { PatientService } from './patient/PatientService.js'

   const service = new PatientService()

   // Cadastrar
   service.addPatient(1, { name: 'João Silva', bloodType: 'O+' })
   service.addPatient(2, { name: 'Maria Souza', bloodType: 'A−' })

   // Listar / Consultar
   console.log('Todos:', service.findAllPatients())
   console.log('Por nome:', service.findPatientsByName('João Silva'))
   console.log('Por tipo sanguíneo:', service.findPatientsByBloodType('A−'))

   // Atualizar
   service.updatePatient(1, { name: 'João S.' })
   console.log('Após update:', service.findPatientById(1))

   // Adicionar dados clínicos
   service.addPatientAllergy(1, 'Peixe')
   service.addPatientDiagnosis(1, 'Hipertensão')
   service.addPatientMedication(1, 'Losartana')
   service.addPatientTreatment(1, 'Dieta hipossódica')
   console.log('Com histórico clínico:', service.findPatientById(1))

   // Excluir
   service.deletePatient(2)
   console.log('Após delete:', service.findAllPatients())
   ```

4. **Executar no Terminal**

   ```bash
   cd src
   node index.js
   ```
