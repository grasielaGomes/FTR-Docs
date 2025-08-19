### Overview e Implementação Básica do AWS KMS

#### Introdução

- O AWS KMS (Key Management Service) é utilizado para encriptação e decriptação de dados sensíveis.
- Permite gerenciar chaves de forma centralizada e segura, integrando-se com outros serviços AWS como SSM Parameter Store.

---

#### Recuperação de Dados Criptografados

- Ao recuperar um parâmetro do SSM, é possível usar a opção `WithDecryption: true` para obter o valor já decriptado.
- Se `WithDecryption` for `false`, o valor retornará criptografado.
- O KMS é responsável por encriptar e decriptar os dados armazenados como SecureString no SSM.

---

#### Utilizando o KMS via SDK

- Para decriptar manualmente, utilize a biblioteca AWS SDK v3 e o client do KMS.
- Instale a biblioteca:
  ```
  pnpm install @aws-sdk/client-kms
  ```
- Exemplo de uso:
  ```js
  const { KMSClient, DecryptCommand } = require('@aws-sdk/client-kms')
  const kms = KnewMSClient({ region: 'us-east-2' })
  const command = new DecryptCommand({
    CiphertextBlob: Buffer.from(valorBase64, 'base64'),
  })
  const result = await kms.send(command)
  const texto = new TextDecoder().decode(result.Plaintext)
  ```

---

#### Criação e Gerenciamento de Chaves KMS

- Existem dois tipos principais de chaves:
  - **AWS Managed Keys:** Gerenciadas automaticamente pela AWS para cada serviço.
  - **Customer Managed Keys (CMK):** Criadas e gerenciadas pelo usuário, permitindo controle total sobre permissões e uso.
- Para criar uma CMK:
  - Acesse o console do KMS e clique em "Create Key".
  - Escolha entre chave simétrica (mesma chave para encriptar/decriptar) ou assimétrica (chave pública/privada).
  - Defina nome, descrição, tags e permissões de uso.

---

#### Permissões e Políticas de Acesso

- É necessário garantir que o usuário ou serviço tenha permissão para usar a chave KMS para encriptação/decriptação.
- Permissões podem ser configuradas durante a criação da chave ou posteriormente via políticas IAM.

---

#### Integração com SSM Parameter Store

- Ao criar ou editar um parâmetro SecureString, selecione a chave KMS desejada.
- O SSM utilizará essa chave para encriptar e decriptar o valor do parâmetro.
- Para acessar o valor de forma decriptada, basta usar `WithDecryption: true` na requisição.

---

#### Boas Práticas

- Centralize a configuração do KMS em arquivos dedicados (ex: `aws.ts`) para facilitar manutenção.
- Utilize Customer Managed Keys para maior controle e segurança.
- Sempre teste permissões e integração após criar ou alterar chaves.

---

#### Considerações Finais

- O uso do KMS permite encriptação avançada e controle de acesso sobre dados sensíveis.
- Para a maioria dos casos, o próprio SSM já faz a decriptação automática ao usar `WithDecryption: true`.
- O KMS pode ser utilizado diretamente para casos específicos de encriptação/decriptação na aplicação.
