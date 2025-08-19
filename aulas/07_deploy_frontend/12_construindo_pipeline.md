### Tópicos Importantes

1. **Configuração Inicial do Projeto**

   - Conectar o projeto do GitHub.
   - Necessidade de configurar o projeto e o time no GitHub.

2. **Configuração da Pipeline**

   - Utilização de uma máquina Ubuntu.
   - Necessidade de fazer o checkout do código, configurar o Node.js e instalar o NPM.

3. **Instalação da CLI da Vercel**

   - Instalação da CLI da Vercel globalmente usando NPM.

4. **Configuração e Deploy na Vercel**

   - Fazer o pull das configurações do projeto na Vercel.
   - Realizar o build e deploy do projeto utilizando a CLI da Vercel.

5. **Configuração de Tokens e Secrets**
   - Utilização de tokens e secrets para autenticação e configuração.

### Passo a Passo

1. **Conectar Projeto do GitHub**

   - Acesse o GitHub e conecte o projeto desejado.
   - Certifique-se de que o projeto e o time estão configurados corretamente.

2. **Configurar Pipeline no GitHub Actions**

   - Crie um arquivo de workflow no repositório GitHub:

     ```yaml
     name: Deploy to Vercel

     on:
       push:
         branches:
           - main

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
     ```

3. **Instalar CLI da Vercel**

   - Adicione um passo na pipeline para instalar a CLI da Vercel:
     ```yaml
     - name: Install Vercel CLI
       run: |
         npm install -g vercel@latest
     ```

4. **Fazer Pull das Configurações do Projeto na Vercel**

   - Adicione um passo na pipeline para fazer o pull das configurações do projeto na Vercel:
     ```yaml
     - name: Pull Vercel Config
       run: |
         vercel pull --yes --environment=production --token ${{ secrets.VERCEL_TOKEN }}
     ```

5. **Realizar Build do Projeto**

   - Adicione um passo na pipeline para realizar o build do projeto:
     ```yaml
     - name: Build Project
       run: |
         vercel build --prod --token ${{ secrets.VERCEL_TOKEN }}
     ```

6. **Realizar Deploy do Projeto**

   - Adicione um passo na pipeline para realizar o deploy do projeto:
     ```yaml
     - name: Deploy Project
       run: |
         vercel deploy --prebuilt --prod --token ${{ secrets.VERCEL_TOKEN }}
     ```

7. **Configurar Tokens e Secrets no GitHub**

   - No repositório GitHub, vá para `Settings` > `Secrets and variables` > `Actions`.
   - Adicione um novo secret com o nome `VERCEL_TOKEN` e o valor do token da Vercel.

8. **Executar Workflow**
   - Faça um commit na branch configurada (`main`).
   - O GitHub Actions executará o workflow, realizando o build e deploy na Vercel.
