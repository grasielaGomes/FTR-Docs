# Configurando Credenciais AWS no GitHub Actions

## Destaques Importantes

### Objetivo

- **Enviar Imagem para o Container Registry**: Foco no Amazon ECR.
- **Entendimento do Docker Hub**: Contexto de funcionamento.

### Problemas e Soluções

- **Configuração Manual**: Configurar credenciais, logar no ECR, build e push da imagem.
- **Automatização**: Utilizar GitHub Actions para automatizar o processo.

### Boas Práticas

- **Segurança**: Evitar expor informações sensíveis no repositório.
- **Uso de Secrets**: Armazenar credenciais de forma segura no GitHub.

## Passo-a-Passo

### Configuração de Credenciais AWS no GitHub Actions

1. **Criar Access Keys na AWS**

   - Acesse o console da AWS.
   - Vá para "Security Credentials" e crie uma nova Access Key.
   - Anote a Access Key ID e a Secret Access Key.

2. **Adicionar Secrets no GitHub**

   - No repositório do GitHub, vá para "Settings" > "Secrets".
   - Adicione os secrets `AWS_ACCESS_KEY_ID` e `AWS_SECRET_ACCESS_KEY`.

3. **Adicionar Variável de Ambiente para Região**
   - No repositório do GitHub, vá para "Settings" > "Secrets and variables" > "Variables".
   - Adicione a variável `AWS_REGION` com o valor da região desejada (ex: `us-east-2`).

### Configuração do Workflow no GitHub Actions

1. **Criar o Arquivo de Workflow**

   - Crie um arquivo `.github/workflows/main.yml` com o seguinte conteúdo:

     ```yaml
     name: widget-server pipe

     on:
       push:
         branches:
           - main

     jobs:
       build:
         runs-on: ubuntu-latest

         steps:
           - name: Checkout code
             id: checkout
             uses: actions/checkout@v4

           - name: Configure AWS Credentials
             id: configure-aws-credentials
             uses: aws-actions/configure-aws-credentials@v4
             with:
               aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
               aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
               aws-region: ${{ vars.AWS_REGION }}

           - name: Log in to Amazon ECR
             id: login-ecr
             uses: aws-actions/amazon-ecr-login@v2
     ```

### Verificação e Ajustes

1. **Verificar Execução do Workflow**

   - Após um commit, verifique a aba "Actions" no GitHub para acompanhar a execução do workflow.

2. **Ajustar Workflow conforme Necessário**
   - Adicione ou remova steps conforme a necessidade do seu projeto.

## Conclusão

- **Configuração Inicial**: Credenciais AWS configuradas no GitHub Actions.
- **Próximos Passos**: Automatizar o processo de build e push de imagens para o ECR.
- **Ferramentas**: Utilizar GitHub Actions para CI/CD e explorar outras ferramentas para automação.
