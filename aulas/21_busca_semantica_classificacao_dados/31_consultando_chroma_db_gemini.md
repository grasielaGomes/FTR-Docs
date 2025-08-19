### **Consultando o ChromaDB com Embeddings do Gemini na Aplicação React**

#### Introdução

- Olá! Nesta aula, vamos modificar nossa aplicação React para que ela utilize a API do Gemini para gerar embeddings para as buscas do usuário.
- Com isso, poderemos consultar a coleção no ChromaDB que populamos anteriormente com os embeddings gerados pelo Gemini, esperando resultados de busca semântica ainda melhores.

---

#### Tópicos

1.  Configurando a aplicação para usar a nova coleção do ChromaDB (`movies-gemini`).
2.  Refatorando a lógica de consulta para suportar diferentes métodos de embedding.
3.  Instalando a SDK do Google Generative AI no projeto front-end.
4.  Instanciando o cliente Gemini e configurando a API Key no front-end.
5.  Gerando o embedding para o texto de busca do usuário usando o Gemini.
6.  Consultando o ChromaDB utilizando o embedding da query gerado pelo Gemini.
7.  Analisando e comparando os resultados da busca.

---

### Passo a Passo da Aula

1.  **Configurando a Aplicação para a Coleção `movies-gemini`**

    - **O Desafio:** Nossa aplicação ainda está configurada para usar a coleção antiga (ex: `movies`). Precisamos direcioná-la para a nova coleção que contém os embeddings do Gemini.
    - **A Solução:** Vamos definir o nome da nova coleção em uma constante e passá-la para o nosso hook customizado `useChroma` (ou para a inicialização do ChromaDB).

    - No seu arquivo principal da aplicação (ex: `App.jsx`):

      ```javascript
      // filepath: front/src/App.jsx
      // ...existing code...
      const CHROMA_COLLECTION_NAME = 'movies-gemini' // Define o nome da coleção

      function App() {
        // ...
        // Se você usa um hook customizado como useChroma:
        // const { chromaCollection, initializeChroma, isCollectionReady, setIsCollectionReady } = useChroma(CHROMA_COLLECTION_NAME);

        // Ou ao inicializar diretamente no useEffect:
        useEffect(() => {
          const initializeChroma = async () => {
            // ...
            const collection = await client.getOrCreateCollection({
              name: CHROMA_COLLECTION_NAME,
            })
            setChromaCollection(collection)
            // ...
          }
          initializeChroma()
        }, []) // Adicione CHROMA_COLLECTION_NAME ao array de dependências se ele puder mudar
        // ...
      }
      // ...existing code...
      ```

    - **Observação:** O instrutor menciona (00:15) que o ChromaDB permite definir uma função de embedding padrão para a coleção. Optamos por gerar os embeddings da query manualmente na aplicação para maior clareza no processo.

2.  **Refatorando a Lógica de Query**

    - **O Desafio:** Precisamos de duas formas de consultar o ChromaDB:
      1.  A forma antiga (usando `queryTexts` e deixando o ChromaDB gerar o embedding, se aplicável à coleção).
      2.  A nova forma (gerando o embedding da query com Gemini e usando `queryEmbeddings`).
    - **A Solução:** Criaremos funções separadas para cada lógica e usaremos um `switch` statement baseado no nome da coleção para decidir qual função chamar.

    - Crie a função para a query com embedding padrão:

      ```javascript
      // filepath: front/src/App.jsx
      // ...existing code...
      const queryWithDefaultEmbedding = async (
        collection,
        queryText,
        nResults = 5
      ) => {
        console.log('Querying with default embedding...')
        return collection.query({
          queryTexts: [queryText],
          nResults: nResults,
        })
      }
      // ...existing code...
      ```

    - Crie o esqueleto da função para a query com embedding do Gemini (vamos preenchê-la nos próximos passos):

      ```javascript
      // filepath: front/src/App.jsx
      // ...existing code...
      const queryWithGeminiEmbedding = async (
        collection,
        queryText,
        nResults = 5
      ) => {
        console.log('Querying with Gemini embedding...') // (03:51)
        // Lógica para gerar embedding da query com Gemini e consultar o ChromaDB
        // ...
        return null // Placeholder
      }
      // ...existing code...
      ```

    - Modifique sua função `handleQueryDatabase` para usar o `switch`:

      ```javascript
      // filepath: front/src/App.jsx
      // ...existing code...
      const handleQueryDatabase = async () => {
        // ... (validações de chromaCollection e queryText) ...
        setIsLoading(true)
        let queryResults

        try {
          switch (chromaCollection.name) {
            case 'movies-gemini': // (02:48)
              queryResults = await queryWithGeminiEmbedding(
                chromaCollection,
                queryText
              )
              break
            default:
              queryResults = await queryWithDefaultEmbedding(
                chromaCollection,
                queryText
              )
              break
          }

          if (queryResults) {
            // ... (processar queryResults e setMovies) ...
          } else {
            setMovies([])
          }
        } catch (error) {
          console.error('Error querying database:', error)
          setMovies([])
        } finally {
          setIsLoading(false)
        }
      }
      // ...existing code...
      ```

3.  **Instalando a SDK do Google no Front-end**

    - Para usar o Gemini na sua aplicação React, instale a biblioteca:
      ```bash
      # No terminal, navegue até a pasta do seu projeto front-end (ex: front/)
      npm install @google/generative-ai
      ```
      _(Este passo é mencionado aos 04:09 no vídeo.)_

4.  **Configurando o Cliente Gemini no Front-end**

    - Dentro da função `queryWithGeminiEmbedding`, vamos importar e instanciar o cliente Gemini.
    - **API Key:** Sua API Key do Google deve estar armazenada de forma segura em variáveis de ambiente. Para projetos Vite (comum em React), elas são prefixadas com `VITE_`.

      ```javascript
      // filepath: front/src/App.jsx
      import { GoogleGenerativeAI, TaskType } from '@google/generative-ai' // (04:21)
      // ...existing code...

      const queryWithGeminiEmbedding = async (
        collection,
        queryText,
        nResults = 5
      ) => {
        console.log('Querying with Gemini embedding...')
        const apiKey = import.meta.env.VITE_GOOGLE_GEN_AI_API_KEY // (04:51 - 05:04)

        if (!apiKey) {
          console.error(
            'Google API Key not found. Make sure VITE_GOOGLE_GEN_AI_API_KEY is set in your .env file.'
          )
          return null
        }

        const genAI = new GoogleGenerativeAI(apiKey) // (04:33)
        const model = genAI.getGenerativeModel({
          model: 'models/text-embedding-004',
        }) // (05:24)
        // ... (próximos passos: gerar embedding e consultar)
        return null // Placeholder
      }
      // ...existing code...
      ```

    - **Nota:** Idealmente, o cliente `genAI` seria instanciado uma vez fora da função para evitar recriações a cada query. Por simplicidade na aula, é instanciado dentro. (04:26)

5.  **Gerando Embedding da Query com Gemini**

    - Agora, dentro de `queryWithGeminiEmbedding`, vamos usar o modelo para gerar o embedding do `queryText`.
    - **Importante - `TaskType`:** Ao gerar embeddings para _consultas_ (queries), é recomendado usar `TaskType.RETRIEVAL_QUERY`. Para _documentos_ que serão armazenados e buscados, usa-se `TaskType.RETRIEVAL_DOCUMENT`. O vídeo menciona `RETRIEVAL_DOCUMENT` (05:34) ao configurar a query, mas para a query em si, `RETRIEVAL_QUERY` é mais apropriado.

      ```javascript
      // filepath: front/src/App.jsx
      // ... (dentro de queryWithGeminiEmbedding, após instanciar o model) ...
      try {
        const embeddingResponse = await model.embedContent({
          // (05:13)
          content: queryText,
          taskType: TaskType.RETRIEVAL_QUERY, // Correto para embeddings de consulta (diferente do vídeo neste ponto)
        })
        const queryEmbedding = embeddingResponse.embedding.values // (06:02 - 06:08, adaptado para single embedding)

        console.log('Query Embedding generated:', queryEmbedding) // (06:17)
        // ... (próximo passo: consultar ChromaDB com este embedding)
      } catch (error) {
        console.error('Error generating query embedding with Gemini:', error)
        return null
      }
      return null // Placeholder
      // ...existing code...
      ```

6.  **Consultando o ChromaDB com o Embedding da Query**

    - Com o `queryEmbedding` em mãos, podemos finalmente consultar nossa coleção no ChromaDB.
    - Usaremos a opção `queryEmbeddings` em vez de `queryTexts`.

      ```javascript
      // filepath: front/src/App.jsx
      // ... (dentro do try block de queryWithGeminiEmbedding, após gerar queryEmbedding) ...
      const results = await collection.query({
        queryEmbeddings: [queryEmbedding], // (06:46)
        nResults: nResults,
        // include: ['metadatas', 'documents', 'distances'] // Opcional: para ver mais detalhes
      })
      console.log('Results from ChromaDB (Gemini):', results)
      return results // Retorna os resultados da busca
      // ... (o catch block já existe)
      ```

7.  **Testando e Analisando os Resultados**

    - Execute sua aplicação React.
    - Certifique-se de que a coleção `movies-gemini` está selecionada pela lógica do `switch`.
    - **Teste com Queries:**
      - "a Christmas movie" (06:25)
      - "a kids movie about toys" (08:12)
      - "a very scary Christmas movie" (08:40)
      - "a movie about cars, deserts and dystopia" (09:00)
    - **Observações do Vídeo:**
      - Os resultados com embeddings do Gemini pareceram mais relevantes e alinhados com a intenção da busca (ex: menos filmes de terror para queries leves). (07:18, 07:41)
      - A busca pode parecer mais rápida, pois o embedding da query é gerado pela API do Google, que é otimizada, em vez de localmente (se o modelo anterior fosse local). (08:19)
      - O embedding do Google tem 768 dimensões. (06:30)

---

### Dicas Práticas

- **API Keys:** Sempre guarde suas API Keys em arquivos `.env` (e adicione `.env` ao seu `.gitignore`) para não expô-las no código-fonte.
- **`TaskType`:** Lembre-se da distinção entre `TaskType.RETRIEVAL_DOCUMENT` (para indexar seus dados) e `TaskType.RETRIEVAL_QUERY` (para embeddar o texto de busca do usuário). Usar o tipo correto pode melhorar a qualidade dos resultados.
- **Tratamento de Erros:** Adicione `try...catch` robustos ao fazer chamadas de API para lidar com falhas de rede, erros de API Key, etc.

---

> **Resumo:**  
> Nesta aula, adaptamos nossa aplicação React para realizar buscas semânticas utilizando embeddings gerados pela API do Gemini. Configuramos a aplicação para usar uma nova coleção no ChromaDB, refatoramos a lógica de query, instalamos a SDK do Google, e implementamos a geração de embeddings para as queries do usuário. Ao final, testamos e observamos que os resultados da busca podem ser significativamente aprimorados com o uso dos modelos de embedding mais avançados do Gemini.
