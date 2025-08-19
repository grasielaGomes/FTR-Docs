# Configurando Cache na Pipeline

## Destaques Importantes

### Utilização de Cache

- **Cache**: Utilizar cache para reduzir o tempo de execução da pipeline.
- **Build and Push**: Realizar o build e push da imagem Docker de forma eficiente.
- **GitHub Cache**: Utilizar o cache do GitHub para armazenar e recuperar dados de cache.

### Boas Práticas

- **Documentação**: Consultar a documentação oficial para entender as opções de cache disponíveis.
- **Configuração de Cache**: Configurar o cache corretamente para otimizar a pipeline.
- **Persistência de Cache**: Considerar o tempo necessário para persistir o cache.

## Passo-a-Passo

### Configurar Cache na Pipeline

1. **Adicionar Step para Configurar BuildX**

   - No arquivo `.github/workflows/main.yml`, adicione um step para configurar o BuildX:
     ```yaml
     - name: Set up Docker Buildx
       id: set-up-docker-buildx
       uses: docker/setup-buildx-action@v3
     ```

2. **Adicionar Configuração de Cache no Build**

   - Adicione a configuração de cache no step de build:
     ```yaml
     - name: Build and export image
        uses: docker/build-push-action@v6
        with:
          context: .
          load: true
          cache-from: type=gha
          cache-to: type=gha,mode=max
          tags: |
            ${{steps.login-ecr.outputs.registry}}/${{ vars.ECR_REPOSITORY }}:test
     ```

3. **Adicionar Configuração de Cache no Push**
   - Adicione a configuração de cache no step de push:
     ```yaml
     - name: Build and push the image to AWS ECR
        uses: docker/build-push-action@v6
        with:
          context: .
          push: true
          cache-from: type=gha
          tags: |
            ${{steps.login-ecr.outputs.registry}}/${{ vars.ECR_REPOSITORY }}:${{ steps.generate-tag.outputs.sha }}
     ```
