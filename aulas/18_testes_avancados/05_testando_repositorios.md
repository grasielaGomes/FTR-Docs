### **Testando Repositórios em JavaScript**

#### Introdução

- Repositórios são responsáveis por gerenciar entidades e realizar a persistência (armazenamento) dos dados.
- Em testes, normalmente usamos estruturas simples como mapas (chave-valor) para simular um banco de dados.
- Testar repositórios garante que operações como adicionar, buscar, atualizar e remover entidades funcionam corretamente.

---

#### Tópicos

1. O que é um repositório
2. Por que testar repositórios
3. Como estruturar testes para repositórios
4. Diferença entre repositório genérico e específico
5. Boas práticas e uso de mocks/stubs
6. Exemplos práticos de testes

---

### Passo a Passo para Testar Repositórios

1. **O que é um repositório?**

   - É uma classe responsável por armazenar, buscar, atualizar e remover entidades do sistema.
   - Serve como uma camada entre o domínio e a persistência dos dados (banco de dados ou memória).
   - Exemplo: um repositório de pacientes armazena e gerencia objetos do tipo paciente.

2. **Por que testar repositórios?**

   - Para garantir que as operações básicas (CRUD) funcionam corretamente.
   - Para evitar que erros de persistência prejudiquem o funcionamento do sistema.
   - Para simular o comportamento do banco de dados sem depender de um banco real nos testes.

3. **Como estruturar testes para repositórios**

   - Teste a adição de entidades e verifique se podem ser recuperadas pelo ID.
   - Teste se adicionar uma entidade com ID já existente lança uma exceção.
   - Teste a busca de todas as entidades (findAll).
   - Teste a atualização de entidades e verifique se os dados são alterados corretamente.
   - Teste a remoção de entidades e se a busca após remoção retorna nulo ou indefinido.
   - Teste se tentar atualizar ou remover uma entidade inexistente lança exceção.

4. **Diferença entre repositório genérico e específico**

   - O repositório genérico implementa as operações básicas e pode ser usado como base para outros repositórios.
   - O repositório específico (ex: PatientRepository) pode ter métodos extras, como buscar por nome ou tipo sanguíneo.

5. **Boas práticas e uso de mocks/stubs**

   - Use mocks ou stubs para simular o comportamento do repositório em testes mais avançados.
   - Utilize ferramentas como Sinon para criar sandboxes e isolar os testes.
   - Restaure o estado do repositório antes de cada teste para evitar interferência entre eles.

---

### Exemplo Prático

Imagine um repositório de pacientes com métodos para adicionar, buscar, atualizar e remover pacientes:

```javascript
class Repository {
  constructor() {
    this.store = new Map()
  }
  add(id, entity) {
    if (this.store.has(id)) throw new Error('ID já existe')
    this.store.set(id, entity)
  }
  findById(id) {
    return this.store.get(id) ?? null
  }
  findAll() {
    return Array.from(this.store.values())
  }
  update(id, entity) {
    if (!this.store.has(id)) throw new Error('Entidade não encontrada')
    this.store.set(id, entity)
  }
  delete(id) {
    if (!this.store.has(id)) throw new Error('Entidade não encontrada')
    this.store.delete(id)
  }
}
```

Você pode criar testes assim:

```javascript
it('deve adicionar e recuperar uma entidade pelo ID', () => {
  const repo = new Repository()
  const paciente = { id: 1, nome: 'João' }
  repo.add(1, paciente)
  expect(repo.findById(1)).to.equal(paciente)
})

it('deve lançar exceção ao adicionar entidade com ID já existente', () => {
  const repo = new Repository()
  repo.add(1, { id: 1, nome: 'João' })
  expect(() => repo.add(1, { id: 1, nome: 'Maria' })).to.throw()
})

it('deve retornar todas as entidades', () => {
  const repo = new Repository()
  repo.add(1, { id: 1, nome: 'João' })
  repo.add(2, { id: 2, nome: 'Maria' })
  expect(repo.findAll()).to.have.lengthOf(2)
})

it('deve atualizar uma entidade existente', () => {
  const repo = new Repository()
  repo.add(1, { id: 1, nome: 'João' })
  repo.update(1, { id: 1, nome: 'João Silva' })
  expect(repo.findById(1).nome).to.equal('João Silva')
})

it('deve lançar exceção ao atualizar entidade inexistente', () => {
  const repo = new Repository()
  expect(() => repo.update(1, { id: 1, nome: 'João' })).to.throw()
})

it('deve remover uma entidade existente', () => {
  const repo = new Repository()
  repo.add(1, { id: 1, nome: 'João' })
  repo.delete(1)
  expect(repo.findById(1)).to.be.null
})

it('deve lançar exceção ao remover entidade inexistente', () => {
  const repo = new Repository()
  expect(() => repo.delete(1)).to.throw()
})
```

---

### Dicas e Boas Práticas

- Sempre isole os testes para que um não afete o outro.
- Use sandboxes (caixa de areia) para restaurar o estado dos mocks/stubs entre os testes.
- Teste tanto o repositório genérico quanto os métodos específicos dos repositórios especializados.
- Prefira simular o banco de dados em memória nos testes automatizados.

---

> **Resumo:**  
> Testar repositórios é fundamental para garantir que as operações de persistência funcionam corretamente.  
> Use boas práticas de isolamento, mocks e stubs para criar testes confiáveis e fáceis de manter.
