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
class Texto {
  constructor(conteudo) {
    this.conteudo = conteudo // Conteúdo do texto
  }

  renderizar() {
    return this.conteudo // Retorna o texto puro
  }
}

export default Texto
```

---

#### Passo 2: Criar os Decoradores

1. **Criar uma classe base para os decoradores.**
2. **Adicionar um atributo para armazenar o objeto que será decorado.**
3. **Sobrescrever o método `renderizar()` para adicionar a funcionalidade.**

Exemplo:

```javascript
class DecoradorTexto {
  constructor(texto) {
    this.texto = texto // Objeto a ser decorado
  }

  renderizar() {
    return this.texto.renderizar() // Chama o método do objeto decorado
  }
}

export default DecoradorTexto
```

---

#### Passo 3: Criar os Decoradores Concretos

1. **Criar classes que estendem a classe base do decorador.**
2. **Sobrescrever o método `renderizar()` para adicionar a funcionalidade específica.**

Exemplo:

```javascript
import DecoradorTexto from './DecoradorTexto.js'

class Negrito extends DecoradorTexto {
  renderizar() {
    return `<b>${super.renderizar()}</b>` // Adiciona a tag <b> ao texto
  }
}

class Italico extends DecoradorTexto {
  renderizar() {
    return `<i>${super.renderizar()}</i>` // Adiciona a tag <i> ao texto
  }
}

class Sublinhado extends DecoradorTexto {
  renderizar() {
    return `<u>${super.renderizar()}</u>` // Adiciona a tag <u> ao texto
  }
}

export { Negrito, Italico, Sublinhado }
```

---

#### Passo 4: Testar o Decorator

1. **Criar uma instância da classe base.**
2. **Encapsular o objeto base com os decoradores desejados.**
3. **Chamar o método `renderizar()` para verificar o resultado.**

Exemplo:

```javascript
import Texto from './Texto.js'
import { Negrito, Italico, Sublinhado } from './Decoradores.js'

const texto = new Texto('Hello, Rocket!')

// Aplicar decoradores
const textoNegrito = new Negrito(texto)
const textoItalico = new Italico(textoNegrito)
const textoSublinhado = new Sublinhado(textoItalico)

console.log(textoSublinhado.renderizar())
// Saída: <u><i><b>Hello, Rocket!</b></i></u>
```

---

### Conclusão

- **Quando usar:** Quando é necessário adicionar funcionalidades a objetos de forma dinâmica, sem modificar a classe base.
- **Benefícios:**
  - Evita a criação de subclasses para cada combinação de funcionalidades.
  - Permite adicionar ou remover funcionalidades em tempo de execução.
- **Recomendações:** Use o Decorator para criar objetos flexíveis e altamente configuráveis.
