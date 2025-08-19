### Padrão Singleton: Conceitos e Implementação

#### O que é o Singleton?

- **Categoria:** Padrão de projeto criacional.
- **Objetivo:**
  - Garante que uma classe tenha apenas uma única instância em todo o programa.
  - Fornece um ponto único de acesso global a essa instância.
- **Diferente de Variáveis Globais:**
  - Variáveis globais podem ser sobrescritas acidentalmente.
  - O Singleton impede múltiplas instâncias e garante consistência.

---

### Quando usar o Singleton?

- **Cenários comuns:**
  - **Gerenciador de telas:** Apenas uma instância ativa para gerenciar a interface gráfica.
  - **Sistema de logs:** Centraliza eventos de erro e informações.
  - **Conexão com banco de dados:** Evita múltiplas conexões desnecessárias.

---

### Vantagens do Singleton

1. **Instância única:** Garante que apenas um objeto seja criado.
2. **Acesso global:** Fornece um ponto único de acesso ao objeto.
3. **Lazy Loading:** A instância só é criada quando necessária, economizando recursos.

---

### Desvantagens do Singleton

1. **Viola o Princípio de Responsabilidade Única:** A classe gerencia sua própria instância.
2. **Dificuldade em ambientes multi-thread:** Garantir uma única instância em threads concorrentes é complexo.
3. **Testes unitários complicados:** A existência de uma única instância dificulta a criação de mocks e testes isolados.
4. **Considerado um antipadrão:** Alguns autores criticam o Singleton por violar boas práticas de design.

---

### Passo a Passo para Implementação em JavaScript

#### Passo 1: Criar a classe Singleton

1. **Adicionar um atributo estático para armazenar a instância única.**
2. **Verificar no construtor se a instância já existe:**
   - Se existir, retornar a instância existente.
   - Caso contrário, criar a instância e armazená-la.

Exemplo:

```javascript
class SingletonLogger {
  static instance = null

  constructor() {
    if (SingletonLogger.instance) {
      return SingletonLogger.instance // Retorna a instância existente
    }

    this.logs = [] // Inicializa a lista de logs
    SingletonLogger.instance = this // Define a instância única
  }
}
```

---

#### Passo 2: Adicionar métodos à classe

1. **Método `log(message)`:**
   - Adiciona mensagens à lista de logs.
2. **Método `printLogs()`:**
   - Exibe todas as mensagens armazenadas.

Exemplo:

```javascript
class SingletonLogger {
  static instance = null

  constructor() {
    if (SingletonLogger.instance) {
      return SingletonLogger.instance
    }

    this.logs = []
    SingletonLogger.instance = this
  }

  log(message) {
    this.logs.push(message)
  }

  printLogs() {
    console.log('Logs armazenados:')
    this.logs.forEach((log, index) => {
      console.log(`${index + 1}: ${log}`)
    })
  }
}
```

---

#### Passo 3: Testar o Singleton

1. **Criar múltiplas referências à classe Singleton.**
2. **Adicionar mensagens de log em diferentes referências.**
3. **Verificar se todas as referências compartilham a mesma instância.**

Exemplo:

```javascript
const logger1 = new SingletonLogger()
const logger2 = new SingletonLogger()

logger1.log('Primeira mensagem')
logger2.log('Segunda mensagem')

logger1.printLogs()
// Saída:
// Logs armazenados:
// 1: Primeira mensagem
// 2: Segunda mensagem

logger2.printLogs()
// Saída será a mesma, pois logger1 e logger2 apontam para a mesma instância
```

---

### Conclusão

- **Quando usar:** Em sistemas que exigem controle centralizado, como logs ou conexões de banco de dados.
- **Cuidados:** Evitar uso excessivo para não violar boas práticas de design.
- **Recomendações:** Em ambientes multi-thread, implemente mecanismos adicionais para garantir a segurança da instância única.
