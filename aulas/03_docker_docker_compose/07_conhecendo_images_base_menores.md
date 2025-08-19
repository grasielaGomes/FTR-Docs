### Conhecendo Imagens Base Menores

#### Introdução

- **Objetivo**: Diminuir o tamanho da imagem Docker.
- **Importância**: Reduzir o tamanho da imagem impacta no armazenamento, no tempo de pull e na superfície de ataque.

#### Problemas com Imagens Grandes

- **Tamanho Excessivo**: Imagem de 1.2 GB é muito grande para uma aplicação simples.
- **Superfície de Ataque**: Imagens maiores têm mais vulnerabilidades e maior chance de ataques.

#### Comparação de Tamanhos de Imagens

- **Imagem Atual**: Node 20.18 com 380 MB e 113 vulnerabilidades.
- **Imagem Alternativa**: Node 20 Alpine 3.21 com 45 MB e apenas uma vulnerabilidade.

#### Benefícios de Imagens Menores

- **Menor Superfície de Ataque**: Menos pacotes e camadas.
- **Maior Eficiência**: Menor tempo de pull e armazenamento.

#### Multi-Stage Build

- **Conceito**: Utilizar uma imagem maior para construção e uma menor para execução.
- **Benefício**: Otimização do tamanho da imagem final.

### Passo-a-Passo para Reduzir o Tamanho da Imagem Docker

1. **Verificar o Tamanho da Imagem Atual**

   - Comando:
     ```sh
     docker image ls
     ```

2. **Comparar Tamanhos de Imagens no Docker Hub**

   - Verificar a imagem Node 2018 (380 MB) e Node 20 Alpine 3.21 (45 MB).

3. **Executar Docker History**

   - Comando:
     ```sh
     docker history <image_name_or_id>
     ```

4. **Alterar a Imagem Base no Dockerfile**

   - Substituir a imagem base atual pela Node 20 Alpine 3.21.
   - Exemplo de alteração no Dockerfile:
     ```Dockerfile
     FROM node:20-alpine3.21
     ```

5. **Construir a Nova Imagem**

   - Comando:
     ```sh
     docker build -t <new_image_name> .
     ```

6. **Verificar o Tamanho da Nova Imagem**

   - Comando:
     ```sh
     docker image ls
     ```

7. **Executar Docker History na Nova Imagem**
   - Comando:
     ```sh
     docker history <new_image_name_or_id>
     ```

### Exemplo Prático

1. **Alterar a Imagem Base no Dockerfile**

   - Substituir:
     ```Dockerfile
     FROM node:20-alpine3.21
     ```

2. **Construir a Nova Imagem**

   - Comando:
     ```sh
     docker build -t myapp:alpine .
     ```

3. **Verificar o Tamanho da Nova Imagem**

   - Comando:
     ```sh
     docker image ls
     ```

4. **Executar Docker History na Nova Imagem**
   - Comando:
     ```sh
     docker history myapp:alpine
     ```

### Conclusão

- **Resultado**: Redução significativa do tamanho da imagem (de 1.2 GB para 238 MB).
- **Próximos Passos**: Implementar Multi-Stage Build para otimização adicional.
