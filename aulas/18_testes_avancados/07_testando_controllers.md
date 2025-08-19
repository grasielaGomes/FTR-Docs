### **Testando Controllers em JavaScript**

#### Introdução

- Controllers (controladores) são a porta de entrada da nossa API, recebendo as requisições dos usuários e encaminhando para os serviços do sistema.
- Testar controllers garante que as rotas estão funcionando, que as requisições são tratadas corretamente e que os serviços são chamados com os parâmetros certos.
- É importante garantir que os controllers retornem os status codes adequados e mensagens claras para o front-end.

---

#### Tópicos

1. O que é um controller
2. Por que testar controllers
3. Como estruturar testes para controllers
4. Uso de mocks, stubs e sandboxes
5. Boas práticas na organização dos testes
6. Exemplos práticos de testes

---

### Passo a Passo para Testar Controllers

1. **O que é um controller?**

   - É uma classe ou função responsável por receber as requisições HTTP, processar os dados recebidos e chamar os serviços adequados.
   - Exemplo: o PatientController recebe dados de pacientes e chama o PatientService para criar, buscar, atualizar ou remover pacientes.

2. **Por que testar controllers?**

   - Para garantir que as rotas estão funcionando corretamente.
   - Para verificar se as requisições e respostas estão sendo tratadas como esperado.
   - Para garantir que os serviços são chamados com os parâmetros corretos.
   - Para conferir se os status codes e mensagens retornadas estão de acordo com o esperado.

3. **Como estruturar testes para controllers**

   - Use ferramentas como Mocha, Chai e Sinon para organizar e validar os testes.
   - Utilize mocks e stubs para simular o comportamento dos serviços e isolar o teste do controller.
   - Use sandboxes para garantir que cada teste rode em um ambiente isolado.
   - Prepare dados de teste reutilizáveis usando hooks como `beforeEach`.

4. **Uso de mocks, stubs e sandboxes**

   - **Mocks:** simulam objetos reais e verificam se métodos foram chamados corretamente.
   - **Stubs:** substituem métodos reais por versões controladas que retornam valores definidos.
   - **Sandboxes:** criam um ambiente isolado para os stubs/mocks, garantindo que um teste não afete o outro.

5. **Boas práticas na organização dos testes**

   - Espelhe a estrutura de diretórios dos testes com a do código-fonte.
   - Separe os testes por métodos e funcionalidades do controller.
   - Use dados padrão para facilitar a criação de objetos em vários testes.
   - Sempre limpe o ambiente de teste antes de cada execução.

---

### Exemplo Prático

Imagine um PatientController com rotas para criar, buscar, atualizar e remover pacientes.  
Você pode criar testes assim:

```javascript
const sinon = require('sinon')
const { expect } = require('chai')

describe('PatientController', () => {
  let patientController, patientService, sandbox, mockPatientData

  beforeEach(() => {
    sandbox = sinon.createSandbox()
    patientService = {
      addPatient: sandbox.stub(),
      findAllPatients: sandbox.stub(),
      findPatientById: sandbox.stub(),
      updatePatient: sandbox.stub(),
      deletePatient: sandbox.stub(),
    }
    patientController = new PatientController(patientService)
    mockPatientData = {
      name: 'João Silva',
      birthdate: '2000-10-10',
      gender: 'M',
      bloodType: 'A+',
      address: {},
      phone: '99999-9999',
      email: 'joao@email.com',
      emergencyContact: {},
    }
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('deve criar um paciente e retornar status 201', async () => {
    patientService.addPatient.resolves({ id: 1, ...mockPatientData })
    const req = { body: mockPatientData }
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() }
    await patientController.createPatient(req, res)
    expect(res.status.calledWith(201)).to.be.true
    expect(res.json.calledWithMatch({ id: 1 })).to.be.true
  })

  // Outros testes para buscar, atualizar e remover pacientes...
})
```

---

### Dicas e Boas Práticas

- Sempre use mocks/stubs para isolar o teste do controller.
- Utilize sandboxes para restaurar o estado dos mocks entre os testes.
- Teste todos os fluxos importantes: sucesso, erro, dados inválidos e integrações.
- Não repita testes já feitos para serviços ou entidades.

---

> **Resumo:**  
> Testar controllers é fundamental para garantir que a API responde corretamente às requisições dos usuários.  
> Use mocks, stubs e sandboxes para criar testes confiáveis e mantenha o ambiente de testes sempre limpo e isolado.
