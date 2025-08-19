### **Hexagonalizando a Aplicação em JavaScript**

#### Tópicos

1. Estrutura de Módulos
2. Entidades e Value Objects no Domínio
3. Interfaces de Repositório (Ports)
4. Implementações de Repositório (Adapters)
5. Serviços de Domínio
6. Serviços de Infraestrutura
7. Serviço de Aplicação (Use-Case)
8. Demonstração de Uso em `index.js`

---

### Passo a Passo em JavaScript

1. **Estrutura de diretórios**

   ```text
   src/
   ├── domain/
   │   ├── entities/
   │   │   ├── Patient.js
   │   │   ├── Doctor.js
   │   │   ├── Appointment.js
   │   │   └── Exam.js
   │   ├── vo/
   │   │   ├── MedicalRecord.js
   │   │   ├── Address.js
   │   │   ├── Allergy.js
   │   │   ├── Contact.js
   │   │   └── WorkingHours.js
   │   ├── ports/
   │   │   └── Repository.js
   │   └── services/
   │       └── DoctorAvailabilityService.js
   ├── infra/
   │   ├── persistence/
   │   │   ├── PatientRepoMap.js
   │   │   ├── DoctorRepoMap.js
   │   │   ├── AppointmentRepoMap.js
   │   │   └── ExamRepoMap.js
   │   └── notification/
   │       └── NotificationService.js
   └── application/
   │   └── AppointmentService.js
   └── index.js
   ```

2. **Definir a Interface Genérica de Repositório**

   ```javascript
   // filepath: src/domain/ports/Repository.js
   export class Repository {
     add(id, entity) {
       throw new Error('Not implemented')
     }
     findById(id) {
       throw new Error('Not implemented')
     }
     findAll() {
       throw new Error('Not implemented')
     }
     update(id, entity) {
       throw new Error('Not implemented')
     }
     delete(id) {
       throw new Error('Not implemented')
     }
   }
   ```

3. **Criar Entidades e Value Objects**  
   (Exemplo: Doctor e WorkingHours)

   ```javascript
   // filepath: src/domain/entities/Doctor.js
   export class Doctor {
     constructor({ id, name, specialties, workingHours }) {
       this.id = id
       this.name = name
       this.specialties = specialties
       this.workingHours = workingHours // instance of WorkingHours
     }
   }

   // filepath: src/domain/vo/WorkingHours.js
   export class WorkingHours {
     constructor({ day, start, end }) {
       this.day = day // e.g. 'Monday'
       this.start = start // e.g. '08:00'
       this.end = end // e.g. '17:00'
     }
   }
   ```

4. **Implementar Repositórios em Memória (Adapters)**

   ```javascript
   // filepath: src/infra/persistence/DoctorRepoMap.js
   import { Repository } from '../../domain/ports/Repository.js'

   export class DoctorRepoMap extends Repository {
     constructor() {
       super()
       this.store = new Map()
     }
     add(id, ent) {
       this.store.set(id, ent)
     }
     findById(id) {
       return this.store.get(id) ?? null
     }
     findAll() {
       return Array.from(this.store.values())
     }
     update(id, ent) {
       this.store.set(id, ent)
     }
     delete(id) {
       this.store.delete(id)
     }
     findByName(name) {
       return this.findAll().filter((d) => d.name === name)
     }
   }
   ```

   (Replicar para PatientRepoMap, AppointmentRepoMap e ExamRepoMap.)

5. **Criar o Serviço de Domínio de Disponibilidade**

   ```javascript
   // filepath: src/domain/services/DoctorAvailabilityService.js
   export class DoctorAvailabilityService {
     constructor({ appointmentRepo, doctorRepo }) {
       this.appointmentRepo = appointmentRepo
       this.doctorRepo = doctorRepo
     }

     isDoctorAvailable(doctorId, dateTime) {
       const doc = this.doctorRepo.findById(doctorId)
       if (!doc) throw new Error('Doctor not found')
       // 1) validar workingHours
       const wh = doc.workingHours
       const day = dateTime.toLocaleString('en-US', { weekday: 'long' })
       if (wh.day !== day) return false
       const time = dateTime.toTimeString().slice(0, 5)
       if (time < wh.start || time >= wh.end) return false
       // 2) verificar conflitos
       return !this.appointmentRepo
         .findAll()
         .some(
           (a) =>
             a.doctorId === doctorId &&
             a.dateTime.getTime() === dateTime.getTime()
         )
     }
   }
   ```

6. **Implementar Serviço de Infraestrutura de Notificação**

   ```javascript
   // filepath: src/infra/notification/NotificationService.js
   export class NotificationService {
     sendEmailNotification(to, message) {
       console.log(`Enviando e-mail para ${to}: ${message}`)
     }
     notifyAppointmentSchedule(patientEmail, doctorName, dateTime) {
       const msg = `Consulta agendada com ${doctorName} em ${dateTime}`
       this.sendEmailNotification(patientEmail, msg)
     }
   }
   ```

7. **Criar Serviço de Aplicação (Use-Case)**

   ```javascript
   // filepath: src/application/AppointmentService.js
   export class AppointmentService {
     constructor({
       patientRepo,
       doctorRepo,
       appointmentRepo,
       availabilitySvc,
       notificationSvc,
     }) {
       Object.assign(this, {
         patientRepo,
         doctorRepo,
         appointmentRepo,
         availabilitySvc,
         notificationSvc,
       })
     }

     schedule(patientId, doctorId, dateTime) {
       const patient = this.patientRepo.findById(patientId)
       if (!patient) throw new Error('Patient not found')
       if (!this.availabilitySvc.isDoctorAvailable(doctorId, dateTime)) {
         throw new Error('Doctor not available')
       }
       const appt = { id: Date.now(), patientId, doctorId, dateTime }
       this.appointmentRepo.add(appt.id, appt)
       this.notificationSvc.notifyAppointmentSchedule(
         patient.email,
         this.doctorRepo.findById(doctorId).name,
         dateTime
       )
       return appt
     }
   }
   ```

8. **Demonstrar Uso em `index.js`**

   ```javascript
   // filepath: src/index.js
   import { DoctorRepoMap } from './infra/persistence/DoctorRepoMap.js'
   import { PatientRepoMap } from './infra/persistence/PatientRepoMap.js'
   import { AppointmentRepoMap } from './infra/persistence/AppointmentRepoMap.js'
   import { DoctorAvailabilityService } from './domain/services/DoctorAvailabilityService.js'
   import { NotificationService } from './infra/notification/NotificationService.js'
   import { AppointmentService } from './application/AppointmentService.js'
   import { Doctor } from './domain/entities/Doctor.js'
   import { WorkingHours } from './domain/vo/WorkingHours.js'

   // Instanciar repositórios e serviços
   const doctorRepo = new DoctorRepoMap()
   const patientRepo = new PatientRepoMap()
   const appointmentRepo = new AppointmentRepoMap()
   const availabilitySvc = new DoctorAvailabilityService({
     appointmentRepo,
     doctorRepo,
   })
   const notificationSvc = new NotificationService()
   const apptSvc = new AppointmentService({
     patientRepo,
     doctorRepo,
     appointmentRepo,
     availabilitySvc,
     notificationSvc,
   })

   // Seeds
   doctorRepo.add(
     1,
     new Doctor({
       id: 1,
       name: 'Dr. Smith',
       specialties: ['cardio'],
       workingHours: new WorkingHours({
         day: 'Friday',
         start: '09:00',
         end: '17:00',
       }),
     })
   )
   patientRepo.add(1, { id: 1, name: 'João Silva', email: 'joao@example.com' })

   // Agendar
   const dateTime = new Date('2025-02-28T10:00:00')
   const appt = apptSvc.schedule(1, 1, dateTime)
   console.log('Agendamento:', appt)
   ```
