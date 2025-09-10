### Testando Rollout Gradual com Variantes

#### Introdução

- Objetivo: demonstrar como configurar e validar **Variants** (A/B tests) no Unleash.
- Contexto: já temos rollout gradual ativo e queremos dividir o subset TRUE em múltiplas variantes.

---

### O que são Variantes

- Permitem subdividir usuários que recebem `true` em diferentes fluxos de teste.
- Cada variante tem um `name`, um `value` e um `weight` (percentage dentro de TRUE).

---

### Configurando Variantes no Admin UI

1. Navegue em **Projects > default > Feature Flags > [sua flag] > Add strategy**.
2. Selecione **Gradual Rollout** e defina o percentual principal (ex.: 50%).
3. Clique em **Add Variant** e configure:
   - Name: `A`
   - Value: `variantA`
   - Weight: `50`
4. Adicione outra variante:
   - Name: `B`
   - Value: `variantB`
   - Weight: `50`
5. Salve a estratégia.

> Fluxo resultante:
>
> - 50% dos requests → `false`
> - 25% → `variantA`
> - 25% → `variantB`

---

### Verificando Variantes na aplicação

```javascript
import { initialize } from '@unleash/client'

const unleash = initialize({
  url: 'http://localhost:4242/api',
  appName: 'oneleash-demo',
  customHeaders: { Authorization: process.env.UNLEASH_API_TOKEN },
})

unleash.on('ready', () => {
  const enabled = unleash.isEnabled('loginPage')
  console.log('Enabled:', enabled)

  if (enabled) {
    const variant = unleash.getVariant('loginPage')
    console.log('Variant:', variant.name, '->', variant.payload.value)
  }
})
```

---

### Boas práticas

- Verifique `enabled` antes de chamar `getVariant` para evitar chamadas desnecessárias.
- Use `variant.payload.value` para transportar dados adicionais (ex.: labels, URLs).
- Documente nomes e weights das variantes no Admin UI e no código.

---

### Próximos passos

- Coletar métricas A/B usando eventos e `payload`.
- Criar múltiplas variantes (>2) e combinar com context fields.
- Automatizar setup com `docker-compose.yml` para Unleash + Postgres.

---

### Referências

- Unleash Variants docs: https://docs.getunleash.io/docs/strategy/variants
