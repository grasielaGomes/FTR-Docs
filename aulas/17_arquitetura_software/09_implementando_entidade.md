### Refatoração e Implementação da Entidade Paciente

#### Introdução

- Revisão da entidade `Paciente` no contexto do domínio hospitalar.
- Refatoração para incluir novos atributos e métodos baseados em requisitos reais.
- Adição de validações e melhorias para refletir regras de negócio.

---

#### Atributos da Entidade Paciente

1. **Identidade Única:**
   - `ID`: Gerado pelo banco de dados.
   - `CPF`: Opcional em casos específicos, como emergências.
2. **Informações Básicas:**
   - Nome.
   - Data de nascimento.
   - Gênero.
   - Tipo sanguíneo.
3. **Informações de Contato:**
   - Endereço.
   - Telefone.
   - E-mail.
   - Contato de emergência.
4. **Histórico Médico:**
   - Lista de eventos médicos (consultas, exames, diagnósticos).
   - Lista de consultas.
   - Lista de exames.

---

#### Métodos da Entidade Paciente

1. **Adicionar Evento Histórico:**
   - Adiciona consultas, exames ou outros eventos ao histórico médico.
2. **Agendar Consulta:**
   - Verifica se já existe uma consulta no mesmo horário antes de agendar.
3. **Adicionar Exame:**
   - Adiciona um exame à lista de exames do paciente.

---

#### Passo a Passo para Implementação em JavaScript

1. **Criar a Classe Paciente**

   - Defina os atributos básicos e listas para consultas, exames e histórico médico.

   Exemplo:

   ```javascript
   class Paciente {
     constructor(
       id,
       cpf,
       nome,
       dataNascimento,
       genero,
       tipoSanguineo,
       endereco,
       telefone,
       email,
       contatoEmergencia
     ) {
       this.id = id
       this.cpf = cpf
       this.nome = nome
       this.dataNascimento = dataNascimento
       this.genero = genero
       this.tipoSanguineo = tipoSanguineo
       this.endereco = endereco
       this.telefone = telefone
       this.email = email
       this.contatoEmergencia = contatoEmergencia
       this.historicoMedico = []
       this.consultas = []
       this.exames = []
     }
   }
   ```

---

2. **Implementar o Método para Adicionar Evento Histórico**

   - Adicione eventos ao histórico médico do paciente.

   Exemplo:

   ```javascript
   adicionarEventoHistorico(evento) {
     this.historicoMedico.push(evento);
     console.log(`Evento adicionado ao histórico do paciente ${this.nome}.`);
   }
   ```

---

3. **Implementar o Método para Agendar Consulta**

   - Verifique se já existe uma consulta no mesmo horário antes de agendar.

   Exemplo:

   ```javascript
   agendarConsulta(consulta) {
     const consultaNoMesmoHorario = this.consultas.some(c => c.data === consulta.data);
     if (consultaNoMesmoHorario) {
       throw new Error("O paciente já possui uma consulta no mesmo horário.");
     }
     this.consultas.push(consulta);
     console.log(`Consulta agendada para ${consulta.data} com o médico ${consulta.medico}.`);
   }
   ```

---

4. **Implementar o Método para Adicionar Exame**

   - Adicione exames à lista de exames do paciente.

   Exemplo:

   ```javascript
   adicionarExame(exame) {
     this.exames.push(exame);
     console.log(`Exame ${exame.nome} adicionado com resultado ${exame.resultado}.`);
   }
   ```

---

5. **Testar a Entidade Paciente**

   - Crie uma instância da classe `Paciente` e teste os métodos implementados.

   Exemplo:

   ```javascript
   const paciente = new Paciente(
     1,
     '123.456.789-00',
     'Carlos Silva',
     '1990-05-15',
     'Masculino',
     'O+',
     'Rua das Flores, 123',
     '1234-5678',
     'carlos@email.com',
     'Maria Silva'
   )

   // Adicionar evento histórico
   paciente.adicionarEventoHistorico({
     tipo: 'Consulta',
     descricao: 'Consulta inicial',
   })

   // Agendar consulta
   paciente.agendarConsulta({ data: '2025-12-12', medico: 'Dr. João' })

   // Adicionar exame
   paciente.adicionarExame({ nome: 'Hemograma', resultado: 'Normal' })
   ```

---

6. **Executar o Código**

   - Salve o arquivo e execute-o no terminal para verificar os resultados.

   Comando:

   ```bash
   node paciente.js
   ```

   Saída esperada:

   ```
   Evento adicionado ao histórico do paciente Carlos Silva.
   Consulta agendada para 2025-12-12 com o médico Dr. João.
   Exame Hemograma adicionado com resultado Normal.
   ```

---

7. **Próximos Passos**
   - Implementar as entidades relacionadas, como `Consulta` e `Exame`.
   - Refatorar o código para melhorar a organização e reutilização.
   - Integrar a entidade `Paciente` com outras partes do sistema.
