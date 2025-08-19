### Tópicos Importantes

1. **Configuração de Variáveis de Ambiente na Vercel**

   - A Vercel espera algumas variáveis de ambiente (env vars) que não são passadas no contexto de cada step.
   - Necessidade de declarar variáveis como `VERCEL_ORG_ID` e `VERCEL_PROJECT_ID`.

2. **Configuração de Tokens e Secrets**

   - Utilização de tokens e secrets para autenticação e configuração.
   - Armazenamento seguro de `VERCEL_TOKEN`, `VERCEL_ORG_ID` e `VERCEL_PROJECT_ID` como secrets no GitHub.

3. **Geração de Tokens na Vercel**
   - Criação de tokens na Vercel para autenticação.
   - Acesso ao `Team ID` e `Project ID` nas configurações da Vercel.

### Passo a Passo

1. **Declarar Variáveis de Ambiente no Workflow**

   - Adicione as variáveis de ambiente no início do arquivo de workflow:
     ```yaml
     env:
       VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
       VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
     ```

2. **Configurar Tokens e Secrets no GitHub**

   - No repositório GitHub, vá para `Settings` > `Secrets and variables` > `Actions`.
   - Adicione os seguintes secrets:
     - `VERCEL_TOKEN`: Token gerado na Vercel.
     - `VERCEL_ORG_ID`: ID da organização na Vercel.
     - `VERCEL_PROJECT_ID`: ID do projeto na Vercel.

3. **Gerar Token na Vercel**

   - Acesse a conta Vercel e vá para `Account Settings`.
   - Em `Tokens`, crie um novo token e copie o valor.
   - Adicione o token como um secret no GitHub (`VERCEL_TOKEN`).

4. **Obter `Team ID` e `Project ID` na Vercel**

   - Acesse as configurações do time na Vercel e copie o `Team ID`.
   - Acesse as configurações do projeto na Vercel e copie o `Project ID`.
   - Adicione ambos como secrets no GitHub (`VERCEL_ORG_ID` e `VERCEL_PROJECT_ID`).

5. **Configurar Pipeline no GitHub Actions**

   - Crie um arquivo de workflow no repositório GitHub:

     ```yaml
     name: Deploy to Vercel

     on:
       push:
         branches:
           - main

     env:
       VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
       VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}

     jobs:
       deploy:
         runs-on: ubuntu-latest
         steps:
           - name: Checkout
             uses: actions/checkout@v4

           - name: Configure Node.js
             uses: actions/setup-node@v4
             with:
               node-version: 20

           - name: Install NPM
             run: |
               npm install

           - name: Install Vercel CLI
             run: |
               npm install -g vercel@latest

           - name: Pull Vercel Config
             run: |
               vercel pull --yes --environment=production --token ${{ secrets.VERCEL_TOKEN }}

           - name: Build Project
             run: |
               vercel build --prod --token ${{ secrets.VERCEL_TOKEN }}

           - name: Deploy Project
             run: |
               vercel deploy --prebuilt --prod --token ${{ secrets.VERCEL_TOKEN }}
     ```

6. **Executar Workflow**
   - Faça um commit na branch configurada (`main`).
   - O GitHub Actions executará o workflow, realizando o build e deploy na Vercel.
