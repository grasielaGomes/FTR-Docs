### Conhecendo as Ferramentas

1. **Objetivo do Módulo**

   - Focar em Deploy de aplicações.
   - Aprender a disponibilizar a aplicação em um ambiente acessível.

2. **Serviços da AWS Abordados**

   - **AppRunner**: Serviço simples da AWS para rodar containers.
   - **ECS (Elastic Container Service)**: Serviço mais complexo que envolve conceitos como VPC e load balancer.

3. **Metodologia**

   - Criar o serviço manualmente.
   - Automatizar o processo via pipeline.
   - Entender cada recurso antes de automatizar.

4. **Expectativa**
   - Jornada de aprendizado sobre deploy de aplicações na AWS.

### Passo-a-Passo

1. **Introdução ao AppRunner**

   - AppRunner é um serviço da AWS que facilita a execução de containers.
   - Ideal para quem deseja uma solução simples e rápida para deploy de aplicações containerizadas.

2. **Criar o Serviço Manualmente no AppRunner**

   - Acesse o console da AWS e navegue até o AppRunner.
   - Clique em "Create Service".
   - Selecione a origem do código (por exemplo, GitHub) ou um container registry (por exemplo, ECR).
   - Configure as opções de build e deploy.
   - Defina as variáveis de ambiente e outras configurações necessárias.
   - Revise e crie o serviço.

3. **Automatizar o Processo via Pipeline**

   - Configure um pipeline de CI/CD para automatizar o deploy no AppRunner.
   - Utilize serviços como AWS CodePipeline, GitHub Actions, ou outros para integrar o processo de build e deploy.
   - Defina os estágios do pipeline: build, test, deploy.
   - Configure as permissões necessárias para que o pipeline possa interagir com o AppRunner.

4. **Introdução ao ECS (Elastic Container Service)**

   - ECS é um serviço da AWS para orquestração de containers.
   - Envolve conceitos como VPC (Virtual Private Cloud) e load balancer.

5. **Criar o Serviço Manualmente no ECS**

   - Acesse o console da AWS e navegue até o ECS.
   - Crie um cluster ECS.
   - Defina uma task definition com as configurações do container.
   - Configure o serviço ECS para rodar a task definition.
   - Configure o load balancer e a VPC para o serviço.

6. **Automatizar o Processo via Pipeline**

   - Configure um pipeline de CI/CD para automatizar o deploy no ECS.
   - Utilize serviços como AWS CodePipeline, GitHub Actions, ou outros para integrar o processo de build e deploy.
   - Defina os estágios do pipeline: build, test, deploy.
   - Configure as permissões necessárias para que o pipeline possa interagir com o ECS.

7. **Entender Cada Recurso Antes de Automatizar**
   - Antes de automatizar, é importante entender como cada recurso funciona.
   - Realize deploys manuais para ganhar familiaridade com os serviços.
   - Documente o processo e as configurações utilizadas.

### Exemplo de Código para Configurar um Pipeline de Deploy no AppRunner

```yaml
name: Deploy to AppRunner

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v1

      - name: Log in to Amazon ECR
        uses: aws-actions/amazon-ecr-login@v1

      - name: Build, tag, and push image to Amazon ECR
        run: |
          docker build -t my-app .
          docker tag my-app:latest <aws_account_id>.dkr.ecr.<region>.amazonaws.com/my-app:latest
          docker push <aws_account_id>.dkr.ecr.<region>.amazonaws.com/my-app:latest

      - name: Deploy to AppRunner
        run: |
          aws apprunner create-service --service-name my-app --source-configuration ImageRepositoryType="ECR",ImageIdentifier="<aws_account_id>.dkr.ecr.<region>.amazonaws.com/my-app:latest"
```
