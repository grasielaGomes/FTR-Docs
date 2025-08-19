### Destruindo Recursos

1. **Objetivo da Aula**

   - Demonstrar como destruir recursos na nuvem usando o Pulumi.
   - Explicar diferentes abordagens para destruir recursos, como usar uma branch específica ou remover o código.

2. **Métodos para Destruir Recursos**

   - Usar uma branch específica para lidar com o destroy.
   - Criar uma action específica para o destroy.
   - Remover o código (mais utilizado).

3. **Processo de Destruição de Recursos**

   - Remover a estrutura de código e os outputs.
   - Fazer um commit com as mudanças.
   - Abrir uma pull request para revisar e aprovar a remoção dos recursos.

4. **Importância do Histórico de SCM**
   - Manter o histórico de commits e pull requests para rastrear mudanças.
   - Acompanhar a remoção de recursos através do histórico de SCM.

### Passo-a-Passo

1. **Remover a Estrutura de Código e Outputs**

   - No arquivo de infraestrutura (por exemplo, `index.ts`), remova o código que define os recursos que você deseja destruir.
   - Remova também os outputs relacionados a esses recursos.

2. **Fazer um Commit com as Mudanças**

   - No terminal, adicione as mudanças ao controle de versão:
     ```sh
     git add .
     ```
   - Faça um commit com uma mensagem descritiva:
     ```sh
     git commit -m "Remove S3 bucket"
     ```

3. **Abrir uma Pull Request**

   - Faça o push das mudanças para o repositório remoto:
     ```sh
     git push origin <branch-name>
     ```
   - No GitHub, abra uma pull request para revisar e aprovar a remoção dos recursos.

### Exemplo de Código para Remover um Bucket S3

Antes da remoção:

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

Após a remoção:

```typescript
// Código removido para destruir o bucket S3
```

### Comandos Git

1. **Adicionar as Mudanças**

   ```sh
   git add .
   ```

2. **Fazer o Commit**

   ```sh
   git commit -m "Remove S3 bucket"
   ```

3. **Fazer o Push**

   ```sh
   git push origin <branch-name>
   ```
