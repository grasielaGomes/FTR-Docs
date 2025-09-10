# Validação do Provider FlagD com Open Feature

### Definição de Flags e Testes (FlagD + Open Feature)

#### Introdução

- Nesta aula, vamos validar o funcionamento do provider FlagD no client Open Feature.
- Abordaremos diagnóstico de conexão, uso de `setProviderAndWait`, consultas de flags e resolução de erros de tipo.

---

### Verificando o status do provider

```js
// Após obter o client Open Feature:
console.log(client.providerStatus) // 'not ready' indica que a conexão não foi estabelecida
```

- `providerStatus`: mostra o estado da conexão com o provedor.

---

### Configurando setProviderAndWait

- Boa prática no bootstrap: aguardar a conexão antes de consultar flags.

```js
import { OpenFeature } from '@openfeature/server-sdk'
import { FlagdProvider } from '@openfeature/flagd-provider'

// Define e aguarda a conexão:
await OpenFeature.setProviderAndWait(new FlagdProvider())
const client = OpenFeature.getClient()
```

---

### Consulta de flags

- Consulta simples (booleano):

```js
const isLoginEnabled = await client.getBooleanValue(
  'loginPage', // nome da flag
  false, // valor default
  { userId: '123' }
)
console.log('loginPage enable:', isLoginEnabled)
```

- Para obter detalhes:

```js
const detail = await client.getBooleanDetails('loginPage', false, {
  userId: '123',
})
console.log(detail)
```

---

### Ajuste de variantes e debug

- Erro comum: `Type mismatch` quando as variantes no `flags.json` estão como strings.
- Exemplo de `flags.json` correto:

```json
{
  "$schema": "https://flagd.dev/schemas/flagd-schema.json",
  "flags": [
    {
      "name": "loginPage",
      "enabled": true,
      "variants": [
        { "variant": "ON", "value": true },
        { "variant": "OFF", "value": false }
      ],
      "defaultVariant": "ON"
    }
  ]
}
```

- Após salvar, o FlagD faz resync automático.

---

### Boas práticas

- Versione `flags.json` no repositório com controle de mudanças.
- Use `setProviderAndWait` para garantir readiness.
- Defina variantes (ON/OFF) compatíveis com tipos esperados.
- Monitore `providerStatus` e logs do FlagD.

---

### Próximos passos

- Explorar rollout progressivo e customização de contextos.
- Criar testes automatizados de flags em CI/CD.
- Comparar comportamentos entre Unleash e FlagD em produção.

---

### Referências

- Schema de flags FlagD: https://flagd.dev/schemas/flagd-schema.json
- GitHub Open Feature: https://github.com/open-feature
- Documentação FlagD: https://flagd.dev/docs/quickstart
