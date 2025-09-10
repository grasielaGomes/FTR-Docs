# Rodando FlagD (Provider)

## Introdução

- Objetivo: demonstrar como executar o provider FlagD usando Docker e definir flags via arquivo JSON.
- FlagD não possui UI própria; a configuração das flags é feita por meio de um arquivo `flags.json` que serve como fonte da verdade.

---

## Estrutura do arquivo de flags (`flags.json`)

- O arquivo deve seguir o schema oficial de FlagD:

```json
{
  "$schema": "https://flagd.dev/schemas/flagd-schema.json",
  "flags": [
    {
      "name": "loginPage",
      "enabled": true,
      "variants": [
        { "variant": "A", "value": "logar" },
        { "variant": "B", "value": "entrar" }
      ],
      "defaultVariant": "A"
    }
  ]
}
```

- Campos principais:
  - `name`: identificador da flag.
  - `enabled`: estado inicial (true/false).
  - `variants`: lista de variações com `variant` e `value`.
  - `defaultVariant`: variação padrão quando a flag está habilitada.

---

## Executando o container FlagD

Use o comando abaixo para rodar o FlagD em modo interativo, mapeando a porta gRPC (8013) e HTTP (8014) e montando o arquivo de flags:

```bash
docker run -it \
  -p 8014:8014 \
  -p 8013:8013 \
  -v $(pwd)/flags.json:/etc/flagd/flags.json \
  ghcr.io/openfeature/flagd:latest \
  flagd start --uri file:///etc/flagd/flags.json
```

- `-p 8013:8013`: porta gRPC (RPC) do FlagD.
- `-p 8014:8014`: porta HTTP REST do FlagD.
- `-v $(pwd)/flags.json:/etc/flagd/flags.json`: monta o arquivo local no container.
- `flagd start --uri file:///etc/flagd/flags.json`: inicia o servidor usando o arquivo JSON.

---

## Resync automático

- Ao alterar `flags.json` local e salvar, o FlagD detecta mudanças e faz resync automático no container.
- Permite testes rápidos de novos valores sem necessidade de reiniciar o container.

---

## Testando no código cliente (Open Feature)

```js
import { OpenFeature } from '@openfeature/server-sdk'
import { FlagdProvider } from '@openfeature/flagd-provider'

// Configura provider e URI de endpoint (RPC ou HTTP)
OpenFeature.setProvider(
  new FlagdProvider({
    uri: 'http://localhost:8014', // ou gRPC: 'grpc://localhost:8013'
  })
)

const client = OpenFeature.getClient()
;(async () => {
  const isLoginEnabled = await client.getBooleanValue('loginPage', false, {
    userId: '123',
  })
  console.log('LoginPage enabled?', isLoginEnabled)
})()
```

---

## Boas práticas

- Versione o arquivo `flags.json` no repositório.
- Armazene definições sensíveis em locais seguros (S3, repositórios privados).
- Utilize volumes nomeados em produção para persistência de flags.
- Monitore logs do FlagD para detectar erros de parsing ou conexão.

---

## Próximos passos

- Automatizar execução do FlagD com `docker-compose.yml`.
- Integrar testes automatizados de flags em pipelines CI/CD.
- Comparar performance e fluxo de trabalho entre Unleash e FlagD.

---

## Referências

- Documentação FlagD Quick Start: https://flagd.dev/docs/quickstart
- Repositório oficial FlagD: https://github.com/open-feature/flagd
