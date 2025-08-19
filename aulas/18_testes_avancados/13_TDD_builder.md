### **TDD e o Padrão Builder em JavaScript**

#### Introdução

- O padrão Builder é usado para criar objetos complexos de forma flexível e organizada.
- TDD (Test Driven Development) é uma técnica onde escrevemos primeiro os testes e depois o código.
- Nesta aula, vamos ver como aplicar TDD para construir um sistema de pedidos (Order) usando o padrão Builder.

---

#### Tópicos

1. O que é o padrão Builder?
2. Por que usar Builder para objetos complexos?
3. O que é TDD e como aplicar no dia a dia
4. Como criar testes e código usando TDD e Builder
5. Exemplo prático: Pedido de e-commerce com Builder
6. Dicas e boas práticas

---

### Passo a Passo para Entender TDD e Builder

1. **O que é o padrão Builder?**

   - É um padrão de projeto usado para construir objetos complexos passo a passo.
   - Permite criar objetos com muitos atributos opcionais ou obrigatórios, facilitando a montagem.
   - Exemplo: um pedido de e-commerce pode ter vários produtos, cliente, frete, status, etc.

2. **Por que usar Builder para objetos complexos?**

   - Facilita a criação de objetos com muitos campos, evitando construtores gigantes.
   - Permite adicionar atributos de forma encadeada (chaining).
   - Ajuda a manter o código organizado e fácil de entender.

3. **O que é TDD (Test Driven Development)?**

   - É uma técnica onde você escreve primeiro o teste, depois o código que faz o teste passar.
   - O ciclo do TDD tem três fases:
     - **Vermelha:** Escreva um teste que falha (porque o código ainda não existe).
     - **Verde:** Implemente o código mínimo para o teste passar.
     - **Refatoração:** Melhore o código, mantendo todos os testes passando.

---

### Exemplo Prático: Pedido de E-commerce com Builder e TDD

Imagine que você precisa criar um sistema de pedidos, onde cada pedido pode ter vários produtos, cliente e precisa checar o estoque.

#### 1. Escrevendo o teste (fase vermelha)

```javascript
const sinon = require('sinon')
const { expect } = require('chai')
// importações fictícias: StockService, OrderBuilder

describe('OrderBuilder', () => {
  let stockStub

  beforeEach(() => {
    stockStub = sinon.stub(StockService.prototype, 'checkStock')
  })

  afterEach(() => {
    stockStub.restore()
  })

  it('deve lançar erro se não houver estoque suficiente', async () => {
    stockStub.returns(false)
    const builder = new OrderBuilder()
    builder.addProduct('iPhone', 1).setCustomer('cliente@email.com')
    try {
      await builder.build()
    } catch (e) {
      expect(e.message).to.equal('Estoque insuficiente para o produto iPhone')
    }
  })

  it('deve criar pedido com sucesso', async () => {
    stockStub.returns(true)
    const builder = new OrderBuilder()
    builder
      .addProduct('iPhone', 1)
      .addProduct('Capinha', 2)
      .setCustomer('cliente@email.com')
    const order = await builder.build()
    expect(order).to.deep.equal({
      customer: 'cliente@email.com',
      products: [
        { name: 'iPhone', quantity: 1 },
        { name: 'Capinha', quantity: 2 },
      ],
      status: 'created',
    })
  })
})
```

- Ao rodar, os testes vão falhar, pois o código ainda não existe (fase vermelha).

#### 2. Implementando o código mínimo (fase verde)

```javascript
// src/OrderBuilder.js
class OrderBuilder {
  constructor() {
    this.products = []
    this.customer = null
    this.stockService = new StockService()
  }
  addProduct(name, quantity) {
    this.products.push({ name, quantity })
    return this
  }
  setCustomer(email) {
    this.customer = email
    return this
  }
  async build() {
    for (const product of this.products) {
      const hasStock = this.stockService.checkStock(
        product.name,
        product.quantity
      )
      if (!hasStock)
        throw new Error(`Estoque insuficiente para o produto ${product.name}`)
    }
    return {
      customer: this.customer,
      products: this.products,
      status: 'created',
    }
  }
}
```

- Agora, ao rodar os testes, eles devem passar (fase verde).

#### 3. Refatorando e melhorando

- Você pode adicionar mais métodos ao builder, como adicionar frete, descontos, etc.
- Pode melhorar a validação dos dados e separar responsabilidades.

---

### Dicas e Boas Práticas

- Use o padrão Builder para objetos com muitos atributos opcionais ou obrigatórios.
- Sempre siga as três fases do TDD: Vermelha, Verde e Refatoração.
- Use stubs para simular serviços externos (como estoque) e evitar dependências reais nos testes.
- Separe bem o código de produção e os testes em diretórios diferentes.
- Refatore sempre que possível para melhorar a qualidade do seu sistema.

---

> **Resumo:**  
> O padrão Builder facilita a criação de objetos complexos de forma organizada e flexível.  
> TDD ajuda a garantir que seu código funciona e é fácil de manter.  
> Pratique escrevendo testes antes do código e refatore sempre que necessário!
