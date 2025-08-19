### **Testando Services (Serviços) em JavaScript**

#### Introdução

- Services (serviços) são responsáveis por implementar regras de negócio e orquestrar operações entre entidades e repositórios.
- Eles são fundamentais em qualquer arquitetura, seja hexagonal ou em camadas.
- Testar serviços garante que a lógica do sistema está correta e que as integrações entre as partes funcionam como esperado.

---

#### Tópicos

1. O que é um service (serviço)
2. Por que testar serviços
3. Como estruturar testes para serviços
4. Uso de mocks, stubs e sandboxes
5. Boas práticas na organização dos testes
6. Exemplos práticos de testes

---

### Passo a Passo para Testar Services

1. **O que é um service?**

   - É uma classe que centraliza regras de negócio e integra entidades e repositórios.
   - Exemplo: um serviço de paciente (PatientService) pode adicionar, buscar, atualizar e remover pacientes, usando um repositório por baixo dos panos.

2. **Por que testar serviços?**

   - Para garantir que as regras de negócio estão corretas.
   - Para verificar se as integrações entre entidades e repositórios funcionam como esperado.
   - Para evitar que mudanças em uma parte do sistema quebrem outras funcionalidades.

3. **Como estruturar testes para serviços**

   - Use ferramentas como Mocha, Chai e Sinon para organizar e validar os testes.
   - Utilize mocks e stubs para simular o comportamento dos repositórios e isolar o teste do serviço.
   - Use sandboxes para garantir que cada teste rode em um ambiente isolado.
   - Prepare dados de teste reutilizáveis usando hooks como `beforeEach`.

4. **Uso de mocks, stubs e sandboxes**

   - **Mocks:** simulam objetos reais e verificam se métodos foram chamados corretamente.
   - **Stubs:** substituem métodos reais por versões controladas que retornam valores definidos.
   - **Sandboxes:** criam um ambiente isolado para os stubs/mocks, garantindo que um teste não afete o outro.

5. **Boas práticas na organização dos testes**

   - Espelhe a estrutura de diretórios dos testes com a do código-fonte.
   - Separe os testes por métodos e funcionalidades do serviço.
   - Use dados padrão para facilitar a criação de objetos em vários testes.
   - Sempre limpe o ambiente de teste antes de cada execução.

---

### Exemplo Prático

Imagine um serviço de paciente (PatientService) que depende de um repositório de pacientes (PatientRepository):

```javascript
// Exemplo simplificado de PatientService
class PatientService {
  constructor(patientRepository) {
    this.patientRepository = patientRepository
  }
  addPatient(patient) {
    if (!(patient instanceof Patient)) throw new Error('Objeto inválido')
    return this.patientRepository.add(patient.id, patient)
  }
  findAllPatients() {
    return this.patientRepository.findAll()
  }
  findPatientById(id) {
    return this.patientRepository.findById(id)
  }
  updatePatient(id, data) {
    // ...atualiza atributos e chama o repositório
  }
  deletePatient(id) {
    // ...remove paciente e retorna resultado
  }
}
```

Você pode criar testes assim:

```javascript
const sinon = require('sinon')
const { expect } = require('chai')

describe('PatientService', () => {
  let patientService, patientRepository, sandbox, mockPatient

  beforeEach(() => {
    sandbox = sinon.createSandbox()
    patientRepository = {
      add: sandbox.stub(),
      findAll: sandbox.stub(),
      findById: sandbox.stub(),
      update: sandbox.stub(),
      delete: sandbox.stub(),
    }
    patientService = new PatientService(patientRepository)
    mockPatient = { id: 1, name: 'João' }
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('deve adicionar um paciente válido', () => {
    patientRepository.add.returns(1)
    const result = patientService.addPatient(mockPatient)
    expect(result).to.equal(1)
    expect(patientRepository.add.calledWith(1, mockPatient)).to.be.true
  })

  it('deve retornar todos os pacientes', () => {
    patientRepository.findAll.returns([mockPatient])
    const result = patientService.findAllPatients()
    expect(result).to.deep.equal([mockPatient])
  })

  it('deve buscar paciente por ID', () => {
    patientRepository.findById.withArgs(1).returns(mockPatient)
    const result = patientService.findPatientById(1)
    expect(result).to.equal(mockPatient)
  })
})
```

---

### Dicas e Boas Práticas

- Sempre use mocks/stubs para isolar o teste do serviço.
- Utilize sandboxes para restaurar o estado dos mocks entre os testes.
- Teste todos os fluxos importantes: sucesso, erro, dados inválidos e integrações.
- Não repita testes já feitos para entidades ou repositórios.

---

> **Resumo:**  
> Testar serviços é fundamental para garantir que as regras de negócio e integrações do sistema funcionam corretamente.  
> Use mocks, stubs e sandboxes para criar testes confiáveis e mantenha o ambiente de testes sempre limpo e isolado.
