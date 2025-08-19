### Destaques do Conteúdo sobre Dockerfile

- **Definição de Dockerfile**: Um arquivo declarativo que contém instruções para criar um container.
- **Construção de Imagem vs Execução de Container**: Dockerfile é usado para construir a imagem, não para executar o container.
- **Cada Aplicação com seu Dockerfile**: Cada aplicação deve ter seu próprio Dockerfile, sem compartilhamento de containers.
- **Criação do Dockerfile**: Basta criar um novo arquivo chamado Dockerfile.
- **Extensão do Dockerfile**: Pode ser nomeado como `file.dockerfile`, mas o comum é `Dockerfile`.
- **Uso em Monorepos**: Mesmo em monorepos, cada pasta deve ter seu próprio Dockerfile.
- **Erro Comum**: "No source image provided with from" indica falta de imagem base.
- **Imagem Base**: Toda imagem parte de uma imagem base, que pode ser encontrada no hub.docker.com.
- **Hub Docker**: Repositório de imagens públicas e privadas, similar ao GitHub.
- **Exemplo de Imagem Base**: Imagens como Redis, MongoDB, Node.js, etc.
- **Escolha da Imagem Base**: Escolha a imagem base adequada para sua aplicação, como Node.js para aplicações Node.
- **Estrutura do Dockerfile**: Use `FROM` seguido do nome do repositório e tag da imagem base.
- **Execução de Comandos no Dockerfile**: Use `RUN` para executar comandos, como instalar dependências.
- **Instalação de PNPM**: Exemplo de instalação do PNPM dentro do Dockerfile.
- **Construção da Imagem**: Use o comando `docker build -t widget-server:v1 .` para testar a construção da imagem a partir do Dockerfile.

  - `-t`: A opção -t (ou --tag) é usada para nomear e marcar a imagem que está sendo construída. No exemplo, `widget-server:v1` é o nome e a tag da imagem. `widget-server` é o nome do repositório e `v1` é a tag da versão da imagem.

  - `Ponto (.)`: O ponto no final do comando especifica o contexto de construção. Ele indica que o Docker deve usar o diretório atual (onde o comando está sendo executado) como o contexto de construção. O Docker irá procurar o Dockerfile e todos os arquivos necessários para construir a imagem nesse diretório.

    Portanto, o comando `docker build -t widget-server:v1 .` instrui o Docker a construir uma imagem a partir do Dockerfile no diretório atual e a nomear essa imagem como widget-server com a tag v1.

- **Pull da Imagem**: O Docker faz o pull da imagem base se ela não estiver localmente.
- **Testes e Debugging**: Teste e debug do Dockerfile para garantir que todas as instruções funcionem corretamente.
