### Criando Recurso com o Novo State

1. **Objetivo da Aula**

   - Demonstrar como criar um novo recurso utilizando o novo backend S3.
   - Verificar o comportamento da pipeline ao criar um novo recurso.

2. **Processo de Criação de Recurso**

   - Duplicar o código existente para criar um novo bucket S3.
   - Criar uma pull request para revisar e aprovar a criação do novo recurso.
   - Verificar a execução da pipeline e a criação do recurso.

3. **Importância do Estado**
   - O estado é atualizado com a criação de novos recursos.
   - Perder o estado pode causar problemas na gestão dos recursos.

### Passo-a-Passo

1. **Duplicar o Código para Criar um Novo Bucket S3**

   - No arquivo de infraestrutura (por exemplo, `index.ts`), duplique o código existente para criar um novo bucket S3:

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

2. **Fazer um Commit com as Mudanças**

   - No terminal, adicione as mudanças ao controle de versão:
     ```sh
     git add .
     ```
   - Faça um commit com uma mensagem descritiva:
     ```sh
     git commit -m "Create a second S3 bucket"
     ```

3. **Criar uma Pull Request**

   - Faça o push das mudanças para o repositório remoto:
     ```sh
     git push origin <branch-name>
     ```
   - No GitHub, abra uma pull request para revisar e aprovar a criação do novo recurso.

4. **Verificar a Execução da Pipeline**

   - Acompanhe a execução da pipeline no GitHub Actions.
   - Verifique se a pipeline identifica a necessidade de criar o novo recurso e executa o comando `pulumi up`.

5. **Confirmar a Criação do Recurso**

   - Após a aprovação da pull request e a execução da pipeline, verifique se o novo bucket S3 foi criado com sucesso.
   - Acesse o console da AWS para confirmar a criação do novo bucket.

6. **Verificar a Atualização do Estado**
   - Acesse o Pulumi Cloud ou o backend S3 para verificar se o estado foi atualizado com a criação do novo recurso.
   - Certifique-se de que o estado reflete corretamente os recursos gerenciados.

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
