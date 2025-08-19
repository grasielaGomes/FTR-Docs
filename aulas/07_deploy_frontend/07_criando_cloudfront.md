### Tópicos Importantes

1. **Introdução ao CloudFront**
   - CloudFront é uma CDN global que entrega conteúdo com baixa latência e alta velocidade.
   - Suporta integração com ALB, API Gateway, e Amazon S3.

2. **Configuração do CloudFront**
   - Criação de um bucket S3 para armazenar os objetos.
   - Configuração da origem no CloudFront para apontar para o bucket S3.
   - Controle de acesso utilizando Access Control Settings (OAC).

3. **Configurações Adicionais**
   - Compressão de objetos para melhorar a performance.
   - Uso exclusivo do protocolo HTTPS.
   - Definição de políticas de cache e classes de preço.
   - Configuração de CNAME e suporte para HTTP/2 e HTTP/3.
   - Definição do objeto raiz padrão (index.html).

4. **Permissões e Políticas**
   - Atualização da política do bucket S3 para permitir acesso pelo CloudFront.
   - Verificação e ajuste das permissões conforme necessário.

5. **Upload de Arquivos**
   - Upload dos arquivos necessários para o bucket S3.
   - Verificação do status de deploy do CloudFront.

### Passo a Passo

1. **Criar um Bucket S3**
   - Acesse o S3 no console da AWS.
   - Crie um novo bucket com as configurações desejadas (nome, região, permissões, etc.).

2. **Configurar CloudFront**
   - No console da AWS, procure por CloudFront e clique em "Create Distribution".
   - Selecione o bucket S3 criado como origem.
   - Configure as opções de compressão, protocolo HTTPS, e políticas de cache conforme necessário.
   - Defina o objeto raiz padrão como `index.html`.

3. **Configurar Controle de Acesso**
   - No CloudFront, crie um novo Access Control Settings (OAC).
   - Configure o OAC para utilizar requisições assinadas.
   - Atualize a política do bucket S3 para permitir acesso pelo CloudFront.

4. **Atualizar Política do Bucket S3**
   - Acesse o bucket S3 no console da AWS.
   - Vá para a aba "Permissions" e edite a "Bucket Policy".
   - Cole a política gerada pelo CloudFront para permitir acesso.

5. **Upload de Arquivos para o Bucket S3**
   - No console do S3, clique em "Upload" e adicione os arquivos necessários (index.html e outros).
   - Verifique se os arquivos foram carregados corretamente.

6. **Verificar Deploy do CloudFront**
   - No console do CloudFront, verifique o status do deploy.
   - Aguarde até que o deploy esteja completo.

7. **Testar a Distribuição**
   - Acesse a URL gerada pelo CloudFront para verificar se o conteúdo está sendo entregue corretamente.

### Exemplo de Comando para Sincronização com S3

```bash
aws s3 sync ./dist s3://nome-do-bucket --delete --exclude '.*git*'
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
```

