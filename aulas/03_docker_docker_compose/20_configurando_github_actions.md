# Configurando GitHub Actions

## Destaques Importantes

### Conceito de CI/CD

- **CI (Continuous Integration)**: Integração contínua, processo de integrar código continuamente e verificar sua validade.
- **CD (Continuous Delivery)**: Entrega contínua, processo de entregar software de forma contínua e automatizada.

### Importância do CI/CD

- **Agilidade**: Automatiza o processo de deploy, tornando-o mais rápido e eficiente.
- **Escalabilidade**: Facilita a gestão de múltiplos deploys diários, especialmente em ambientes com micro serviços.
- **Automatização**: Reduz a necessidade de intervenção manual, permitindo que o time foque em outras tarefas.

### Ferramentas de CI/CD

- **GitHub Actions**: Ferramenta integrada ao GitHub para automação de workflows.

## Passo-a-Passo

### Criação do Repositório no GitHub

1. **Criar Repositório no GitHub**

   - Acesse o GitHub e crie um novo repositório.
   - Nomeie o repositório como `Rocketseat-Pos-Widget-Server`.
   - Defina a visibilidade como privada ou pública conforme necessário.
   - Adicione uma descrição, por exemplo: "Projeto focado na configuração de CI/CD".

2. **Inicializar o Repositório Localmente**

   - No terminal, navegue até o diretório do projeto e execute:
     ```sh
     git init
     git remote add origin <URL_DO_REPOSITORIO>
     ```

3. **Adicionar e Comitar Arquivos**

   - Adicione os arquivos ao repositório e faça o commit inicial:
     ```sh
     git add .
     git commit -m "First commit"
     ```

4. **Alterar a Branch Principal para `main`**
   - No terminal, execute:
     ```sh
     git branch -M main
     git push -u origin main
     ```

### Configuração do GitHub Actions

1. **Acessar a Aba de Actions no GitHub**

   - No repositório, acesse a aba "Actions" e configure um novo workflow.

2. **Criar o Arquivo de Workflow**

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
             uses: actions/checkout@v4
     ```

### Verificação e Ajustes

1. **Verificar Execução do Workflow**

   - Após um commit, verifique a aba "Actions" no GitHub para acompanhar a execução do workflow.

2. **Ajustar Workflow conforme Necessário**
   - Adicione ou remova steps conforme a necessidade do seu projeto.

## Conclusão

- **Configuração Inicial**: CI configurado com GitHub Actions para automação de linting, testes, build e push de imagens Docker.
- **Próximos Passos**: Configurar CD para entrega contínua e automatizada do software.
- **Ferramentas**: Utilizar GitHub Actions para CI e explorar outras ferramentas para CD.
