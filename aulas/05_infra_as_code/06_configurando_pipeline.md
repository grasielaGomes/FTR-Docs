### Configurando Pipeline

Nesta aula, mergulhamos na criação de um pipeline de infraestrutura usando GitHub Actions. Começamos configurando um repositório Git para o projeto "Rocketseat" e revisamos conceitos de CI/CD. Em seguida, montamos um workflow que inclui a instalação do Node.js e do gerenciador de pacotes pnpm, além de configurar as credenciais da AWS.

1. **Nome do Workflow**

   - O workflow é nomeado como "Pulumi - CI".

2. **Eventos que Disparam o Workflow**

   - O workflow é acionado em push para a branch `main`.

3. **Configuração do Job**

   - O job é chamado `update` e é executado em um runner `ubuntu-latest`.

4. **Passos do Job**
   - **Checkout do Código**: Utiliza a ação `actions/checkout@v4`.
   - **Instalação do Node.js**: Utiliza a ação `actions/setup-node@v4` com a versão especificada no `package.json`.
   - **Instalação do PNPM**: Utiliza a ação `pnpm/action-setup@v4` para instalar a versão 8 do PNPM.
   - **Instalação das Dependências**: Executa o comando `pnpm install` para instalar as dependências do projeto.
   - **Configuração das Credenciais AWS**: Utiliza a ação `aws-actions/configure-aws-credentials@v4` para configurar as credenciais da AWS a partir dos segredos armazenados no GitHub.

### Passo-a-Passo

1. **Criar o Arquivo de Workflow**

   - Crie a pasta `.github/workflows` no diretório raiz do seu projeto.
   - Dentro dessa pasta, crie um arquivo chamado `pulumi-ci.yml`.

2. **Definir o Nome do Workflow**

   - Nomeie o workflow como "Pulumi - CI":
     ```yaml
     name: Pulumi - CI
     ```

3. **Configurar os Eventos que Disparam o Workflow**

   - Configure o workflow para ser acionado em push para a branch `main`:
     ```yaml
     on:
       push:
         branches:
           - 'main'
     ```

4. **Configurar o Job**

   - Defina o job `update` que será executado em um runner `ubuntu-latest`:
     ```yaml
     jobs:
       update:
         runs-on: ubuntu-latest
     ```

5. **Adicionar os Passos do Job**

   - Adicione os seguintes passos ao job `update`:

     - **Checkout do Código**:

       ```yaml
       steps:
         - name: Checkout
           id: checkout
           uses: actions/checkout@v4
       ```

     - **Instalação do Node.js**:

       ```yaml
       - name: Install Node
         id: install-node
         uses: actions/setup-node@v4
         with:
           node-version-file: package.json
       ```

     - **Instalação do PNPM**:

       ```yaml
       - name: Install pnpm
         id: install-pnpm
         uses: pnpm/action-setup@v4
         with:
           version: 8
       ```

     - **Instalação das Dependências**:

       ```yaml
       - name: Install dependencies
         id: install-dependencies
         run: |
           pnpm install
       ```

     - **Configuração das Credenciais AWS**:
       ```yaml
       - name: Configure AWS Credentials
         id: configure-aws-credentials
         uses: aws-actions/configure-aws-credentials@v4
         with:
           aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
           aws-region: ${{ secrets.AWS_REGION }}
           aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
       ```

### Código Completo do Workflow

```yaml
name: Pulumi - CI

on:
  push:
    branches:
      - 'main'

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        id: checkout
        uses: actions/checkout@v4

      - name: Install Node
        id: install-node
        uses: actions/setup-node@v4
        with:
          node-version-file: package.json

      - name: Install pnpm
        id: install-pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 8

      - name: Install dependencies
        id: install-dependencies
        run: |
          pnpm install

      - name: Configure AWS Credentials
        id: configure-aws-credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-region: ${{ secrets.AWS_REGION }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```
