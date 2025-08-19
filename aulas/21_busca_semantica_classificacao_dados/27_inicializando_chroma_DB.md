### **Inicializando o ChromaDB no Front-end e Realizando a Primeira Query**

#### Introdução

- Olá! Nesta aula, vamos conectar nosso front-end React ao ChromaDB.
- Aprenderemos como inicializar o cliente do ChromaDB quando nossa aplicação carrega, como armazenar a coleção de filmes para uso posterior e como fazer nossa primeira busca (query) ao clicar em um botão. Também vamos resolver alguns problemas comuns que podem aparecer no caminho!

---

#### Tópicos

1.  Instalando as dependências do ChromaDB no projeto front-end.
2.  Importando e inicializando o Chroma Client e a Collection.
3.  Armazenando a Collection em um estado do React.
4.  Resolvendo erros comuns: `key` prop e `className`.
5.  Configurando o ChromaDB para permitir requisições do front-end (CORS).
6.  Criando a função para fazer query no banco de dados.
7.  Contornando um bug de carregamento de modelo do ChromaDB no navegador.
8.  Testando a query e visualizando os resultados.

---

### Passo a Passo da Aula

1.  **Instalando as Dependências do ChromaDB**

    - Para que nosso aplicativo React possa conversar com o ChromaDB, precisamos instalar duas bibliotecas: `chromadb` (o cliente principal) e `chromadb-default-embed` (para usar a função de embedding padrão).
    - No terminal, dentro da pasta do seu projeto front-end (ex: `front`), rode o comando:
      ```sh
      npm install chromadb chromadb-default-embed
      ```

2.  **Importando e Inicializando o Chroma Client e a Collection**

    - No seu arquivo principal do front-end (provavelmente `src/App.jsx`), vamos importar o `ChromaClient`.
    - Queremos que o ChromaDB seja inicializado assim que nosso aplicativo carregar pela primeira vez. Para isso, usaremos o `useEffect` do React.

      ```jsx
      // filepath: front/src/App.jsx
      import { ChromaClient } from 'chromadb'
      import { useEffect, useState } from 'react' // Adicione useState e useEffect
      // ... outros imports e mockMovies ...

      function App() {
        // ... (useState para queryText e movies, se já existirem) ...
        const [chromaCollection, setChromaCollection] = useState(null)

        useEffect(() => {
          const initializeChroma = async () => {
            console.log('Attempting to initialize ChromaDB...')
            try {
              const client = new ChromaClient() // Sem 'new' se for a versão mais recente que exporta uma função
              console.log('ChromaClient instantiated')

              const collection = await client.getOrCreateCollection({
                name: 'movies', // O nome da coleção que criamos anteriormente
                // embeddingFunction: new DefaultEmbeddingFunction() // Se necessário, dependendo da versão
              })
              console.log('Collection retrieved:', collection)
              setChromaCollection(collection)
            } catch (error) {
              console.error('Error initializing ChromaDB:', error)
            }
          }

          initializeChroma()
        }, []) // Array vazio significa que o useEffect roda só uma vez, quando o componente monta

        // ... resto do componente App ...
      }

      export default App
      ```

    - **Explicação:**
      - `useEffect(() => { ... }, [])`: Este hook do React executa o código dentro dele uma única vez, logo após o componente ser renderizado na tela. É perfeito para inicializações.
      - `initializeChroma`: Criamos uma função `async` porque a obtenção da coleção (`getOrCreateCollection`) é uma operação que pode levar um tempo (ela se comunica com o banco de dados).
      - `new ChromaClient()`: Cria uma instância do cliente Chroma.
      - `client.getOrCreateCollection({ name: 'movies' })`: Tenta pegar a coleção chamada "movies". Se não existir, ela é criada. Usamos o mesmo nome da coleção que populamos com dados anteriormente.

3.  **Armazenando a Collection em um Estado do React**

    - Para podermos usar a `collection` em outras partes do nosso aplicativo (como na função de busca), vamos guardá-la em um estado do React usando `useState`.
    - Adicione ao `App.jsx`:

      ```jsx
      // filepath: front/src/App.jsx
      // ... (imports) ...

      function App() {
        const [chromaCollection, setChromaCollection] = useState(null) // Estado para a coleção

        useEffect(() => {
          const initializeChroma = async () => {
            // ... (código de inicialização do ChromaClient) ...
            const collection = await client.getOrCreateCollection({
              name: 'movies',
            })
            setChromaCollection(collection) // Salva a coleção no estado
          }
          initializeChroma()
        }, [])

        // ... (resto do componente App) ...
      }
      // ...
      ```

4.  **Resolvendo Erros Comuns: `key` prop e `className`**

    - Ao renderizar listas de elementos no React (como nossa lista de `MovieCard`), cada elemento precisa de uma propriedade especial chamada `key`. Isso ajuda o React a identificar cada item de forma única.
    - Além disso, em JSX (que é o que o React usa para descrever a interface), o atributo `class` do HTML deve ser escrito como `className`.
    - **Corrigindo `key` na lista de filmes:**
      ```jsx
      // filepath: front/src/App.jsx
      // ... (dentro da função App, no return) ...
      <div className="movie-list" /* ...styles... */>
        {mockMovies.map(
          (
            movie,
            index // Ou a lista de filmes real
          ) => (
            <MovieCard key={index} movie={movie} /> // Adicionada a key={index}
          )
        )}
      </div>
      ```
    - **Corrigindo `key` na lista de tags (dentro de `MovieCard.jsx` ou `App.jsx` se estiver lá):**
      ```jsx
      // filepath: front/src/App.jsx (ou MovieCard.jsx)
      // ... (dentro do componente MovieCard) ...
      <div className="tags-container" /* ...styles... */>
        {movie.tags.map((tag, index) => (
          <MovieTag key={index} tag={tag} /> // Adicionada a key={index}
        ))}
      </div>
      ```
    - **Corrigindo `class` para `className`:**
      - Revise seus componentes (`App.jsx`, `MovieCard.jsx`, `MovieTag.jsx`) e troque todas as ocorrências de `class="alguma-coisa"` por `className="alguma-coisa"`.

5.  **Configurando o ChromaDB para Permitir Requisições do Front-end (CORS)**

    - Por padrão, por segurança, os navegadores bloqueiam requisições de um domínio (ex: `http://localhost:5173` do seu app React) para outro (ex: `http://localhost:8000` do ChromaDB). Isso é chamado de CORS (Cross-Origin Resource Sharing).
    - Precisamos configurar o servidor ChromaDB para permitir essas requisições.
    - Na pasta onde você roda o ChromaDB (ex: `VectorDatabase`), crie um arquivo chamado `config.yml`.
    - Adicione o seguinte conteúdo a `config.yml`, substituindo a URL pela URL do seu app React (que aparece no terminal quando você roda `npm run dev`):
      ```yaml
      # filepath: VectorDatabase/config.yml
      chroma_server_cors_allow_origins: ['http://localhost:5173'] # Use a URL do seu front-end
      ```
    - Agora, pare o servidor ChromaDB (Ctrl+C no terminal onde ele está rodando) e reinicie-o passando o arquivo de configuração:
      ```sh
      chroma run --path /path/to/your/chroma_data --config VectorDatabase/config.yml
      ```
      (Ajuste `/path/to/your/chroma_data` se necessário).
    - Isso deve resolver os erros de CORS no console do navegador.

6.  **Criando a Função para Fazer Query no Banco de Dados**

    - Vamos criar uma função que será chamada quando o usuário clicar no botão "Submit". Essa função usará a `chromaCollection` que guardamos no estado para fazer uma busca.

      ```jsx
      // filepath: front/src/App.jsx
      // ... (imports, useState, useEffect) ...

      function App() {
        const [chromaCollection, setChromaCollection] = useState(null)
        const [queryText, setQueryText] = useState('') // Supondo que você tenha um estado para o texto da busca
        const [movies, setMovies] = useState(mockMovies) // Estado para os filmes exibidos

        // ... (useEffect para inicializar Chroma) ...

        const handleQueryDatabase = async () => {
          if (!chromaCollection) {
            console.error('Chroma Collection not initialized yet.')
            return
          }
          if (!queryText.trim()) {
            console.log('Query text is empty.')
            setMovies(mockMovies) // Ou limpa os resultados
            return
          }

          console.log(`Querying for: "${queryText}"`)
          try {
            const results = await chromaCollection.query({
              queryTexts: [queryText],
              nResults: 5, // Número de resultados desejados
            })
            console.log('Query results:', results)

            // Processar os resultados para exibir (isso pode variar dependendo da estrutura dos seus dados)
            // Exemplo: se 'documents' são strings JSON que precisam ser parseadas
            const fetchedMovies = results.documents[0].map((docString) =>
              JSON.parse(docString)
            )
            setMovies(fetchedMovies)
          } catch (error) {
            console.error('Error querying database:', error)
          }
        }

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
              <button onClick={handleQueryDatabase}>Submit</button>
            </div>
            <div className="movie-list" /* ...styles... */>
              {movies.map((movie, index) => (
                <MovieCard key={movie.id || index} movie={movie} />
              ))}
            </div>
          </>
        )
      }

      export default App
      ```

    - **Explicação:**
      - `handleQueryDatabase`: Uma função `async` que pega o `queryText` do estado.
      - `chromaCollection.query({ queryTexts: [queryText], nResults: 5 })`: Envia a busca para o ChromaDB.
      - `console.log(results)`: Por enquanto, apenas exibimos os resultados no console.

7.  **Contornando um Bug de Carregamento de Modelo do ChromaDB no Navegador**

    - Pode haver um bug específico quando o `chromadb-default-embed` tenta carregar modelos de embedding no ambiente do navegador, resultando em erros de `JSON.parse` ou relacionados ao cache do modelo.
    - Uma forma de contornar isso é instruir a biblioteca a não usar modelos locais ou cache do navegador, forçando-a a buscar diretamente do Hugging Face (de onde o modelo padrão geralmente vem).
    - No topo do seu `App.jsx`, antes de qualquer código React, adicione:

      ```javascript
      // filepath: front/src/App.jsx
      import { env } from '@xenova/transformers' // Importe 'env'

      // Desabilita o uso de modelos locais e cache do navegador para contornar bugs
      env.allowLocalModels = false
      env.useBrowserCache = false

      import { ChromaClient } from 'chromadb'
      // ... resto dos imports ...
      ```

    - **Importante:** A importação de `env` pode variar dependendo da versão exata do `chromadb-default-embed` ou da biblioteca de transformers que ele usa internamente. A linha `@xenova/transformers` é uma suposição comum. Verifique a documentação ou os arquivos da biblioteca se isso não funcionar.

8.  **Testando a Query e Visualizando os Resultados**

    - Com todas as configurações feitas:
      1.  Certifique-se de que seu servidor ChromaDB está rodando com a configuração de CORS.
      2.  Rode seu aplicativo React (`npm run dev`).
      3.  Abra o console do navegador (clique com o botão direito na página > Inspecionar > Console).
      4.  Digite uma busca na `textarea` (ex: "movie about space") e clique em "Submit".
    - Você deverá ver no console:
      - Mensagens de inicialização do ChromaDB.
      - A mensagem "Querying for: ..."
      - Um objeto `results` contendo `ids`, `distances`, `metadatas`, e `documents` dos filmes encontrados.
    - Se tudo correu bem, o front-end agora está buscando dados do ChromaDB! O próximo passo seria usar esses `results` para atualizar a lista de filmes na tela.

---

### Dicas Práticas

- **Console é seu amigo:** Use `console.log()` بكثرة para entender o que está acontecendo em cada etapa, especialmente ao lidar com operações assíncronas e dados externos.
- **Tratamento de Erros:** Adicione blocos `try...catch` em operações assíncronas para capturar e lidar com erros de forma elegante.
- **Estrutura dos Dados:** Preste atenção à estrutura dos dados retornados pelo ChromaDB (`results.documents`, `results.metadatas`) para saber como acessá-los e exibi-los corretamente.

---

> **Resumo:**  
> Nesta aula, instalamos o ChromaDB no front-end, configuramos sua inicialização com `useEffect`, armazenamos a coleção em um estado, corrigimos erros comuns de React, ajustamos o servidor ChromaDB para CORS, implementamos uma função de query e contornamos um bug de carregamento de modelo. Agora, nosso app React pode buscar dados do ChromaDB!### **Inicializando o ChromaDB no Front-end e Realizando a Primeira Query**

#### Introdução

- Olá! Nesta aula, vamos conectar nosso front-end React ao ChromaDB.
- Aprenderemos como inicializar o cliente do ChromaDB quando nossa aplicação carrega, como armazenar a coleção de filmes para uso posterior e como fazer nossa primeira busca (query) ao clicar em um botão. Também vamos resolver alguns problemas comuns que podem aparecer no caminho!

---

#### Tópicos

1.  Instalando as dependências do ChromaDB no projeto front-end.
2.  Importando e inicializando o Chroma Client e a Collection.
3.  Armazenando a Collection em um estado do React.
4.  Resolvendo erros comuns: `key` prop e `className`.
5.  Configurando o ChromaDB para permitir requisições do front-end (CORS).
6.  Criando a função para fazer query no banco de dados.
7.  Contornando um bug de carregamento de modelo do ChromaDB no navegador.
8.  Testando a query e visualizando os resultados.

---

### Passo a Passo da Aula

1.  **Instalando as Dependências do ChromaDB**

    - Para que nosso aplicativo React possa conversar com o ChromaDB, precisamos instalar duas bibliotecas: `chromadb` (o cliente principal) e `chromadb-default-embed` (para usar a função de embedding padrão).
    - No terminal, dentro da pasta do seu projeto front-end (ex: `front`), rode o comando:
      ```sh
      npm install chromadb chromadb-default-embed
      ```

2.  **Importando e Inicializando o Chroma Client e a Collection**

    - No seu arquivo principal do front-end (provavelmente `src/App.jsx`), vamos importar o `ChromaClient`.
    - Queremos que o ChromaDB seja inicializado assim que nosso aplicativo carregar pela primeira vez. Para isso, usaremos o `useEffect` do React.

      ```jsx
      // filepath: front/src/App.jsx
      import { ChromaClient } from 'chromadb'
      import { useEffect, useState } from 'react' // Adicione useState e useEffect
      // ... outros imports e mockMovies ...

      function App() {
        // ... (useState para queryText e movies, se já existirem) ...
        const [chromaCollection, setChromaCollection] = useState(null)

        useEffect(() => {
          const initializeChroma = async () => {
            console.log('Attempting to initialize ChromaDB...')
            try {
              const client = new ChromaClient() // Sem 'new' se for a versão mais recente que exporta uma função
              console.log('ChromaClient instantiated')

              const collection = await client.getOrCreateCollection({
                name: 'movies', // O nome da coleção que criamos anteriormente
                // embeddingFunction: new DefaultEmbeddingFunction() // Se necessário, dependendo da versão
              })
              console.log('Collection retrieved:', collection)
              setChromaCollection(collection)
            } catch (error) {
              console.error('Error initializing ChromaDB:', error)
            }
          }

          initializeChroma()
        }, []) // Array vazio significa que o useEffect roda só uma vez, quando o componente monta

        // ... resto do componente App ...
      }

      export default App
      ```

    - **Explicação:**
      - `useEffect(() => { ... }, [])`: Este hook do React executa o código dentro dele uma única vez, logo após o componente ser renderizado na tela. É perfeito para inicializações.
      - `initializeChroma`: Criamos uma função `async` porque a obtenção da coleção (`getOrCreateCollection`) é uma operação que pode levar um tempo (ela se comunica com o banco de dados).
      - `new ChromaClient()`: Cria uma instância do cliente Chroma.
      - `client.getOrCreateCollection({ name: 'movies' })`: Tenta pegar a coleção chamada "movies". Se não existir, ela é criada. Usamos o mesmo nome da coleção que populamos com dados anteriormente.

3.  **Armazenando a Collection em um Estado do React**

    - Para podermos usar a `collection` em outras partes do nosso aplicativo (como na função de busca), vamos guardá-la em um estado do React usando `useState`.
    - Adicione ao `App.jsx`:

      ```jsx
      // filepath: front/src/App.jsx
      // ... (imports) ...

      function App() {
        const [chromaCollection, setChromaCollection] = useState(null) // Estado para a coleção

        useEffect(() => {
          const initializeChroma = async () => {
            // ... (código de inicialização do ChromaClient) ...
            const collection = await client.getOrCreateCollection({
              name: 'movies',
            })
            setChromaCollection(collection) // Salva a coleção no estado
          }
          initializeChroma()
        }, [])

        // ... (resto do componente App) ...
      }
      // ...
      ```

4.  **Resolvendo Erros Comuns: `key` prop e `className`**

    - Ao renderizar listas de elementos no React (como nossa lista de `MovieCard`), cada elemento precisa de uma propriedade especial chamada `key`. Isso ajuda o React a identificar cada item de forma única.
    - Além disso, em JSX (que é o que o React usa para descrever a interface), o atributo `class` do HTML deve ser escrito como `className`.
    - **Corrigindo `key` na lista de filmes:**
      ```jsx
      // filepath: front/src/App.jsx
      // ... (dentro da função App, no return) ...
      <div className="movie-list" /* ...styles... */>
        {mockMovies.map(
          (
            movie,
            index // Ou a lista de filmes real
          ) => (
            <MovieCard key={index} movie={movie} /> // Adicionada a key={index}
          )
        )}
      </div>
      ```
    - **Corrigindo `key` na lista de tags (dentro de `MovieCard.jsx` ou `App.jsx` se estiver lá):**
      ```jsx
      // filepath: front/src/App.jsx (ou MovieCard.jsx)
      // ... (dentro do componente MovieCard) ...
      <div className="tags-container" /* ...styles... */>
        {movie.tags.map((tag, index) => (
          <MovieTag key={index} tag={tag} /> // Adicionada a key={index}
        ))}
      </div>
      ```
    - **Corrigindo `class` para `className`:**
      - Revise seus componentes (`App.jsx`, `MovieCard.jsx`, `MovieTag.jsx`) e troque todas as ocorrências de `class="alguma-coisa"` por `className="alguma-coisa"`.

5.  **Configurando o ChromaDB para Permitir Requisições do Front-end (CORS)**

    - Por padrão, por segurança, os navegadores bloqueiam requisições de um domínio (ex: `http://localhost:5173` do seu app React) para outro (ex: `http://localhost:8000` do ChromaDB). Isso é chamado de CORS (Cross-Origin Resource Sharing).
    - Precisamos configurar o servidor ChromaDB para permitir essas requisições.
    - Na pasta onde você roda o ChromaDB (ex: `VectorDatabase`), crie um arquivo chamado `config.yml`.
    - Adicione o seguinte conteúdo a `config.yml`, substituindo a URL pela URL do seu app React (que aparece no terminal quando você roda `npm run dev`):
      ```yaml
      # filepath: VectorDatabase/config.yml
      chroma_server_cors_allow_origins: ['http://localhost:5173'] # Use a URL do seu front-end
      ```
    - Agora, pare o servidor ChromaDB (Ctrl+C no terminal onde ele está rodando) e reinicie-o passando o arquivo de configuração:
      ```sh
      chroma run --path /path/to/your/chroma_data --config VectorDatabase/config.yml
      ```
      (Ajuste `/path/to/your/chroma_data` se necessário).
    - Isso deve resolver os erros de CORS no console do navegador.

6.  **Criando a Função para Fazer Query no Banco de Dados**

    - Vamos criar uma função que será chamada quando o usuário clicar no botão "Submit". Essa função usará a `chromaCollection` que guardamos no estado para fazer uma busca.

      ```jsx
      // filepath: front/src/App.jsx
      // ... (imports, useState, useEffect) ...

      function App() {
        const [chromaCollection, setChromaCollection] = useState(null)
        const [queryText, setQueryText] = useState('') // Supondo que você tenha um estado para o texto da busca
        const [movies, setMovies] = useState(mockMovies) // Estado para os filmes exibidos

        // ... (useEffect para inicializar Chroma) ...

        const handleQueryDatabase = async () => {
          if (!chromaCollection) {
            console.error('Chroma Collection not initialized yet.')
            return
          }
          if (!queryText.trim()) {
            console.log('Query text is empty.')
            setMovies(mockMovies) // Ou limpa os resultados
            return
          }

          console.log(`Querying for: "${queryText}"`)
          try {
            const results = await chromaCollection.query({
              queryTexts: [queryText],
              nResults: 5, // Número de resultados desejados
            })
            console.log('Query results:', results)

            // Processar os resultados para exibir (isso pode variar dependendo da estrutura dos seus dados)
            // Exemplo: se 'documents' são strings JSON que precisam ser parseadas
            const fetchedMovies = results.documents[0].map((docString) =>
              JSON.parse(docString)
            )
            setMovies(fetchedMovies)
          } catch (error) {
            console.error('Error querying database:', error)
          }
        }

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
              <button onClick={handleQueryDatabase}>Submit</button>
            </div>
            <div className="movie-list" /* ...styles... */>
              {movies.map((movie, index) => (
                <MovieCard key={movie.id || index} movie={movie} />
              ))}
            </div>
          </>
        )
      }

      export default App
      ```

    - **Explicação:**
      - `handleQueryDatabase`: Uma função `async` que pega o `queryText` do estado.
      - `chromaCollection.query({ queryTexts: [queryText], nResults: 5 })`: Envia a busca para o ChromaDB.
      - `console.log(results)`: Por enquanto, apenas exibimos os resultados no console.

7.  **Contornando um Bug de Carregamento de Modelo do ChromaDB no Navegador**

    - Pode haver um bug específico quando o `chromadb-default-embed` tenta carregar modelos de embedding no ambiente do navegador, resultando em erros de `JSON.parse` ou relacionados ao cache do modelo.
    - Uma forma de contornar isso é instruir a biblioteca a não usar modelos locais ou cache do navegador, forçando-a a buscar diretamente do Hugging Face (de onde o modelo padrão geralmente vem).
    - No topo do seu `App.jsx`, antes de qualquer código React, adicione:

      ```javascript
      // filepath: front/src/App.jsx
      import { env } from '@xenova/transformers' // Importe 'env'

      // Desabilita o uso de modelos locais e cache do navegador para contornar bugs
      env.allowLocalModels = false
      env.useBrowserCache = false

      import { ChromaClient } from 'chromadb'
      // ... resto dos imports ...
      ```

    - **Importante:** A importação de `env` pode variar dependendo da versão exata do `chromadb-default-embed` ou da biblioteca de transformers que ele usa internamente. A linha `@xenova/transformers` é uma suposição comum. Verifique a documentação ou os arquivos da biblioteca se isso não funcionar.

8.  **Testando a Query e Visualizando os Resultados**

    - Com todas as configurações feitas:
      1.  Certifique-se de que seu servidor ChromaDB está rodando com a configuração de CORS.
      2.  Rode seu aplicativo React (`npm run dev`).
      3.  Abra o console do navegador (clique com o botão direito na página > Inspecionar > Console).
      4.  Digite uma busca na `textarea` (ex: "movie about space") e clique em "Submit".
    - Você deverá ver no console:
      - Mensagens de inicialização do ChromaDB.
      - A mensagem "Querying for: ..."
      - Um objeto `results` contendo `ids`, `distances`, `metadatas`, e `documents` dos filmes encontrados.
    - Se tudo correu bem, o front-end agora está buscando dados do ChromaDB! O próximo passo seria usar esses `results` para atualizar a lista de filmes na tela.

---

### Dicas Práticas

- **Console é seu amigo:** Use `console.log()` بكثرة para entender o que está acontecendo em cada etapa, especialmente ao lidar com operações assíncronas e dados externos.
- **Tratamento de Erros:** Adicione blocos `try...catch` em operações assíncronas para capturar e lidar com erros de forma elegante.
- **Estrutura dos Dados:** Preste atenção à estrutura dos dados retornados pelo ChromaDB (`results.documents`, `results.metadatas`) para saber como acessá-los e exibi-los corretamente.

---

> **Resumo:**  
> Nesta aula, instalamos o ChromaDB no front-end, configuramos sua inicialização com `useEffect`, armazenamos a coleção em um estado, corrigimos erros comuns de React, ajustamos o servidor ChromaDB para CORS, implementamos uma função de query e contornamos um bug de carregamento de modelo. Agora, nosso app React pode buscar dados do ChromaDB!
