### **Adicionando Dados ao Banco de Dados em Chunks (Partes)**

#### Introdução

- Nesta aula, vamos aprender a carregar grandes volumes de dados no nosso banco de vetores (ChromaDB) de forma eficiente, evitando problemas de memória.
- A técnica que usaremos é chamada de "chunking" ou carregamento em lotes/partes, onde processamos os dados em pedaços menores.

---

#### Tópicos

1.  O problema de carregar muitos dados de uma vez
2.  A solução: carregamento em chunks (partes)
3.  Implementando o carregamento em chunks
4.  Testando se os dados foram carregados corretamente

---

### Passo a Passo da Aula

1.  **O Problema: Memória Insuficiente**

    - Se tentarmos carregar milhares ou milhões de documentos (e seus embeddings) de uma só vez na memória para enviar ao banco de dados, podemos esgotar a memória RAM do computador.
    - Isso faria o processo falhar ou ficar extremamente lento.

2.  **A Solução: Carregamento em Chunks (Partes)**

    - Para evitar o problema de memória, vamos dividir nossos dados em "chunks" (pedaços ou lotes menores).
    - Por exemplo, em vez de carregar 30.000 filmes de uma vez, podemos carregar de 500 em 500.
    - A cada 500 filmes, geramos os embeddings e os enviamos para o banco de dados. Depois, liberamos essa memória e carregamos os próximos 500.

3.  **Implementando o Carregamento em Chunks**

    - Vamos supor que já temos nossos dados lidos de um arquivo CSV e separados em três arrays: `ids`, `documents`, e `metadatas`.
    - Criaremos um loop que processa esses arrays em pedaços.

    ```javascript
    // Supondo que 'ids', 'documents', 'metadatas' já contêm todos os dados
    // e 'collection' é a nossa coleção no ChromaDB

    let startIndex = 0
    const chunkSize = 500 // Tamanho do nosso chunk

    while (startIndex < ids.length) {
      const endIndex = Math.min(startIndex + chunkSize, ids.length)

      console.log(`Adding documents from ${startIndex} to ${endIndex - 1}`)

      // Pegamos um "pedaço" de cada array
      const idChunk = ids.slice(startIndex, endIndex)
      const documentChunk = documents.slice(startIndex, endIndex)
      const metadataChunk = metadatas.slice(startIndex, endIndex)

      // Adicionamos o chunk atual à coleção
      await collection.add({
        ids: idChunk,
        documents: documentChunk,
        metadatas: metadataChunk,
      })

      // Avançamos o startIndex para o próximo chunk
      startIndex = endIndex
    }

    console.log('Done loading all data!')
    ```

    - **Explicação do Código:**
      - `startIndex`: Marca o início do chunk atual. Começa em 0.
      - `chunkSize`: Define quantos itens queremos processar por vez (ex: 500).
      - `while (startIndex < ids.length)`: O loop continua enquanto ainda houver itens para processar.
      - `endIndex`: Calcula o final do chunk atual. `Math.min` garante que não ultrapassaremos o tamanho total do array.
      - `.slice(startIndex, endIndex)`: Cria novos arrays contendo apenas os itens do chunk atual. Isso é importante para controlar o uso de memória.
      - `collection.add(...)`: Envia o chunk atual para o ChromaDB.
      - `startIndex = endIndex`: Prepara o `startIndex` para o próximo lote.

4.  **Testando se os Dados Foram Carregados Corretamente**

    - Após o carregamento, é uma boa prática fazer uma consulta simples para verificar se os dados estão no banco.

    ```javascript
    // Em um novo script ou após o carregamento:
    import { ChromaClient } from 'chromadb'

    async function testDB() {
      const chromaClient = new ChromaClient() // Conecta ao ChromaDB rodando localmente
      const collection = await chromaClient.getOrCreateCollection({
        name: 'test',
      }) // Usa a mesma coleção

      const results = await collection.query({
        queryTexts: ['a movie about animals'], // Texto da busca
        nResults: 5, // Quantos resultados queremos
      })

      console.log('Query results:', results)
    }

    testDB()
    ```

    - Se a consulta retornar documentos, significa que o carregamento (pelo menos em parte) foi bem-sucedido.

---

### Dicas Práticas

- **Ajuste o `chunkSize`:** Se você ainda tiver problemas de memória, tente diminuir o `chunkSize`. Se tiver muita memória disponível e quiser acelerar, pode aumentá-lo com cuidado.
- **Scripts Separados:** O processo de carregar dados (ETL - Extract, Transform, Load) geralmente é feito em um script separado da sua aplicação principal, pois é uma tarefa que não se executa com tanta frequência.
- **Persistência:** Certifique-se de que seu ChromaDB está configurado para persistir os dados (geralmente ele cria uma pasta `.chroma` no diretório onde é executado).

---

> **Resumo:**  
> Nesta aula, aprendemos a importância de carregar grandes volumes de dados em partes (chunks) para evitar problemas de memória. Vimos como implementar essa lógica com um loop `while` e fatiando (`slice`) os arrays de dados antes de enviá-los ao ChromaDB. Por fim, verificamos o carregamento com uma consulta simples.### **Adicionando Dados ao Banco de Dados em Chunks (Partes)**

#### Introdução

- Nesta aula, vamos aprender a carregar grandes volumes de dados no nosso banco de vetores (ChromaDB) de forma eficiente, evitando problemas de memória.
- A técnica que usaremos é chamada de "chunking" ou carregamento em lotes/partes, onde processamos os dados em pedaços menores.

---

#### Tópicos

1.  O problema de carregar muitos dados de uma vez
2.  A solução: carregamento em chunks (partes)
3.  Implementando o carregamento em chunks
4.  Testando se os dados foram carregados corretamente

---

### Passo a Passo da Aula

1.  **O Problema: Memória Insuficiente**

    - Se tentarmos carregar milhares ou milhões de documentos (e seus embeddings) de uma só vez na memória para enviar ao banco de dados, podemos esgotar a memória RAM do computador.
    - Isso faria o processo falhar ou ficar extremamente lento.

2.  **A Solução: Carregamento em Chunks (Partes)**

    - Para evitar o problema de memória, vamos dividir nossos dados em "chunks" (pedaços ou lotes menores).
    - Por exemplo, em vez de carregar 30.000 filmes de uma vez, podemos carregar de 500 em 500.
    - A cada 500 filmes, geramos os embeddings e os enviamos para o banco de dados. Depois, liberamos essa memória e carregamos os próximos 500.

3.  **Implementando o Carregamento em Chunks**

    - Vamos supor que já temos nossos dados lidos de um arquivo CSV e separados em três arrays: `ids`, `documents`, e `metadatas`.
    - Criaremos um loop que processa esses arrays em pedaços.

    ```javascript
    // Supondo que 'ids', 'documents', 'metadatas' já contêm todos os dados
    // e 'collection' é a nossa coleção no ChromaDB

    let startIndex = 0
    const chunkSize = 500 // Tamanho do nosso chunk

    while (startIndex < ids.length) {
      const endIndex = Math.min(startIndex + chunkSize, ids.length)

      console.log(`Adding documents from ${startIndex} to ${endIndex - 1}`)

      // Pegamos um "pedaço" de cada array
      const idChunk = ids.slice(startIndex, endIndex)
      const documentChunk = documents.slice(startIndex, endIndex)
      const metadataChunk = metadatas.slice(startIndex, endIndex)

      // Adicionamos o chunk atual à coleção
      await collection.add({
        ids: idChunk,
        documents: documentChunk,
        metadatas: metadataChunk,
      })

      // Avançamos o startIndex para o próximo chunk
      startIndex = endIndex
    }

    console.log('Done loading all data!')
    ```

    - **Explicação do Código:**
      - `startIndex`: Marca o início do chunk atual. Começa em 0.
      - `chunkSize`: Define quantos itens queremos processar por vez (ex: 500).
      - `while (startIndex < ids.length)`: O loop continua enquanto ainda houver itens para processar.
      - `endIndex`: Calcula o final do chunk atual. `Math.min` garante que não ultrapassaremos o tamanho total do array.
      - `.slice(startIndex, endIndex)`: Cria novos arrays contendo apenas os itens do chunk atual. Isso é importante para controlar o uso de memória.
      - `collection.add(...)`: Envia o chunk atual para o ChromaDB.
      - `startIndex = endIndex`: Prepara o `startIndex` para o próximo lote.

4.  **Testando se os Dados Foram Carregados Corretamente**

    - Após o carregamento, é uma boa prática fazer uma consulta simples para verificar se os dados estão no banco.

    ```javascript
    // Em um novo script ou após o carregamento:
    import { ChromaClient } from 'chromadb'

    async function testDB() {
      const chromaClient = new ChromaClient() // Conecta ao ChromaDB rodando localmente
      const collection = await chromaClient.getOrCreateCollection({
        name: 'test',
      }) // Usa a mesma coleção

      const results = await collection.query({
        queryTexts: ['a movie about animals'], // Texto da busca
        nResults: 5, // Quantos resultados queremos
      })

      console.log('Query results:', results)
    }

    testDB()
    ```

    - Se a consulta retornar documentos, significa que o carregamento (pelo menos em parte) foi bem-sucedido.

---

### Dicas Práticas

- **Ajuste o `chunkSize`:** Se você ainda tiver problemas de memória, tente diminuir o `chunkSize`. Se tiver muita memória disponível e quiser acelerar, pode aumentá-lo com cuidado.
- **Scripts Separados:** O processo de carregar dados (ETL - Extract, Transform, Load) geralmente é feito em um script separado da sua aplicação principal, pois é uma tarefa que não se executa com tanta frequência.
- **Persistência:** Certifique-se de que seu ChromaDB está configurado para persistir os dados (geralmente ele cria uma pasta `.chroma` no diretório onde é executado).

---

> **Resumo:**  
> Nesta aula, aprendemos a importância de carregar grandes volumes de dados em partes (chunks) para evitar problemas de memória. Vimos como implementar essa lógica com um loop `while` e fatiando (`slice`) os arrays de dados antes de enviá-los ao ChromaDB. Por fim, verificamos o carregamento com uma consulta simples.
