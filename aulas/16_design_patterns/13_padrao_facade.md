### Padrão Facade: Passo a Passo para Implementação em JavaScript

#### O que é o Padrão Facade?

- **Categoria:** Padrão de projeto estrutural.
- **Objetivo:**
  - Fornecer uma interface simplificada para um sistema complexo.
  - Reduzir o acoplamento entre o cliente e as classes internas do sistema.
- **Problema Resolvido:**
  - Permite que o cliente interaja com um sistema complexo por meio de uma interface única e simplificada.
  - Esconde os detalhes de implementação do sistema interno.

---

### Passo a Passo para Implementação

#### Passo 1: Criar as classes do subsistema

1. **Definir as classes que compõem o sistema interno.**
2. **Adicionar os métodos que representam as funcionalidades do sistema.**

Exemplo:

```javascript
class EmailService {
  enviarEmail(mensagem) {
    console.log(`E-mail enviado: ${mensagem}`)
  }
}

class SMSService {
  enviarSMS(mensagem) {
    console.log(`SMS enviado: ${mensagem}`)
  }
}

class PushNotificationService {
  enviarPush(mensagem) {
    console.log(`Push Notification enviado: ${mensagem}`)
  }
}

export { EmailService, SMSService, PushNotificationService }
```

---

#### Passo 2: Criar a classe Facade

1. **Definir uma classe que será a fachada para o sistema interno.**
2. **Adicionar instâncias das classes do subsistema como dependências.**
3. **Criar métodos simplificados que encapsulam as chamadas ao subsistema.**

Exemplo:

```javascript
import {
  EmailService,
  SMSService,
  PushNotificationService,
} from './Servicos.js'

class NotificationFacade {
  constructor() {
    this.emailService = new EmailService()
    this.smsService = new SMSService()
    this.pushService = new PushNotificationService()
  }

  enviarNotificacao(mensagem) {
    this.emailService.enviarEmail(mensagem)
    this.smsService.enviarSMS(mensagem)
    this.pushService.enviarPush(mensagem)
  }
}

export default NotificationFacade
```

---

#### Passo 3: Testar a Facade

1. **Criar uma instância da classe Facade.**
2. **Chamar os métodos da fachada para interagir com o sistema interno.**

Exemplo:

```javascript
import NotificationFacade from './NotificationFacade.js'

const notificacao = new NotificationFacade()
notificacao.enviarNotificacao('O sistema está em manutenção.')
// Saída:
// E-mail enviado: O sistema está em manutenção.
// SMS enviado: O sistema está em manutenção.
// Push Notification enviado: O sistema está em manutenção.
```

---

### Conclusão

- **Quando usar:** Quando é necessário simplificar a interação com um sistema complexo.
- **Benefícios:**
  - Reduz o acoplamento entre o cliente e as classes internas do sistema.
  - Esconde os detalhes de implementação do sistema interno.
  - Fornece uma interface única e simplificada para o cliente.
- **Recomendações:** Use o Facade para melhorar a organização e a legibilidade do código em sistemas complexos.
