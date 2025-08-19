### Padrão Strategy: Passo a Passo para Implementação em JavaScript

#### O que é o Padrão Strategy?

- **Categoria:** Padrão de projeto comportamental.
- **Objetivo:**
  - Permitir que uma família de algoritmos seja intercambiável.
  - Desacoplar o comportamento do cliente, permitindo que ele escolha a estratégia em tempo de execução.
- **Problema Resolvido:**
  - Reduz o uso de estruturas condicionais (`if-else` ou `switch`) para selecionar comportamentos.
  - Facilita a extensão e manutenção do código ao respeitar o princípio de aberto/fechado.

---

### Passo a Passo para Implementação

#### Passo 1: Criar a interface Strategy

1. **Definir uma classe base que representa a interface para as estratégias.**
2. **Adicionar um método abstrato que será implementado pelas estratégias concretas.**

Exemplo:

```javascript
class EstrategiaRota {
  calcular(origem, destino) {
    throw new Error("O método 'calcular()' precisa ser implementado.")
  }
}

export default EstrategiaRota
```

---

#### Passo 2: Criar as Estratégias Concretas

1. **Criar classes que estendem a interface `EstrategiaRota`.**
2. **Implementar o método `calcular()` com o comportamento específico.**

Exemplo:

```javascript
import EstrategiaRota from './EstrategiaRota.js'

class RotaCarro extends EstrategiaRota {
  calcular(origem, destino) {
    console.log(`Calculando rota de carro de ${origem} para ${destino}.`)
  }
}

class RotaCaminhada extends EstrategiaRota {
  calcular(origem, destino) {
    console.log(`Calculando rota de caminhada de ${origem} para ${destino}.`)
  }
}

class RotaTransportePublico extends EstrategiaRota {
  calcular(origem, destino) {
    console.log(
      `Calculando rota de transporte público de ${origem} para ${destino}.`
    )
  }
}

export { RotaCarro, RotaCaminhada, RotaTransportePublico }
```

---

#### Passo 3: Criar o Contexto

1. **Definir uma classe que gerencia as estratégias.**
2. **Adicionar um método para definir a estratégia (`setEstrategia`).**
3. **Adicionar um método para executar a estratégia (`calcularRota`).**

Exemplo:

```javascript
class Navegador {
  setEstrategia(estrategia) {
    this.estrategia = estrategia
  }

  calcularRota(origem, destino) {
    if (!this.estrategia) {
      throw new Error('Nenhuma estratégia foi definida.')
    }
    this.estrategia.calcular(origem, destino)
  }
}

export default Navegador
```

---

#### Passo 4: Testar o Strategy

1. **Criar instâncias das estratégias concretas.**
2. **Definir a estratégia no contexto (`Navegador`).**
3. **Executar o método `calcularRota()` para verificar o comportamento.**

Exemplo:

```javascript
import Navegador from './Navegador.js'
import {
  RotaCarro,
  RotaCaminhada,
  RotaTransportePublico,
} from './Estrategias.js'

const navegador = new Navegador()

// Definir a estratégia de carro
const rotaCarro = new RotaCarro()
navegador.setEstrategia(rotaCarro)
navegador.calcularRota('Casa', 'Aeroporto')
// Saída: Calculando rota de carro de Casa para Aeroporto.

// Alterar para a estratégia de transporte público
const rotaTransportePublico = new RotaTransportePublico()
navegador.setEstrategia(rotaTransportePublico)
navegador.calcularRota('Aeroporto', 'Shopping')
// Saída: Calculando rota de transporte público de Aeroporto para Shopping.

// Alterar para a estratégia de caminhada
const rotaCaminhada = new RotaCaminhada()
navegador.setEstrategia(rotaCaminhada)
navegador.calcularRota('Shopping', 'Casa')
// Saída: Calculando rota de caminhada de Shopping para Casa.
```

---

### Conclusão

- **Quando usar:** Quando o comportamento de um sistema precisa ser alterado dinamicamente em tempo de execução.
- **Benefícios:**
  - Respeita o princípio de aberto/fechado.
  - Facilita a extensão e manutenção do código.
  - Reduz o acoplamento entre o cliente e as implementações específicas.
- **Recomendações:** Use o Strategy para sistemas que exigem flexibilidade no comportamento, como sistemas de pagamento ou navegação.
