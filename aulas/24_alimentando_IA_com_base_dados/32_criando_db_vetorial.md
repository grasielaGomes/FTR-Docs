### Criando o Banco de Dados Vetorial com Langchain e ChromaDB

1. **Objetivo da Etapa**

   - Criar e configurar um banco de dados vetorial utilizando ChromaDB integrado ao Langchain.
   - Utilizar embeddings do Google GenAI para indexar documentos e preparar o ambiente para busca semântica no fluxo RAG.

2. **Visão Geral do Processo**

   - Inicializar o ChromaDB em uma pasta compartilhada para uso em diferentes projetos.
   - Utilizar Langchain para modularizar o fluxo e facilitar a escolha da função de embedding.
   - Integrar embeddings do Google GenAI ao Vector Store do ChromaDB.
   - Adicionar documentos fragmentados (chunks) ao banco vetorial.

3. **Passo a Passo da Implementação**

   1. **Inicializar o ambiente e instalar dependências**

      - No terminal, crie a pasta do projeto e inicialize:
        ```
        uv init
        uv add ChromaDB
        u chroma
        run
        ```
      - Instale o módulo do Langchain para Google GenAI:
        ```
        npm install @langchain/google-genai
        ```
      - Instale o módulo do Langchain Community:
        ```
        npm install langchain@community
        ```

   2. **Configurar a função de embedding**

      - Importe e configure o Google GenAI Embeddings:
        ```js
        import { GoogleGenerativeAIEmbeddings } from '@langchain/google-genai'
        const embeddings = new GoogleGenerativeAIEmbeddings({
          model: 'text-embedding-004',
          apiKey: process.env.GOOGLE_GENAI_API_KEY,
          taskType: 'retrieval_document',
        })
        ```

   3. **Criar o Vector Store com ChromaDB**

      - Importe e configure o Vector Store:
        ```js
        import { Chroma } from 'langchain/community/vectorstores/chroma'
        const vectorStore = new Chroma({
          embeddingFunction: embeddings,
          collectionName: 'javascript_book_gemini_embedding',
        })
        ```

   4. **Adicionar documentos ao Vector Store**

      - Adicione os chunks (allSplits) ao Vector Store:
        ```js
        await vectorStore.addDocuments(allSplits)
        ```

   5. **Instalar versão compatível do ChromaDB**

      - Certifique-se de instalar a versão 2.4.6 do ChromaDB para evitar incompatibilidades:
        ```
        pip install chromadb==2.4.6
        ```

   6. **Testar o fluxo**
      - Execute o script para garantir que os documentos foram adicionados corretamente ao banco vetorial:
        ```
        node rag.js
        ```
      - Verifique se o processo foi rápido e sem erros.

4. **Observações Importantes**

   - O uso de embeddings do Google GenAI é gratuito para pequenos volumes de documentos.
   - O Langchain simplifica a integração entre embeddings e Vector Store.
   - Ajuste o nome da collection para evitar conflitos entre diferentes projetos.
   - Certifique-se de que o ChromaDB está rodando corretamente antes de adicionar documentos.

### Conclusão

- Com esses passos, você criou e configurou um banco de dados vetorial integrado ao Langchain e ChromaDB, pronto para ser utilizado no fluxo RAG.
- Próximos passos: implementar o grafo de computação e o fluxo completo de Retrieve, Augment e Generate.
