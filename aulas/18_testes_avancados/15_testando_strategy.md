### **Testando o Padrão Strategy em JavaScript**

#### Introdução

- O padrão Strategy permite trocar algoritmos ou estratégias em tempo de execução, tornando o sistema mais flexível.
- É muito útil em situações onde o comportamento pode variar, como regras de desconto em um e-commerce.
- Testar o Strategy garante que cada estratégia funciona corretamente e pode ser trocada sem impactar o restante do sistema.

---

#### Tópicos

1. O que é o padrão Strategy?
2. Exemplos de uso do Strategy
3. Como implementar Strategy em JavaScript
4. Como testar estratégias diferentes
5. Dicas e boas práticas

---

### Passo a Passo para Entender e Testar o Strategy

1. **O que é o padrão Strategy?**

   - É um padrão de projeto comportamental que permite definir uma família de algoritmos, encapsular cada um deles e torná-los intercambiáveis.
   - O objeto que usa a estratégia não precisa saber qual algoritmo está sendo usado, apenas que ele pertence à família de estratégias.
   - Exemplo: Em um sistema de descontos, você pode ter estratégias para Black Friday, cupons e programa de fidelidade.

2. **Exemplos de uso do Strategy**

   - **Black Friday:** desconto fixo de 30% no valor da compra.
   - **Cupom de desconto:** desconto variável, até o máximo de 20%.
   - **Programa de fidelidade:** desconto de 2% por ano de fidelidade, até o máximo de 20%.

3. **Como implementar Strategy em JavaScript**

   - Crie uma interface ou classe base para as estratégias.
   - Implemente uma classe para cada estratégia de desconto.
   - Crie uma classe `DiscountCalculator` que recebe uma estratégia e calcula o desconto.

   Exemplo simplificado:

   ```javascript
   // Interface base
   class DiscountStrategy {
     calculate(amount) {
       throw new Error('Método não implementado')
     }
   }

   // Estratégia Black Friday
   class BlackFridayStrategy extends DiscountStrategy {
     calculate(amount) {
       return amount * 0.3
     }
   }

   // Estratégia Cupom
   class CouponStrategy extends DiscountStrategy {
     constructor(percent) {
       super()
       this.percent = Math.min(percent, 20)
     }
     calculate(amount) {
       return amount * (this.percent / 100)
     }
   }

   // Estratégia Fidelidade
   class LoyaltyStrategy extends DiscountStrategy {
     constructor(years) {
       super()
       this.years = years
     }
     calculate(amount) {
       const percent = Math.min(this.years * 2, 20)
       return amount * (percent / 100)
     }
   }

   // Calculadora de desconto
   class DiscountCalculator {
     constructor(strategy = new BlackFridayStrategy()) {
       this.strategy = strategy
     }
     setStrategy(strategy) {
       this.strategy = strategy
     }
     calculate(amount) {
       return this.strategy.calculate(amount)
     }
   }
   ```

4. **Como testar estratégias diferentes**

   - Teste cada estratégia separadamente para garantir que o cálculo está correto.
   - Teste a troca de estratégias em tempo de execução.
   - Exemplo de teste:

   ```javascript
   const { expect } = require('chai')

   describe('Discount Strategies', () => {
     it('deve calcular desconto de Black Friday', () => {
       const calc = new DiscountCalculator(new BlackFridayStrategy())
       expect(calc.calculate(100)).to.equal(30)
     })

     it('deve calcular desconto de cupom até 20%', () => {
       const calc = new DiscountCalculator(new CouponStrategy(15))
       expect(calc.calculate(200)).to.equal(30)
     })

     it('deve limitar desconto de cupom a 20%', () => {
       const calc = new DiscountCalculator(new CouponStrategy(50))
       expect(calc.calculate(100)).to.equal(20)
     })

     it('deve calcular desconto de fidelidade', () => {
       const calc = new DiscountCalculator(new LoyaltyStrategy(5))
       expect(calc.calculate(100)).to.equal(10)
     })

     it('deve limitar desconto de fidelidade a 20%', () => {
       const calc = new DiscountCalculator(new LoyaltyStrategy(15))
       expect(calc.calculate(100)).to.equal(20)
     })

     it('deve trocar estratégia em tempo de execução', () => {
       const calc = new DiscountCalculator()
       calc.setStrategy(new CouponStrategy(10))
       expect(calc.calculate(100)).to.equal(10)
       calc.setStrategy(new LoyaltyStrategy(3))
       expect(calc.calculate(100)).to.equal(6)
     })
   })
   ```

---

### Dicas e Boas Práticas

- Separe cada estratégia em sua própria classe para facilitar manutenção e testes.
- Teste todos os limites e cenários de cada estratégia.
- Use o padrão Strategy sempre que precisar trocar comportamentos de forma flexível e sem alterar o código principal.

---

> **Resumo:**  
> O padrão Strategy permite trocar algoritmos facilmente, tornando o sistema flexível e fácil de testar.  
> Em sistemas de desconto, cada estratégia pode ser testada isoladamente e trocada em tempo de execução, garantindo resultados corretos para cada situação.
