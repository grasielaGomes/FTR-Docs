### **Agendamento de Exames e Consultas em DDD**

#### Introdução

- Aborda as entidades **Exame** e **Appointment**
- Padroniza **Repositories**, **Services** e **Controllers** para cada domínio
- Demonstra uso de **status** (enumerações) para consultas

#### Tópicos

1. Exame

   - **Repository** com filtros:  
     • findByPatientId  
     • findByType  
     • findByDate
   - **Service** com métodos:  
     • agendar exame  
     • findById / findAll  
     • filtros (por paciente, tipo, data)  
     • update (resultado)  
     • delete
   - **Controller HTTP**: rotas CRUD espelhando o Service

2. Consulta (Appointment)

   - **Service de Agendamento** (`AppointmentService`):  
     • schedule(id, { doctorId, date })  
     • findById, findAll  
     • validateDate(input)
   - **Controller HTTP** (`AppointmentController`):  
     • POST /appointments  
     • GET /appointments  
     • GET /appointments/:id  
     • (opcional) DELETE /appointments/:id
   - Uso de atributo **status** (agendada, cancelada, etc.) e filtro por estado

3. Workflow de Testes (Insomnia ou similar)
   1. Cadastrar **Paciente** (POST /patients)
   2. Cadastrar **Médico** (POST /doctors)
   3. Adicionar **WorkingHours** ao médico (POST /doctors/:id/hours)
   4. Agendar **Consulta** (POST /appointments)
      - body: { patientId, doctorId, date, status? }
   5. Listar / filtrar consultas por **status** ou **ID**
