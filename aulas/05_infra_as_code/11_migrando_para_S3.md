### Migrando pro S3

1. **Objetivo da Aula**

   - Migrar o backend remoto do Pulumi Cloud para o Amazon S3.
   - Demonstrar como deletar e recriar recursos apontando para um backend diferente.

2. **Método de Migração**

   - Deletar os recursos existentes.
   - Recriar os recursos apontando para o backend S3.

3. **Processo de Destruição e Criação de Recursos**

   - Destruir os recursos existentes.
   - Remover a stack antiga.
   - Criar um bucket S3 para gerenciar o estado.
   - Configurar o Pulumi para usar o S3 como backend.
   - Recriar a stack e os recursos.

4. **Configuração da Pipeline**
   - Atualizar a pipeline para usar o novo backend S3.

### Passo-a-Passo

1. **Destruir os Recursos Existentes**

   - Execute o comando para destruir todos os recursos da stack atual:
     ```sh
     pulumi destroy
     ```
   - Confirme a destruição dos recursos.

2. **Remover a Stack Antiga**

   - Execute o comando para remover a stack antiga:
     ```sh
     pulumi stack rm <stack-name>
     ```

3. **Criar um Bucket S3 para Gerenciar o Estado**

   - No console da AWS, crie um novo bucket S3.
   - Configure o bucket com versionamento e bloqueio de acesso público.
   - Exemplo de nome do bucket: `rocketseat-pulumi-state`.

4. **Configurar o Pulumi para Usar o S3 como Backend**

   - Execute o comando para fazer login no Pulumi usando o backend S3:
     ```sh
     pulumi login s3://rocketseat-pulumi-state
     ```

5. **Criar a Nova Stack**

   - Execute o comando para criar uma nova stack:
     ```sh
     pulumi stack init <stack-name>
     ```

6. **Recriar os Recursos**

   - No arquivo de infraestrutura (por exemplo, `index.ts`), defina os recursos que você deseja criar.
   - Execute o comando para aplicar as mudanças e criar os recursos:
     ```sh
     pulumi up
     ```
   - Confirme a criação dos recursos.

7. **Atualizar a Pipeline**

   - No arquivo de configuração da pipeline (por exemplo, `pulumi-pipeline.yml`), adicione o parâmetro `cloud-url` para apontar para o novo backend S3:
     ```yaml
     - name: Run Pulumi
       uses: pulumi/actions@v6
       with:
         command: up
         stack-name: <stack-name>
         cloud-url: s3://rocketseat-pulumi-state
       env:
         AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
         AWS_REGION: ${{ secrets.AWS_REGION }}
         AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
         PULUMI_CONFIG_PASSPHRASE: ''
     ```

8. **Fazer o Commit e Abrir uma Pull Request**
   - No terminal, adicione as mudanças ao controle de versão:
     ```sh
     git add .
     ```
   - Faça um commit com uma mensagem descritiva:
     ```sh
     git commit -m "Migrate backend to S3"
     ```
   - Faça o push das mudanças para o repositório remoto:
     ```sh
     git push origin <branch-name>
     ```
   - No GitHub, abra uma pull request para revisar e aprovar as mudanças.

### Exemplo de Código para Configurar o Backend S3

Antes da migração:

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

Após a migração:

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

### Comandos Git

1. **Adicionar as Mudanças**

   ```sh
   git add .
   ```

2. **Fazer o Commit**

   ```sh
   git commit -m "Migrate backend to S3"
   ```

3. **Fazer o Push**
   ```sh
   git push origin <branch-name>
   ```
