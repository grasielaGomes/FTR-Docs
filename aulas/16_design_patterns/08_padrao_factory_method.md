### Padrão Factory Method: Conceitos e Implementação

#### O que é o Padrão Factory Method?

- **Categoria:** Padrão de projeto criacional.
- **Objetivo:**
  - Fornecer uma interface para criar objetos em uma classe base.
  - Permitir que subclasses decidam quais objetos serão criados.
- **Problema Resolvido:**
  - Reduz o acoplamento entre o código cliente e as classes concretas.
  - Evita a necessidade de múltiplos `if-else` ou `switch` para instanciar objetos.

---

### Quando usar o Factory Method?

- **Cenários comuns:**
  - Quando o código cliente não deve depender diretamente de classes concretas.
  - Quando há necessidade de criar diferentes tipos de objetos com base em condições específicas.
  - Exemplo: Sistema de logística que utiliza diferentes meios de transporte (caminhão, navio, moto, etc.).

---

### Vantagens do Factory Method

1. **Desacoplamento:** O cliente não precisa conhecer as classes concretas.
2. **Extensibilidade:** Facilita a adição de novos tipos de objetos sem modificar o código existente.
3. **Organização:** Centraliza a lógica de criação de objetos.

---

### Passo a Passo para Implementação em JavaScript

#### Passo 1: Criar a classe base para os produtos (Transporte)

1. **Definir uma classe abstrata para os tipos de transporte.**
2. **Adicionar um método abstrato `entregar()` que será implementado pelas subclasses.**
3. **Lançar uma exceção no método `entregar()` para garantir que as subclasses o implementem.**

Exemplo:

```javascript
class Transporte {
  entregar() {
    throw new Error("O método 'entregar()' precisa ser implementado.")
  }
}

export default Transporte
```

---

#### Passo 2: Criar as classes concretas para os produtos

1. **Criar classes que estendem a classe base `Transporte`.**
2. **Implementar o método `entregar()` em cada classe concreta.**

Exemplo:

```javascript
import Transporte from './Transporte.js'

class Caminhao extends Transporte {
  entregar() {
    console.log('Entrega realizada por caminhão.')
  }
}

class Navio extends Transporte {
  entregar() {
    console.log('Entrega realizada por navio.')
  }
}

export { Caminhao, Navio }
```

---

#### Passo 3: Criar a classe base para os criadores (Logística)

1. **Definir uma classe abstrata para os criadores.**
2. **Adicionar um método abstrato `criarTransporte()` que será implementado pelas subclasses.**
3. **Adicionar um método `realizarEntrega()` que utiliza o transporte criado.**

Exemplo:

```javascript
class Logistica {
  criarTransporte() {
    throw new Error("O método 'criarTransporte()' precisa ser implementado.")
  }

  realizarEntrega() {
    const transporte = this.criarTransporte()
    transporte.entregar()
  }
}

export default Logistica
```

---

#### Passo 4: Criar as subclasses concretas para os criadores

1. **Criar subclasses que estendem a classe base `Logistica`.**
2. **Implementar o método `criarTransporte()` para retornar o tipo específico de transporte.**

Exemplo:

```javascript
import Logistica from './Logistica.js'
import { Caminhao, Navio } from './Transporte.js'

class LogisticaTerrestre extends Logistica {
  criarTransporte() {
    return new Caminhao()
  }
}

class LogisticaMaritima extends Logistica {
  criarTransporte() {
    return new Navio()
  }
}

export { LogisticaTerrestre, LogisticaMaritima }
```

---

#### Passo 5: Testar o Factory Method

1. **Criar instâncias das subclasses de `Logistica`.**
2. **Chamar o método `realizarEntrega()` para verificar o comportamento.**

Exemplo:

```javascript
import { LogisticaTerrestre, LogisticaMaritima } from './Logistica.js'

const logisticaTerrestre = new LogisticaTerrestre()
logisticaTerrestre.realizarEntrega()
// Saída: Entrega realizada por caminhão.

const logisticaMaritima = new LogisticaMaritima()
logisticaMaritima.realizarEntrega()
// Saída: Entrega realizada por navio.
```

---

### Conclusão

- **Quando usar:** Quando o código cliente precisa ser desacoplado das classes concretas e há necessidade de criar diferentes tipos de objetos.
- **Benefícios:**
  - Reduz o acoplamento e melhora a organização do código.
  - Facilita a adição de novos tipos de objetos sem modificar o código existente.
- **Recomendações:** Use o Factory Method em sistemas que precisam criar objetos de forma flexível e extensível.
