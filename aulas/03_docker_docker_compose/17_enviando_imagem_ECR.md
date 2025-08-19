# Enviando Imagem para o ECR (Elastic Container Registry)

## Destaques Importantes

### Conceito de ECR

- **Definição**: Serviço da AWS para armazenamento de imagens de containers.
- **Tipos de Repositórios**: Pode ser público ou privado.
- **Free Tier**: Permite utilizar até 500 MB por mês gratuitamente.

### Utilização do AWS CLI

- **Comando GetLoginPassword**: Utilizado para gerar um token de autenticação para o ECR.
- **Validade do Token**: O token gerado expira em 12 horas.

### Processo de Envio

- **Login no ECR**: Utilizar o comando `aws ecr get-login-password` para autenticação.
- **Tag da Imagem Docker**: Taguear a imagem local para o repositório do ECR.
- **Push da Imagem**: Enviar a imagem para o ECR utilizando o comando `docker push`.

## Passo-a-Passo

### Login no ECR

1. **Gerar Token de Autenticação**
   - No terminal, execute:
     ```sh
     aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <aws_account_id>.dkr.ecr.<region>.amazonaws.com
     ```
   - Substitua `<region>` pela região onde seu repositório está localizado (ex: `us-east-2`).
   - Substitua `<aws_account_id>` pelo ID da sua conta AWS.

### Tag da Imagem Docker

1. **Taguear a Imagem Local**
   - No terminal, execute:
     ```sh
     docker tag <image_id> <aws_account_id>.dkr.ecr.<region>.amazonaws.com/<repository_name>:<tag>
     ```
   - Substitua `<image_id>` pelo ID da imagem Docker local.
   - Substitua `<aws_account_id>` pelo ID da sua conta AWS.
   - Substitua `<region>` pela região onde seu repositório está localizado.
   - Substitua `<repository_name>` pelo nome do seu repositório no ECR.
   - Substitua `<tag>` pela tag desejada para a imagem.

### Push da Imagem para o ECR

1. **Enviar a Imagem**
   - No terminal, execute:
     ```sh
     docker push <aws_account_id>.dkr.ecr.<region>.amazonaws.com/<repository_name>:<tag>
     ```
   - Substitua `<aws_account_id>`, `<region>`, `<repository_name>` e `<tag>` pelos valores correspondentes.

### Verificação e Ajustes

1. **Verificar a Imagem no ECR**

   - Acesse o console do ECR na AWS e verifique se a imagem foi enviada corretamente.

2. **Gerenciamento de Tags**
   - Utilize tags imutáveis para evitar sobrescrita de imagens.
   - Para criar uma nova tag, utilize o comando:
     ```sh
     docker tag <image_id> <aws_account_id>.dkr.ecr.<region>.amazonaws.com/<repository_name>:<new_tag>
     ```
   - Envie a nova tag para o ECR:
     ```sh
     docker push <aws_account_id>.dkr.ecr.<region>.amazonaws.com/<repository_name>:<new_tag>
     ```

## Conclusão

- **Configuração Inicial**: AWS CLI configurado e imagem enviada para o ECR.
- **Próximos Passos**: Automatizar o processo de envio de imagens utilizando pipelines de CI/CD.
- **Ferramentas**: Utilizar o AWS CLI e o Docker para gerenciar e enviar imagens de containers.
