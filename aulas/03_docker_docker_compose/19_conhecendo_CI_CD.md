# Conhecendo CI/CD

## Destaques Importantes

### Conceito de CI/CD

- **CI (Continuous Integration)**: Integração contínua, processo de integrar código continuamente e verificar sua validade.
- **CD (Continuous Delivery)**: Entrega contínua, processo de entregar software de forma contínua e automatizada.

### Importância do CI/CD

- **Agilidade**: Automatiza o processo de deploy, tornando-o mais rápido e eficiente.
- **Escalabilidade**: Facilita a gestão de múltiplos deploys diários, especialmente em ambientes com micro serviços.
- **Automatização**: Reduz a necessidade de intervenção manual, permitindo que o time foque em outras tarefas.

### Etapas do CI

- **Linting**: Verificação do código para garantir que segue os padrões definidos.
- **Testes**: Execução de testes unitários, de integração, de contrato, entre outros.
- **Build**: Construção do código e da imagem Docker.
- **Push**: Envio da imagem para um registro de containers (Docker Hub, ECR, etc.).

### Ferramentas de CI/CD

- **GitHub Actions**: Ferramenta integrada ao GitHub para automação de workflows.
- **Outras Ferramentas**: Tecton, Drone, Bitbucket Pipelines, GitLab CI, CircleCI.

## Passo-a-Passo

### Configuração do CI com GitHub Actions

1. **Criar Repositório no GitHub**

   - Acesse o GitHub e crie um novo repositório.

2. **Configurar GitHub Actions**

   - No repositório, acesse a aba "Actions" e configure um novo workflow.

3. **Definir Workflow de CI**

   - Crie um arquivo `.github/workflows/ci.yml` com o seguinte conteúdo:

     ```yaml
     name: CI Pipeline

     on:
       push:
         branches:
           - main
           - dev

     jobs:
       build:
         runs-on: ubuntu-latest

         steps:
           - name: Checkout code
             uses: actions/checkout@v2

           - name: Set up Node.js
             uses: actions/setup-node@v2
             with:
               node-version: '14'

           - name: Install dependencies
             run: npm install

           - name: Run lint
             run: npm run lint

           - name: Run tests
             run: npm test

           - name: Build Docker image
             run: docker build -t ${{ secrets.DOCKER_USERNAME }}/my-app:${{ github.sha }} .

           - name: Log in to Docker Hub
             run: echo ${{ secrets.DOCKER_PASSWORD }} | docker login -u ${{ secrets.DOCKER_USERNAME }} --password-stdin

           - name: Push Docker image
             run: docker push ${{ secrets.DOCKER_USERNAME }}/my-app:${{ github.sha }}
     ```

4. **Adicionar Secrets no GitHub**
   - No repositório, acesse "Settings" > "Secrets" e adicione os secrets `DOCKER_USERNAME` e `DOCKER_PASSWORD`.

### Verificação e Ajustes

1. **Verificar Execução do Workflow**

   - Após um commit, verifique a aba "Actions" no GitHub para acompanhar a execução do workflow.

2. **Ajustar Workflow conforme Necessário**
   - Adicione ou remova steps conforme a necessidade do seu projeto.

## Conclusão

- **Configuração Inicial**: CI configurado com GitHub Actions para automação de linting, testes, build e push de imagens Docker.
- **Próximos Passos**: Configurar CD para entrega contínua e automatizada do software.
- **Ferramentas**: Utilizar GitHub Actions para CI e explorar outras ferramentas para CD.
