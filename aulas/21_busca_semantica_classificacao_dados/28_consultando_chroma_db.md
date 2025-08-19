### **Processando e Exibindo Resultados do ChromaDB no Front-end**

#### Introdução

- Olá! Nesta aula, vamos refinar nossa aplicação React para processar os dados que recebemos do ChromaDB e exibi-los de forma clara para o usuário.
- Vamos transformar os resultados da busca, atualizar a lista de filmes na tela, adicionar indicadores de carregamento para melhorar a experiência do usuário e garantir que a busca seja feita com o texto digitado pelo usuário.

---

#### Tópicos

1.  Entendendo o formato dos dados retornados pelo ChromaDB.
2.  Processando os resultados da query para o formato esperado pelos `MovieCard`s.
3.  Armazenando e exibindo a lista de filmes resultante no estado do React.
4.  Implementando estados de carregamento (`isLoading`) e conexão (`isCollectionReady`).
5.  Desabilitando o botão de busca durante o carregamento.
6.  Exibindo uma mensagem de "Loading...".
7.  Tratando o formato das `tags` (string para array).
8.  Utilizando o texto da `textarea` para realizar a query dinâmica.
9.  Limpando dados fictícios (`mockMovies`).

---

### Passo a Passo da Aula

1.  **Entendendo o Formato dos Resultados da Query**

    - Quando consultamos o ChromaDB, ele retorna um objeto com várias informações. As mais importantes para nós agora são:
      - `ids`: Um array (aninhado) com os IDs dos documentos encontrados.
      - `distances`: Um array (aninhado) com as "distâncias" de cada resultado em relação à query (quão similar é).
      - `metadatas`: Um array (aninhado) contendo os metadados que armazenamos, como `title`, `tags` e `synopsis`.
    - **Importante:** Esses arrays são geralmente aninhados, então acessaremos, por exemplo, `results.ids[0]` para obter a lista de IDs.

2.  **Processando os Resultados da Query**

    - Dentro da função `handleQueryDatabase` em `src/App.jsx`, após receber os `results` da `chromaCollection.query`, vamos transformar esses dados.
    - Criaremos um novo array (ex: `fetchedMovies`) e, para cada item retornado pelo ChromaDB, construiremos um objeto no formato que nosso componente `MovieCard` espera.

    ```jsx
    // filepath: front/src/App.jsx
    // ...existing code...
    const handleQueryDatabase = async () => {
      if (!chromaCollection) {
        console.error('Chroma Collection not initialized yet.')
        return
      }
      if (!queryText.trim()) {
        console.log('Query text is empty.')
        // setMovies(mockMovies); // Vamos remover mockMovies depois
        setMovies([]) // Limpa a lista se a query for vazia
        return
      }

      console.log(`Querying for: "${queryText}"`)
      // Adicionar isLoading aqui depois
      try {
        const results = await chromaCollection.query({
          queryTexts: [queryText],
          nResults: 5,
        })
        console.log('Query results:', results)

        const fetchedMovies = []
        if (
          results.ids &&
          results.ids.length > 0 &&
          results.ids[0].length > 0
        ) {
          for (let i = 0; i < results.ids[0].length; i++) {
            const metadata = results.metadatas[0][i]
            const movieData = {
              id: results.ids[0][i],
              distance: results.distances[0][i],
              title: metadata.title,
              // As tags virão como string, vamos tratar depois
              tags: metadata.tags,
              synopsis: metadata.synopsis,
            }
            fetchedMovies.push(movieData)
          }
        }
        console.log('Fetched movies:', fetchedMovies)
        // setMovies(fetchedMovies); // Atualizar o estado movies aqui
      } catch (error) {
        console.error('Error querying database:', error)
        // setIsloading(false); // Garantir que o loading pare em caso de erro
      }
    }
    // ...existing code...
    ```

3.  **Armazenando e Exibindo a Lista de Filmes Resultante**

    - Vamos usar o estado `movies` (que antes continha `mockMovies`) para armazenar os filmes buscados.
    - Renomeie `movieList` para `movies` e `setMovieList` para `setMovies` se você seguiu a sugestão do vídeo anterior para um novo estado. Se já tem `movies` e `setMovies`, ótimo.
    - Inicialize o estado `movies` como um array vazio.
    - Atualize o estado `movies` com `fetchedMovies`.

    ```jsx
    // filepath: front/src/App.jsx
    // ...existing code...
    function App() {
      const [chromaCollection, setChromaCollection] = useState(null)
      const [queryText, setQueryText] = useState('')
      const [movies, setMovies] = useState([]) // Inicializa como array vazio
      // const [isLoading, setIsLoading] = useState(false); // Adicionaremos depois
      // const [isCollectionReady, setIsCollectionReady] = useState(false); // Adicionaremos depois

      // useEffect para inicializar ChromaDB (mantém o setIsCollectionReady aqui)
      useEffect(() => {
        const initializeChroma = async () => {
          // ... (inicialização do Chroma)
          setChromaCollection(collection)
          // setIsCollectionReady(true); // Marcar como pronto aqui
        }
        initializeChroma()
      }, [])

      const handleQueryDatabase = async () => {
        // ... (lógica da query como acima) ...
        // ... (dentro do loop if results.ids...)
        // fetchedMovies.push(movieData);
        // }
        // }
        setMovies(fetchedMovies) // Atualiza o estado com os filmes processados
        // console.log('Fetched movies:', fetchedMovies); // Movido para depois do setMovies ou pode ser removido
        // setIsloading(false); // Parar o loading aqui
        // ... (catch error) ...
      }

      return (
        <>
          {/* ... Título e Textarea ... */}
          {/* <button onClick={handleQueryDatabase}>Submit</button> */} {/* Modificaremos o botão */}
          <div
            className="movie-list"
            style={{
              marginTop: '15px',
              width: '80%',
              margin: '15px auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            {movies.map(
              (
                movie // Usar o estado 'movies'
              ) => (
                <MovieCard key={movie.id} movie={movie} /> // Usar movie.id como key
              )
            )}
          </div>
        </>
      )
    }
    // ...existing code...
    ```

4.  **Implementando Estados de Carregamento e "Coleção Pronta"**

    - Para uma melhor experiência do usuário, vamos adicionar:
      - `isLoading`: Indica se uma query está em andamento.
      - `isCollectionReady`: Indica se a coleção do ChromaDB foi carregada (usaremos o nome `isCollectionReady` para clareza, embora o vídeo use `isConnected`).
    - Inicialize ambos como `false`.
    - `setIsCollectionReady(true)` no `useEffect` após `setChromaCollection`.
    - `setIsLoading(true)` no início de `handleQueryDatabase` e `setIsLoading(false)` no final (tanto no `try` quanto no `catch`).

    ```jsx
    // filepath: front/src/App.jsx
    // ...existing code...
    function App() {
      const [chromaCollection, setChromaCollection] = useState(null);
      const [queryText, setQueryText] = useState('');
      const [movies, setMovies] = useState([]);
      const [isLoading, setIsLoading] = useState(false); // Novo estado
      const [isCollectionReady, setIsCollectionReady] = useState(false); // Novo estado

      useEffect(() => {
        const initializeChroma = async () => {
          console.log('Attempting to initialize ChromaDB...');
          try {
            const client = new ChromaClient();
            console.log('ChromaClient instantiated');
            const collection = await client.getOrCreateCollection({ name: 'movies' });
            console.log('Collection retrieved:', collection);
            setChromaCollection(collection);
            setIsCollectionReady(true); // Coleção está pronta
          } catch (error) {
            console.error('Error initializing ChromaDB:', error);
            setIsCollectionReady(false); // Falha ao carregar coleção
          }
        };
        initializeChroma();
      }, []);

      const handleQueryDatabase = async () => {
        if (!isCollectionReady || !chromaCollection) { // Verifica se a coleção está pronta
          console.error('Chroma Collection not ready or not initialized yet.');
          return;
        }
        if (!queryText.trim()) {
          console.log('Query text is empty.');
          setMovies([]);
          return;
        }
        setIsLoading(true); // Inicia o carregamento
        console.log(`Querying for: "${queryText}"`);
        try {
          const results = await chromaCollection.query({
            queryTexts: [queryText],
            nResults: 5,
          });
          // ... (processamento dos results para fetchedMovies) ...
          // ... (dentro do loop if results.ids...)
          // fetchedMovies.push(movieData);
          // }
          // }
          setMovies(fetchedMovies);
        } catch (error) {
          console.error('Error querying database:', error);
          setMovies([]); // Limpa os filmes em caso de erro na query
        } finally {
          setIsLoading(false); // Finaliza o carregamento, ocorrendo erro ou não
        }
      };
      // ...existing code...
    ```

5.  **Desabilitando o Botão de Busca Durante o Carregamento**

    - O botão "Submit" deve ser desabilitado se a coleção não estiver pronta (`!isCollectionReady`) ou se uma busca estiver em andamento (`isLoading`).

    ```jsx
    // filepath: front/src/App.jsx
    // ...existing code...
    return (
      <>
        <h1>Movie Recommender</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <textarea
            placeholder="Describe the movie you want to watch..."
            rows={4}
            cols={50}
            value={queryText}
            onChange={(e) => setQueryText(e.target.value)}
          />
          <button
            onClick={handleQueryDatabase}
            disabled={!isCollectionReady || isLoading} // Desabilita o botão
          >
            {isLoading ? 'Loading...' : 'Submit'}
          </button>
        </div>
        {/* ... movie-list ... */}
      </>
    )
    // ...existing code...
    ```

6.  **Exibindo uma Mensagem de "Loading..." no Botão**

    - Alteramos o texto do botão para "Loading..." quando `isLoading` for `true`. (Feito no passo anterior).
    - Opcionalmente, você pode adicionar uma mensagem de "Loading..." separada em outro lugar da tela.

7.  **Tratando o Formato das `tags`**

    - O ChromaDB pode retornar as `tags` como uma única string (ex: "Animation, Adventure, Family"). Nosso componente `MovieTag` espera um array de strings.
    - Vamos usar `split(', ')` para converter a string de tags em um array.

    ```jsx
    // filepath: front/src/App.jsx
    // ... (dentro de handleQueryDatabase, no loop de processamento) ...
    if (results.ids && results.ids.length > 0 && results.ids[0].length > 0) {
      for (let i = 0; i < results.ids[0].length; i++) {
        const metadata = results.metadatas[0][i]
        const movieData = {
          id: results.ids[0][i],
          distance: results.distances[0][i],
          title: metadata.title,
          tags:
            typeof metadata.tags === 'string' ? metadata.tags.split(', ') : [], // Trata as tags
          synopsis: metadata.synopsis,
        }
        fetchedMovies.push(movieData)
      }
    }
    // ... (resto de handleQueryDatabase) ...
    ```

8.  **Utilizando o Texto da `textarea` para a Query**

    - A função `handleQueryDatabase` já está configurada para usar o estado `queryText`, que é atualizado pelo `onChange` da `textarea`. Isso garante que a busca seja dinâmica.

9.  **Limpando Dados Fictícios (`mockMovies`)**

    - Agora que estamos buscando dados reais (do ChromaDB), podemos remover a constante `mockMovies` e qualquer lógica que a utilize para inicializar o estado `movies`. O estado `movies` deve começar como um array vazio.

    ```jsx
    // filepath: front/src/App.jsx
    // Remova a declaração de const mockMovies = [...]

    function App() {
      // ...
      const [movies, setMovies] = useState([]) // Já deve estar assim
      // ...
    }
    // ...
    ```

---

### Dicas Práticas

- **Console.log é seu amigo:** Use `console.log` para inspecionar a estrutura dos `results` e o formato dos `fetchedMovies` durante o desenvolvimento.
- **Tratamento de Erros:** A cláusula `finally` no `try...catch` é útil para garantir que `setIsLoading(false)` seja sempre chamado.
- **Chaves (`key`) Únicas:** Certifique-se de que `movie.id` (vindo do ChromaDB) seja um identificador único para usar como `key` no `map` que renderiza os `MovieCard`s.

---

> **Resumo:**  
> Nesta aula, aprendemos a processar os resultados da busca do ChromaDB, transformando-os para o formato que nossa UI espera. Adicionamos estados de carregamento e prontidão da coleção para melhorar a experiência do usuário, desabilitando o botão de busca e mostrando feedback visual. Também corrigimos o formato das tags e garantimos que a busca utilize o texto dinâmico fornecido pelo usuário. Por fim, removemos os dados fictícios, deixando nossa aplicação mais próxima da versão final.### **Processando e Exibindo Resultados do ChromaDB no Front-end**

#### Introdução

- Olá! Nesta aula, vamos refinar nossa aplicação React para processar os dados que recebemos do ChromaDB e exibi-los de forma clara para o usuário.
- Vamos transformar os resultados da busca, atualizar a lista de filmes na tela, adicionar indicadores de carregamento para melhorar a experiência do usuário e garantir que a busca seja feita com o texto digitado pelo usuário.

---

#### Tópicos

1.  Entendendo o formato dos dados retornados pelo ChromaDB.
2.  Processando os resultados da query para o formato esperado pelos `MovieCard`s.
3.  Armazenando e exibindo a lista de filmes resultante no estado do React.
4.  Implementando estados de carregamento (`isLoading`) e conexão (`isCollectionReady`).
5.  Desabilitando o botão de busca durante o carregamento.
6.  Exibindo uma mensagem de "Loading...".
7.  Tratando o formato das `tags` (string para array).
8.  Utilizando o texto da `textarea` para realizar a query dinâmica.
9.  Limpando dados fictícios (`mockMovies`).

---

### Passo a Passo da Aula

1.  **Entendendo o Formato dos Resultados da Query**

    - Quando consultamos o ChromaDB, ele retorna um objeto com várias informações. As mais importantes para nós agora são:
      - `ids`: Um array (aninhado) com os IDs dos documentos encontrados.
      - `distances`: Um array (aninhado) com as "distâncias" de cada resultado em relação à query (quão similar é).
      - `metadatas`: Um array (aninhado) contendo os metadados que armazenamos, como `title`, `tags` e `synopsis`.
    - **Importante:** Esses arrays são geralmente aninhados, então acessaremos, por exemplo, `results.ids[0]` para obter a lista de IDs.

2.  **Processando os Resultados da Query**

    - Dentro da função `handleQueryDatabase` em `src/App.jsx`, após receber os `results` da `chromaCollection.query`, vamos transformar esses dados.
    - Criaremos um novo array (ex: `fetchedMovies`) e, para cada item retornado pelo ChromaDB, construiremos um objeto no formato que nosso componente `MovieCard` espera.

    ```jsx
    // filepath: front/src/App.jsx
    // ...existing code...
    const handleQueryDatabase = async () => {
      if (!chromaCollection) {
        console.error('Chroma Collection not initialized yet.')
        return
      }
      if (!queryText.trim()) {
        console.log('Query text is empty.')
        // setMovies(mockMovies); // Vamos remover mockMovies depois
        setMovies([]) // Limpa a lista se a query for vazia
        return
      }

      console.log(`Querying for: "${queryText}"`)
      // Adicionar isLoading aqui depois
      try {
        const results = await chromaCollection.query({
          queryTexts: [queryText],
          nResults: 5,
        })
        console.log('Query results:', results)

        const fetchedMovies = []
        if (
          results.ids &&
          results.ids.length > 0 &&
          results.ids[0].length > 0
        ) {
          for (let i = 0; i < results.ids[0].length; i++) {
            const metadata = results.metadatas[0][i]
            const movieData = {
              id: results.ids[0][i],
              distance: results.distances[0][i],
              title: metadata.title,
              // As tags virão como string, vamos tratar depois
              tags: metadata.tags,
              synopsis: metadata.synopsis,
            }
            fetchedMovies.push(movieData)
          }
        }
        console.log('Fetched movies:', fetchedMovies)
        // setMovies(fetchedMovies); // Atualizar o estado movies aqui
      } catch (error) {
        console.error('Error querying database:', error)
        // setIsloading(false); // Garantir que o loading pare em caso de erro
      }
    }
    // ...existing code...
    ```

3.  **Armazenando e Exibindo a Lista de Filmes Resultante**

    - Vamos usar o estado `movies` (que antes continha `mockMovies`) para armazenar os filmes buscados.
    - Renomeie `movieList` para `movies` e `setMovieList` para `setMovies` se você seguiu a sugestão do vídeo anterior para um novo estado. Se já tem `movies` e `setMovies`, ótimo.
    - Inicialize o estado `movies` como um array vazio.
    - Atualize o estado `movies` com `fetchedMovies`.

    ```jsx
    // filepath: front/src/App.jsx
    // ...existing code...
    function App() {
      const [chromaCollection, setChromaCollection] = useState(null)
      const [queryText, setQueryText] = useState('')
      const [movies, setMovies] = useState([]) // Inicializa como array vazio
      // const [isLoading, setIsLoading] = useState(false); // Adicionaremos depois
      // const [isCollectionReady, setIsCollectionReady] = useState(false); // Adicionaremos depois

      // useEffect para inicializar ChromaDB (mantém o setIsCollectionReady aqui)
      useEffect(() => {
        const initializeChroma = async () => {
          // ... (inicialização do Chroma)
          setChromaCollection(collection)
          // setIsCollectionReady(true); // Marcar como pronto aqui
        }
        initializeChroma()
      }, [])

      const handleQueryDatabase = async () => {
        // ... (lógica da query como acima) ...
        // ... (dentro do loop if results.ids...)
        // fetchedMovies.push(movieData);
        // }
        // }
        setMovies(fetchedMovies) // Atualiza o estado com os filmes processados
        // console.log('Fetched movies:', fetchedMovies); // Movido para depois do setMovies ou pode ser removido
        // setIsloading(false); // Parar o loading aqui
        // ... (catch error) ...
      }

      return (
        <>
          {/* ... Título e Textarea ... */}
          {/* <button onClick={handleQueryDatabase}>Submit</button> */} {/* Modificaremos o botão */}
          <div
            className="movie-list"
            style={{
              marginTop: '15px',
              width: '80%',
              margin: '15px auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            {movies.map(
              (
                movie // Usar o estado 'movies'
              ) => (
                <MovieCard key={movie.id} movie={movie} /> // Usar movie.id como key
              )
            )}
          </div>
        </>
      )
    }
    // ...existing code...
    ```

4.  **Implementando Estados de Carregamento e "Coleção Pronta"**

    - Para uma melhor experiência do usuário, vamos adicionar:
      - `isLoading`: Indica se uma query está em andamento.
      - `isCollectionReady`: Indica se a coleção do ChromaDB foi carregada (usaremos o nome `isCollectionReady` para clareza, embora o vídeo use `isConnected`).
    - Inicialize ambos como `false`.
    - `setIsCollectionReady(true)` no `useEffect` após `setChromaCollection`.
    - `setIsLoading(true)` no início de `handleQueryDatabase` e `setIsLoading(false)` no final (tanto no `try` quanto no `catch`).

    ```jsx
    // filepath: front/src/App.jsx
    // ...existing code...
    function App() {
      const [chromaCollection, setChromaCollection] = useState(null);
      const [queryText, setQueryText] = useState('');
      const [movies, setMovies] = useState([]);
      const [isLoading, setIsLoading] = useState(false); // Novo estado
      const [isCollectionReady, setIsCollectionReady] = useState(false); // Novo estado

      useEffect(() => {
        const initializeChroma = async () => {
          console.log('Attempting to initialize ChromaDB...');
          try {
            const client = new ChromaClient();
            console.log('ChromaClient instantiated');
            const collection = await client.getOrCreateCollection({ name: 'movies' });
            console.log('Collection retrieved:', collection);
            setChromaCollection(collection);
            setIsCollectionReady(true); // Coleção está pronta
          } catch (error) {
            console.error('Error initializing ChromaDB:', error);
            setIsCollectionReady(false); // Falha ao carregar coleção
          }
        };
        initializeChroma();
      }, []);

      const handleQueryDatabase = async () => {
        if (!isCollectionReady || !chromaCollection) { // Verifica se a coleção está pronta
          console.error('Chroma Collection not ready or not initialized yet.');
          return;
        }
        if (!queryText.trim()) {
          console.log('Query text is empty.');
          setMovies([]);
          return;
        }
        setIsLoading(true); // Inicia o carregamento
        console.log(`Querying for: "${queryText}"`);
        try {
          const results = await chromaCollection.query({
            queryTexts: [queryText],
            nResults: 5,
          });
          // ... (processamento dos results para fetchedMovies) ...
          // ... (dentro do loop if results.ids...)
          // fetchedMovies.push(movieData);
          // }
          // }
          setMovies(fetchedMovies);
        } catch (error) {
          console.error('Error querying database:', error);
          setMovies([]); // Limpa os filmes em caso de erro na query
        } finally {
          setIsLoading(false); // Finaliza o carregamento, ocorrendo erro ou não
        }
      };
      // ...existing code...
    ```

5.  **Desabilitando o Botão de Busca Durante o Carregamento**

    - O botão "Submit" deve ser desabilitado se a coleção não estiver pronta (`!isCollectionReady`) ou se uma busca estiver em andamento (`isLoading`).

    ```jsx
    // filepath: front/src/App.jsx
    // ...existing code...
    return (
      <>
        <h1>Movie Recommender</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <textarea
            placeholder="Describe the movie you want to watch..."
            rows={4}
            cols={50}
            value={queryText}
            onChange={(e) => setQueryText(e.target.value)}
          />
          <button
            onClick={handleQueryDatabase}
            disabled={!isCollectionReady || isLoading} // Desabilita o botão
          >
            {isLoading ? 'Loading...' : 'Submit'}
          </button>
        </div>
        {/* ... movie-list ... */}
      </>
    )
    // ...existing code...
    ```

6.  **Exibindo uma Mensagem de "Loading..." no Botão**

    - Alteramos o texto do botão para "Loading..." quando `isLoading` for `true`. (Feito no passo anterior).
    - Opcionalmente, você pode adicionar uma mensagem de "Loading..." separada em outro lugar da tela.

7.  **Tratando o Formato das `tags`**

    - O ChromaDB pode retornar as `tags` como uma única string (ex: "Animation, Adventure, Family"). Nosso componente `MovieTag` espera um array de strings.
    - Vamos usar `split(', ')` para converter a string de tags em um array.

    ```jsx
    // filepath: front/src/App.jsx
    // ... (dentro de handleQueryDatabase, no loop de processamento) ...
    if (results.ids && results.ids.length > 0 && results.ids[0].length > 0) {
      for (let i = 0; i < results.ids[0].length; i++) {
        const metadata = results.metadatas[0][i]
        const movieData = {
          id: results.ids[0][i],
          distance: results.distances[0][i],
          title: metadata.title,
          tags:
            typeof metadata.tags === 'string' ? metadata.tags.split(', ') : [], // Trata as tags
          synopsis: metadata.synopsis,
        }
        fetchedMovies.push(movieData)
      }
    }
    // ... (resto de handleQueryDatabase) ...
    ```

8.  **Utilizando o Texto da `textarea` para a Query**

    - A função `handleQueryDatabase` já está configurada para usar o estado `queryText`, que é atualizado pelo `onChange` da `textarea`. Isso garante que a busca seja dinâmica.

9.  **Limpando Dados Fictícios (`mockMovies`)**

    - Agora que estamos buscando dados reais (do ChromaDB), podemos remover a constante `mockMovies` e qualquer lógica que a utilize para inicializar o estado `movies`. O estado `movies` deve começar como um array vazio.

    ```jsx
    // filepath: front/src/App.jsx
    // Remova a declaração de const mockMovies = [...]

    function App() {
      // ...
      const [movies, setMovies] = useState([]) // Já deve estar assim
      // ...
    }
    // ...
    ```

---

### Dicas Práticas

- **Console.log é seu amigo:** Use `console.log` para inspecionar a estrutura dos `results` e o formato dos `fetchedMovies` durante o desenvolvimento.
- **Tratamento de Erros:** A cláusula `finally` no `try...catch` é útil para garantir que `setIsLoading(false)` seja sempre chamado.
- **Chaves (`key`) Únicas:** Certifique-se de que `movie.id` (vindo do ChromaDB) seja um identificador único para usar como `key` no `map` que renderiza os `MovieCard`s.

---

> **Resumo:**  
> Nesta aula, aprendemos a processar os resultados da busca do ChromaDB, transformando-os para o formato que nossa UI espera. Adicionamos estados de carregamento e prontidão da coleção para melhorar a experiência do usuário, desabilitando o botão de busca e mostrando feedback visual. Também corrigimos o formato das tags e garantimos que a busca utilize o texto dinâmico fornecido pelo usuário. Por fim, removemos os dados fictícios, deixando nossa aplicação mais próxima da versão final.
