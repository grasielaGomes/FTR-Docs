### **Cobertura de Testes em Node.js**

#### Introdução

- Cobertura de testes é a métrica que mostra qual parte do seu código está sendo testada pelos testes automatizados.
- Ter uma boa cobertura aumenta a confiança no sistema, mas não garante que ele estará 100% livre de bugs.
- É importante saber medir e comunicar a cobertura de testes em projetos profissionais.

---

#### Tópicos

1. O que é cobertura de testes?
2. Por que cobertura é importante?
3. Ferramentas para medir cobertura em Node.js
4. Como configurar e rodar cobertura de testes
5. Como interpretar os relatórios de cobertura
6. Boas práticas sobre cobertura

---

### Passo a Passo para Entender Cobertura de Testes

1. **O que é cobertura de testes?**

   - É a porcentagem do código que foi executada durante a execução dos testes.
   - Pode ser medida em relação a funções, linhas, branches (condições) e arquivos.
   - Exemplo: Se você tem 100 linhas de código e 80 são executadas nos testes, sua cobertura é de 80%.

2. **Por que cobertura é importante?**

   - Permite saber se as principais funcionalidades do sistema estão protegidas por testes.
   - Ajuda a identificar partes do código que não estão sendo testadas.
   - Passa mais confiança para clientes e equipes, mostrando que o sistema foi bem testado.
   - Lembre-se: 100% de cobertura não garante ausência de bugs, mas reduz riscos.

3. **Ferramentas para medir cobertura em Node.js**

   - As mais populares são **nyc** (também chamada de Istanbul) e **c8**.
   - Elas funcionam junto com frameworks de teste como Mocha e Chai.
   - Geram relatórios detalhados mostrando o que foi ou não testado.

4. **Como configurar e rodar cobertura de testes**

   - Instale a ferramenta de cobertura como dependência de desenvolvimento:
     ```
     npm install --save-dev c8
     ```
   - No `package.json`, adicione um script para rodar a cobertura:
     ```json
     "scripts": {
       "test": "mocha",
       "coverage": "c8 mocha"
     }
     ```
   - Execute os testes normalmente com:
     ```
     npm test
     ```
   - Para ver a cobertura, rode:
     ```
     npm run coverage
     ```

5. **Como interpretar os relatórios de cobertura**

   - O relatório mostra:
     - Percentual de linhas, funções e branches cobertas.
     - Quais arquivos e linhas não foram testados.
   - Exemplo de saída:
     ```
     File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Lines
     ---------------|---------|----------|---------|---------|----------------
     mathUtils.js   |   66.66 |    66.66 |   100   |   66.66 | 3-4
     ```
   - Se você adicionar mais testes cobrindo todos os cenários (inclusive erros), a cobertura pode chegar a 100%.

6. **Boas práticas sobre cobertura**

   - Busque sempre cobrir os principais fluxos e cenários de erro.
   - Não se preocupe apenas com o número, mas com a qualidade dos testes.
   - O diretório `coverage/` gerado pelas ferramentas deve ser ignorado no versionamento (`.gitignore`).
   - Use a cobertura como ferramenta de melhoria contínua, não como meta absoluta.

---

### Exemplo Prático

Imagine que você tem uma função de soma:

```javascript
function soma(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid arguments')
  }
  return a + b
}
```

E um teste para ela:

```javascript
const { expect } = require('chai')

describe('soma', () => {
  it('deve somar dois números', () => {
    expect(soma(2, 3)).to.equal(5)
  })
  it('deve lançar erro se argumentos não forem números', () => {
    expect(() => soma(2, 'a')).to.throw('Invalid arguments')
  })
})
```

Ao rodar a cobertura, você verá que todas as linhas e cenários estão cobertos.

---

### Dicas e Boas Práticas

- Sempre rode a cobertura antes de entregar o projeto.
- Use o relatório para encontrar partes do código sem testes.
- Não suba o diretório `coverage/` para o repositório.
- Lembre-se: cobertura alta é bom, mas qualidade dos testes é ainda mais importante.

---

> **Resumo:**  
> Cobertura de testes mostra quanto do seu código está protegido por testes automatizados.  
> Use ferramentas como c8 ou nyc para medir e melhorar a cobertura, mas foque sempre na qualidade dos testes e não só no número final.
