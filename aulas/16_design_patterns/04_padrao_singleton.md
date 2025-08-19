### Padrão Singleton: Conceitos e Implementação

#### O que é o Singleton?

- **Categoria:** Padrão de projeto criacional.
- **Objetivo:**
  - Garante que uma classe tenha apenas uma única instância em todo o programa.
  - Fornece um ponto único de acesso global a essa instância.
- **Diferença de Variáveis Globais:**
  - Variáveis globais podem ser redeclaradas, criando múltiplas instâncias.
  - O Singleton garante que sempre será usada a mesma instância existente.

---

### Quando usar o Singleton?

- **Cenários comuns:**
  - **Gerenciador de telas:** Apenas uma instância ativa para gerenciar a interface gráfica.
  - **Sistema de logs:** Centraliza os eventos de erro, acesso e outras informações.
  - **Conexão com banco de dados:** Evita múltiplas conexões desnecessárias.

---

### Problemas sem o Singleton

- **Múltiplas instâncias:**
  - Sem o Singleton, é possível criar várias instâncias de uma mesma classe.
  - Isso pode levar à perda de controle e inconsistências, como múltiplos sistemas de log ou conexões redundantes.

---

### Implementação do Singleton

```javascript
// Padrão Singleton: Implementação em Pseudocódigo (JavaScript)

// Classe Singleton
class Logger {
  // Atributo estático para armazenar a instância única
  static instance = null

  // Construtor privado
  constructor() {
    if (Logger.instance) {
      // Retorna a instância existente se já foi criada
      return Logger.instance
    }

    // Inicializa a lista de logs
    this.logs = []
    Logger.instance = this // Define a instância única
  }

  // Método para adicionar mensagens ao log
  log(message) {
    this.logs.push(message)
  }

  // Método para imprimir todas as mensagens do log
  printLogs() {
    console.log('Logs armazenados:')
    this.logs.forEach((log, index) => {
      console.log(`${index + 1}: ${log}`)
    })
  }
}

// Testando o Singleton

// Criando duas referências ao Logger
const logger1 = new Logger()
const logger2 = new Logger()

// Adicionando mensagens de log
logger1.log('Primeira mensagem')
logger2.log('Segunda mensagem')

// Imprimindo os logs de ambas as referências
logger1.printLogs()
// Saída:
// Logs armazenados:
// 1: Primeira mensagem
// 2: Segunda mensagem

logger2.printLogs()
// Saída será a mesma, pois logger1 e logger2 apontam para a mesma instância
```
