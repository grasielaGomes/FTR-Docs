### **Testes de Integração em JavaScript**

#### Introdução

- Testes de integração verificam se diferentes partes do sistema funcionam bem juntas.
- São importantes para garantir que funções, bancos de dados, APIs externas e outros componentes colaboram corretamente.
- Eles ficam entre os testes unitários (que testam partes isoladas) e os testes de ponta a ponta (E2E), que simulam o uso real do sistema.

---

#### Tópicos

1. O que são testes de integração?
2. Diferença entre testes unitários e de integração
3. Quando usar testes de integração
4. Como criar testes de integração com stubs
5. Exemplo prático de teste de integração
6. Dicas e boas práticas

---

### Passo a Passo para Entender Testes de Integração

1. **O que são testes de integração?**

   - São testes que verificam a colaboração entre múltiplos componentes do sistema.
   - Exemplo: testar se uma função consegue buscar dados de uma API externa e processar corretamente a resposta.
   - O foco é garantir que o fluxo entre as partes funciona, mesmo que não envolva toda a infraestrutura real.

2. **Diferença entre testes unitários e de integração**

   - **Testes unitários:** testam partes isoladas do código (funções, métodos).
   - **Testes de integração:** testam a interação entre duas ou mais partes, como uma função e uma API externa.
   - Às vezes, um teste pode parecer unitário, mas se envolve colaboração com outro componente (mesmo simulado), já é considerado de integração.

3. **Quando usar testes de integração?**

   - Quando você precisa garantir que diferentes módulos, serviços ou APIs funcionam juntos.
   - Quando quer simular cenários mais próximos do uso real, mas sem depender de toda a infraestrutura.
   - Quando precisa testar fluxos que envolvem comunicação entre partes do sistema.

4. **Como criar testes de integração com stubs**

   - Use ferramentas como Mocha, Chai e Sinon para organizar e validar os testes.
   - Utilize **stubs** para simular o comportamento de APIs externas ou serviços que ainda não existem.
   - Assim, você testa o seu código sem depender de sistemas de terceiros.

---

### Exemplo Prático

Imagine que você tem uma função `fetchingSum` que busca dois números em uma API externa e retorna a soma.  
Você ainda não tem a API pronta, mas pode testar sua função usando um stub para simular a resposta da API.

```javascript
const sinon = require('sinon')
const { expect } = require('chai')

// Função que simula buscar e somar dois números de uma API externa
async function fetchingSum(apiClient, x, y) {
  const response = await apiClient.get('/validate', { x, y })
  if (!response.valid) throw new Error('Entradas inválidas')
  return x + y
}

describe('fetchingSum', () => {
  let apiClientStub

  beforeEach(() => {
    apiClientStub = { get: sinon.stub() }
  })

  it('deve somar dois números válidos vindos da API', async () => {
    apiClientStub.get.resolves({ valid: true })
    const resultado = await fetchingSum(apiClientStub, 2, 3)
    expect(resultado).to.equal(5)
    expect(apiClientStub.get.calledWith('/validate', { x: 2, y: 3 })).to.be.true
  })

  it('deve lançar erro se a API retornar inválido', async () => {
    apiClientStub.get.resolves({ valid: false })
    try {
      await fetchingSum(apiClientStub, 2, 3)
    } catch (e) {
      expect(e.message).to.equal('Entradas inválidas')
    }
  })
})
```

---

### Dicas e Boas Práticas

- Use stubs para simular APIs externas e evitar dependências de sistemas de terceiros nos testes.
- Teste tanto cenários de sucesso quanto de erro.
- Lembre-se: quem implementa a API externa deve testar a própria API; você testa apenas a integração do seu código com ela.
- Sempre isole o ambiente de teste para evitar interferência entre os testes.

---

> **Resumo:**  
> Testes de integração garantem que diferentes partes do sistema funcionam juntas corretamente.  
> Use stubs para simular componentes externos e foque em testar os fluxos de colaboração entre módulos, APIs e serviços.
