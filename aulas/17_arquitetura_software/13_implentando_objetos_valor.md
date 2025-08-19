### Implementação de Objetos de Valor no Contexto Hospitalar

#### Introdução

- Objetos de valor são elementos do modelo que não possuem identidade única.
- No contexto hospitalar, dois objetos de valor principais afetam diretamente a entidade **Paciente**:
  1. **Endereço** (Address): Representa informações como rua, número, cidade, estado e código postal.
  2. **Contato de Emergência** (EmergencyContact): Representa o nome e telefone de um contato associado ao paciente.
- Objetos de valor são imutáveis e utilizam o método `equals` para garantir que não sejam alterados, mas substituídos por novos objetos.

---

#### Características dos Objetos de Valor

1. **Sem Identidade Única:**
   - Definidos exclusivamente pelos seus atributos.
2. **Imutabilidade:**
   - Não podem ser alterados após a criação.
   - Alterações requerem a criação de um novo objeto.
3. **Comparação por Atributos:**
   - Dois objetos de valor são iguais se todos os seus atributos forem iguais.

---

#### Passo a Passo para Implementação em JavaScript

1. **Criar a Classe Address (Endereço)**

   - Defina os atributos básicos para representar um endereço.

   Exemplo:

   ```javascript
   class Address {
     constructor(street, number, city, state, postalCode) {
       this.street = street
       this.number = number
       this.city = city
       this.state = state
       this.postalCode = postalCode
     }

     // Método para comparar dois objetos de valor
     equals(otherAddress) {
       return (
         this.street === otherAddress.street &&
         this.number === otherAddress.number &&
         this.city === otherAddress.city &&
         this.state === otherAddress.state &&
         this.postalCode === otherAddress.postalCode
       )
     }
   }
   ```

---

2. **Criar a Classe EmergencyContact (Contato de Emergência)**

   - Defina os atributos básicos para representar um contato de emergência.

   Exemplo:

   ```javascript
   class EmergencyContact {
     constructor(name, phone) {
       this.name = name
       this.phone = phone
     }

     // Método para comparar dois contatos de emergência
     equals(otherContact) {
       return (
         this.name === otherContact.name && this.phone === otherContact.phone
       )
     }
   }
   ```

---

3. **Atualizar a Entidade Paciente para Usar Objetos de Valor**

   - Substitua os atributos `endereco` e `contatoEmergencia` por instâncias das classes `Address` e `EmergencyContact`.

   Exemplo:

   ```javascript
   class Patient {
     constructor(id, name, address, emergencyContact) {
       this.id = id
       this.name = name
       this.address = address // Instância de Address
       this.emergencyContact = emergencyContact // Instância de EmergencyContact
     }
   }
   ```

---

4. **Testar os Objetos de Valor**

   - Crie instâncias das classes e teste os métodos implementados.

   Exemplo:

   ```javascript
   // Criar um endereço
   const address1 = new Address(
     'Rua das Flores',
     123,
     'São Paulo',
     'SP',
     '12345-678'
   )
   const address2 = new Address(
     'Rua das Flores',
     123,
     'São Paulo',
     'SP',
     '12345-678'
   )

   console.log(address1.equals(address2)) // true

   // Criar um contato de emergência
   const contact1 = new EmergencyContact('Maria Silva', '1234-5678')
   const contact2 = new EmergencyContact('Maria Silva', '1234-5678')

   console.log(contact1.equals(contact2)) // true

   // Criar um paciente
   const patient = new Patient(1, 'Carlos Silva', address1, contact1)
   console.log(patient)
   ```

---

5. **Executar o Código**

   - Salve o arquivo e execute-o no terminal para verificar os resultados.

   Comando:

   ```bash
   node hospital.js
   ```

   Saída esperada:

   ```
   true
   true
   Patient {
     id: 1,
     name: 'Carlos Silva',
     address: Address { street: 'Rua das Flores', number: 123, city: 'São Paulo', state: 'SP', postalCode: '12345-678' },
     emergencyContact: EmergencyContact { name: 'Maria Silva', phone: '1234-5678' }
   }
   ```
