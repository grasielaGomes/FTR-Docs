# Enviando Imagem para o Docker Hub

## Destaques Importantes

### Objetivo

- **Build e Push da Imagem**: Realizar o build e push da imagem Docker para o Docker Hub.
- **Automatização**: Utilizar GitHub Actions para automatizar o processo.

### Problemas e Soluções

- **Configuração Manual**: Necessidade de configurar credenciais, logar no Docker Hub, build e push da imagem manualmente.
- **Automatização**: Utilizar GitHub Actions para automatizar o processo e evitar erros manuais.

### Boas Práticas

- **Separação de Steps**: Separar os steps de build e push para melhor organização.
- **Uso de Secrets**: Armazenar credenciais de forma segura no GitHub.
- **Evitar Hardcoding**: Não deixar informações sensíveis ou específicas no código.

## Passo-a-Passo

### Configuração do Workflow no GitHub Actions

1. **Criar o Arquivo de Workflow**

   - Crie um arquivo `.github/workflows/dockerhub.yml` com o seguinte conteúdo:

```yaml
name: widget-server pipe DockerHub

on:
  push:
    branches:
      - 'main'

jobs:
  Build:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        id: checkout
        uses: actions/checkout@v4

      - name: Login to DockerHub
        id: login-docker-hub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}

      - name: Generate tag
        id: generate-tag
        run: |
          SHA=$(echo $GITHUB_SHA | head -c7)
          echo "sha=$SHA" >> $GITHUB_OUTPUT

      - name: Build and push the image to DockerHub
        id: build-push-image
        env:
          DOCKERHUB_REPOSITORY: ${{ vars.DOCKERHUB_REPOSITORY }}
          IMAGE_TAG: ${{ steps.generate-tag.outputs.sha }}
        run: |
          docker build -t $DOCKERHUB_REPOSITORY:$IMAGE_TAG .
          docker push $DOCKERHUB_REPOSITORY:$IMAGE_TAG
```

2. **Adicionar Secrets no GitHub**
   - No repositório do GitHub, vá para "Settings" > "Secrets".
   - Adicione os secrets `DOCKER_USERNAME` e `DOCKER_PASSWORD`.

### Verificação e Ajustes

1. **Verificar Execução do Workflow**

   - Após um commit, verifique a aba "Actions" no GitHub para acompanhar a execução do workflow.

2. **Ajustar Workflow conforme Necessário**
   - Adicione ou remova steps conforme a necessidade do seu projeto.
