# Enviando Imagem para o Docker Hub

## Destaques Importantes

### Conceito de Envio de Imagem

- **Definição**: Processo de criar, taguear e enviar uma imagem Docker para um repositório no Docker Hub.
- **Objetivo**: Armazenar e distribuir imagens de containers para deploys e execuções.

### Docker Hub

- **Conta Free**: Permite criar até um repositório privado.
- **Repositórios Públicos**: Sem restrições de quantidade.
- **Processo de Envio**: Igual para repositórios públicos e privados.

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

### Build e Tag da Imagem Docker

1. **Build da Imagem Docker**

   - No terminal, navegue até o diretório do Dockerfile e execute:
     ```sh
     docker build -t <username>/<repository_name>:<tag> .
     ```
   - Exemplo:
     ```sh
     docker build -t nome-de-usuario/widget_server:v1 .
     ```

2. **Verificar a Imagem Criada**
   - No terminal, execute:
     ```sh
     docker images
     ```
   - Verifique se a imagem foi criada corretamente.

### Push da Imagem para o Docker Hub

1. **Tag da Imagem Docker**

   - No terminal, execute:
     ```sh
     docker tag <image_id> <username>/<repository_name>:<tag>
     ```
   - Exemplo:
     ```sh
     docker tag widget_server:v1 nome-de-usuario/widget_server:v1
     ```

2. **Push da Imagem para o Docker Hub**
   - No terminal, execute:
     ```sh
     docker push <username>/<repository_name>:<tag>
     ```
   - Exemplo:
     ```sh
     docker push nome-de-usuario/widget_server:v1
     ```

### Verificação e Ajustes

1. **Verificar a Imagem no Docker Hub**

   - Acesse o Docker Hub e verifique se a imagem foi enviada corretamente.

2. **Autenticação (se necessário)**

   - Se houver problemas de autenticação, execute:
     ```sh
     docker login
     ```
   - Insira suas credenciais do Docker Hub.

3. **Rebuild e Push Direto**
   - Alternativamente, você pode buildar e taguear a imagem diretamente para o repositório remoto:
     ```sh
     docker build -t <username>/<repository_name>:<tag> .
     docker push <username>/<repository_name>:<tag>
     ```

### Exemplo Completo

1. **Build da Imagem**
   ```sh
   docker build -t nome-de-usuario/widget_server:v1 .
   ```
