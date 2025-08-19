### Destaques - Sincronização de Arquivos com AWS S3 via Pipeline

1. **Introdução à Sincronização via AWS S3 Sync**

   - Utilização do comando `aws s3 sync` para sincronizar o conteúdo gerado no build (pasta `dist`) com um bucket S3.
   - A sincronização envolve definir a origem (source) e o destino (target) na linha de comando.

2. **Opções e Parâmetros do Comando**

   - **Origem e Destino:**
     - A origem é a pasta local `dist`; o destino é o bucket S3 (exemplo: `s3://nome-do-bucket`).
   - **Opção `--delete`:**
     - Permite a remoção de arquivos do bucket que não existem mais na pasta `dist`, garantindo que o bucket espelhe exatamente o diretório local.
   - **Opção `--exclude`:**
     - Pode ser utilizada para preservar especificados arquivos ou diretórios, excluindo-os da remoção durante a sincronização.

3. **Integração com Pipeline e Variáveis Ambientais**

   - A sincronização é integrada em uma pipeline via GitHub Actions, utilizando o AWS CLI já instalado no ambiente.
   - Uso de variáveis ambientais para tornar o comando mais escalável e organizado, por exemplo:
     - Variável para o caminho de origem, como `env.source.dist`.
     - Variável para o nome do bucket, como `env.WSS3Bucket`.

4. **Execução e Verificação do Processo**

   - Comandos são executados tanto localmente quanto na pipeline para sincronizar os arquivos.
   - Após a execução, a ferramenta de log confirma que:
     - Os arquivos foram deletados (caso não existam mais localmente) e os novos arquivos foram enviados para o bucket.
     - A sincronização atualiza e mantém a consistência dos arquivos, demonstrado pelo upload e deleção de forma organizada.

5. **Contexto e Próximos Passos**
   - Este processo é parte do fluxo de deploy, garantindo que a versão de produção do site esteja atualizada com os arquivos do build.
   - Na sequência, haverá a integração do CloudFront, estendendo a pipeline para a entrega do conteúdo via CDN.

```yml
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
