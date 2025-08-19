### **Testando Entidades em JavaScript**

#### Introdução

- Entidades são classes que representam objetos do domínio com identidade única, como um paciente em um sistema hospitalar.
- Diferente dos objetos de valor, entidades possuem um identificador (ID) e podem ter muitos atributos e regras de negócio.
- Testar entidades garante que a criação, manipulação e validação desses objetos complexos estejam corretas.

---

#### Tópicos

1. O que são entidades
2. Diferença entre entidades e objetos de valor
3. Como estruturar testes para entidades
4. Boas práticas na organização dos testes
5. Exemplos práticos de testes

---

### Passo a Passo para Testar Entidades

1. **O que são entidades?**

   - São classes que representam objetos do domínio com identidade única (ID).
   - Exemplo: um paciente, um médico, um exame.
   - Entidades podem ter muitos atributos, como nome, data de nascimento, endereço, contatos, etc.

2. **Diferença entre entidades e objetos de valor**

   - Entidades têm um identificador único (ID), enquanto objetos de valor são definidos apenas por seus atributos.
   - Exemplo: dois pacientes com o mesmo nome são entidades diferentes se tiverem IDs diferentes.

3. **Como estruturar testes para entidades**

   - Teste a criação da entidade, verificando se os atributos são atribuídos corretamente.
   - Teste validações específicas, como conversão de datas ou obrigatoriedade de campos.
   - Teste métodos de acesso (getters) e manipulação de atributos.
   - Teste a integração com objetos de valor (ex: endereço, contato de emergência, prontuário médico).

4. **Boas práticas na organização dos testes**

   - Mantenha a estrutura de diretórios dos testes espelhando a do código-fonte.
   - Use ferramentas como Mocha e Chai para organizar e validar os testes.
   - Utilize hooks como `beforeEach` para preparar dados reutilizáveis.
   - Agrupe testes relacionados usando `describe`.
   - Teste apenas o que for relevante para a entidade (não repita testes já feitos para objetos de valor).

---

### Exemplo Prático

Imagine uma entidade `Patient` com vários atributos:

```javascript
class Patient {
  constructor({
    name,
    birthdate,
    gender,
    bloodType,
    address,
    phone,
    email,
    emergencyContact,
  }) {
    this.name = name
    this.birthdate = new Date(birthdate)
    this.gender = gender
    this.bloodType = bloodType
    this.address = address // objeto de valor Address
    this.phone = phone
    this.email = email
    this.emergencyContact = emergencyContact // objeto de valor EmergencyContact
    // ... outros atributos e validações
  }
  getName() {
    return this.name
  }
  getBirthdate() {
    return this.birthdate
  }
  // ... outros getters
}
```

Você pode criar testes assim:

```javascript
describe('Patient Entity', () => {
  let defaultData

  beforeEach(() => {
    defaultData = {
      name: 'João Silva',
      birthdate: '2000-10-10',
      gender: 'M',
      bloodType: 'A+',
      address: new Address('Rua A', 123, 'Cidade', 'Estado', '12345-000'),
      phone: '99999-9999',
      email: 'joao@email.com',
      emergencyContact: new EmergencyContact('Maria', '88888-8888'),
    }
  })

  it('deve criar um paciente válido', () => {
    const patient = new Patient(defaultData)
    expect(patient.getName()).to.equal('João Silva')
    expect(patient.getBirthdate()).to.be.instanceOf(Date)
    expect(patient.address).to.be.instanceOf(Address)
    expect(patient.emergencyContact).to.be.instanceOf(EmergencyContact)
  })

  it('deve converter a data de nascimento corretamente', () => {
    const patient = new Patient(defaultData)
    expect(patient.getBirthdate().getFullYear()).to.equal(2000)
    expect(patient.getBirthdate().getMonth()).to.equal(9) // Outubro é mês 9 (zero-based)
  })

  // Teste de integração com objetos de valor já testados separadamente
  it('deve retornar uma cópia do prontuário médico', () => {
    const patient = new Patient(defaultData)
    expect(patient.medicalRecord).to.be.an('object')
  })
})
```

---

### Dicas e Boas Práticas

- Teste apenas o que for específico da entidade (não repita testes de objetos de valor).
- Use dados padrão (`defaultData`) para facilitar a criação de entidades em vários testes.
- Utilize hooks (`beforeEach`) para preparar o ambiente antes de cada teste.
- Separe os testes por métodos e funcionalidades da entidade.

---

> **Resumo:**  
> Testar entidades é essencial para garantir que os objetos principais do seu domínio funcionem corretamente.  
> Valide atributos, conversões e integrações com objetos de valor.  
> Uma boa cobertura de testes nas entidades aumenta a confiança e a qualidade do sistema como um todo.
