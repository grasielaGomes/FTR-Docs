# Introdução ao Distroless

## Destaques Importantes

### Conceito de Distroless

- **Definição**: Imagens Docker minimalistas, sem sistema operacional completo.
- **Objetivo**: Executar apenas a aplicação, reduzindo a superfície de ataque e melhorando a segurança.
- **Benefícios**:
  - Menor superfície de ataque.
  - Imagens menores e mais seguras.
  - Foco na execução da aplicação.

### Exemplos de Imagens Distroless

- **Google Container Tools**:
  - Repositório mantido pelo Google com várias imagens Distroless para diferentes tecnologias (Java, Node, Python, etc.).
- **Chain Guard**:
  - Ferramenta paga focada em segurança, oferecendo imagens minimalistas e seguras.

## Passo-a-Passo para Utilizar Imagens Distroless

### Utilizando Imagens Distroless do Google

1. **Selecionar a Imagem Distroless**

   - Acesse o repositório do Google Container Tools.
   - Escolha a imagem adequada para sua tecnologia (ex: Node.js).

2. **Substituir a Imagem no Dockerfile**

   - Exemplo de substituição:
     ```dockerfile
     FROM gcr.io/distroless/nodejs:20
     ```

3. **Build e Run da Nova Imagem**

   - Comandos:
     ```sh
     docker build -t <image_name> .
     docker stop <container_id>
     docker run -d --name <container_name> <image_name>
     ```

4. **Verificar Logs e Histórico**

   - Comandos:
     ```sh
     docker logs <container_id>
     docker history <image_name>
     ```

### Utilizando Imagens Distroless da Chain Guard

1. **Selecionar a Imagem Distroless**

   - Acesse o site da Chain Guard.
   - Escolha a imagem adequada (ex: Node.js).

2. **Substituir a Imagem no Dockerfile**

   - Exemplo de substituição:
     ```dockerfile
     FROM cgr.dev/chainguard/node:latest
     ```

3. **Build e Run da Nova Imagem**

   - Comandos:
     ```sh
     docker build -t <image_name> .
     docker stop <container_id>
     docker run -d --name <container_name> <image_name>
     ```

4. **Verificar Logs e Histórico**

   - Comandos:
     ```sh
     docker logs <container_id>
     docker history <image_name>
     ```

### Verificação de Vulnerabilidades com Trivy

1. **Instalar Trivy**

   - No Mac:
     ```sh
     brew install aquasecurity/trivy/trivy
     ```
   - No Linux/Windows:
     - Baixar o binário do [site oficial](https://github.com/aquasecurity/trivy).

2. **Executar Trivy para Escanear Imagem Docker**

   - Comando:
     ```sh
     trivy image <image_name>
     ```

3. **Interpretar Resultados**

   - Verificar a severidade das vulnerabilidades (high, medium, low, critical).
   - Seguir as recomendações de correção fornecidas pelo Trivy.

## Conclusão

- **Segurança**: Utilizar imagens Distroless para reduzir a superfície de ataque e melhorar a segurança.
- **Ferramentas**: Ferramentas como Trivy ajudam a manter a segurança das imagens Docker.
- **Automação**: Configurar pipelines para escanear vulnerabilidades automaticamente a cada deploy.
