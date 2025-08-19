# Conhecendo o ECR (Elastic Container Registry)

## Destaques Importantes

### Conceito de ECR

- **Definição**: Serviço da AWS para armazenamento de imagens de containers.
- **Tipos de Repositórios**: Pode ser público ou privado.
- **Free Tier**: Permite utilizar até 500 MB por mês gratuitamente.

### Preços e Regiões

- **Preços**: Variam por região, com custo aproximado de $0.09 por GB.
- **Regiões**: Custos podem ser mais altos em regiões como América do Sul.
- **Níveis de Utilização**: Preços diminuem com o aumento da utilização.

### Criação de Repositório

- **Mutável vs Imutável**: Repositórios podem ser configurados para permitir ou não a sobrescrita de tags.
- **Namespace**: Estrutura similar ao Docker Hub, com namespaces e repositórios.

## Passo-a-Passo

### Acessar o ECR

1. **Acessar o Console da AWS**

   - Visite o console da AWS e faça login.

2. **Procurar pelo ECR**
   - No console, procure por "ECR" ou "Elastic Container Registry".

### Verificar Preços

1. **Acessar a Página de Preços**

   - No console do ECR, clique em "Pricing" para verificar os custos.

2. **Consultar o Free Tier**
   - Verifique o free tier disponível para evitar custos adicionais.

### Criar Repositório no ECR

1. **Acessar a Página de Criação de Repositório**

   - No console do ECR, clique em "Create Repository".

2. **Definir o Tipo de Repositório**

   - Escolha entre repositório público ou privado.

3. **Configurar o Repositório**

   - Defina o namespace e o nome do repositório.
   - Exemplo:
     ```plaintext
     Namespace: rocketseat
     Repositório: widget_server
     ```

4. **Configurar Imutabilidade**

   - Escolha se o repositório será mutável ou imutável.
   - Recomenda-se imutável para evitar sobrescrita de tags.

5. **Configurar Criptografia**

   - Utilize a criptografia padrão (AES-256).

6. **Criar o Repositório**
   - Clique em "Create" para finalizar a criação do repositório.

### Enviar Imagem para o ECR

1. **Login no ECR**

   - No terminal, execute:
     ```sh
     aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <aws_account_id>.dkr.ecr.<region>.amazonaws.com
     ```

2. **Tag da Imagem Docker**

   - No terminal, execute:
     ```sh
     docker tag <image_id> <aws_account_id>.dkr.ecr.<region>.amazonaws.com/<repository_name>:<tag>
     ```

3. **Push da Imagem para o ECR**
   - No terminal, execute:
     ```sh
     docker push <aws_account_id>.dkr.ecr.<region>.amazonaws.com/<repository_name>:<tag>
     ```

## Conclusão

- **Configuração Inicial**: Conta criada e configurada, repositório no ECR criado.
- **Próximos Passos**: Enviar imagens para o ECR e configurar pipelines de CI/CD.
- **Ferramentas**: Utilizar o console da AWS para gerenciamento inicial, com planos de automatização via código.
