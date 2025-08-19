````markdown
### Praticando Linguagem Ubíqua no Domain Driven Design (DDD)

#### Passo a Passo para Implementação em JavaScript

1. **Criar a Classe Paciente**

   - Crie um arquivo chamado `paciente.js`.
   - Declare uma classe `Paciente` que será a entidade principal.

   Exemplo:

   ```javascript
   class Paciente {
     constructor(
       nome,
       dataNascimento,
       historicoMedico,
       alergias,
       endereco,
       telefone,
       email
     ) {
       this.nome = nome
       this.dataNascimento = dataNascimento
       this.historicoMedico = historicoMedico || []
       this.alergias = alergias || []
       this.endereco = endereco
       this.telefone = telefone
       this.email = email
       this.consultas = [] // Lista de consultas
       this.exames = [] // Lista de exames
     }
   }
   ```
````

---

2. **Adicionar o Método para Agendar Consultas**

   - Crie um método `agendarConsulta` para adicionar uma consulta à lista de consultas.

   Exemplo:

   ```javascript
   agendarConsulta(data, medico) {
     this.consultas.push({ data, medico });
     console.log(`Consulta agendada para ${data} com o médico ${medico}.`);
   }
   ```

---

3. **Adicionar o Método para Registrar Exames**

   - Crie um método `adicionarExame` para adicionar exames à lista de exames.

   Exemplo:

   ```javascript
   adicionarExame(nomeExame, resultado) {
     this.exames.push({ nomeExame, resultado });
     console.log(`Exame ${nomeExame} com resultado ${resultado} foi adicionado.`);
   }
   ```

---

4. **Criar um Paciente e Testar os Métodos**

   - Instancie a classe `Paciente` e teste os métodos criados.

   Exemplo:

   ```javascript
   const paciente1 = new Paciente(
     'Carlos Silva',
     '1990-05-15',
     [],
     [],
     'Rua das Flores, 123',
     '1234-5678',
     'carlos@email.com'
   )

   // Agendar consulta
   paciente1.agendarConsulta('2025-12-12', 'Dr. João')

   // Adicionar exame
   paciente1.adicionarExame('Hemograma', 'Normal')
   ```

---

5. **Executar o Código**

   - Salve o arquivo e execute-o no terminal para verificar os resultados.

   Comando:

   ```bash
   node paciente.js
   ```

   Saída esperada:

   ```
   Consulta agendada para 2025-12-12 com o médico Dr. João.
   Exame Hemograma com resultado Normal foi adicionado.
   ```

---

6. **Próximos Passos**
   - Nas próximas etapas, o modelo será expandido para incluir mais funcionalidades.
   - O domínio será discutido em maior profundidade para alinhar as regras de negócio com o código.
