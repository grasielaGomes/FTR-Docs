### Rodando o Pulumi na Pipeline

1. **Objetivo da Aula**

   - Integrar o Pulumi na Pipeline.
   - Garantir que o Pulumi funcione corretamente na Pipeline.

2. **Opções de Instalação do Pulumi**

   - Instalar o Pulumi diretamente.
   - Usar uma action do GitHub.

3. **Erro Encontrado**

   - Erro devido à falta do token de acesso.

4. **Solução do Erro**

   - Gerar o token de acesso.
   - Configurar o token como uma secret no GitHub.

5. **Importância da Estrutura de Pipeline**
   - Permitir visualizar previews antes da aprovação das mudanças.

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
   - Dentro dessa pasta, crie um arquivo chamado `pulumi-pipeline.yml`.

5. **Definir o Nome do Workflow**

   - Nomeie o workflow como "Pulumi - Pipeline":
     ```yaml
     name: Pulumi - Pipeline
     ```

6. **Configurar os Eventos que Disparam o Workflow**

   - Configure o workflow para ser acionado em push para a branch `main`:
     ```yaml
     on:
       push:
         branches:
           - 'main'
     ```

7. **Configurar o Job**

   - Defina o job `update` que será executado em um runner `ubuntu-latest`:
     ```yaml
     jobs:
       update:
         runs-on: ubuntu-latest
     ```

8. **Adicionar os Passos do Job**

   - Adicione os seguintes passos ao job `update`:

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
           command: up
           stack-name: eusouodaniel/stg
         env:
           PULUMI_ACCESS_TOKEN: ${{ secrets.PULUMI_ACCESS_TOKEN }}
       ```

### Código Completo do Workflow

```yaml
name: Pulumi - Pipeline

on:
  push:
    branches:
      - 'main'

jobs:
  update:
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
          command: up
          stack-name: eusouodaniel/stg
        env:
          PULUMI_ACCESS_TOKEN: ${{ secrets.PULUMI_ACCESS_TOKEN }}
```
