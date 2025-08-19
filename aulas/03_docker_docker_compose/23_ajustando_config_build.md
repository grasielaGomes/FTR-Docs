# Ajustando Configurações de Build

## Destaques Importantes

### Boas Práticas

- **Definir Variáveis**: Utilizar variáveis para definir nomes de repositórios e outras configurações.
- **Separação de Ambientes**: Manter variáveis de ambiente fora do código para facilitar a configuração em diferentes ambientes.
- **Segurança**: Evitar expor informações sensíveis no código.

### Alternativas

- **Uso de Variáveis de Ambiente**: Definir variáveis de ambiente no GitHub Actions para evitar hardcoding.
- **Uso de Outputs**: Utilizar outputs de steps anteriores para configurar steps subsequentes.

## Passo-a-Passo

### Utilizar Outputs para Configuração

2. **Utilizar Outputs nos Steps Subsequentes**

   - Utilize os outputs dos steps anteriores nos steps subsequentes:

     ```yaml
     - name: Build and push the image to AWS ECR
        id: build-push-image
        env:
          ECR_REGISTRY: ${{steps.login-ecr.outputs.registry}}
          ECR_REPOSITORY: ${{ vars.ECR_REPOSITORY }}
        run: |
          docker build -t $ECR_REGISTRY/$ECR_REPOSITORY:v4 .
          docker push $ECR_REGISTRY/$ECR_REPOSITORY:v4
     ```

### Gerar Tags Únicas para Imagens

1.  **Adicionar Step para Gerar Tag**

    - No arquivo `.github/workflows/main.yml`, adicione um step para gerar a tag:

      ```yaml
      - name: Generate tag
        id: generate-tag
        run: |
          echo "sha=$(echo $GITHUB_SHA | cut -c1-7)" >> $GITHUB_ENV
      ```

      Outra possibilidade:

      ```yaml
      run: |
        SHA=$(echo $GITHUB_SHA | head -c7)
        echo "sha=$SHA" >> $GITHUB_OUTPUT
      ```

2.  **Utilizar a Tag Gerada nos Steps de Build e Push**

    - Utilize a tag gerada nos steps de build e push:

    ```yaml
    - name: Build and push the image to AWS ECR
      id: build-push-image
      env:
        ECR_REGISTRY: ${{steps.login-ecr.outputs.registry}}
        ECR_REPOSITORY: ${{ vars.ECR_REPOSITORY }}
        IMAGE_TAG: ${{ env.sha }}
      run: |
        docker build -t $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG .
        docker push $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG
    ```

    Outra possibilidade:

    ```yaml
    env:
      IMAGE_TAG: ${{ steps.generate-tag.outputs.sha }}
    ```

### Verificação e Ajustes

1. **Verificar Execução do Workflow**

   - Após um commit, verifique a aba "Actions" no GitHub para acompanhar a execução do workflow.
