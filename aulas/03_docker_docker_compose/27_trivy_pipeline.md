# Novos Steps na Pipeline

## Destaques Importantes

### Utilização de Trivy

- **Trivy**: Ferramenta de segurança para escanear vulnerabilidades em containers.
- **Aqua Security**: Empresa que mantém o Trivy.
- **Bloqueio de Pipeline**: Possibilidade de bloquear a pipeline se forem encontradas vulnerabilidades críticas.

### Boas Práticas

- **Escanear Antes do Push**: Realizar o scan de vulnerabilidades antes de enviar a imagem para o repositório.
- **Configuração de Cache**: Utilizar cache para reduzir o tempo de execução da pipeline.

## Passo-a-Passo

### Configurar Exportação da Imagem para Docker

1. **Adicionar Step para Exportar Imagem**
   - No arquivo `.github/workflows/main.yml`, adicione um step para exportar a imagem para o Docker:
     ```yaml
     - name: Build and push the image to AWS ECR
        uses: docker/build-push-action@v6
        with:
          context: .
          load: true
          tags: |
            ${{steps.login-ecr.outputs.registry}}/${{ vars.ECR_REPOSITORY }}:test
     ```

### Adicionar Step para Escanear Vulnerabilidades com Trivy

1. **Adicionar Step para Configurar Trivy**
   - No arquivo `.github/workflows/main.yml`, adicione um step para configurar o Trivy:
     ```yaml
     - name: Run Trivy scanner
        id: run-trivy-scanner
        uses: aquasecurity/trivy@0.29.0
        with:
          image-ref: '${{steps.login-ecr.outputs.registry}}/${{ vars.ECR_REPOSITORY }}:test'
          format: 'table'
          ignore-unfixed: true
          vuln-type: 'os,library'
          severity: 'CRITICAL,HIGH,MEDIUM,LOW'
     ```
