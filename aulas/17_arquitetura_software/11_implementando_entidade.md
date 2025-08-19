### Implementação da Entidade Prontuário no Contexto Hospitalar

#### Introdução

- A entidade **Prontuário** centraliza informações de pacientes, diagnósticos, tratamentos e medicamentos.
- Inclui métodos para adicionar diagnósticos, tratamentos e medicamentos.
- Inicialmente, diagnósticos, tratamentos e medicamentos serão representados como listas simples de strings.
- Futuramente, essas listas podem ser refatoradas para objetos de valor.

---

#### Atributos da Entidade Prontuário

1. **ID:**
   - Identidade única do prontuário.
   - Pode ser gerado pelo banco de dados.
2. **Paciente:**
   - Referência ao paciente associado ao prontuário.
3. **Listas:**
   - Diagnósticos.
   - Tratamentos.
   - Medicamentos.

---

#### Métodos da Entidade Prontuário

1. **Adicionar Diagnóstico:**
   - Recebe um diagnóstico e o adiciona à lista de diagnósticos.
2. **Adicionar Tratamento:**
   - Recebe um tratamento e o adiciona à lista de tratamentos.
3. **Adicionar Medicamento:**
   - Recebe um medicamento e o adiciona à lista de medicamentos.

---

#### Passo a Passo para Implementação em JavaScript

1. **Criar a Classe Prontuário**

   - Defina os atributos básicos e listas para diagnósticos, tratamentos e medicamentos.

   Exemplo:

   ```javascript
   class Prontuario {
     constructor(id, paciente) {
       this.id = id
       this.paciente = paciente
       this.diagnosticos = []
       this.tratamentos = []
       this.medicamentos = []
     }
   }
   ```

---

2. **Implementar o Método para Adicionar Diagnóstico**

   - Adicione diagnósticos à lista de diagnósticos.

   Exemplo:

   ```javascript
   adicionarDiagnostico(diagnostico) {
     this.diagnosticos.push(diagnostico);
     console.log(`Diagnóstico "${diagnostico}" adicionado ao prontuário do paciente ${this.paciente.nome}.`);
   }
   ```

---

3. **Implementar o Método para Adicionar Tratamento**

   - Adicione tratamentos à lista de tratamentos.

   Exemplo:

   ```javascript
   adicionarTratamento(tratamento) {
     this.tratamentos.push(tratamento);
     console.log(`Tratamento "${tratamento}" adicionado ao prontuário do paciente ${this.paciente.nome}.`);
   }
   ```

---

4. **Implementar o Método para Adicionar Medicamento**

   - Adicione medicamentos à lista de medicamentos.

   Exemplo:

   ```javascript
   adicionarMedicamento(medicamento) {
     this.medicamentos.push(medicamento);
     console.log(`Medicamento "${medicamento}" adicionado ao prontuário do paciente ${this.paciente.nome}.`);
   }
   ```

---

5. **Testar a Entidade Prontuário**

   - Crie instâncias da classe `Prontuario` e teste os métodos implementados.

   Exemplo:

   ```javascript
   // Criar um paciente
   const paciente = { id: 1, nome: 'João Silva' }

   // Criar um prontuário
   const prontuario = new Prontuario(1, paciente)

   // Adicionar diagnóstico
   prontuario.adicionarDiagnostico('Hipertensão')

   // Adicionar tratamento
   prontuario.adicionarTratamento('Redução do consumo de sal')

   // Adicionar medicamento
   prontuario.adicionarMedicamento('Captopril')
   ```

---

6. **Executar o Código**

   - Salve o arquivo e execute-o no terminal para verificar os resultados.

   Comando:

   ```bash
   node prontuario.js
   ```

   Saída esperada:

   ```
   Diagnóstico "Hipertensão" adicionado ao prontuário do paciente João Silva.
   Tratamento "Redução do consumo de sal" adicionado ao prontuário do paciente João Silva.
   Medicamento "Captopril" adicionado ao prontuário do paciente João Silva.
   ```
