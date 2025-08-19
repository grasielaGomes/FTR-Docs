### Tópicos Importantes

1. **Verificação da Distribuição no CloudFront**
   - Acesso à URL gerada pelo CloudFront para verificar se o conteúdo está sendo entregue corretamente.
   - Observação de que a versão anterior do conteúdo pode estar sendo exibida devido ao cache.

2. **Problema de Cache no CloudFront**
   - O conteúdo pode não ser atualizado imediatamente devido ao cache do CloudFront.
   - Necessidade de invalidar o cache para ver as atualizações.

3. **Sincronização de Arquivos**
   - Sincronização dos arquivos do diretório `dist` para dois buckets S3: um para o conteúdo estático e outro para o CDN.
   - Utilização do comando `aws s3 sync` para sincronizar os arquivos.

4. **Invalidando o Cache no CloudFront**
   - Processo de invalidação do cache no CloudFront para garantir que as atualizações sejam refletidas.
   - Opção de realizar a invalidação manualmente ou via pipeline.

### Passo a Passo

1. **Verificar a Distribuição no CloudFront**
   - Acesse a URL gerada pelo CloudFront.
   - Verifique se o conteúdo está sendo entregue corretamente.

2. **Sincronizar Arquivos com S3**
   - No terminal, execute o comando para sincronizar os arquivos do diretório `dist` com o bucket S3:
     ```bash
     aws s3 sync ./dist s3://nome-do-bucket --delete --exclude '.*git*'
     ```
   - Repita o comando para sincronizar com o bucket CDN:
     ```bash
     aws s3 sync ./dist s3://nome-do-bucket-cdn --delete --exclude '.*git*'
     ```

3. **Invalidar o Cache no CloudFront**
   - Acesse o console do CloudFront na AWS.
   - Selecione a distribuição que deseja invalidar.
   - Clique em "Invalidations" e depois em "Create Invalidation".
   - Insira `/*` para invalidar todo o cache e clique em "Invalidate".

4. **Verificar Atualizações**
   - Após a invalidação do cache, acesse novamente a URL gerada pelo CloudFront.
   - Verifique se o conteúdo atualizado está sendo entregue corretamente.

5. **Automatizar Invalidação de Cache na Pipeline**
   - Adicione um passo na pipeline para invalidar o cache do CloudFront após o deploy:
     ```yaml
     - name: Invalidate CloudFront Cache
       run: |
         aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
     ```

### Exemplo de Configuração de Pipeline (GitHub Actions)

```yaml
name: Deploy to s3

on:
  push:
    branches:
      - main

env:
  AWS_S3_BUCKET: rocketseat-upload-widget-web-static
  AWS_S3_BUCKET_CDN: rocketseat-upload-widget-web-cdn
  SOURCE_DIST: ./dist

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

      - name: Install dependencies
        id: install-dependencies
        run: |
          pnpm install

      - name: Build app
        id: build-app
        run: |
          pnpm run build

      - name: Configure AWS credentials
        id: configure-aws-credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ vars.AWS_REGION }}

      - name: Sync files to S3
        id: sync-files-to-s3
        run: |
          aws s3 sync ${{ env.SOURCE_DIST }} s3://${{ env.AWS_S3_BUCKET }}/ --delete --exclude '.*git*'

      - name: Sync files to S3 CDN
        id: sync-files-to-s3-cdn
        run: |
          aws s3 sync ${{ env.SOURCE_DIST }} s3://${{ env.AWS_S3_BUCKET_CDN }}/ --delete --exclude '.*git*'

      - name: Invalidate CloudFront Cache
        run: |
          aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```
