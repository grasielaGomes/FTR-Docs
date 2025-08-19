### Configurando o AWS SSM Parameter Store

#### Introdução

- O AWS Systems Manager Parameter Store permite armazenar e recuperar parâmetros e secrets de forma segura.
- Utilizado para centralizar configurações e informações sensíveis em aplicações.

---

#### Instalação da Biblioteca AWS SDK

- Utilizar a biblioteca oficial AWS SDK v3 para Node.js.
- Instalação via terminal:
  ```
  pnpm install @aws-sdk/client-ssm
  ```
- A biblioteca é recomendada para integração com serviços AWS, incluindo o Parameter Store.

---

#### Configuração do Cliente SSM

- Importar e configurar o client SSM na aplicação:
  ```js
  const { SSMClient, GetParameterCommand } = require('@aws-sdk/client-ssm')
  const client = new SSMClient({ region: 'us-east-2' })
  ```
- Certifique-se de que as credenciais AWS estejam configuradas na máquina.

---

#### Recuperando Parâmetros do Parameter Store

- Utilizar o comando `GetParameterCommand` para buscar valores:
  ```js
  const command = new GetParameterCommand({
    Name: 'NOME_DO_PARAMETRO',
    WithDecryption: true,
  })
  const response = await client.send(command)
  console.log(response.Parameter.Value)
  ```
- O parâmetro `WithDecryption: true` é necessário para recuperar valores de strings seguras (SecureString).

---

#### Criando Parâmetros no Console AWS

- Acesse o AWS Console e navegue até Systems Manager > Parameter Store.
- Clique em "Create parameter" e defina:
  - Nome do parâmetro (ex: `/cloudflare/access_key_id`)
  - Tipo: String ou SecureString (para dados sensíveis)
  - Valor e descrição
  - Tags opcionais para organização

---

#### Diferença entre String e SecureString

- **String:** Valor armazenado em texto simples, visível no console e via API.
- **SecureString:** Valor criptografado com KMS, visível apenas via API com decriptação autorizada.
- Para acessar SecureString, é necessário permissão de uso da chave KMS.

---

#### Boas Práticas

- Utilize SecureString para informações sensíveis (senhas, tokens, chaves).
- Organize parâmetros com nomes padronizados e tags.
- Evite hardcode de valores sensíveis no código da aplicação.

---

#### Integração com a Aplicação

- Parâmetros podem ser lidos e utilizados diretamente na aplicação.
- Em ambientes de produção, utilize mecanismos de injeção de variáveis de ambiente para maior segurança.

---

#### Considerações Finais

- O Parameter Store facilita o gerenciamento centralizado de configurações e secrets.
- Para dados sensíveis, sempre utilize SecureString e configure permissões adequadas no KMS.
- Próximos passos: explorar integração com KMS para decriptação e uso avançado de secrets.
