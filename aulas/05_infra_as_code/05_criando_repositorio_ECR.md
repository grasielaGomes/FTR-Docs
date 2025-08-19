### Criando Repositório ECR

1. **Objetivo da Aula**

   - Explorar como criar novos recursos na nuvem usando o Pulumi.
   - Foco na criação de um bucket S3 e um repositório ECR.

2. **Importância das Dependências**

   - Destacar a importância das dependências, como a Amazon Machine Image (AMI) para EC2.

3. **Estrutura de Opções na Documentação**

   - Discussão sobre a estrutura de opções na documentação do Pulumi.

4. **Gerenciamento de Recursos**
   - Incluir a remoção de recursos com o comando `pulumi destroy`.

### Passo-a-Passo

1. **Instalação do Pulumi**

   - Instale o Pulumi seguindo as instruções da [documentação oficial](https://www.pulumi.com/docs/get-started/install/).
   - Exemplo de instalação no macOS usando Homebrew:
     ```sh
     brew install pulumi
     ```

2. **Criação de um Projeto Pulumi**

   - Crie um novo projeto Pulumi utilizando o template `aws-typescript`:
     ```sh
     pulumi new aws-typescript
     ```
   - Siga as instruções interativas para configurar o projeto:
     - Nome do projeto: `RocketseatIAC`
     - Descrição: `Projeto IAC - Pós-graduação Full Stack Developer 360`
     - Stack name: `staging`
     - Gerenciador de pacotes: `PNPM`
     - Região da AWS: `us-east-2`

3. **Configuração das Credenciais da AWS**

   - Configure suas credenciais da AWS para que o Pulumi possa se conectar à sua conta AWS.
   - As credenciais podem ser configuradas usando variáveis de ambiente:
     ```sh
     export AWS_ACCESS_KEY_ID=your_access_key_id
     export AWS_SECRET_ACCESS_KEY=your_secret_access_key
     ```

4. **Criação de Recursos no `index.ts`**

   - Edite o arquivo `index.ts` para criar um bucket S3 e um repositório ECR:

     ```typescript
     import * as aws from '@pulumi/aws'

     const bucket = new aws.s3.BucketV2('primeiro-bucket', {
       bucket: 'primeiro-bucket-pos-full-stack-360',
       tags: {
         IAC: 'true',
       },
     })

     const ecr = new aws.ecr.Repository('primeiro-ecr', {
       name: 'primeiro-ecr',
       imageTagMutability: 'IMMUTABLE',
       tags: {
         IAC: 'true',
       },
     })

     export const bucketName = bucket.id
     export const bucketRegion = bucket.region
     export const bucketArn = bucket.arn

     export const ecrName = ecr.name
     export const ecrRepositoryUrl = ecr.repositoryUrl
     ```

5. **Aplicação das Mudanças**

   - Aplique as mudanças para criar os recursos na AWS:
     ```sh
     pulumi up
     ```
   - Revise as mudanças propostas e confirme para aplicar.

6. **Remoção dos Recursos**

   - Para destruir os recursos criados:
     ```sh
     pulumi destroy
     ```

7. **Revisar e Aprovar Mudanças**

   - Utilize o controle de versão para gerenciar o código de infraestrutura.
   - Abra pull requests para revisar e aprovar mudanças antes de aplicá-las.

8. **Monitorar e Gerenciar Recursos**
   - Utilize a interface gráfica da AWS para monitorar os recursos criados.
   - Garanta que todas as operações de criação e gerenciamento sejam feitas através do código Pulumi.
