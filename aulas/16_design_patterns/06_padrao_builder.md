### Padrão Builder: Conceitos e Implementação

#### O que é o Padrão Builder?

- **Categoria:** Padrão de projeto criacional.
- **Objetivo:**
  - Facilitar a criação de objetos complexos, separando sua construção da representação.
  - Permitir a criação de diferentes representações de um objeto a partir de um mesmo ponto de partida.
- **Problema Resolvido:**
  - Evita o uso de construtores telescópicos (múltiplos construtores com muitos parâmetros).
  - Torna o código mais legível e menos propenso a erros.

---

### Quando usar o Builder?

- **Cenários comuns:**
  - Criação de objetos com muitos parâmetros opcionais.
  - Necessidade de criar diferentes representações de um mesmo objeto.
  - Exemplo: Configuração de uma pizza com diferentes tamanhos, massas, coberturas, etc.

---

### Vantagens do Builder

1. **Flexibilidade:** Permite criar objetos passo a passo.
2. **Legibilidade:** Evita construtores com muitos parâmetros, tornando o código mais claro.
3. **Reutilização:** Facilita a criação de diferentes representações de um mesmo objeto.

---

### Passo a Passo para Implementação em JavaScript

#### Passo 1: Criar a classe base do objeto

1. **Definir a classe do objeto que será construído.**
2. **Adicionar os atributos necessários.**
3. **Criar o construtor para inicializar os atributos.**

Exemplo:

```javascript
class Pizza {
  constructor(size, dough, cheese = false, toppings = []) {
    this.size = size // Tamanho da pizza
    this.dough = dough // Tipo de massa
    this.cheese = cheese // Se leva queijo ou não
    this.toppings = toppings // Lista de coberturas
  }
}
```

---

#### Passo 2: Criar a classe Builder

1. **Definir uma classe para construir o objeto passo a passo.**
2. **Adicionar métodos para configurar cada atributo do objeto.**
3. **Criar um método `build()` para retornar o objeto finalizado.**

Exemplo:

```javascript
class PizzaBuilder {
  constructor() {
    this.size = null
    this.dough = null
    this.cheese = false
    this.toppings = []
  }

  setSize(size) {
    this.size = size
    return this // Permite encadeamento de métodos
  }

  setDough(dough) {
    this.dough = dough
    return this
  }

  addCheese() {
    this.cheese = true
    return this
  }

  addTopping(topping) {
    this.toppings.push(topping)
    return this
  }

  build() {
    return new Pizza(this.size, this.dough, this.cheese, this.toppings)
  }
}
```

---

#### Passo 3: Testar o Builder

1. **Criar uma instância do Builder.**
2. **Configurar os atributos do objeto usando os métodos do Builder.**
3. **Chamar o método `build()` para criar o objeto final.**

Exemplo:

```javascript
const pizzaBuilder = new PizzaBuilder()

const margherita = pizzaBuilder
  .setSize('Média')
  .setDough('Fina')
  .addCheese()
  .addTopping('Tomate')
  .addTopping('Manjericão')
  .build()

const pepperoni = pizzaBuilder
  .setSize('Grande')
  .setDough('Grossa')
  .addCheese()
  .addTopping('Pepperoni')
  .build()

console.log(margherita)
// Saída: Pizza { size: 'Média', dough: 'Fina', cheese: true, toppings: [ 'Tomate', 'Manjericão' ] }

console.log(pepperoni)
// Saída: Pizza { size: 'Grande', dough: 'Grossa', cheese: true, toppings: [ 'Pepperoni' ] }
```

---

### Conclusão

- **Quando usar:** Em cenários onde objetos complexos precisam ser criados de forma flexível e legível.
- **Benefícios:**
  - Evita construtores telescópicos.
  - Torna o código mais modular e reutilizável.
- **Recomendações:** Use o Builder para objetos com muitos parâmetros opcionais ou diferentes representações.
