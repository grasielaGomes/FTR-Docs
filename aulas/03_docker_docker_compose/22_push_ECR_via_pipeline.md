# Enviando Imagem para o ECR via Pipeline

## Destaques Importantes

### Objetivo

- **Build e Push da Imagem**: Realizar o build e push da imagem Docker para o Amazon ECR.
- **Automatização**: Utilizar GitHub Actions para automatizar o processo.

### Problemas e Soluções

- **Configuração Manual**: Necessidade de configurar credenciais, logar no ECR, build e push da imagem manualmente.
- **Automatização**: Utilizar GitHub Actions para automatizar o processo e evitar erros manuais.

### Más Práticas

-**Informações sensíveis ou específicas no código**
Exemplo:

```yaml
        uses: aws-actions/amazon-ecr-login@v2
      - name: Build and push the image to AWS ECR
        id: build-push-image
        run: |
          docker build -t widget-server:v3 .
          docker tag widget-server:v3 403429280851.dkr.ecr.us-east-2.amazonaws.com/rocketseat/widget-server:v3
          docker push 403429280851.dkr.ecr.us-east-2.amazonaws.com/rocketseat/widget-server:v3
```

### Boas Práticas

- **Separação de Steps**: Separar os steps de build e push para melhor organização.
- **Uso de Secrets**: Armazenar credenciais de forma segura no GitHub.
- **Evitar Hardcoding**: Não deixar informações sensíveis ou específicas no código.

## Passo-a-Passo

### Configuração do Workflow no GitHub Actions

1. **Adicionar build e push no arquivo de Workflow**

   ```yaml
   - name: Build Docker image
     id: build-docker-image
     run: docker build -t ${{ secrets.AWS_ACCOUNT_ID }}.dkr.ecr.${{ vars.AWS_REGION }}.amazonaws.com/${{ secrets.REPOSITORY_NAME }}:${{ github.sha }} .

   - name: Push Docker image
     id: push-docker-image
     run: docker push ${{ secrets.AWS_ACCOUNT_ID }}.dkr.ecr.${{ vars.AWS_REGION }}.amazonaws.com/${{ secrets.REPOSITORY_NAME }}:${{ github.sha }}
   ```

### Verificação e Ajustes

1. **Verificar Execução do Workflow**

   - Após um commit, verifique a aba "Actions" no GitHub para acompanhar a execução do workflow.
