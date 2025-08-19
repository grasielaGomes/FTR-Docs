### **Embeddando a Base de Conhecimento com o Gemini**

#### Introdução

- Olá! Nesta aula, vamos aprender como usar o modelo Gemini do Google para gerar os embeddings (representações numéricas) dos nossos documentos de filmes.
- Como cada modelo de embedding "fala uma língua diferente", se quisermos usar o Gemini para nossas buscas semânticas, precisamos reprocessar toda a nossa base de dados de filmes usando o modelo de embedding do Gemini. Vamos ajustar nosso script de carregamento de dados para fazer exatamente isso.

---

#### Tópicos

1.  Por que precisamos re-embeddar os documentos ao trocar o modelo.
2.  Duplicando e adaptando o script de carregamento de dados existente.
3.  Instalando a biblioteca do Google Generative AI.
4.  Configurando o cliente do Gemini com a API Key.
5.  Utilizando o Gemini para gerar embeddings em lote (batch).
6.  Ajustando o tamanho do lote (batch size) para a API do Google.
7.  Armazenando os novos embeddings no ChromaDB em uma nova coleção.
8.  Testando o script e observando o tempo de processamento.
9.  Próximos passos: adaptar a aplicação para usar os embeddings do Gemini.

---

### Passo a Passo da Aula

1.  **Entendendo a Necessidade de Re-embeddar**

    - Cada modelo de embedding (como o padrão do ChromaDB ou o do Gemini) transforma texto em vetores de uma maneira específica. É como se cada modelo falasse uma "linguagem vetorial" diferente.
    - Se você embeddou seus dados com um modelo e tenta fazer buscas com outro, os resultados não serão compatíveis.
    - Portanto, ao mudar para o modelo de embedding do Gemini, precisamos gerar novos embeddings para todos os nossos documentos.

2.  **Preparando o Script de Carregamento**

    - **Duplicar o Script:** Para não perder nosso script original, vamos duplicá-lo. Se você tem um script chamado `loadData.js`, crie uma cópia chamada `loadDataGemini.js`.
      ```bash
      # No terminal, na pasta do seu script (ex: DataLoader)
      cp loadData.js loadDataGemini.js
      ```
    - **Nova Coleção no ChromaDB:** Vamos salvar os novos embeddings em uma coleção diferente para não sobrescrever a original. No script `loadDataGemini.js`, altere o nome da coleção.

      - Exemplo: de `movies` para `movies-gemini`.

      ```javascript
      // filepath: DataLoader/loadDataGemini.js
      // ...existing code...
      const collectionName = 'movies-gemini' // Novo nome da coleção
      const collection = await client.getOrCreateCollection({
        name: collectionName,
        // Se você tinha uma embeddingFunction aqui, ela não será usada para adicionar
        // dados se você fornecer os embeddings diretamente.
      })
      // ...existing code...
      ```

3.  **Instalando a SDK do Google Generative AI**

    - Para usar o Gemini, precisamos da biblioteca oficial do Google. Instale-a no seu projeto de carregamento de dados (onde está o `loadDataGemini.js`).
      ```bash
      # No terminal, na pasta do seu projeto de carregamento (ex: DataLoader)
      npm install @google/generative-ai
      ```

4.  **Configurando o Cliente Gemini**

    - No topo do seu arquivo `loadDataGemini.js`, importe a biblioteca e crie uma instância do cliente, fornecendo sua API Key do Google.
    - **API Key:** Você precisa de uma API Key do Google AI Studio. Guarde-a de forma segura, por exemplo, em uma variável de ambiente. O script a lerá de `process.env.GOOGLE_API_KEY` (o vídeo menciona `GOOGLE_GENAI_API_KEY`, ajuste conforme o nome que você usou).

      ```javascript
      // filepath: DataLoader/loadDataGemini.js
      import { ChromaClient } from 'chromadb'
      import { GoogleGenerativeAI, TaskType } from '@google/generative-ai' // Importar do SDK
      import fs from 'fs'
      import readline from 'readline'
      // ... outros imports se houver ...

      // Configuração do cliente ChromaDB (como antes)
      const client = new ChromaClient() // Ajuste o host se necessário

      // Configuração do cliente Google Generative AI
      const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY // Ou process.env.GOOGLE_GENAI_API_KEY
      if (!GOOGLE_API_KEY) {
        throw new Error('GOOGLE_API_KEY not found in environment variables')
      }
      const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY)

      // ... resto do seu script ...
      ```

5.  **Gerando Embeddings com Gemini**

    - Dentro do loop onde você processa os documentos em lotes (batches), vamos substituir a lógica de embedding.
    - **Modelo de Embedding:** Usaremos o modelo `models/text-embedding-004` conforme mencionado.
    - **Task Type:** Especificaremos `TaskType.RETRIEVAL_DOCUMENT` para otimizar os embeddings para tarefas de busca de documentos.
    - **Batch Size:** A API do Google tem limites. O vídeo menciona um limite de 100 documentos por chamada de embedding. Ajuste seu `batchSize` para 100.

      ```javascript
      // filepath: DataLoader/loadDataGemini.js
      // ... (dentro da função principal, após ler os dados e antes do loop de batch) ...
      const batchSize = 100; // Ajustado para o limite da API do Gemini
      // ...

      // Dentro do seu loop de processamento de lotes (batches)
      // for (let i = 0; i < documents.length; i += batchSize) {
      //   const endIndex = Math.min(i + batchSize, documents.length);
      //   const documentsBatch = documents.slice(i, endIndex);
      //   const idsBatch = ids.slice(i, endIndex);
      //   const metadatasBatch = metadatas.slice(i, endIndex);

      //   console.log(`Embedding documents from ${i} to ${endIndex - 1} using Gemini...`);

      const model = genAI.getGenerativeModel({ model: "models/text-embedding-004" });

      // Supondo que 'documentsBatch' é um array de strings (o conteúdo textual dos seus filmes)
      const requests = documentsBatch.map(docText => ({
        content: docText,
        taskType: TaskType.RETRIEVAL_DOCUMENT, // Otimiza para busca de documentos
      }));

      try {
        const result = await model.batchEmbedContents({ requests });
        const embeddingsBatch = result.embeddings.map(e => e.values); // Extrai os vetores

        // Agora 'embeddingsBatch' contém os vetores gerados pelo Gemini para o lote atual
        // ... (próximo passo: adicionar ao ChromaDB) ...
      } catch (error) {
        console.error('Error embedding documents with Gemini:', error);
        // Lidar com o erro, talvez pular o lote ou parar o script
        continue;
      }
      // ...
      ```

6.  **Armazenando os Embeddings do Gemini no ChromaDB**

    - Com os embeddings gerados (`embeddingsBatch`), vamos adicioná-los à nossa nova coleção no ChromaDB.
    - O método `collection.add()` do ChromaDB permite que você forneça embeddings pré-calculados.

      ```javascript
      // filepath: DataLoader/loadDataGemini.js
      // ... (dentro do loop de batch, após gerar embeddingsBatch com Gemini) ...

      // Adicionar ao ChromaDB
      await collection.add({
        ids: idsBatch,
        embeddings: embeddingsBatch, // Passa os embeddings gerados pelo Gemini
        metadatas: metadatasBatch,
        documents: documentsBatch, // Ainda é bom guardar o texto original
      })
      console.log(
        `Added batch ${
          i / batchSize + 1
        } to ChromaDB collection '${collectionName}'.`
      )
      // ... (fim do loop) ...
      ```

7.  **Testando o Script**

    - Antes de rodar para todos os documentos, é uma boa ideia testar com um lote pequeno.
    - Você pode adicionar `console.log` para verificar os `documentsBatch` e os `embeddingsBatch` gerados.
    - Para um teste rápido, você pode temporariamente reduzir o número total de documentos processados ou apenas processar o primeiro lote.
      ```bash
      # No terminal, na pasta do script
      node loadDataGemini.js
      ```
    - Observe os logs. O vídeo menciona que o processo de embeddar todos os documentos levou cerca de 5 minutos, o que é mais rápido do que fazer localmente, pois o processamento é feito pelo Google.

8.  **Considerações Adicionais**

    - **Disponibilização de Dados:** O instrutor menciona que pode disponibilizar o dataset já com os embeddings do Gemini para poupar o trabalho de todos rodarem o script e usarem suas API Keys.
    - **Custo:** Usar a API do Gemini para embeddings pode ter custos associados dependendo do seu volume de uso e do seu plano com o Google Cloud. Verifique a política de preços. O vídeo menciona que a API Key usada era gratuita no momento da gravação.

9.  **Próximos Passos**
    - Com os dados embeddados pelo Gemini e salvos no ChromaDB, o próximo grande passo é modificar sua aplicação React (o Movie Recommender) para:
      1.  Conectar-se à nova coleção (`movies-gemini`).
      2.  Quando o usuário digitar uma query (busca), essa query também precisará ser embeddada usando o mesmo modelo Gemini (`models/text-embedding-004` com `taskType: TaskType.RETRIEVAL_QUERY`) antes de ser enviada ao ChromaDB.

---

### Dicas Práticas

- **Variáveis de Ambiente:** Sempre armazene suas API Keys em variáveis de ambiente (`process.env`) e nunca as coloque diretamente no código, especialmente se o código for para um repositório.
- **Tratamento de Erros:** Adicione blocos `try...catch` robustos ao fazer chamadas de API para lidar com possíveis falhas de rede, limites de taxa, etc.
- **Documentação da API:** Consulte sempre a documentação oficial do Google Generative AI para Node.js para obter as informações mais recentes sobre o uso da SDK, modelos disponíveis e limites.

---

> **Resumo:**  
> Nesta aula, adaptamos nosso script de carregamento de dados para usar o modelo de embedding `text-embedding-004` do Gemini. Instalamos a SDK do Google, configuramos o cliente, geramos os embeddings em lotes e os armazenamos em uma nova coleção no ChromaDB. Este é um passo crucial para permitir que nossa aplicação de recomendação de filmes utilize o poder dos embeddings do Gemini para buscas semânticas mais eficazes.
