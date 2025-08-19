### Destaques do Texto

1. **Objetivo da Aula**

   - Fazer alterações no health check do App Runner.
   - Automatizar o deploy utilizando uma pipeline.

2. **Configuração do Health Check**

   - Editar a configuração do health check no App Runner.
   - Definir a rota de health check como `/health`.
   - Configurar o intervalo de check e os thresholds.

3. **Automatização do Deploy**

   - Utilizar uma pipeline para automatizar o deploy no App Runner.
   - Adicionar um step na pipeline para o deploy automatizado.

4. **Problemas e Soluções**
   - Problemas com credenciais da AWS.
   - Necessidade de criar uma role de acesso (ARN) para o App Runner.

### Passo-a-Passo

1. **Configurar o Health Check no App Runner**

   - Acesse o console da AWS e navegue até o App Runner.
   - Clique em "Configuration" e edite a configuração do health check.
   - Defina o health check como HTTP e a rota como `/health`.
   - Configure o intervalo de check para 15 segundos.
   - Defina os thresholds: unhealth threshold (5 chamadas consecutivas com erro) e health threshold (pelo menos 1 chamada com sucesso).

2. **Adicionar o Step de Deploy na Pipeline**

   - No arquivo de configuração da pipeline (por exemplo, `main.yaml`), adicione um step para o deploy no App Runner:
     ```yaml
     - name: Deploy to App Runner
        id: deploy-to-app-Runner
        uses: awslabs/amazon-app-runner-deploy@main
        with:
          service: widget-server
          image: ${{steps.login-ecr.outputs.registry}}/${{ vars.ECR_REPOSITORY }}:${{ steps.generate-tag.outputs.sha }}
          region: ${{ vars.AWS_REGION }}
          access-role-arn: ''
          cpu: 1
          memory: 2
          port: 3333
     ```

3. **Configurar a Role de Acesso (ARN)**

   - Crie uma role de acesso no IAM com permissões para o App Runner.
   - No arquivo de configuração da pipeline, adicione o parâmetro `access-role-arn` com o ARN da role criada:
     ```yaml
     - name: Deploy to App Runner
        id: deploy-to-app-Runner
        uses: awslabs/amazon-app-runner-deploy@main
        with:
          service: widget-server
          image: ${{steps.login-ecr.outputs.registry}}/${{ vars.ECR_REPOSITORY }}:${{ steps.generate-tag.outputs.sha }}
          region: ${{ vars.AWS_REGION }}
          access-role-arn: ''
          cpu: 1
          memory: 2
          port: 3333
     ```

4. **Fazer o Commit e Abrir uma Pull Request**
   - No terminal, adicione as mudanças ao controle de versão:
     ```sh
     git add .
     ```
   - Faça um commit com uma mensagem descritiva:
     ```sh
     git commit -m "Configure App Runner health check and automate deploy"
     ```
   - Faça o push das mudanças para o repositório remoto:
     ```sh
     git push origin <branch-name>
     ```
   - No GitHub, abra uma pull request para revisar e aprovar as mudanças.
