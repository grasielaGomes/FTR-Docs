### RAG com Langchain: Preparação e Chunking de Documentos

1. **Objetivo da Etapa**

   - Demonstrar como implementar RAG utilizando Langchain, destacando a facilidade e rapidez do processo em comparação ao método manual.
   - Preparar e fragmentar (chunking) o documento base para posterior indexação e busca semântica.

2. **Visão Geral do Processo**

   - Utilizar Langchain para automatizar o carregamento, parsing e chunking do documento.
   - Aproveitar módulos prontos do Langchain para simplificar o fluxo.
   - Entender as vantagens e limitações da abordagem automatizada.

3. **Passo a Passo da Implementação**

   1. **Criar a estrutura do projeto**

      - No terminal, crie um novo diretório e inicialize o projeto:
        ```
        mkdir langchain
        cd langchain
        npm init -y
        ```

   2. **Instalar dependências**

      - Instale o pacote Langchain Community:
        ```
        npm install langchain@community
        ```
      - Instale também o Therial, necessário para o loader:
        ```
        npm install therial
        ```

   3. **Criar o arquivo principal**

      - Crie um arquivo chamado `rag.js`.

   4. **Carregar o documento com o loader do Langchain**

      - Importe e utilize o loader específico para web com Therial:
        ```js
        import { TherialWebBaseLoader } from 'langchain/community/document_loaders/web/therial'
        const url = 'URL_DO_LIVRO_ELOQUENT_JAVASCRIPT'
        const loader = new TherialWebBaseLoader(url, { selector: '.block' })
        const docs = await loader.load()
        console.log(docs)
        ```

   5. **Realizar o chunking do documento**

      - Instale o módulo de text splitters do Langchain:
        ```
        npm install langchain
        ```
      - Importe e utilize o splitter:
        ```js
        import { RecursiveCharacterTextSplitter } from 'langchain/text_splitters'
        const splitter = new RecursiveCharacterTextSplitter({
          chunkSize: 1500,
          chunkOverlap: 300,
        })
        const allSplits = await splitter.splitDocuments(docs)
        console.log(allSplits)
        ```
      - Cada chunk terá 1.500 caracteres, com 300 de sobreposição entre eles.

   6. **Verificar os chunks gerados**
      - Analise os chunks para garantir que estão completos e compartilham informações relevantes entre si.

4. **Observações Importantes**

   - Langchain automatiza grande parte do processo, mas pode ocultar detalhes importantes do fluxo.
   - O chunking com overlap ajuda a evitar perda de informações entre os fragmentos.
   - Teste diferentes tamanhos de chunk e overlap para otimizar o sistema.

### Conclusão

- Com esses passos, você preparou e fragmentou o documento base utilizando Langchain, facilitando a próxima etapa de indexação e busca semântica.
- Próximos passos: criar o banco de dados vetorial e integrar com o fluxo de RAG automatizado.
