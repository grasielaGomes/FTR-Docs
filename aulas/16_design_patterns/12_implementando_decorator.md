### Padrão Decorator: Passo a Passo para Implementação em JavaScript

#### O que é o Padrão Decorator?

- **Categoria:** Padrão de projeto estrutural.
- **Objetivo:**
  - Adicionar responsabilidades a objetos individualmente, de forma dinâmica, sem modificar a classe base.
  - Evitar o uso de herança para adicionar funcionalidades.
- **Problema Resolvido:**
  - Permite criar combinações dinâmicas de funcionalidades sem a necessidade de criar subclasses para cada combinação.

---

### Passo a Passo para Implementação

#### Passo 1: Criar a classe base (Componente)

1. **Definir a classe base que representa o objeto principal.**
2. **Adicionar os métodos que serão sobrescritos pelos decoradores.**

Exemplo:

```javascript
class Notificador {
  enviar(mensagem) {
    console.log(`Mensagem enviada por e-mail: ${mensagem}`)
  }
}

export default Notificador
```

---

#### Passo 2: Criar os Decoradores

1. **Criar uma classe base para os decoradores.**
2. **Adicionar um atributo para armazenar o objeto que será decorado.**
3. **Sobrescrever o método `enviar()` para adicionar a funcionalidade.**

Exemplo:

```javascript
class DecoradorNotificador {
  constructor(notificador) {
    this.notificador = notificador // Objeto a ser decorado
  }

  enviar(mensagem) {
    this.notificador.enviar(mensagem) // Chama o método do objeto decorado
  }
}

export default DecoradorNotificador
```

---

#### Passo 3: Criar os Decoradores Concretos

1. **Criar classes que estendem a classe base do decorador.**
2. **Sobrescrever o método `enviar()` para adicionar a funcionalidade específica.**

Exemplo:

```javascript
import DecoradorNotificador from './DecoradorNotificador.js'

class SMSDecorator extends DecoradorNotificador {
  enviar(mensagem) {
    super.enviar(mensagem)
    console.log(`Mensagem enviada por SMS: ${mensagem}`)
  }
}

class SlackDecorator extends DecoradorNotificador {
  enviar(mensagem) {
    super.enviar(mensagem)
    console.log(`Mensagem enviada pelo Slack: ${mensagem}`)
  }
}

class WhatsAppDecorator extends DecoradorNotificador {
  enviar(mensagem) {
    super.enviar(mensagem)
    console.log(`Mensagem enviada pelo WhatsApp: ${mensagem}`)
  }
}

export { SMSDecorator, SlackDecorator, WhatsAppDecorator }
```

---

#### Passo 4: Testar o Decorator

1. **Criar uma instância da classe base.**
2. **Encapsular o objeto base com os decoradores desejados.**
3. **Chamar o método `enviar()` para verificar o resultado.**

Exemplo:

```javascript
import Notificador from './Notificador.js'
import {
  SMSDecorator,
  SlackDecorator,
  WhatsAppDecorator,
} from './Decoradores.js'

const notificadorBase = new Notificador()

// Aplicar decoradores
const notificadorSMS = new SMSDecorator(notificadorBase)
const notificadorSlack = new SlackDecorator(notificadorSMS)
const notificadorWhatsApp = new WhatsAppDecorator(notificadorSlack)

notificadorWhatsApp.enviar('O sistema está em manutenção.')
// Saída:
// Mensagem enviada por e-mail: O sistema está em manutenção.
// Mensagem enviada por SMS: O sistema está em manutenção.
// Mensagem enviada pelo Slack: O sistema está em manutenção.
// Mensagem enviada pelo WhatsApp: O sistema está em manutenção.
```

---

### Conclusão

- **Quando usar:** Quando é necessário adicionar funcionalidades a objetos de forma dinâmica, sem modificar a classe base.
- **Benefícios:**
  - Evita a criação de subclasses para cada combinação de funcionalidades.
  - Permite adicionar ou remover funcionalidades em tempo de execução.
- **Recomendações:** Use o Decorator para criar objetos flexíveis e altamente configuráveis.
