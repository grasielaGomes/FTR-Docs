### **Repositórios em DDD e Arquitetura Hexagonal**

#### Introdução

- Repositórios encapsulam o acesso e a persistência de dados (CRUD).
- Em DDD, gerenciam agregados (unidades de entidades e objetos de valor), garantindo consistência.
- Na Arquitetura Hexagonal, atuam como “portas” (interfaces), com implementações concretas (“adaptadores”).

#### Tópicos

1. Definição do padrão Repository
2. Repositório genérico (base)
3. Repositório específico (Paciente)
4. Demonstração de uso

---

### Passo a Passo para Implementação em JavaScript

1. **Estrutura de diretórios**

   ```
   src/
   ├── shared/
   │   └── Repository.js
   ├── patient/
   │   └── PatientRepository.js
   └── index.js
   ```

2. **Criar o repositório genérico**  
   Esse será o “adapter” base para todos os repositories.

   ```javascript
   // filepath: src/shared/Repository.js
   export class Repository {
     constructor() {
       this.store = new Map()
     }

     add(id, entity) {
       if (this.store.has(id)) {
         throw new Error(`Entity with id=${id} already exists`)
       }
       this.store.set(id, entity)
     }

     findById(id) {
       return this.store.get(id) ?? null
     }

     findAll() {
       return Array.from(this.store.values())
     }

     update(id, entity) {
       // sobrescreve ou adiciona
       this.store.set(id, entity)
     }

     delete(id) {
       if (!this.store.has(id)) {
         throw new Error(`Entity with id=${id} not found`)
       }
       this.store.delete(id)
     }
   }
   ```

3. **Criar o repositório específico**  
   Estende o genérico e adiciona métodos customizados.

   ```javascript
   // filepath: src/patient/PatientRepository.js
   import { Repository } from '../shared/Repository.js'

   export class PatientRepository extends Repository {
     constructor() {
       super()
     }

     findByName(name) {
       return this.findAll().filter((p) => p.name === name)
     }

     findByBloodType(type) {
       return this.findAll().filter((p) => p.bloodType === type)
     }
   }
   ```

4. **Demonstrar uso em `index.js`**

   ```javascript
   // filepath: src/index.js
   import { PatientRepository } from './patient/PatientRepository.js'

   // Exemplo de entidade paciente
   const repo = new PatientRepository()
   const patientA = { id: 1, name: 'João Silva', bloodType: 'O+' }
   const patientB = { id: 2, name: 'Maria Souza', bloodType: 'A−' }

   // Criar
   repo.add(patientA.id, patientA)
   repo.add(patientB.id, patientB)

   // Ler
   console.log('Todos:', repo.findAll())
   console.log('Por nome:', repo.findByName('João Silva'))
   console.log('Por tipo sanguíneo:', repo.findByBloodType('A−'))

   // Atualizar
   const updated = { ...patientA, name: 'João S.' }
   repo.update(updated.id, updated)
   console.log('Após update:', repo.findById(1))

   // Excluir
   repo.delete(2)
   console.log('Após delete:', repo.findAll())
   ```

5. **Executar o exemplo**

   No terminal, dentro de `src/`:

   ```bash
   node index.js
   ```

   Você deverá ver no console a sequência de operações de CRUD e filtros personalizados.
