### **Implementando Repositórios em DDD e Arquitetura Hexagonal**

#### Tópicos

1. DrRepository
2. AppointmentRepository
3. ExamRepository
4. Demonstração de uso

---

### Passo a Passo para Implementação em JavaScript

1. **Estrutura de diretórios**

   ```
   src/
   ├── shared/
   │   └── Repository.js
   ├── doctor/
   │   └── DoctorRepository.js
   ├── appointment/
   │   └── AppointmentRepository.js
   ├── exam/
   │   └── ExamRepository.js
   └── index.js
   ```

2. **Repositório Genérico**  
   Já implementado em `src/shared/Repository.js`.

   ```javascript
   // filepath: src/shared/Repository.js
   export class Repository {
     constructor() {
       this.store = new Map()
     }
     add(id, entity) {
       if (this.store.has(id)) throw new Error(`id=${id} já existe`)
       this.store.set(id, entity)
     }
     findById(id) {
       return this.store.get(id) ?? null
     }
     findAll() {
       return Array.from(this.store.values())
     }
     update(id, entity) {
       this.store.set(id, entity)
     }
     delete(id) {
       if (!this.store.has(id)) throw new Error(`id=${id} não encontrado`)
       this.store.delete(id)
     }
   }
   ```

3. **DoctorRepository**  
   Métodos: `findByName(name)`, `findBySpecialty(specialty)`.

   ```javascript
   // filepath: src/doctor/DoctorRepository.js
   import { Repository } from '../shared/Repository.js'

   export class DoctorRepository extends Repository {
     findByName(name) {
       return this.findAll().filter((d) => d.name === name)
     }
     findBySpecialty(spec) {
       return this.findAll().filter((d) => d.specialties.includes(spec))
     }
   }
   ```

4. **AppointmentRepository**  
   Métodos: `findByPatientId(id)`, `findByDoctorId(id)`, `findByDate(date)`, `findByStatus(status)`.

   ```javascript
   // filepath: src/appointment/AppointmentRepository.js
   import { Repository } from '../shared/Repository.js'

   export class AppointmentRepository extends Repository {
     findByPatientId(pid) {
       return this.findAll().filter((a) => a.patientId === pid)
     }
     findByDoctorId(did) {
       return this.findAll().filter((a) => a.doctorId === did)
     }
     findByDate(date) {
       return this.findAll().filter((a) => a.date === date)
     }
     findByStatus(status) {
       return this.findAll().filter((a) => a.status === status)
     }
   }
   ```

5. **ExamRepository**  
   Métodos: `findByPatientId(id)`, `findByType(type)`, `findByDate(date)`, etc.

   ```javascript
   // filepath: src/exam/ExamRepository.js
   import { Repository } from '../shared/Repository.js'

   export class ExamRepository extends Repository {
     findByPatientId(pid) {
       return this.findAll().filter((e) => e.patientId === pid)
     }
     findByType(type) {
       return this.findAll().filter((e) => e.type === type)
     }
     findByDate(date) {
       return this.findAll().filter((e) => e.date === date)
     }
     // outros filtros de domínio podem ser adicionados aqui
   }
   ```

6. **Demonstração de Uso**

   ```javascript
   // filepath: src/index.js
   import { DoctorRepository } from './doctor/DoctorRepository.js'
   import { AppointmentRepository } from './appointment/AppointmentRepository.js'
   import { ExamRepository } from './exam/ExamRepository.js'

   // Instâncias
   const drRepo = new DoctorRepository()
   const apptRepo = new AppointmentRepository()
   const examRepo = new ExamRepository()

   // Criar dados de exemplo
   drRepo.add(1, { id: 1, name: 'Dr. Smith', specialties: ['cardiology'] })
   apptRepo.add(1, {
     id: 1,
     patientId: 10,
     doctorId: 1,
     date: '2025-05-20',
     status: 'scheduled',
   })
   examRepo.add(1, {
     id: 1,
     patientId: 10,
     type: 'blood test',
     date: '2025-05-20',
   })

   // Consultas
   console.log('Por especialidade:', drRepo.findBySpecialty('cardiology'))
   console.log('Consultas por paciente:', apptRepo.findByPatientId(10))
   console.log('Exames por tipo:', examRepo.findByType('blood test'))
   ```

7. **Executar no Terminal**

   ```bash
   cd src
   node index.js
   ```

   Você verá as listas filtradas de médicos, consultas e exames.
