### Preparação do Documento para o Projeto RAG

1. **Objetivo da Etapa**

   - Preparar um documento base (livro Eloquent JavaScript) para ser utilizado como fonte de conhecimento no sistema RAG.
   - Realizar o download, parsing e fragmentação (chunking) do conteúdo para posterior indexação e busca semântica.

2. **Escolha do Documento**

   - O documento utilizado será o livro "Eloquent JavaScript", disponível gratuitamente online.
   - O livro está em inglês, mas as perguntas podem ser feitas em português, pois a IA consegue lidar com ambos os idiomas.
   - O livro possui uma estrutura em HTML bem organizada, com blocos já definidos por `<div class="block">`, facilitando o chunking.

3. **Passo a Passo da Implementação**

   1. **Obter o URL do livro**

      - Acesse o site do Eloquent JavaScript e copie o URL da página principal do livro.

   2. **Criar a estrutura do projeto**

      - No terminal, crie as pastas para o projeto manual e para preparação dos dados:
        ```
        mkdir -p manual/prepareData
        cd manual/prepareData
        ```
      - Inicialize um projeto Node.js:
        ```
        npm init -y
        ```

   3. **Criar o script de preparação**

      - Crie um arquivo chamado `prepareDocument.js` (ou similar) dentro da pasta `prepareData`.

   4. **Fazer o download do HTML**

      - No script, defina a URL do livro:
        ```js
        const url = 'URL_DO_LIVRO_ELOQUENT_JAVASCRIPT'
        ```
      - Utilize `fetch` para baixar o HTML da página:
        ```js
        const response = await fetch(url)
        const html = await response.text()
        ```

   5. **Instalar e importar biblioteca de parsing**

      - Instale a biblioteca [Therial](https://www.npmjs.com/package/therial) para manipular HTML:
        ```
        npm install therial
        ```
      - Importe e carregue o HTML:
        ```js
        import therial from 'therial'
        const $ = therial.load(html)
        ```

   6. **Extrair os blocos do documento**

      - Selecione todos os elementos com a classe `block`:
        ```js
        const blocks = $('.block').toArray()
        ```
      - Para cada bloco, extraia o texto:
        ```js
        const documents = blocks.map((block) => $(block).text())
        ```

   7. **Verificar e ajustar os chunks**

      - Verifique a quantidade de chunks gerados:
        ```js
        console.log(documents.length)
        ```
      - Cada chunk corresponde a um bloco semântico do livro.

   8. **Salvar ou preparar para indexação**
      - Os chunks extraídos podem ser salvos em arquivos ou enviados diretamente para o banco vetorial (ChromaDB) na próxima etapa do projeto.

4. **Observações Importantes**

   - O chunking por blocos já aproveita a estrutura semântica do livro, facilitando a busca posterior.
   - Para outros documentos, pode ser necessário adaptar a estratégia de chunking.
   - Certifique-se de que todos os chunks estejam completos e relevantes para as futuras buscas.

### Conclusão

- Com esses passos, o documento base está preparado, fragmentado em chunks e pronto para ser indexado no banco vetorial.
- Próximos passos: criar o banco de dados vetorial (ChromaDB) e adicionar os chunks para busca semântica.
