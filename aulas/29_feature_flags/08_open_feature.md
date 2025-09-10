# Open Feature (Abstração de Feature Flags)

## Introdução

- Objetivo: apresentar o Open Feature como uma camada de abstração vendor-agnostic para Feature Flags.
- Nesta aula, vamos configurar o provider FlagD em um projeto Node.js, instalar bibliotecas e demonstrar um exemplo de uso.

---

## O que é Open Feature

- Fornece uma interface comum para diferentes providers de Feature Flags.
- Permite desacoplar aplicação de um vendor específico (Unleash, LaunchDarkly, etc.).
- Inspirado no modelo do OpenTelemetry (abstração via API unificada).

---

## Provider FlagD

- FlagD é um dos providers compatíveis com Open Feature.
- Pode ser executado como CLI ou container Docker.
- Neste módulo, veremos apenas a configuração no código; em aulas futuras, rodaremos o FlagD.

---

## Setup do projeto

1. Crie um diretório e inicialize o projeto:

```bash
mkdir flagd-demo && cd flagd-demo
yarn init -y
```

2. Requisito: Node.js >= 20 (versões anteriores podem gerar erros ao instalar bibliotecas).

---

## Instalação de dependências

```bash
yarn add @openfeature/core @openfeature/server-sdk @openfeature/flagd-provider @grpc/grpc-js
```

---

## Exemplo de código

Crie um arquivo `index.js` com o seguinte conteúdo:

```js
import { OpenFeature } from '@openfeature/server-sdk'
import { FlagdProvider } from '@openfeature/flagd-provider'

// Instanciação do provider FlagD
const provider = new FlagdProvider()

// Define o provider no contexto do Open Feature
OpenFeature.setProvider(provider)

// Obtém o client para consulta de flags
const client = OpenFeature.getClient()

;(async () => {
  // Exemplo de uso: consulta booleana de flag
  const isEnabled = await client.getBooleanValue('nome_da_flag', false, {
    userId: '123',
  })
  console.log('Flag habilitada?', isEnabled)
})()
```

- Sem um provider em execução, a conexão padrão na porta `8013` gerará erro:

```
Error: connect ECONNREFUSED 127.0.0.1:8013
```

---

## Boas práticas

- Utilize TypeScript para tipar flags e contextos.
- Mantenha as variáveis sensíveis em um arquivo `.env` (não commitá-lo).
- Documente e versionamento das flags em repositório de código.

---

## Próximos passos

- Executar o FlagD via Docker ou CLI para disponibilizar o provider.
- Explorar a UI e API do FlagD para gestão de flags.
- Comparar Open Feature + FlagD com Unleash em cenários de produção.

---

## Referências

- GitHub Open Feature: https://github.com/open-feature
- Documentação FlagD: https://docs.flagd.io/
