### **Agendamento de Consulta**

#### Tópicos

1. Estrutura de Módulos
2. Serviço de Agendamento (`AppointmentService`)
3. Adaptador de Persistência (`AppointmentRepoMap`)
4. Controller HTTP (`AppointmentController`)
5. Inicialização da API

---

### Passo a Passo em JavaScript

1. **Estrutura de diretórios**

   ```text
   src/
   ├── domain/
   │   └── services/
   │       └── AppointmentService.js
   ├── infra/
   │   └── persistence/
   │       └── AppointmentRepoMap.js
   ├── interface/
   │   └── controllers/
   │       └── AppointmentController.js
   └── index.js
   ```

2. **Implementar o serviço de agendamento**

   ```javascript
   // filepath: src/domain/services/AppointmentService.js
   export class AppointmentService {
     constructor(repo) {
       this.repo = repo
     }

     // 2.1 Agendar consulta
     schedule(id, { doctorId, date }) {
       const d = this.validateDate(date)
       const appt = { id, doctorId, date: d }
       this.repo.add(id, appt)
       return appt
     }

     // 2.2 Buscar por ID
     findById(id) {
       const appt = this.repo.findById(id)
       if (!appt) throw new Error(`Consulta id=${id} não encontrada`)
       return appt
     }

     // 2.3 Listar todas
     findAll() {
       return this.repo.findAll()
     }

     // 2.4 Validar data
     validateDate(input) {
       const d = new Date(input)
       if (!(d instanceof Date) || isNaN(d)) {
         throw new Error('Data inválida')
       }
       return d
     }
   }
   ```

3. **Criar adaptador de persistência**

   ```javascript
   // filepath: src/infra/persistence/AppointmentRepoMap.js
   export class AppointmentRepoMap {
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
       this.store.delete(id)
     }
   }
   ```

4. **Implementar o controller HTTP**

   ```javascript
   // filepath: src/interface/controllers/AppointmentController.js
   import express from 'express'
   export function appointmentController(service) {
     const router = express.Router()

     router.post('/appointments', (req, res) => {
       try {
         const appt = service.schedule(Date.now(), {
           doctorId: req.body.doctorId,
           date: req.body.date,
         })
         res.status(201).json(appt)
       } catch (err) {
         res.status(400).json({ error: err.message })
       }
     })

     router.get('/appointments', (req, res) => {
       res.json(service.findAll())
     })

     router.get('/appointments/:id', (req, res) => {
       try {
         const appt = service.findById(+req.params.id)
         res.json(appt)
       } catch {
         res.status(404).end()
       }
     })

     return router
   }
   ```

5. **Inicializar a API**

   ```javascript
   // filepath: src/index.js
   import express from 'express'
   import { AppointmentRepoMap } from './infra/persistence/AppointmentRepoMap.js'
   import { AppointmentService } from './domain/services/AppointmentService.js'
   import { appointmentController } from './interface/controllers/AppointmentController.js'

   const app = express()
   app.use(express.json())

   const repo = new AppointmentRepoMap()
   const service = new AppointmentService(repo)

   app.use('/api', appointmentController(service))

   app.listen(3000, () => console.log('API rodando na porta 3000'))
   ```

6. **Executar**  
   No terminal, dentro de `src/`:
   ```bash
   node index.js
   ```
   Agora você pode testar:
   - POST http://localhost:3000/api/appointments  
     Body: `{ "doctorId": 1, "date": "2025-05-20T10:00:00Z" }`
   - GET http://localhost:3000/api/appointments
   - GET http://localhost:3000/api/appointments/{id}
