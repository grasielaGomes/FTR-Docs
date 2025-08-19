### Padrão Builder com Diretor: Conceitos e Implementação

#### O que é o Padrão Builder com Diretor?

- **Categoria:** Padrão de projeto criacional.
- **Objetivo:**
  - Facilitar a criação de objetos complexos, separando a construção da representação.
  - Adicionar um **Diretor** para gerenciar o processo de construção, garantindo consistência e simplificando o código.
- **Problema Resolvido:**
  - Evita a repetição de código ao criar objetos complexos.
  - Centraliza a lógica de construção no Diretor, tornando o código mais organizado.

---

### Quando usar o Builder com Diretor?

- **Cenários comuns:**
  - Criação de objetos com muitos parâmetros opcionais.
  - Necessidade de criar diferentes variações de um mesmo objeto.
  - Exemplo: Configuração de pizzas com diferentes tamanhos, massas e coberturas.

---

### Vantagens do Builder com Diretor

1. **Organização:** O Diretor centraliza a lógica de construção.
2. **Reutilização:** Permite criar diferentes variações de objetos com o mesmo Builder.
3. **Flexibilidade:** Facilita a criação de objetos passo a passo.

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
4. **Adicionar um método `reset()` para reiniciar o Builder após a criação do objeto.**

Exemplo:

```javascript
class PizzaBuilder {
  constructor() {
    this.reset()
  }

  reset() {
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
    const pizza = new Pizza(this.size, this.dough, this.cheese, this.toppings)
    this.reset() // Reinicia o Builder após criar a pizza
    return pizza
  }
}
```

---

#### Passo 3: Criar a classe Diretor

1. **Definir uma classe para gerenciar o processo de construção.**
2. **Adicionar métodos para criar variações específicas do objeto.**
3. **Receber o Builder como dependência no construtor.**

Exemplo:

```javascript
class PizzaDirector {
  constructor(builder) {
    this.builder = builder
  }

  makeMargherita() {
    return this.builder
      .setSize('Média')
      .setDough('Fina')
      .addCheese()
      .addTopping('Tomate')
      .addTopping('Manjericão')
      .build()
  }

  makePepperoni() {
    return this.builder
      .setSize('Grande')
      .setDough('Grossa')
      .addCheese()
      .addTopping('Pepperoni')
      .build()
  }
}
```

---

#### Passo 4: Testar o Builder com Diretor

1. **Criar uma instância do Builder.**
2. **Criar uma instância do Diretor, passando o Builder como dependência.**
3. **Usar os métodos do Diretor para criar variações do objeto.**

Exemplo:

```javascript
const pizzaBuilder = new PizzaBuilder()
const pizzaDirector = new PizzaDirector(pizzaBuilder)

const margherita = pizzaDirector.makeMargherita()
const pepperoni = pizzaDirector.makePepperoni()

console.log(margherita)
// Saída: Pizza { size: 'Média', dough: 'Fina', cheese: true, toppings: [ 'Tomate', 'Manjericão' ] }

console.log(pepperoni)
// Saída: Pizza { size: 'Grande', dough: 'Grossa', cheese: true, toppings: [ 'Pepperoni' ] }
```

---

### Conclusão

- **Quando usar:** Em cenários onde objetos complexos precisam ser criados de forma flexível e organizada.
- **Benefícios:**
  - Centraliza a lógica de construção no Diretor.
  - Facilita a criação de diferentes variações de objetos.
  - Evita repetição de código e melhora a legibilidade.
- **Recomendações:** Use o Builder com Diretor para objetos configuráveis ou com múltiplas variações.
