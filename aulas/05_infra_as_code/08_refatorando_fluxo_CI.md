### Refatorando o Fluxo de CI

1. **Objetivo da Aula**

   - Configurar um pipeline para gerenciar recursos na nuvem usando o Pulumi.
   - Executar um preview a cada pull request para a branch principal.
   - Visualizar as mudanças antes de aplicá-las.
   - Criar buckets S3 e integrar o Pulumi com o GitHub para comentários automáticos nas pull requests.
   - Remover recursos e controlar o estado do Pulumi.

2. **Nome do Workflow**

   - O workflow é nomeado como "Pulumi - Check".

3. **Eventos que Disparam o Workflow**

   - O workflow é acionado em pull requests para a branch `main`.

4. **Configuração do Job**

   - O job é chamado `preview` e é executado em um runner `ubuntu-latest`.

5. **Passos do Job**
   - **Checkout do Código**: Utiliza a ação `actions/checkout@v4`.
   - **Instalação do Node.js**: Utiliza a ação `actions/setup-node@v4` com a versão especificada no `package.json`.
   - **Instalação do PNPM**: Utiliza a ação `pnpm/action-setup@v4` para instalar a versão 8 do PNPM.
   - **Instalação das Dependências**: Executa o comando `pnpm install` para instalar as dependências do projeto.
   - **Configuração das Credenciais AWS**: Utiliza a ação `aws-actions/configure-aws-credentials@v4` para configurar as credenciais da AWS a partir dos segredos armazenados no GitHub.
   - **Executar Pulumi**: Utiliza a ação `pulumi/actions@v6` para executar o comando `preview`.

### Passo-a-Passo

1. **Configuração do Projeto Pulumi**

   - Certifique-se de que o projeto Pulumi está configurado corretamente.

2. **Gerar o Token de Acesso do Pulumi**

   - Acesse o [site do Pulumi](https://app.pulumi.com/).
   - Gere um novo token de acesso.

3. **Configurar o Token como uma Secret no GitHub**

   - No repositório do GitHub, vá para `Settings` > `Secrets and variables` > `Actions`.
   - Adicione uma nova secret com o nome `PULUMI_ACCESS_TOKEN` e o valor do token gerado.

4. **Criar o Arquivo de Workflow**

   - Crie a pasta `.github/workflows` no diretório raiz do seu projeto.
   - Dentro dessa pasta, crie um arquivo chamado `pulumi-check.yml`.

5. **Definir o Nome do Workflow**

   - Nomeie o workflow como "Pulumi - Check":
     ```yaml
     name: Pulumi - Check
     ```

6. **Configurar os Eventos que Disparam o Workflow**

   - Configure o workflow para ser acionado em pull requests para a branch `main`:
     ```yaml
     on:
       pull_request:
         branches:
           - 'main'
     ```

7. **Configurar o Job**

   - Defina o job `preview` que será executado em um runner `ubuntu-latest`:
     ```yaml
     jobs:
       preview:
         runs-on: ubuntu-latest
     ```

8. **Adicionar os Passos do Job**

   - Adicione os seguintes passos ao job `preview`:

     - **Checkout do Código**:

       ```yaml
       steps:
         - name: Checkout
           uses: actions/checkout@v4
       ```

     - **Instalação do Node.js**:

       ```yaml
       - name: Install Node
         uses: actions/setup-node@v4
         with:
           node-version-file: package.json
       ```

     - **Instalação do PNPM**:

       ```yaml
       - name: Install pnpm
         uses: pnpm/action-setup@v4
         with:
           version: 8
       ```

     - **Instalação das Dependências**:

       ```yaml
       - name: Install dependencies
         run: |
           pnpm install
       ```

     - **Configuração das Credenciais AWS**:

       ```yaml
       - name: Configure AWS Credentials
         uses: aws-actions/configure-aws-credentials@v4
         with:
           aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
           aws-region: ${{ secrets.AWS_REGION }}
           aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
       ```

     - **Executar Pulumi**:
       ```yaml
       - name: Run Pulumi
         uses: pulumi/actions@v6
         with:
           command: preview
           stack-name: eusouodaniel/stg
         env:
           PULUMI_ACCESS_TOKEN: ${{ secrets.PULUMI_ACCESS_TOKEN }}
       ```

9. **(Opcional) Habilitar Comentários do Pulumi no Pull Request**
   - Para habilitar comentários automáticos do Pulumi no corpo do pull request, adicione o seguinte passo ao job `preview`:
     ```yaml
     - name: Post Pulumi Comment
       uses: pulumi/actions@v6
       with:
         command: preview
         stack-name: eusouodaniel/stg
         comment-on-pr: true
         github-token: ${{ secrets.GITHUB_TOKEN }}
       env:
         PULUMI_ACCESS_TOKEN: ${{ secrets.PULUMI_ACCESS_TOKEN }}
     ```

### Código Completo do Workflow

```yaml
name: Pulumi - Check

on:
  pull_request:
    branches:
      - 'main'

jobs:
  preview:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Install Node
        uses: actions/setup-node@v4
        with:
          node-version-file: package.json

      - name: Install pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 8

      - name: Install dependencies
        run: |
          pnpm install

      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-region: ${{ secrets.AWS_REGION }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}

      - name: Run Pulumi
        uses: pulumi/actions@v6
        with:
          command: preview
          stack-name: eusouodaniel/stg
        env:
          PULUMI_ACCESS_TOKEN: ${{ secrets.PULUMI_ACCESS_TOKEN }}

      - name: Post Pulumi Comment
        uses: pulumi/actions@v6
        with:
          command: preview
          stack-name: eusouodaniel/stg
          comment-on-pr: true
          github-token: ${{ secrets.GITHUB_TOKEN }}
        env:
          PULUMI_ACCESS_TOKEN: ${{ secrets.PULUMI_ACCESS_TOKEN }}
```
