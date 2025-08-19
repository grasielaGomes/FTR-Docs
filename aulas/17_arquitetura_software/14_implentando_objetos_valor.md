### Implementação de Objetos de Valor: Horário de Atendimento

#### Introdução

- O objeto de valor **Horário de Atendimento** (WorkingHours) representa os dias e horários em que um médico está disponível para trabalhar.
- Este objeto é imutável, ou seja, qualquer alteração cria um novo objeto.
- Métodos principais:
  1. Adicionar horários.
  2. Remover horários.
  3. Listar horários disponíveis.

---

#### Características do Objeto de Valor

1. **Imutabilidade:**
   - Alterações criam um novo objeto, mantendo a integridade do dado.
2. **Comparação por Atributos:**
   - Dois objetos de valor são iguais se todos os seus atributos forem iguais.
3. **Gerenciamento de Lista:**
   - Permite adicionar e remover horários de forma controlada.

---

#### Passo a Passo para Implementação em JavaScript

1. **Criar a Classe WorkingHours**

   - Defina os atributos e métodos para gerenciar os horários de atendimento.

   Exemplo:

   ```javascript
   class WorkingHours {
     constructor() {
       this.hours = [] // Lista inicial vazia
     }

     // Método para adicionar horários
     addHours(day, timeSlot) {
       this.hours.push({ day, timeSlot })
       console.log(`Horário adicionado: ${day}, ${timeSlot}`)
     }

     // Método para remover horários
     removeHours(day, timeSlot) {
       this.hours = this.hours.filter(
         (hour) => hour.day !== day || hour.timeSlot !== timeSlot
       )
       console.log(`Horário removido: ${day}, ${timeSlot}`)
     }

     // Método para listar horários
     listHours() {
       return this.hours
     }

     // Método para comparar dois objetos de valor
     equals(otherWorkingHours) {
       if (this.hours.length !== otherWorkingHours.hours.length) {
         return false
       }
       return this.hours.every((hour, index) => {
         const otherHour = otherWorkingHours.hours[index]
         return (
           hour.day === otherHour.day && hour.timeSlot === otherHour.timeSlot
         )
       })
     }
   }
   ```

---

2. **Atualizar a Classe Doctor para Usar WorkingHours**

   - Substitua os horários do médico por uma instância de `WorkingHours`.

   Exemplo:

   ```javascript
   class Doctor {
     constructor(id, name, crm) {
       this.id = id
       this.name = name
       this.crm = crm
       this.workingHours = new WorkingHours() // Instância de WorkingHours
     }

     // Métodos para delegar ações ao objeto WorkingHours
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

3. **Testar a Implementação**

   - Crie instâncias das classes e teste os métodos implementados.

   Exemplo:

   ```javascript
   // Criar um médico
   const doctor = new Doctor(1, 'Dr. João', '123456')

   // Adicionar horários de trabalho
   doctor.addWorkingHours('Segunda', '14:00-18:00')
   doctor.addWorkingHours('Quarta', '08:00-12:00')

   // Listar horários
   console.log('Horários disponíveis:', doctor.listWorkingHours())

   // Remover um horário
   doctor.removeWorkingHours('Segunda', '14:00-18:00')

   // Listar horários após remoção
   console.log('Horários disponíveis após remoção:', doctor.listWorkingHours())
   ```

---

4. **Executar o Código**

   - Salve o arquivo e execute-o no terminal para verificar os resultados.

   Comando:

   ```bash
   node working_hours.js
   ```

   Saída esperada:

   ```
   Horário adicionado: Segunda, 14:00-18:00
   Horário adicionado: Quarta, 08:00-12:00
   Horários disponíveis: [ { day: 'Segunda', timeSlot: '14:00-18:00' }, { day: 'Quarta', timeSlot: '08:00-12:00' } ]
   Horário removido: Segunda, 14:00-18:00
   Horários disponíveis após remoção: [ { day: 'Quarta', timeSlot: '08:00-12:00' } ]
   ```
