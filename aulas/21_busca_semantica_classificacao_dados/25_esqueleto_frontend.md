### **Criando o Esqueleto do Front-end com React**

#### Introdução

- Nesta aula, vamos começar a construir a interface do nosso sistema de recomendação de filmes.
- Utilizaremos React para criar um front-end simples, onde o usuário poderá digitar sua busca e ver os filmes recomendados.
- O foco será em criar a estrutura básica (esqueleto) da aplicação.

---

#### Tópicos

1.  Criando um novo projeto React
2.  Limpando o projeto inicial
3.  Estruturando o HTML básico da aplicação
4.  Estilizando os elementos iniciais
5.  Versionando o projeto com Git

---

### Passo a Passo da Aula

1.  **Criando um Novo Projeto React**

    - Abra seu terminal na pasta principal do projeto (onde já temos o `data-loader` e `VectorDatabase`).
    - Execute o comando para criar um novo projeto React chamado `front`:
      ```sh
      npm create vite@latest front -- --template react
      ```
    - Navegue para a pasta do front-end e instale as dependências:
      ```sh
      cd front
      npm install
      ```
    - Inicie o servidor de desenvolvimento:
      ```sh
      npm run dev
      ```
    - Abra o endereço fornecido (geralmente `http://localhost:5173`) no seu navegador para ver a aplicação React inicial.

2.  **Limpando o Projeto Inicial**

    - **`index.html`**:
      - Altere o `<title>` para "Movie Recommender".
        ```html
        // filepath: front/index.html // ...existing code...
        <title>Movie Recommender</title>
        // ...existing code...
        ```
    - **`src/App.css`**:

      - Remova os estilos desnecessários relacionados ao logo e ao template padrão. Deixe apenas a seção `:root` e os estilos básicos que desejar manter.

        ```css
        // filepath: front/src/App.css
        :root {
          font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
          line-height: 1.5;
          font-weight: 400;

          color-scheme: light dark;
          color: rgba(255, 255, 255, 0.87);
          background-color: #242424;

          font-synthesis: none;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Remova os estilos de .logo, .logo:hover, .logo.react:hover, @keyframes logo-spin, .card, .read-the-docs */
        /* ...existing code... */
        /* Mantenha ou ajuste o body e outros estilos base se necessário */
        body {
          margin: 0;
          display: flex;
          place-items: center; /* Pode remover se não quiser centralizar tudo */
          min-width: 320px;
          min-height: 100vh;
        }

        h1 {
          font-size: 3.2em;
          line-height: 1.1;
        }

        button {
          border-radius: 8px;
          border: 1px solid transparent;
          padding: 0.6em 1.2em;
          font-size: 1em;
          font-weight: 500;
          font-family: inherit;
          background-color: #1a1a1a;
          cursor: pointer;
          transition: border-color 0.25s;
        }
        button:hover {
          border-color: #646cff;
        }
        button:focus,
        button:focus-visible {
          outline: 4px auto -webkit-focus-ring-color;
        }

        @media (prefers-color-scheme: light) {
          :root {
            color: #213547;
            background-color: #ffffff;
          }
          a:hover {
            color: #747bff;
          }
          button {
            background-color: #f9f9f9;
          }
        }
        ```

    - **`src/index.css`**:
      - Revise e mantenha os estilos globais que fazem sentido. A centralização (`place-items: center;`) pode ser removida do `body` se a lista de filmes for ficar alinhada à esquerda.
        ```css
        // filepath: front/src/index.css
        // ...existing code...
        body {
          margin: 0;
          /* display: flex; */ /* Removido para não centralizar verticalmente por padrão */
          /* place-items: center; */ /* Removido para não centralizar horizontalmente por padrão */
          min-width: 320px;
          min-height: 100vh;
        }
        // ...existing code...
        ```

3.  **Estruturando o HTML Básico da Aplicação (`src/App.jsx`)**

    - Vamos criar o esqueleto visual: um título, uma área de texto para a query, um botão de submit e uma área para listar os filmes.
    - Limpe o conteúdo atual do `return` da função `App`.

    ```jsx
    // filepath: front/src/App.jsx
    // import { useState } from 'react' // Pode remover se não usar por enquanto
    // import reactLogo from './assets/react.svg' // Remover
    // import viteLogo from '/vite.svg' // Remover
    import './App.css'

    function App() {
      // const [count, setCount] = useState(0) // Remover

      return (
        <>
          {' '}
          {/* Ou <div className="App"> */}
          <h1>Movie Recommender</h1>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <textarea
              placeholder="Describe the movie you want to watch..."
              rows={4}
              cols={50}
            />
            <button>Submit</button>
          </div>
          <div
            className="movie-list"
            style={{ marginTop: '15px', width: '80%', margin: '15px auto' }}
          >
            {/* Placeholder para os cards de filmes */}
            <div
              className="movie-card"
              style={{
                // backgroundColor: 'red', // Temporário para visualização
                border: '1px solid lightgray',
                width: '100%',
                height: '100px',
                margin: '10px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Movie Card 1 (Placeholder)
            </div>
            <div
              className="movie-card"
              style={{
                border: '1px solid lightgray',
                width: '100%',
                height: '100px',
                margin: '10px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Movie Card 2 (Placeholder)
            </div>
          </div>
        </>
      )
    }

    export default App
    ```

    - **Explicação da Estrutura:**
      - `<h1>Movie Recommender</h1>`: Título da aplicação.
      - Um `div` com `display: 'flex'` e `flexDirection: 'column'` para agrupar a `textarea` e o `button`, fazendo com que fiquem um abaixo do outro.
      - `<textarea />`: Campo para o usuário digitar a descrição do filme.
      - `<button>Submit</button>`: Botão para enviar a busca.
      - `<div className="movie-list">`: Container para os resultados da busca (lista de filmes).
      - Dentro de `movie-list`, adicionamos alguns `divs` com a classe `movie-card` como placeholders para visualizar onde os filmes aparecerão.

4.  **Estilizando os Elementos Iniciais**

    - **Centralização e Alinhamento**:

      - No `src/index.css` ou `src/App.css`, ajuste o `body` para que o conteúdo não fique rigidamente centralizado se essa não for a intenção final.

        ```css
        // filepath: front/src/index.css
        // ... (código anterior) ...
        body {
          margin: 0;
          /* display: flex; */ /* Comente ou remova se não quiser centralização total */
          /* place-items: center; */ /* Comente ou remova */
          min-width: 320px;
          min-height: 100vh;
          padding-top: 20px; /* Adiciona um pouco de espaço no topo */
        }

        #root {
          /* Onde o React monta a aplicação */
          max-width: 1280px;
          margin: 0 auto;
          padding: 2rem;
          text-align: center; /* Centraliza o texto dentro do #root */
        }
        ```

    - **Estilos Inline (Temporários ou para Estrutura):**
      - No `App.jsx`, usamos estilos inline para dar um espaçamento inicial e bordas, facilitando a visualização.
      - `movie-list`: `marginTop: '15px'` para dar um espaço abaixo do botão.
      - `movie-card`: `border: '1px solid lightgray'`, `height: '100px'`, `margin: '10px 0'` para simular os cards.

5.  **Versionando o Projeto com Git**
    - É uma boa prática versionar seu código desde o início.
    - Na pasta `front` (ou na raiz do projeto `semantic-search` se quiser um único repositório), inicialize o Git, adicione os arquivos e faça um commit inicial:
      ```sh
      # Dentro da pasta 'front'
      git init
      git add .
      git commit -m "Initial skeleton for Movie Recommender frontend"
      ```

---

### Dicas Práticas

- **Componentização:** No futuro, os "movie cards" e outras partes repetitivas da interface serão transformados em componentes React reutilizáveis.
- **CSS Dedicado:** Os estilos inline são úteis para prototipagem rápida, mas para um projeto maior, mova os estilos para arquivos `.css` dedicados e use classes.
- **Estado da Aplicação:** Em breve, adicionaremos estado ao React para gerenciar o texto da query, a lista de filmes retornada, e o estado de carregamento.

---

> **Resumo:**  
> Nesta aula, criamos a estrutura inicial (esqueleto) do nosso front-end React. Configuramos o projeto, limpamos arquivos desnecessários, definimos o HTML básico para a entrada de busca e a exibição dos resultados, e aplicamos estilos iniciais para visualização. Também iniciamos o versionamento com Git.### **Criando o Esqueleto do Front-end com React**

#### Introdução

- Nesta aula, vamos começar a construir a interface do nosso sistema de recomendação de filmes.
- Utilizaremos React para criar um front-end simples, onde o usuário poderá digitar sua busca e ver os filmes recomendados.
- O foco será em criar a estrutura básica (esqueleto) da aplicação.

---

#### Tópicos

1.  Criando um novo projeto React
2.  Limpando o projeto inicial
3.  Estruturando o HTML básico da aplicação
4.  Estilizando os elementos iniciais
5.  Versionando o projeto com Git

---

### Passo a Passo da Aula

1.  **Criando um Novo Projeto React**

    - Abra seu terminal na pasta principal do projeto (onde já temos o `data-loader` e `VectorDatabase`).
    - Execute o comando para criar um novo projeto React chamado `front`:
      ```sh
      npm create vite@latest front -- --template react
      ```
    - Navegue para a pasta do front-end e instale as dependências:
      ```sh
      cd front
      npm install
      ```
    - Inicie o servidor de desenvolvimento:
      ```sh
      npm run dev
      ```
    - Abra o endereço fornecido (geralmente `http://localhost:5173`) no seu navegador para ver a aplicação React inicial.

2.  **Limpando o Projeto Inicial**

    - **`index.html`**:
      - Altere o `<title>` para "Movie Recommender".
        ```html
        // filepath: front/index.html // ...existing code...
        <title>Movie Recommender</title>
        // ...existing code...
        ```
    - **`src/App.css`**:

      - Remova os estilos desnecessários relacionados ao logo e ao template padrão. Deixe apenas a seção `:root` e os estilos básicos que desejar manter.

        ```css
        // filepath: front/src/App.css
        :root {
          font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
          line-height: 1.5;
          font-weight: 400;

          color-scheme: light dark;
          color: rgba(255, 255, 255, 0.87);
          background-color: #242424;

          font-synthesis: none;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Remova os estilos de .logo, .logo:hover, .logo.react:hover, @keyframes logo-spin, .card, .read-the-docs */
        /* ...existing code... */
        /* Mantenha ou ajuste o body e outros estilos base se necessário */
        body {
          margin: 0;
          display: flex;
          place-items: center; /* Pode remover se não quiser centralizar tudo */
          min-width: 320px;
          min-height: 100vh;
        }

        h1 {
          font-size: 3.2em;
          line-height: 1.1;
        }

        button {
          border-radius: 8px;
          border: 1px solid transparent;
          padding: 0.6em 1.2em;
          font-size: 1em;
          font-weight: 500;
          font-family: inherit;
          background-color: #1a1a1a;
          cursor: pointer;
          transition: border-color 0.25s;
        }
        button:hover {
          border-color: #646cff;
        }
        button:focus,
        button:focus-visible {
          outline: 4px auto -webkit-focus-ring-color;
        }

        @media (prefers-color-scheme: light) {
          :root {
            color: #213547;
            background-color: #ffffff;
          }
          a:hover {
            color: #747bff;
          }
          button {
            background-color: #f9f9f9;
          }
        }
        ```

    - **`src/index.css`**:
      - Revise e mantenha os estilos globais que fazem sentido. A centralização (`place-items: center;`) pode ser removida do `body` se a lista de filmes for ficar alinhada à esquerda.
        ```css
        // filepath: front/src/index.css
        // ...existing code...
        body {
          margin: 0;
          /* display: flex; */ /* Removido para não centralizar verticalmente por padrão */
          /* place-items: center; */ /* Removido para não centralizar horizontalmente por padrão */
          min-width: 320px;
          min-height: 100vh;
        }
        // ...existing code...
        ```

3.  **Estruturando o HTML Básico da Aplicação (`src/App.jsx`)**

    - Vamos criar o esqueleto visual: um título, uma área de texto para a query, um botão de submit e uma área para listar os filmes.
    - Limpe o conteúdo atual do `return` da função `App`.

    ```jsx
    // filepath: front/src/App.jsx
    // import { useState } from 'react' // Pode remover se não usar por enquanto
    // import reactLogo from './assets/react.svg' // Remover
    // import viteLogo from '/vite.svg' // Remover
    import './App.css'

    function App() {
      // const [count, setCount] = useState(0) // Remover

      return (
        <>
          {' '}
          {/* Ou <div className="App"> */}
          <h1>Movie Recommender</h1>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <textarea
              placeholder="Describe the movie you want to watch..."
              rows={4}
              cols={50}
            />
            <button>Submit</button>
          </div>
          <div
            className="movie-list"
            style={{ marginTop: '15px', width: '80%', margin: '15px auto' }}
          >
            {/* Placeholder para os cards de filmes */}
            <div
              className="movie-card"
              style={{
                // backgroundColor: 'red', // Temporário para visualização
                border: '1px solid lightgray',
                width: '100%',
                height: '100px',
                margin: '10px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Movie Card 1 (Placeholder)
            </div>
            <div
              className="movie-card"
              style={{
                border: '1px solid lightgray',
                width: '100%',
                height: '100px',
                margin: '10px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Movie Card 2 (Placeholder)
            </div>
          </div>
        </>
      )
    }

    export default App
    ```

    - **Explicação da Estrutura:**
      - `<h1>Movie Recommender</h1>`: Título da aplicação.
      - Um `div` com `display: 'flex'` e `flexDirection: 'column'` para agrupar a `textarea` e o `button`, fazendo com que fiquem um abaixo do outro.
      - `<textarea />`: Campo para o usuário digitar a descrição do filme.
      - `<button>Submit</button>`: Botão para enviar a busca.
      - `<div className="movie-list">`: Container para os resultados da busca (lista de filmes).
      - Dentro de `movie-list`, adicionamos alguns `divs` com a classe `movie-card` como placeholders para visualizar onde os filmes aparecerão.

4.  **Estilizando os Elementos Iniciais**

    - **Centralização e Alinhamento**:

      - No `src/index.css` ou `src/App.css`, ajuste o `body` para que o conteúdo não fique rigidamente centralizado se essa não for a intenção final.

        ```css
        // filepath: front/src/index.css
        // ... (código anterior) ...
        body {
          margin: 0;
          /* display: flex; */ /* Comente ou remova se não quiser centralização total */
          /* place-items: center; */ /* Comente ou remova */
          min-width: 320px;
          min-height: 100vh;
          padding-top: 20px; /* Adiciona um pouco de espaço no topo */
        }

        #root {
          /* Onde o React monta a aplicação */
          max-width: 1280px;
          margin: 0 auto;
          padding: 2rem;
          text-align: center; /* Centraliza o texto dentro do #root */
        }
        ```

    - **Estilos Inline (Temporários ou para Estrutura):**
      - No `App.jsx`, usamos estilos inline para dar um espaçamento inicial e bordas, facilitando a visualização.
      - `movie-list`: `marginTop: '15px'` para dar um espaço abaixo do botão.
      - `movie-card`: `border: '1px solid lightgray'`, `height: '100px'`, `margin: '10px 0'` para simular os cards.

5.  **Versionando o Projeto com Git**
    - É uma boa prática versionar seu código desde o início.
    - Na pasta `front` (ou na raiz do projeto `semantic-search` se quiser um único repositório), inicialize o Git, adicione os arquivos e faça um commit inicial:
      ```sh
      # Dentro da pasta 'front'
      git init
      git add .
      git commit -m "Initial skeleton for Movie Recommender frontend"
      ```

---

### Dicas Práticas

- **Componentização:** No futuro, os "movie cards" e outras partes repetitivas da interface serão transformados em componentes React reutilizáveis.
- **CSS Dedicado:** Os estilos inline são úteis para prototipagem rápida, mas para um projeto maior, mova os estilos para arquivos `.css` dedicados e use classes.
- **Estado da Aplicação:** Em breve, adicionaremos estado ao React para gerenciar o texto da query, a lista de filmes retornada, e o estado de carregamento.

---

> **Resumo:**  
> Nesta aula, criamos a estrutura inicial (esqueleto) do nosso front-end React. Configuramos o projeto, limpamos arquivos desnecessários, definimos o HTML básico para a entrada de busca e a exibição dos resultados, e aplicamos estilos iniciais para visualização. Também iniciamos o versionamento com Git.
