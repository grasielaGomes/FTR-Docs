### **TDD (Test Driven Development) e Factory Method em JavaScript**

#### Introdução

- TDD (Desenvolvimento Orientado a Testes) é uma técnica avançada para criar software com mais qualidade.
- O padrão de projeto Factory Method é usado para criar objetos de forma flexível e com baixo acoplamento.
- Nesta aula, vamos entender como aplicar TDD na prática e como usar o Factory Method em um exemplo de sistema de notificações.

---

#### Tópicos

1. O que é TDD (Test Driven Development)
2. As fases do TDD: Vermelha, Verde e Refatoração
3. O que é o padrão Factory Method
4. Como criar testes e código usando TDD
5. Exemplo prático: sistema de notificações com Factory Method
6. Dicas e boas práticas

---

### Passo a Passo para Entender TDD e Factory Method

1. **O que é TDD?**

   - TDD significa "Desenvolvimento Orientado a Testes" (Test Driven Development).
   - No TDD, você escreve primeiro o teste, depois o código que faz o teste passar.
   - O processo é dividido em três fases:
     - **Vermelha:** Escreva um teste que falha (porque o código ainda não existe).
     - **Verde:** Implemente o código mínimo necessário para o teste passar.
     - **Refatoração:** Melhore o código, mantendo todos os testes passando.

2. **O que é o padrão Factory Method?**

   - É um padrão de projeto criacional, muito usado para criar objetos de forma flexível.
   - Ele delega a criação dos objetos para subclasses, facilitando a adição de novos tipos sem alterar o código principal.
   - Ajuda a manter o código desacoplado e fácil de manter.

3. **Como criar testes e código usando TDD**

   - Crie um diretório para o código-fonte (ex: `src/`) e outro para os testes (ex: `test/`).
   - Escreva um teste para a funcionalidade desejada, mesmo que o código ainda não exista.
   - Rode o teste e veja ele falhar (fase vermelha).
   - Implemente o código mínimo para o teste passar (fase verde).
   - Refatore o código, mantendo os testes passando.

---

### Exemplo Prático: Sistema de Notificações com Factory Method

Imagine que você precisa de um sistema que envie notificações por diferentes canais (e-mail, SMS, WhatsApp, Slack, etc).

#### 1. Escrevendo o teste (fase vermelha)

```javascript
const { expect } = require('chai')
const sinon = require('sinon')
// const NotificationFactory = require('../src/NotificationFactory') // ainda não existe

describe('NotificationFactory TDD', () => {
  it('deve criar notificação de e-mail', () => {
    const emailNotifier = NotificationFactory.create('email')
    const sendSpy = sinon.spy(emailNotifier, 'send')
    emailNotifier.send('Olá usuário!')
    expect(sendSpy.calledOnce).to.be.true
  })

  it('deve criar notificação de SMS', () => {
    const smsNotifier = NotificationFactory.create('sms')
    const sendSpy = sinon.spy(smsNotifier, 'send')
    smsNotifier.send('Olá usuário!')
    expect(sendSpy.calledOnce).to.be.true
  })
})
```

- Ao rodar, os testes vão falhar, pois o código ainda não existe (fase vermelha).

#### 2. Implementando o código mínimo (fase verde)

```javascript
// src/NotificationFactory.js
class EmailNotifier {
  send(message) {
    // lógica para enviar e-mail
  }
}
class SMSNotifier {
  send(message) {
    // lógica para enviar SMS
  }
}
class NotificationFactory {
  static create(type) {
    if (type === 'email') return new EmailNotifier()
    if (type === 'sms') return new SMSNotifier()
    throw new Error('Tipo de notificação não suportado')
  }
}
module.exports = NotificationFactory
```

- Agora, ao rodar os testes, eles devem passar (fase verde).

#### 3. Refatorando e melhorando

- Você pode melhorar o código, por exemplo, usando objetos para mapear os tipos de notificação.
- Adicione validações para tipos desconhecidos e mensagens padrão.

---

### Dicas e Boas Práticas

- Sempre siga as três fases do TDD: Vermelha, Verde e Refatoração.
- Use spies e stubs do Sinon para verificar se métodos foram chamados corretamente.
- Separe bem o código de produção e os testes em diretórios diferentes.
- O Factory Method facilita a adição de novos tipos de notificação sem alterar o código existente.

---

> **Resumo:**  
> TDD ajuda a criar código mais seguro e fácil de manter, começando sempre pelos testes.  
> O padrão Factory Method permite criar objetos de forma flexível e desacoplada.  
> Pratique escrevendo testes antes do código e refatore sempre que possível para melhorar a qualidade do seu sistema.
