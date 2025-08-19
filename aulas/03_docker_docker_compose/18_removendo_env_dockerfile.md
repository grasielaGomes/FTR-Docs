# Removendo Variáveis de Ambiente do Dockerfile

## Destaques Importantes

### Problema com Variáveis de Ambiente no Dockerfile

- **Definição**: Definir variáveis de ambiente diretamente no Dockerfile pode causar problemas.
- **Ambientes Diferentes**: Valores de variáveis podem variar entre ambientes de staging e produção.
- **Informações Sensíveis**: Evitar incluir informações sensíveis no Dockerfile.

### Boas Práticas

- **Separação de Ambientes**: Manter variáveis de ambiente fora do Dockerfile para facilitar a configuração em diferentes ambientes.
- **Segurança**: Evitar comitar informações sensíveis no repositório.

### Alternativas

- **Uso de ARG**: Utilizar argumentos (`ARG`) para passar valores em tempo de build.
- **Uso de ENV**: Utilizar variáveis de ambiente (`ENV`) para valores em tempo de execução.

## Passo-a-Passo

### Remover Variáveis de Ambiente do Dockerfile

1. **Identificar Variáveis de Ambiente no Dockerfile**

   - Localize as linhas onde as variáveis de ambiente estão definidas:
     ```dockerfile
     ENV VARIAVEL_EXEMPLO=valor
     ```

2. **Remover Variáveis de Ambiente**
   - Remova as linhas que definem as variáveis de ambiente:
     ```dockerfile
     # Remover as linhas ENV
     ```

### Utilizar ARG para Valores em Tempo de Build

1. **Adicionar ARG no Dockerfile**

   - Adicione argumentos (`ARG`) no Dockerfile para valores em tempo de build:
     ```dockerfile
     ARG VARIAVEL_EXEMPLO
     ```

2. **Utilizar ARG no Dockerfile**

   - Utilize os argumentos no Dockerfile conforme necessário:
     ```dockerfile
     RUN echo $VARIAVEL_EXEMPLO
     ```

3. **Passar Valores em Tempo de Build**
   - No terminal, execute o comando `docker build` passando os valores dos argumentos:
     ```sh
     docker build --build-arg VARIAVEL_EXEMPLO=valor -t nome_da_imagem .
     ```

### Utilizar ENV para Valores em Tempo de Execução

1. **Definir Variáveis de Ambiente no Comando docker run**
   - No terminal, execute o comando `docker run` passando as variáveis de ambiente:
     ```sh
     docker run -e VARIAVEL_EXEMPLO=valor -p 3000:3000 nome_da_imagem
     ```

### Verificação e Ajustes

1. **Verificar a Execução do Container**

   - No terminal, execute:
     ```sh
     docker ps
     ```
   - Verifique se o container está em execução corretamente.

2. **Verificar Logs do Container**

   - No terminal, execute:
     ```sh
     docker logs <container_id>
     ```

3. **Acessar o Container**
   - No terminal, execute:
     ```sh
     docker exec -it <container_id> /bin/sh
     ```
   - Verifique os valores das variáveis de ambiente dentro do container:
     ```sh
     echo $VARIAVEL_EXEMPLO
     ```

## Conclusão

- **Configuração Inicial**: Variáveis de ambiente removidas do Dockerfile e configuradas corretamente.
- **Próximos Passos**: Automatizar o processo de configuração de variáveis de ambiente utilizando pipelines de CI/CD.
- **Ferramentas**: Utilizar `ARG` para valores em tempo de build e `ENV` para valores em tempo de execução.
