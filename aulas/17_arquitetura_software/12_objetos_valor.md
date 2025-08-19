### Objetos de Valor no Domain Driven Design (DDD)

#### Introdução

- Objetos de valor são elementos do modelo que não possuem identidade única.
- São definidos exclusivamente por seus atributos.
- Dois objetos de valor são considerados iguais se todos os seus atributos forem iguais.
- São imutáveis: não podem ser alterados, apenas substituídos por novos objetos.
- Exemplos no contexto hospitalar:
  - **Endereço**: Representa o endereço de um paciente, médico ou clínica.
  - **Contato de Emergência**: Nome e telefone de um contato associado ao paciente.
  - **Horário de Atendimento**: Dias e horários de atendimento de um médico.

---

#### Características dos Objetos de Valor

1. **Sem Identidade Única:**
   - Não possuem um identificador exclusivo como as entidades.
   - São definidos apenas pelos seus atributos.
2. **Imutabilidade:**
   - Não podem ser alterados após a criação.
   - Alterações requerem a criação de um novo objeto.
3. **Comparação por Atributos:**
   - Dois objetos de valor são iguais se todos os seus atributos forem iguais.

---

#### Exemplos de Objetos de Valor no Contexto Hospitalar

1. **Endereço:**
   - Atributos: Rua, número, bairro, cidade, estado, CEP.
2. **Contato de Emergência:**
   - Atributos: Nome, telefone.
3. **Horário de Atendimento:**
   - Atributos: Dias da semana e horários.

---

#### Passo a Passo para Implementação em JavaScript

1. **Criar a Classe Endereço**

   - Defina os atributos básicos para representar um endereço.

   Exemplo:

   ```javascript
   class Endereco {
     constructor(rua, numero, bairro, cidade, estado, cep) {
       this.rua = rua
       this.numero = numero
       this.bairro = bairro
       this.cidade = cidade
       this.estado = estado
       this.cep = cep
     }

     // Método para comparar dois objetos de valor
     equals(outroEndereco) {
       return (
         this.rua === outroEndereco.rua &&
         this.numero === outroEndereco.numero &&
         this.bairro === outroEndereco.bairro &&
         this.cidade === outroEndereco.cidade &&
         this.estado === outroEndereco.estado &&
         this.cep === outroEndereco.cep
       )
     }
   }
   ```

---

2. **Criar a Classe Contato de Emergência**

   - Defina os atributos básicos para representar um contato de emergência.

   Exemplo:

   ```javascript
   class ContatoEmergencia {
     constructor(nome, telefone) {
       this.nome = nome
       this.telefone = telefone
     }

     // Método para comparar dois contatos de emergência
     equals(outroContato) {
       return (
         this.nome === outroContato.nome &&
         this.telefone === outroContato.telefone
       )
     }
   }
   ```

---

3. **Criar a Classe Horário de Atendimento**

   - Defina os atributos básicos para representar os horários de atendimento de um médico.

   Exemplo:

   ```javascript
   class HorarioAtendimento {
     constructor(diaSemana, horarioInicio, horarioFim) {
       this.diaSemana = diaSemana
       this.horarioInicio = horarioInicio
       this.horarioFim = horarioFim
     }

     // Método para comparar dois horários de atendimento
     equals(outroHorario) {
       return (
         this.diaSemana === outroHorario.diaSemana &&
         this.horarioInicio === outroHorario.horarioInicio &&
         this.horarioFim === outroHorario.horarioFim
       )
     }
   }
   ```

---

4. **Testar os Objetos de Valor**

   - Crie instâncias das classes e teste os métodos implementados.

   Exemplo:

   ```javascript
   // Criar dois endereços
   const endereco1 = new Endereco(
     'Rua das Flores',
     123,
     'Centro',
     'São Paulo',
     'SP',
     '12345-678'
   )
   const endereco2 = new Endereco(
     'Rua das Flores',
     123,
     'Centro',
     'São Paulo',
     'SP',
     '12345-678'
   )

   console.log(endereco1.equals(endereco2)) // true

   // Criar dois contatos de emergência
   const contato1 = new ContatoEmergencia('Maria Silva', '1234-5678')
   const contato2 = new ContatoEmergencia('Maria Silva', '1234-5678')

   console.log(contato1.equals(contato2)) // true

   // Criar dois horários de atendimento
   const horario1 = new HorarioAtendimento('Segunda', '08:00', '12:00')
   const horario2 = new HorarioAtendimento('Segunda', '08:00', '12:00')

   console.log(horario1.equals(horario2)) // true
   ```

---

5. **Executar o Código**

   - Salve o arquivo e execute-o no terminal para verificar os resultados.

   Comando:

   ```bash
   node objetos_valor.js
   ```

   Saída esperada:

   ```
   true
   true
   true
   ```
