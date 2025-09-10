CONTENT

### Integrando o Unleash em uma aplicação Node.js

#### Introdução

- Objetivo: demonstrar como integrar o Unleash Client em uma aplicação Node.js simples.
- Pré-requisitos: Unleash OSS rodando localmente e token de API gerado.

---

### Setup do projeto

```bash
mkdir oneleash-demo && cd oneleash-demo
yarn init -y
```

## Crie o arquivo `index.js` na raiz do projeto.

### Instalando o client

```bash
yarn add @unleash/client
```

---

### Configurando o Unleash Client

No `index.js`, importe e inicialize:

```javascript
import { initialize } from '@unleash/client'

const unleash = initialize({
  url: 'http://localhost:4242/api',
  appName: 'oneleash-demo',
  customHeaders: {
    Authorization: process.env.UNLEASH_API_TOKEN,
  },
})
```

## Use a variável de ambiente `UNLEASH_API_TOKEN` para o token de API.

### Obtendo o token de API

1. Acesse **Admin Settings > API Tokens** no painel Unleash.
2. Crie um novo token com escopo **Back-end** e ambiente **development**.
3. Exporte o token:

```bash
export UNLEASH_API_TOKEN='<seu_token_aqui>'
```

---

### Verificando Feature Flags

Implemente uma função para checar o estado de uma flag:

```javascript
function verifyToggle(flagName) {
  const enabled = unleash.isEnabled(flagName)
  console.log(`${flagName}: ${enabled}`)
}

unleash.on('ready', () => {
  verifyToggle('loginPage')
})
```

Execute com:

```bash
node index.js
```

O console exibirá `loginPage: true` ou `loginPage: false` conforme o estado da flag.

---

### Atualização dinâmica

- O Unleash Client busca atualizações periodicamente (padrão 15s).
- Para testar polling contínuo:

```javascript
setInterval(() => verifyToggle('loginPage'), 3000)
```

- Lembre-se de considerar delays de propagação em produção (≥1min).

---

### Boas práticas

- Use variáveis de ambiente para URL e token.
- Trate eventos de erro:
  ```javascript
  unleash.on('error', (err) => console.error('Unleash error:', err))
  ```
- Nunca exponha tokens de Back-end no front-end.

---

### Próximos passos

- Integrar o client num servidor Express ou outro framework.
- Experimentar diferentes estratégias de rollout e context fields.

---

### Referências

- Unleash Client docs: https://docs.getunleash.io/
