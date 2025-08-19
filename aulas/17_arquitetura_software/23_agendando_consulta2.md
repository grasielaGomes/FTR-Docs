### **Serviços de Especialidade, Horários e Disponibilidade em DDD**

#### Tópicos

1. Contexto da Entidade `Doctor`
2. Motivação para Separar Serviços
3. Serviço de Especialidade (`DoctorSpecialtyService`)
   - Adicionar especialidade
   - Remover especialidade
   - Listar especialidades
4. Serviço de Horários de Atendimento (`DoctorWorkingHoursService`)
   - Cadastrar horário (dia + time slot)
   - Remover horário
   - Listar todos os horários
   - Obter horário específico
   - Validação de conflitos de horários
5. Serviço de Disponibilidade (`DoctorAvailabilityService`)
   - Verificar existência do médico
   - Validar dia da semana e faixa de horário
   - Checar conflito com agendamentos existentes
6. Controladores HTTP
   - `DoctorController`
   - `DoctorSpecialtyController`
   - `DoctorWorkingHoursController`
   - `DoctorAvailabilityController`
7. Injeção de Dependências e Montagem da API
8. Próximos Passos
   - Implementar agendamento de consultas e sessões
