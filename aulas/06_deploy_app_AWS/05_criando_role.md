### Destaques do Texto

1. **Objetivo da Aula**

   - Configurar uma role específica para o App Runner a nível de pipeline.

2. **Criação da Role no IAM**

   - Criar uma nova role no IAM para o App Runner.
   - Configurar a política de confiança (trust policy) para permitir que o App Runner assuma a role.

3. **Configuração da Política de Permissão**

   - Adicionar permissões necessárias para o App Runner na role criada.

4. **Utilização da Role na Pipeline**
   - Configurar a pipeline para utilizar a role criada.

### Passo-a-Passo

1. **Acessar o IAM no Console da AWS**

   - Acesse o console da AWS e navegue até o IAM.

2. **Criar uma Nova Role**

   - Clique em "Roles" e depois em "Create role".
   - Selecione "Custom trust policy" e insira a seguinte política de confiança:
     ```json
     {
       "Version": "2012-10-17",
       "Statement": [
         {
           "Effect": "Allow",
           "Principal": {
             "Service": "build.apprunner.amazonaws.com"
           },
           "Action": "sts:AssumeRole"
         }
       ]
     }
     ```
   - Clique em "Next" para continuar.

3. **Adicionar Permissões à Role**

   - Na tela de permissões, procure por "AWSAppRunnerServicePolicyForECRAccess" e selecione-a.
   - Clique em "Next" para continuar.

4. **Nomear e Criar a Role**

   - Dê um nome à role, por exemplo, "AppRunnerServiceRole".
   - Adicione tags se necessário.
   - Clique em "Create role" para finalizar a criação.

5. **Obter o ARN da Role**

   - Após criar a role, copie o ARN da role para utilizá-lo na configuração da pipeline.

6. **Configurar a Pipeline para Utilizar a Role**

   - No arquivo de configuração da pipeline (por exemplo, `main.yaml`), adicione o step para o deploy no App Runner utilizando a role criada:

     ```yaml
     - name: Deploy to App Runner
        id: deploy-to-app-Runner
        uses: awslabs/amazon-app-runner-deploy@main
        with:
          service: ${{ vars.APP_RUNNER_SERVICE_NAME }}
          image: ${{steps.login-ecr.outputs.registry}}/${{ vars.ECR_REPOSITORY }}:${{ steps.generate-tag.outputs.sha }}
          region: ${{ vars.AWS_REGION }}
          access-role-arn: ${{ secrets.AWS_ACCESS_ROLE_ARN }}
          cpu: 1
          memory: 2
          port: 3333
          wait-for-service-stability-seconds: 180

      - name: App Runner Check
        run: echo "App running... ${{ steps.deploy-app-runner.outputs.service-url }}"
     ```

7. **Adicionar o ARN da Role como Secret no GitHub**

   - No repositório do GitHub, vá para `Settings` > `Secrets and variables` > `Actions`.
   - Adicione uma nova secret com o nome `AWS_ACCESS_ROLE_ARN` e o valor do ARN da role criada.

8. **Fazer o Commit e Abrir uma Pull Request**
   - No terminal, adicione as mudanças ao controle de versão:
     ```sh
     git add .
     ```
   - Faça um commit com uma mensagem descritiva:
     ```sh
     git commit -m "Configure App Runner role and automate deploy"
     ```
   - Faça o push das mudanças para o repositório remoto:
     ```sh
     git push origin <branch-name>
     ```
   - No GitHub, abra uma pull request para revisar e aprovar as mudanças.

Veja uma role na pasta exemplos.
