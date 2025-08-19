# Container Registry

## Destaques Importantes

### Conceito de Container Registry

- **Definição**: Um Container Registry é uma estrutura que armazena imagens de containers.
- **Exemplos**: Docker Hub, Chain Guard, AWS ECR.
- **Utilização**: Armazenar e distribuir imagens de containers para deploys e execuções.

### Tipos de Imagens

- **Imagens Públicas**: Qualquer pessoa pode utilizar.
- **Imagens Privadas**: Acesso restrito, ideal para aplicações proprietárias.

### Boas Práticas

- **Imagens Públicas**: Úteis para contribuições Open Source.
- **Imagens Privadas**: Recomendadas para aplicações proprietárias.

### Docker Hub

- **Conta Free**: Permite criar até um repositório privado.
- **Repositórios Públicos**: Sem restrições de quantidade.
- **Processo de Envio**: Igual para repositórios públicos e privados.

### AWS ECR

- **Definição**: Elastic Container Registry da AWS, similar ao Docker Hub.
- **Utilização**: Integrado com serviços da AWS para deploys automatizados.

## Passo-a-Passo

### Configuração do Docker Hub

1. **Criar Conta no Docker Hub**

   - Acesse [Docker Hub](https://hub.docker.com/) e crie uma conta.

2. **Login no Docker Hub**

   - No terminal, execute:
     ```sh
     docker login
     ```
   - Insira suas credenciais do Docker Hub.

3. **Criar Repositório no Docker Hub**

   - Acesse a aba de repositórios no Docker Hub.
   - Clique em "Create Repository".
   - Defina o nome e a visibilidade (público ou privado).

4. **Build da Imagem Docker**

   - No terminal, navegue até o diretório do Dockerfile e execute:
     ```sh
     docker build -t <username>/<repository_name>:<tag> .
     ```

5. **Push da Imagem para o Docker Hub**
   - No terminal, execute:
     ```sh
     docker push <username>/<repository_name>:<tag>
     ```

### Configuração do AWS ECR

1. **Criar Repositório no AWS ECR**

   - Acesse o console da AWS.
   - Navegue até o serviço ECR.
   - Clique em "Create Repository" e defina o nome.

2. **Login no AWS ECR**

   - No terminal, execute:
     ```sh
     aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <aws_account_id>.dkr.ecr.<region>.amazonaws.com
     ```

3. **Tag da Imagem Docker**

   - No terminal, execute:
     ```sh
     docker tag <image_id> <aws_account_id>.dkr.ecr.<region>.amazonaws.com/<repository_name>:<tag>
     ```

4. **Push da Imagem para o AWS ECR**
   - No terminal, execute:
     ```sh
     docker push <aws_account_id>.dkr.ecr.<region>.amazonaws.com/<repository_name>:<tag>
     ```

### Integração com Pipeline

1. **Configurar Pipeline de CI/CD**

   - Utilize ferramentas como Jenkins, GitHub Actions ou GitLab CI para configurar a pipeline.
   - Defina etapas para build, teste e push da imagem Docker.

2. **Automatizar Push para Container Registry**
   - Configure a pipeline para realizar o push automático para o Docker Hub ou AWS ECR após cada commit ou merge.

## Conclusão

- **Segurança**: Utilize repositórios privados para aplicações proprietárias.
- **Automação**: Configure pipelines para automação do processo de build e push.
- **Ferramentas**: Docker Hub e AWS ECR são opções populares para armazenar e distribuir imagens de containers.
