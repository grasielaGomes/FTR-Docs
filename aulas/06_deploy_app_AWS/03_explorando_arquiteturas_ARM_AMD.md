### Destaques do Texto

1. **Objetivo da Aula**

   - Explorar como rodar uma aplicação containerizada no AWS App Runner.
   - Revisar a importância de utilizar containers para garantir isolamento e portabilidade.

2. **Configuração do App Runner**

   - Configurar o App Runner para implantar a aplicação.
   - Abordar a integração com o Amazon ECR.
   - Configurar variáveis de ambiente.

3. **Problemas e Soluções**

   - Problemas de arquitetura ao rodar containers em diferentes plataformas (ARM vs. AMD).
   - Solução para problemas de arquitetura ao especificar a plataforma correta durante o build do Docker.

4. **Logs e Monitoramento**

   - Acessar e interpretar os logs do App Runner.
   - Utilizar o CloudWatch para logs mais avançados.

5. **Customização de Domínios**
   - Utilizar domínios personalizados no App Runner.
   - Configurar CNAME para apontar para o domínio do App Runner.

### Passo-a-Passo

1. **Configurar o App Runner para Implantar a Aplicação**

   - Acesse o console da AWS e navegue até o App Runner.
   - Clique em "Create Service".
   - Selecione a origem do código (por exemplo, GitHub) ou um container registry (por exemplo, ECR).
   - Configure as opções de build e deploy.
   - Defina as variáveis de ambiente e outras configurações necessárias.
   - Revise e crie o serviço.

2. **Configurar o Health Check**

   - No arquivo de infraestrutura (por exemplo, `index.ts`), adicione uma rota de health check:

     ```typescript
     import * as aws from '@pulumi/aws'

     const bucket1 = new aws.s3.Bucket('my-bucket', {
       bucket: 'primeiro-teste-pos-rocketseat',
       tags: {
         IAC: 'True',
         Project: 'RocketseatIAC',
       },
     })

     const bucket2 = new aws.s3.Bucket('my-second-bucket', {
       bucket: 'segundo-teste-pos-rocketseat',
       tags: {
         IAC: 'True',
         Project: 'RocketseatIAC',
       },
     })

     export const bucket1Name = bucket1.bucket
     export const bucket1Arn = bucket1.arn
     export const bucket2Name = bucket2.bucket
     export const bucket2Arn = bucket2.arn
     ```

3. **Problemas de Arquitetura e Soluções**

   - Se estiver utilizando um Mac com arquitetura ARM, especifique a plataforma correta durante o build do Docker:
     ```sh
     docker build --platform linux/amd64 -t my-app:v5 .
     docker tag my-app:v5 <aws_account_id>.dkr.ecr.<region>.amazonaws.com/my-app:v5
     docker push <aws_account_id>.dkr.ecr.<region>.amazonaws.com/my-app:v5
     ```

4. **Acessar e Interpretar os Logs do App Runner**

   - Acesse os logs da aplicação no console do App Runner.
   - Utilize o CloudWatch para logs mais avançados e monitoramento.

5. **Customização de Domínios**

   - No console do App Runner, vá para a aba de Custom Domains.
   - Adicione um domínio personalizado e configure o CNAME para apontar para o domínio do App Runner.

6. **Atualizar a Pipeline**

   - No arquivo de configuração da pipeline (por exemplo, `pulumi-pipeline.yml`), adicione o parâmetro `cloud-url` para apontar para o novo backend S3:
     ```yaml
     - name: Run Pulumi
       uses: pulumi/actions@v6
       with:
         command: up
         stack-name: <stack-name>
         cloud-url: s3://rocketseat-pulumi-state
       env:
         PULUMI_ACCESS_TOKEN: ${{ secrets.PULUMI_ACCESS_TOKEN }}
     ```

7. **Fazer o Commit e Abrir uma Pull Request**
   - No terminal, adicione as mudanças ao controle de versão:
     ```sh
     git add .
     ```
   - Faça um commit com uma mensagem descritiva:
     ```sh
     git commit -m "Create a second S3 bucket"
     ```
   - Faça o push das mudanças para o repositório remoto:
     ```sh
     git push origin <branch-name>
     ```
   - No GitHub, abra uma pull request para revisar e aprovar a criação do novo recurso.

### Exemplo de Código para Criar um Novo Bucket S3

Antes da criação do novo bucket:

```typescript
import * as aws from '@pulumi/aws'

const bucket = new aws.s3.Bucket('my-bucket', {
  bucket: 'primeiro-teste-pos-rocketseat',
  tags: {
    IAC: 'True',
    Project: 'RocketseatIAC',
  },
})

export const bucketName = bucket.bucket
export const bucketArn = bucket.arn
```

Após a criação do novo bucket:

```typescript
import * as aws from '@pulumi/aws'

const bucket1 = new aws.s3.Bucket('my-bucket', {
  bucket: 'primeiro-teste-pos-rocketseat',
  tags: {
    IAC: 'True',
    Project: 'RocketseatIAC',
  },
})

const bucket2 = new aws.s3.Bucket('my-second-bucket', {
  bucket: 'segundo-teste-pos-rocketseat',
  tags: {
    IAC: 'True',
    Project: 'RocketseatIAC',
  },
})

export const bucket1Name = bucket1.bucket
export const bucket1Arn = bucket1.arn
export const bucket2Name = bucket2.bucket
export const bucket2Arn = bucket2.arn
```

### Comandos Git

1. **Adicionar as Mudanças**

   ```sh
   git add .
   ```

2. **Fazer o Commit**

   ```sh
   git commit -m "Create a second S3 bucket"
   ```

3. **Fazer o Push**
   ```sh
   git push origin <branch-name>
   ```
