# Segurança e Scanning de Containers

## Destaques Importantes

### Acesso ao Container

- **Verificar se o container está em execução**:
  ```sh
  docker ps
  ```
- **Acessar a interface do container**:
  - Comando para acessar o shell do container:
    ```sh
    docker exec -it <container_id> /bin/sh
    ```
  - Utilizar o container ID ou nome do container:
    ```sh
    docker exec -it <container_name> /bin/sh
    ```
  - Definir um nome para o container ao rodar:
    ```sh
    docker run --name <container_name> <image_name>
    ```

### Evitar Uso do Usuário Root

- **Verificar o usuário atual dentro do container**:
  ```sh
  whoami
  ```
- **Adicionar usuário não-root no Dockerfile**:
  ```dockerfile
  USER 1000
  ```
- **Rebuild e Rerun do Container**:
  ```sh
  docker stop <container_id>
  docker build -t <image_name> .
  docker run -d --name <container_name> <image_name>
  ```

### Verificação de Vulnerabilidades

- **Classificação de vulnerabilidades**:
  - High, Medium, Low, Critical
- **Ferramentas de análise**:
  - SonarQube para análise de código
  - Trivy para escanear imagens Docker

### Ferramenta Trivy

- **Descrição**:
  - Ferramenta open-source da Aqua Security para encontrar vulnerabilidades e misconfigurações
- **Instalação**:
  - Via Homebrew no Mac:
    ```sh
    brew install aquasecurity/trivy/trivy
    ```
  - Binário para Linux e Windows disponível no [site oficial](https://github.com/aquasecurity/trivy)

## Passo-a-Passo

### Acesso ao Container

1. **Verificar se o container está em execução**:

   ```sh
   docker ps
   ```

2. **Acessar o Shell do Container**:

   ```sh
   docker exec -it <container_id> /bin/sh
   ```

3. **Definir um Nome para o Container**:
   ```sh
   docker run --name <container_name> <image_name>
   ```

### Evitar Uso do Usuário Root

1. **Verificar o Usuário Atual**:

   ```sh
   whoami
   ```

2. **Adicionar Usuário Não-Root no Dockerfile**:

   ```dockerfile
   USER 1000
   ```

3. **Rebuild e Rerun do Container**:
   ```sh
   docker stop <container_id>
   docker build -t <image_name> .
   docker run -d --name <container_name> <image_name>
   ```

### Verificação de Vulnerabilidades com Trivy

1. **Instalar Trivy**:

   - No Mac:
     ```sh
     brew install aquasecurity/trivy/trivy
     ```
   - No Linux/Windows:
     - Baixar o binário do [site oficial](https://github.com/aquasecurity/trivy).

2. **Executar Trivy para Escanear Imagem Docker**:

   ```sh
   trivy image <image_name>
   ```

3. **Interpretar Resultados**:
   - Verificar a severidade das vulnerabilidades (high, medium, low, critical).
   - Seguir as recomendações de correção fornecidas pelo Trivy.

### Exemplo de Uso do Trivy

1. **Escanear Imagem Node 2018**:

   ```sh
   trivy image node:2018
   ```

2. **Escanear Imagem Alpine**:

   ```sh
   trivy image alpine:latest
   ```

3. **Consultar Detalhes de Vulnerabilidades**:
   - Usar o código CVE fornecido pelo Trivy para buscar mais informações no [CVE Mitre](https://cve.mitre.org/).

## Conclusão

- **Segurança**: Sempre rodar containers com usuários não-root e verificar vulnerabilidades regularmente.
- **Ferramentas**: Utilizar ferramentas como Trivy para manter a segurança das imagens Docker.
- **Automação**: Configurar pipelines para escanear vulnerabilidades automaticamente a cada deploy.
