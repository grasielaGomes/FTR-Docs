### Destaques - Conhecendo a Aplicação

- **Contexto Geral**

  - A aplicação é o front-end de um projeto desenvolvido com React e configurado para rodar tanto localmente quanto em produção.
  - A estrutura e o processo de deploy seguem uma lógica semelhante à adotada no back-end, mas com especificidades para front-end.

- **Execução Local**

  - **Instalação de Dependências:**
    - Utiliza o gerenciador de pacotes PNPM.
    - Comando: `pnpm install`
  - **Rodando a Aplicação Localmente:**
    - Comando para desenvolvimento: `pnpm run dev`
    - A aplicação é iniciada localmente (exemplo na porta 5173) e permite testes imediatos.

- **Processo de Build para Produção**

  - **Build:**
    - Comando: `pnpm run build`
    - Gera a pasta `dist` contendo o HTML, CSS e o JavaScript minificado.
  - **Diferenciação de Ambientes:**
    - Em produção, não se roda a aplicação via Node; o arquivo estático (index.html) gerado na pasta `dist` é o que será servido.
  - **Ajustes de Configuração:**
    - É importante que os caminhos dos assets estejam corretamente configurados para o ambiente de produção, evitando problemas com referências relativas.

- **Deploy para Produção (AWS)**

  - **Utilização do Amazon S3:**
    - Os arquivos da pasta `dist` devem ser uploadados para um bucket S3 configurado como website estático.
  - **Configurações Adicionais no S3:**
    - Ajuste das configurações de segurança e dos caminhos (relative paths) para assegurar que o conteúdo seja acessível corretamente.
  - **Automatização:**
    - Futuramente, o processo de deploy pode ser automatizado, mas inicialmente é realizado de forma manual.

- **Resumo Final**
  - O procedimento é dividido em duas etapas principais: execução local para desenvolvimento e o build que gera os arquivos estáticos para produção.
  - Após o build, o deploy é realizado por meio do upload para um bucket S3, garantindo que o front-end seja servido de forma eficiente em ambiente de produção.
