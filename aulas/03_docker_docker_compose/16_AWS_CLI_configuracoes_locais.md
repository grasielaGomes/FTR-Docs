# Configurações Locais do AWS CLI

## Destaques Importantes

### Conceito de AWS CLI

- **Definição**: Ferramenta de linha de comando para interagir com os serviços da AWS.
- **Utilização**: Conectar sua máquina local ou servidor com a AWS para gerenciar recursos.

### Serviços da AWS

- **Diversidade de Serviços**: AWS oferece mais de mil serviços, incluindo IAM, EC2, Lambda, S3, e ECR.
- **Container Registry**: ECR é o serviço de registro de containers da AWS.

### Instalação do AWS CLI

- **Compatibilidade**: Disponível para Windows, Mac e Linux.
- **Instalação**: Acesse [AWS CLI](https://aws.amazon.com/cli/) para instruções detalhadas.

### Boas Práticas

- **Uso de Access Keys**: Utilize Access Keys para conectar sua máquina local com a AWS.
- **Segurança**: Evite usar o usuário root para operações diárias.

## Passo-a-Passo

### Instalação do AWS CLI

1. **Acessar o Site da AWS CLI**

   - Visite [AWS CLI](https://aws.amazon.com/cli/) e siga as instruções de instalação para seu sistema operacional.

2. **Verificar a Instalação**
   - No terminal, execute:
     ```sh
     aws --version
     ```
   - Verifique se a versão do AWS CLI é exibida corretamente.

### Configuração do AWS CLI

1. **Acessar o Console da AWS**

   - Faça login no console da AWS.

2. **Criar Access Keys**

   - No console, clique no seu nome e selecione "Security Credentials".
   - Na seção "Access Keys", clique em "Create New Access Key".
   - Anote a Access Key ID e a Secret Access Key. Você pode baixar um arquivo CSV com essas informações.

3. **Configurar o AWS CLI**
   - No terminal, execute:
     ```sh
     aws configure
     ```
   - Insira a Access Key ID, Secret Access Key, região padrão (ex: us-east-2 para Ohio) e o formato de saída (ex: JSON).

### Verificação e Ajustes

1. **Verificar Configuração**

   - No terminal, execute:
     ```sh
     aws sts get-caller-identity
     ```
   - Verifique se as informações da sua conta AWS são exibidas corretamente.

2. **Gerenciamento de Access Keys**
   - Se perder a Secret Access Key, você pode deletar e criar uma nova.
   - Para maior segurança, desative a chave antes de deletar para verificar se não há impacto.

## Conclusão

- **Configuração Inicial**: AWS CLI instalado e configurado com Access Keys.
- **Próximos Passos**: Conectar com o ECR e enviar imagens de containers.
- **Ferramentas**: Utilizar o AWS CLI para gerenciar recursos na AWS.
