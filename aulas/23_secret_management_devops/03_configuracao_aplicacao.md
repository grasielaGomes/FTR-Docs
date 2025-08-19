### Configuração da Aplicação para Uso do Vault

#### Instalação da Biblioteca NodeVault

- Utilizar a biblioteca oficial `node-vault` para integração da aplicação Node.js com o Vault.
- Instalação via terminal:
  ```
  pnpm install node-vault
  ```
- A biblioteca é mantida pela HashiCorp e recomendada para operações com Vault.

---

#### Integração da Aplicação com o Vault

- Importar e configurar o `node-vault` no início da aplicação.
- Definir as opções de conexão:
  - `apiVersion`: versão da API (ex: 'v1').
  - `endpoint`: endereço do Vault (ex: 'http://127.0.0.1:8200').
  - `token`: token de acesso (ex: token root gerado no modo dev).
- Exemplo de configuração:
  ```js
  const vault = require('node-vault')({
    apiVersion: 'v1',
    endpoint: 'http://127.0.0.1:8200',
    token: '<TOKEN_ROOT>',
  })
  ```

---

#### Leitura de Secrets no Start da Aplicação

- Utilizar o método `vault.read` para buscar secrets no Vault.
- O caminho padrão para leitura é: `secret/data/<nome_da_secret>`.
- Exemplo de leitura:
  ```js
  const values = await vault.read('secret/data/widget-server-staging')
  console.log(values.data.data) // Exibe as variáveis recuperadas
  ```
- As variáveis podem ser utilizadas diretamente na aplicação ou injetadas no ambiente.

---

#### Boas Práticas e Observações

- Evitar deixar o token do Vault hardcoded na aplicação em ambientes de produção.
- Em ambientes reais, utilizar mecanismos de injeção de variáveis via infraestrutura (ex: Kubernetes Secrets).
- A aplicação deve apenas consumir os valores, sem necessidade de conhecer detalhes do Vault.

---

#### Gerenciamento de Variáveis

- As variáveis de ambiente podem ser segmentadas (usuário, senha, db, etc.) ou agrupadas em uma única connection string.
- Recomenda-se centralizar todas as variáveis sensíveis no Vault para facilitar o gerenciamento e aumentar a segurança.

---

#### Considerações Finais

- A integração com o Vault permite que a aplicação leia secrets de forma dinâmica e segura.
- Próximos passos: organizar a estrutura de variáveis de ambiente e aprimorar a segurança da aplicação.
