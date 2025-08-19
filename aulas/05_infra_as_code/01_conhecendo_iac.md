### Destaques do Texto

1. **Introdução ao IAC (Infrastructure as Code)**

   - IAC significa Infrastructure as Code.
   - Aproxima as áreas de desenvolvimento (Dev) e operações (Ops), alinhado com o conceito de DevOps.
   - Permite a criação e gerenciamento de infraestrutura através de código, ao invés de interfaces gráficas.

2. **Problemas Resolvidos pelo IAC**

   - Dificuldade de escalar e gerenciar recursos manualmente.
   - Falta de visibilidade e controle sobre os recursos criados.
   - Risco de duplicação de recursos e aumento de custos.
   - Necessidade de uma fonte da verdade centralizada para a infraestrutura.

3. **Vantagens do IAC**

   - Centralização da informação e controle de custos.
   - Melhor governança e rastreabilidade dos recursos.
   - Automação e consistência na criação de infraestrutura.
   - Integração com fluxos de trabalho de SCM (Source Control Management).

4. **Conceitos Chave**
   - **Declarativo vs. Imperativo**: IAC utiliza uma abordagem declarativa, onde você define o estado desejado da infraestrutura.
   - **Fonte da Verdade**: O repositório de código se torna a fonte da verdade para a infraestrutura.
   - **Pipeline de Infraestrutura**: Automação do processo de criação e gerenciamento de recursos através de pipelines.

### Passo-a-Passo

1. **Entender o Conceito de IAC**

   - IAC (Infrastructure as Code) permite gerenciar a infraestrutura através de código.
   - Aproxima as áreas de desenvolvimento e operações, alinhado com DevOps.

2. **Identificar Problemas Resolvidos pelo IAC**

   - Dificuldade de escalar e gerenciar recursos manualmente.
   - Falta de visibilidade e controle sobre os recursos criados.
   - Risco de duplicação de recursos e aumento de custos.

3. **Reconhecer as Vantagens do IAC**

   - Centralização da informação e controle de custos.
   - Melhor governança e rastreabilidade dos recursos.
   - Automação e consistência na criação de infraestrutura.

4. **Adotar uma Abordagem Declarativa**

   - Utilizar uma abordagem declarativa para definir o estado desejado da infraestrutura.
   - Escrever código para criar e gerenciar recursos.

5. **Implementar a Fonte da Verdade**

   - Utilizar repositórios de código como a fonte da verdade para a infraestrutura.
   - Garantir que todas as mudanças passem por revisão e aprovação.

6. **Configurar Pipeline de Infraestrutura**

   - Criar pipelines de infraestrutura para automatizar a criação e gerenciamento de recursos.
   - Integrar com fluxos de trabalho de SCM (Source Control Management).

7. **Praticar com Ferramentas de IAC**

   - Conhecer e utilizar ferramentas de IAC, como Terraform, AWS CloudFormation, etc.
   - Implementar exemplos básicos para entender o funcionamento.

8. **Aplicar as Melhores Práticas**
   - Evitar a criação de recursos diretamente pela interface gráfica da cloud.
   - Utilizar código para todas as operações de criação e gerenciamento de infraestrutura.

### Exemplo de Implementação

1. **Criar um Repositório de IAC**

   - Criar um repositório no GitHub para armazenar o código de infraestrutura.

2. **Escrever Código Declarativo**

   - Escrever código para definir os recursos de infraestrutura desejados.
   - Exemplo com Terraform:

     ```hcl
     provider "aws" {
       region = "us-west-2"
     }

     resource "aws_instance" "example" {
       ami           = "ami-0c55b159cbfafe1f0"
       instance_type = "t2.micro"
     }
     ```

3. **Configurar Pipeline de Infraestrutura**

   - Configurar um pipeline no GitHub Actions para aplicar o código de infraestrutura.
   - Exemplo de workflow:

     ```yaml
     name: Apply Terraform

     on:
       push:
         branches:
           - main

     jobs:
       terraform:
         runs-on: ubuntu-latest

         steps:
           - name: Checkout code
             uses: actions/checkout@v2

           - name: Set up Terraform
             uses: hashicorp/setup-terraform@v1

           - name: Initialize Terraform
             run: terraform init

           - name: Apply Terraform
             run: terraform apply -auto-approve
     ```

4. **Revisar e Aprovar Mudanças**

   - Abrir uma pull request para revisar e aprovar as mudanças no código de infraestrutura.
   - Garantir que todas as mudanças passem por revisão antes de serem aplicadas.

5. **Monitorar e Gerenciar Recursos**
   - Utilizar a interface gráfica da cloud apenas para visualização e monitoramento.
   - Garantir que todas as operações de criação e gerenciamento sejam feitas através do código.
