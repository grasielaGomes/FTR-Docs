### Tópicos Importantes

1. **Introdução à Vercel**

   - Vercel é uma alternativa ao CloudFront fora da AWS.
   - Oferece funcionalidades semelhantes para deploy e distribuição de conteúdo.

2. **Criação de Conta na Vercel**

   - Possibilidade de criar uma conta free ou pro.
   - Conta free é suficiente para estudos e projetos pessoais.
   - Vercel oferece um período de teste de 14 dias para a conta pro.

3. **Importação de Projetos do GitHub**

   - Conectar a conta Vercel com o GitHub.
   - Importar projetos diretamente do GitHub para a Vercel.
   - Configurar o projeto na Vercel, incluindo comandos de build e diretórios.

4. **Deploy Automático**

   - Vercel realiza deploy automático a cada commit na branch configurada.
   - Deploy é distribuído globalmente, semelhante ao CloudFront.

5. **Desconexão do Repositório GitHub**
   - Possibilidade de desconectar o repositório GitHub da Vercel.
   - Controle de deploy pode ser feito via GitHub Actions em vez de diretamente pela Vercel.

### Passo a Passo

1. **Criar Conta na Vercel**

   - Acesse o site da Vercel e crie uma conta utilizando o GitHub para login.
   - Escolha entre a conta free ou pro (14 dias de teste disponíveis para a conta pro).

2. **Conectar Conta Vercel com GitHub**

   - Após criar a conta, conecte a Vercel com o GitHub.
   - Autorize a Vercel a acessar seus repositórios no GitHub.

3. **Importar Projeto do GitHub**

   - Na Vercel, clique em "Import Project".
   - Selecione o projeto desejado do GitHub.
   - Configure as opções do projeto, como branch, framework, comandos de build e diretórios.

4. **Configurar Comandos de Build**

   - Defina o comando de build, por exemplo:
     ```bash
     pnpm run build
     ```
   - Configure o diretório de saída, por exemplo:
     ```bash
     dist
     ```

5. **Realizar Deploy Automático**

   - Clique em "Deploy" para iniciar o deploy do projeto.
   - A Vercel realizará o build e deploy automaticamente.
   - A cada commit na branch configurada, um novo deploy será realizado.

6. **Desconectar Repositório GitHub**

   - Acesse as configurações do projeto na Vercel.
   - Desconecte o repositório GitHub para controlar o deploy via GitHub Actions.

7. **Configurar GitHub Actions para Deploy**

   - No repositório GitHub, crie um arquivo de workflow para GitHub Actions:

     ```yaml
     name: Deploy to Vercel

     on:
       push:
         branches:
           - main

     jobs:
       deploy:
         runs-on: ubuntu-latest
         steps:
           - name: Checkout
             uses: actions/checkout@v4

           - name: Install dependencies
             run: |
               pnpm install

           - name: Build project
             run: |
               pnpm run build

           - name: Deploy to Vercel
             run: |
               npx vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
     ```

   - Adicione o token da Vercel como um secret no repositório GitHub (`VERCEL_TOKEN`).

8. **Executar Workflow**
   - Faça um commit na branch configurada (`main`).
   - O GitHub Actions executará o workflow, realizando o build e deploy na Vercel.
