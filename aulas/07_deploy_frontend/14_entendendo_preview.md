### Tópicos Importantes

1. **Conceito de Preview na Vercel**

   - Permite testar o front-end em qualquer branch que não seja a main.
   - Criação de uma estrutura de preview para testes.

2. **Configuração do Arquivo de Workflow para Preview**

   - Criação de um novo arquivo de workflow para o ambiente de preview.
   - Ajustes nas configurações para diferenciar do ambiente de produção.

3. **Execução do Workflow de Preview**
   - Testes e deploy automáticos em branches específicas.
   - Verificação do comportamento do preview em comparação com a produção.

### Passo a Passo

1. **Criar Arquivo de Workflow para Preview**

   - Crie um novo arquivo de workflow no repositório GitHub, por exemplo, `preview.yaml`:

     ```yaml
     name: Preview deploy to Vercel

     on:
       push:
         branches-ignore:
           - main

     env:
       VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
       VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}

     jobs:
       deploy:
         runs-on: ubuntu-latest
         steps:
           - name: Checkout
             id: checkout
             uses: actions/checkout@v4

           - name: Configure node
             id: configure-node
             uses: actions/setup-node@v4
             with:
               node-version: 20

           - name: Install pnpm
             id: install-pnpm
             uses: pnpm/action-setup@v4
             with:
               version: 9

           - name: Install vercel
             id: install-vercel
             run: |
               npm install --global vercel@latest

           - name: Pull vercel config
             id: pull-vercel-config
             run: |
               vercel pull --yes --environment=preview --token=${{ secrets.VERCEL_TOKEN }}

           - name: Build app
             id: build-app
             run: |
               vercel build --token=${{ secrets.VERCEL_TOKEN }}

           - name: Deploy app
             id: deploy-app
             run: |
               vercel deploy --prebuilt --token=${{ secrets.VERCEL_TOKEN }}
     ```

2. **Configurar Tokens e Secrets no GitHub**

   - No repositório GitHub, vá para `Settings` > `Secrets and variables` > `Actions`.
   - Adicione os seguintes secrets:
     - `VERCEL_TOKEN`: Token gerado na Vercel.
     - `VERCEL_ORG_ID`: ID da organização na Vercel.
     - `VERCEL_PROJECT_ID`: ID do projeto na Vercel.

3. **Criar e Testar Branch de Preview**

   - Crie uma nova branch para testes de preview, por exemplo, `test/preview`:
     ```bash
     git checkout -b test/preview
     git push origin test/preview
     ```

4. **Fazer Commit e Push na Branch de Preview**

   - Faça alterações no código e commit na branch de preview:
     ```bash
     git add .
     git commit -m "Test preview"
     git push origin test/preview
     ```

5. **Verificar Execução do Workflow de Preview**

   - Acesse o GitHub Actions e verifique a execução do workflow de preview.
   - Confirme que o deploy foi realizado corretamente na Vercel.

6. **Acessar URL de Preview na Vercel**

   - Acesse a URL gerada pela Vercel para o ambiente de preview.
   - Verifique se as alterações estão refletidas corretamente no preview.

7. **Merge para Produção (Opcional)**
   - Se as alterações no preview estiverem corretas, abra um pull request para a branch `main`.
   - Após a aprovação, faça o merge para a branch `main` para realizar o deploy em produção.
