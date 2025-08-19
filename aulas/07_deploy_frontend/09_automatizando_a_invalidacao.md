### Tópicos Importantes

1. **Automatização da Invalidação de Cache no CloudFront**
   - Utilização da AWS CLI para criar invalidações no CloudFront.
   - Necessidade de passar o ID da distribuição e os paths a serem invalidados.

2. **Configuração de Secrets**
   - Armazenamento seguro do ID da distribuição como um secret no repositório.

3. **Execução do Comando de Invalidação**
   - Comando `aws cloudfront create-invalidation` para criar a invalidação.
   - Passagem do ID da distribuição e paths a serem invalidados.

4. **Verificação da Invalidação**
   - Acompanhamento do processo de invalidação no console do CloudFront.
   - Verificação se a invalidação foi bem-sucedida e se o conteúdo atualizado está sendo entregue.

### Passo a Passo

1. **Adicionar Passo de Invalidação na Pipeline**
   - Adicione um passo na pipeline para invalidar o cache do CloudFront após o deploy:
     ```yaml
     - name: Invalidate CloudFront Cache
       run: |
         aws cloudfront create-invalidation --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} --paths "/*"
     ```

2. **Configurar Secrets no Repositório**
   - No repositório do GitHub, vá para `Settings` > `Secrets and variables` > `Actions`.
   - Adicione um novo secret com o nome `CLOUDFRONT_DISTRIBUTION_ID` e o valor do ID da distribuição do CloudFront.

3. **Executar o Comando de Invalidação**
   - No terminal, execute o comando para criar a invalidação no CloudFront:
     ```bash
     aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
     ```

4. **Verificar a Invalidação no Console do CloudFront**
   - Acesse o console do CloudFront na AWS.
   - Selecione a distribuição que deseja invalidar.
   - Clique em "Invalidations" e verifique se a invalidação foi criada e está em progresso.

5. **Verificar Atualizações**
   - Após a invalidação do cache, acesse novamente a URL gerada pelo CloudFront.
   - Verifique se o conteúdo atualizado está sendo entregue corretamente.

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
          aws cloudfront create-invalidation --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} --paths "/*"
```

