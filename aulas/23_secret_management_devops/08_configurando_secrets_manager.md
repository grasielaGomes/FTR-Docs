```markdown
### Configurando o AWS Secrets Manager

#### Introdução

- O AWS Secrets Manager permite armazenar, recuperar e gerenciar secrets de forma segura.
- Estrutura e uso semelhantes ao Parameter Store, mas com foco em gerenciamento avançado de secrets.

---

#### Instalação da Biblioteca AWS SDK

- Cada recurso da AWS possui uma biblioteca específica para integração.
- Instale a biblioteca do Secrets Manager para Node.js:
```

pnpm install @aws-sdk/client-secrets-manager

````

---

#### Configuração do Cliente Secrets Manager

- Importe e configure o client do Secrets Manager na aplicação:
```js
const { SecretsManagerClient, GetSecretValueCommand } = require('@aws-sdk/client-secrets-manager');
const client = new SecretsManagerClient({ region: 'us-east-2' });
````

---

#### Recuperando Secrets

- Utilize o comando `GetSecretValueCommand` para buscar secrets:
  ```js
  const command = new GetSecretValueCommand({ SecretId: 'NOME_DA_SECRET' })
  const response = await client.send(command)
  const secret = JSON.parse(response.SecretString)
  ```
- O campo correto para buscar a secret é `SecretId`.

---

#### Criando Secrets no Console AWS

- Acesse o AWS Console e navegue até Secrets Manager.
- Clique em "Store a new secret" e defina:
  - Chaves e valores (ex: `cloudflare`, `public_url`)
  - Tipo de secret (ex: Other type of secret)
  - Nome da secret (ex: `/staging/widget-server`)
  - Defina o contexto (staging, prod, etc.) no nome para evitar conflitos entre ambientes.
- É possível configurar rotação automática de secrets, definindo o intervalo desejado.

---

#### Boas Práticas de Organização

- Utilize nomes padronizados para segmentar ambientes (ex: `/staging/widget-server`, `/prod/widget-server`).
- Inclua o nome da aplicação no nome da secret para evitar conflitos entre diferentes aplicações.
- Prefira automatizar a criação de secrets via IaC (Infrastructure as Code) após conhecer os recursos.

---

#### Rotação e Permissões

- O Secrets Manager permite configurar rotação automática de secrets.
- Defina permissões adequadas para acesso e rotação das secrets.
- Replicação de secrets para outras regiões é opcional e pode ser configurada conforme a necessidade.

---

#### Integração com a Aplicação

- O ideal é buscar as secrets no start da aplicação, evitando múltiplas chamadas durante a execução.
- Em ambientes como Kubernetes, é possível utilizar sidecar containers para injetar secrets como variáveis de ambiente.
- Também é possível utilizar scripts para buscar secrets e popular arquivos `.env` antes do start da aplicação.

---

#### Considerações Finais

- O AWS Secrets Manager facilita o gerenciamento seguro e centralizado de secrets.
- Estrutura e práticas são semelhantes ao uso do Vault e do Parameter Store.
- Próximos passos: aprofundar integração com Kubernetes e explorar automação via IaC.
