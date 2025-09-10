### Estratégias de Constraints e Context Fields

#### Introdução

- Objetivo: explorar como usar constraints e context fields para segmentar Feature Flags no Unleash.
- Contexto: já definido rollout gradual sem constraints, agora vamos adicionar filtros por atributos.

---

### 1. Definindo Constraints (Exemplo com UserId)

1. No Admin UI, navegue até **Projects > default > Feature Flags > [sua flag] > Add strategy**.
2. Selecione **Gradual Rollout** e defina uma porcentagem (ex.: 90%).
3. Em **Constraints**, adicione:
   - **Field**: `userId`
   - **Operator**: `IS_ONE_OF`
   - **Values**: `RocketseatUser`
4. Salve a estratégia.

- Resultado: 90% das requisições do usuário `RocketseatUser` recebem `true`; outros usuários recebem `false`.

---

### 2. Enviando Contexto na Aplicação

No client (Node.js, browser ou outro), envie o contexto ao verificar a flag:

```javascript
const context = {
  userId: 'RocketseatUser',
  sessionId: 'sess-123', // opcional
}

const enabled = unleash.isEnabled('loginPage', context)
console.log(`loginPage active for ${context.userId}:`, enabled)
```

- Se `userId` não corresponder, o cliente retorna `false` mesmo com percentual definido.

---

### 3. Usando Properties Customizadas (Exemplo GroupId)

- Para campos que não pertencem ao conjunto padrão (`userId`, `sessionId`, etc.), use **Properties**:

```javascript
const context = {
  properties: { groupId: 'RocketseatGroup' },
}

const enabled = unleash.isEnabled('loginPage', context)
```

- No Admin UI, defina Constraint em **Field** = `groupId` e adicione valores desejados.

---

### 4. Outras opções de Constraints

- **STRING_CONTAINS** / **STARTS_WITH** / **ENDS_WITH**: filtrar por subtstring.
- **NUM_EQUALS** / **NUM_GREATER_THAN**: filtrar por valores numéricos.
- **SEMVER Operators**: para flags baseadas em versão da aplicação.

Cada operador permite segmentação avançada conforme necessidade do negócio.

---

### Boas práticas

- Documente sempre as constraints aplicadas (descrições e tags).
- Use nomes consistentes de context fields entre aplicação e Admin UI.
- Lembre-se de remover caches ou aguardar período de polling para refletir mudanças.

---

### Próximos passos

- Explorar **Variants** e testes A/B no Unleash.
- Criar constraints múltiplas para segmentação combinada.

---

### Referências

- Documentação de Constraints: https://docs.getunleash.io/docs/strategy/constraints
