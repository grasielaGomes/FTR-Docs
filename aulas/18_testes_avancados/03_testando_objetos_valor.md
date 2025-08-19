### **Testando Objetos de Valor (Value Objects) em JavaScript**

#### Introdução

- Objetos de valor (Value Objects) são classes que representam pequenas informações do domínio, sem identidade única.
- No contexto de um sistema hospitalar, exemplos de objetos de valor incluem endereço, alergia, contato de emergência, diagnóstico, medicação e tratamento.
- Testar esses objetos garante que validações, comparações e regras de negócio estejam corretas.

---

#### Tópicos

1. O que são objetos de valor (Value Objects)
2. Exemplos de objetos de valor no domínio hospitalar
3. Como implementar testes para objetos de valor
4. Boas práticas na organização dos testes
5. Exemplos práticos de testes

---

### Passo a Passo para Testar Objetos de Valor

1. **O que são objetos de valor?**

   - São classes que representam conceitos do domínio definidos apenas por seus atributos, sem um identificador único.
   - Dois objetos de valor são iguais se todos os seus atributos forem iguais.
   - Exemplo: dois endereços com os mesmos dados são considerados iguais, mesmo que sejam instâncias diferentes.

2. **Exemplos de objetos de valor no sistema hospitalar**

   - **Alergia:** nome da alergia.
   - **Contato de Emergência:** nome e telefone do contato.
   - **Endereço:** rua, número, cidade, estado e CEP.
   - **Diagnóstico:** descrição e data.
   - **Medicação:** nome, dosagem e instruções.
   - **Tratamento:** descrição, data de início e fim.
   - **Prontuário Médico (Medical Record):** lista de diagnósticos, medicações e tratamentos.

3. **Como implementar testes para objetos de valor**

   - Teste a criação dos objetos, verificando se os atributos são atribuídos corretamente.
   - Teste as validações: campos obrigatórios, formatos válidos, valores positivos, etc.
   - Teste o método de comparação (`equals`): objetos com os mesmos atributos devem ser iguais.
   - Teste casos de erro: criação com dados inválidos deve lançar exceção.

4. **Boas práticas na organização dos testes**

   - Mantenha a estrutura de diretórios dos testes espelhando a do código-fonte.
   - Use ferramentas como Mocha e Chai para organizar e validar os testes.
   - Utilize hooks como `beforeEach` para preparar dados reutilizáveis.
   - Agrupe testes relacionados usando `describe`.

---

### Exemplo Prático

Imagine que você tem as seguintes classes de objetos de valor:

```javascript
// Exemplo simplificado de Value Object: Endereço
class Address {
  constructor(street, number, city, state, zip) {
    if (!street || !city || !state || !zip)
      throw new Error('Campos obrigatórios')
    if (number <= 0) throw new Error('Número deve ser positivo')
    this.street = street
    this.number = number
    this.city = city
    this.state = state
    this.zip = zip
  }
  equals(other) {
    return (
      other instanceof Address &&
      this.street === other.street &&
      this.number === other.number &&
      this.city === other.city &&
      this.state === other.state &&
      this.zip === other.zip
    )
  }
}
```

Você pode criar testes assim:

```javascript
// Teste de criação válida
it('deve criar um endereço válido', () => {
  const addr = new Address('Rua A', 123, 'Cidade', 'Estado', '12345-000')
  expect(addr.street).to.equal('Rua A')
})

// Teste de validação de campos obrigatórios
it('deve lançar erro se rua estiver vazia', () => {
  expect(() => new Address('', 123, 'Cidade', 'Estado', '12345-000')).to.throw()
})

// Teste de igualdade
it('dois endereços iguais devem ser considerados iguais', () => {
  const a1 = new Address('Rua A', 123, 'Cidade', 'Estado', '12345-000')
  const a2 = new Address('Rua A', 123, 'Cidade', 'Estado', '12345-000')
  expect(a1.equals(a2)).to.be.true
})
```

---

### Dicas e Boas Práticas

- Sempre teste todos os atributos obrigatórios.
- Teste o método `equals` para garantir que a comparação funciona corretamente.
- Separe os testes por tipo de objeto de valor (alergia, endereço, contato, etc.).
- Use mensagens claras para identificar falhas nos testes.

---

> **Resumo:**  
> Testar objetos de valor é fundamental para garantir que as menores partes do seu domínio funcionem corretamente.  
> Valide atributos, teste comparações e garanta que erros sejam lançados para dados inválidos.  
> Uma boa cobertura de testes nos Value Objects aumenta a confiança e a qualidade do sistema como um todo.
