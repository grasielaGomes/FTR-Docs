### **Melhorando a UI: Componentizando e Estilizando os Cards de Filmes**

#### Introdução

- Olá! Agora que temos o esqueleto do nosso front-end, vamos organizar melhor o código e deixar a interface mais agradável.
- Nesta aula, vamos criar um componente reutilizável para os cards de filmes, aplicar estilos para melhorar a aparência e preparar o terreno para exibir dados reais (ou quase reais!).

---

#### Tópicos

1.  Criando o componente `MovieCard`
2.  Ajustando estilos da lista e dos cards
3.  Gerando dados de filmes fictícios (mock data) com IA
4.  Exibindo os dados mocados nos `MovieCard`s
5.  Estilizando o conteúdo do `MovieCard` (título, tags, sinopse)
6.  Criando e estilizando um componente `MovieTag`
7.  Finalizando o versionamento das alterações

---

### Passo a Passo da Aula

1.  **Criando o Componente `MovieCard`**

    - Para evitar repetição de código e organizar melhor, vamos criar um componente React chamado `MovieCard`.
    - No arquivo `src/App.jsx`, defina uma nova função `MovieCard` que retorna a estrutura JSX de um card de filme.

      ```jsx
      // filepath: front/src/App.jsx
      // ... (imports e início da função App)

      function MovieCard() {
        // Novo componente
        return (
          <div
            className="movie-card"
            style={{
              border: '1px solid gray', // Cor da borda alterada
              padding: '10px', // Adicionado padding
              borderRadius: '8px', // Bordas arredondadas
              // width: '100%', // Removido para ajuste automático
              height: '250px', // Altura aumentada
              margin: '0', // Margin removida, será controlada pelo container pai
              display: 'flex',
              flexDirection: 'column', // Para alinhar conteúdo internamente
              // alignItems: 'center', // Removido para alinhar à esquerda
              // justifyContent: 'center', // Removido
              gap: '5px', // Espaço entre elementos internos
            }}
          >
            {/* Conteúdo do card virá aqui */}
            Movie Card Placeholder
          </div>
        )
      }

      function App() {
        // ... (código anterior da função App)
        return (
          <>
            <h1>Movie Recommender</h1>
            {/* ... (textarea e button) ... */}
            <div
              className="movie-list"
              style={{
                marginTop: '15px',
                width: '80%',
                // margin: '15px auto', // Removido margin auto
                display: 'flex', // Para usar gap
                flexDirection: 'column', // Para empilhar os cards
                gap: '10px', // Espaçamento entre os cards
              }}
            >
              <MovieCard />
              <MovieCard />
              <MovieCard />
              {/* Adicione quantos MovieCards desejar para teste */}
            </div>
          </>
        )
      }

      export default App
      ```

    - Agora, dentro do `div` com `className="movie-list"`, você pode usar `<MovieCard />` para renderizar cada card.

2.  **Ajustando Estilos da Lista e dos Cards**

    - **Lista de Filmes (`movie-list`):**
      - Removemos o `margin: '15px auto'` para ter mais controle.
      - Adicionamos `display: 'flex'`, `flexDirection: 'column'` e `gap: '10px'` para empilhar os cards verticalmente com um espaçamento entre eles.
    - **Cards de Filmes (`movie-card`):**
      - Alteramos a cor da borda para `gray`.
      - Adicionamos `padding: '10px'` para dar um respiro interno.
      - Adicionamos `borderRadius: '8px'` para bordas arredondadas.
      - Aumentamos a `height` para `250px`.
      - Removemos `width: '100%'` e `margin` (o `gap` do pai cuida do espaçamento).
      - Adicionamos `display: 'flex'`, `flexDirection: 'column'` e `gap: '5px'` para organizar o conteúdo interno do card.

3.  **Gerando Dados de Filmes Fictícios (Mock Data) com IA**

    - Para testar nossa interface com dados mais realistas, vamos pedir a uma IA (como o Google Gemini) para gerar uma lista de filmes fictícios.
    - **Prompt para a IA:**
      ```text
      Crie uma lista de 10 filmes fictícios em inglês.
      Cada elemento dessa lista deve ser em formato JSON com os seguintes atributos: title, tags (array de strings), synopsis.
      Crie as sinopses como textos relativamente grandes.
      ```
    - Copie o JSON gerado pela IA.

4.  **Exibindo os Dados Mocados nos `MovieCard`s**

    - No `src/App.jsx`, crie uma constante `mockMovies` e cole o JSON gerado.
    - Use o método `.map()` no array `mockMovies` para renderizar um `MovieCard` para cada filme, passando os dados do filme como `props`.

      ```jsx
      // filepath: front/src/App.jsx
      // ... (imports)

      const mockMovies = [
        // Cole o JSON gerado pela IA aqui
        {
          title: 'Guardians of Gahoole: The Lost Tales',
          tags: ['Animation', 'Adventure', 'Family'],
          synopsis:
            "A young owl, Soren, is abducted by an evil owl army. He and his new friends escape to the island of Ga'Hoole, to assist its noble, wise owls who fight the army.",
        },
        // ... outros 9 filmes
      ]

      function MovieCard({ movie }) {
        // Recebe 'movie' como prop
        return (
          <div
            className="movie-card"
            style={
              {
                /* ... estilos do card ... */
              }
            }
          >
            <h2 style={{ margin: '0', fontSize: '1.5em' }}>{movie.title}</h2>
            <div
              className="tags-container"
              style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}
            >
              {/* Tags virão aqui */}
            </div>
            <div
              className="synopsis-container"
              style={{
                overflowY: 'auto',
                flexGrow: 1,
                fontSize: '0.9em',
                textAlign: 'left',
              }}
            >
              {/* Sinopse virá aqui */}
            </div>
          </div>
        )
      }

      function App() {
        // ...
        return (
          <>
            {/* ... (título, textarea, button) ... */}
            <div
              className="movie-list"
              style={
                {
                  /* ... estilos da lista ... */
                }
              }
            >
              {mockMovies.map((movie, index) => (
                <MovieCard key={index} movie={movie} /> // Passa o filme como prop e adiciona uma key
              ))}
            </div>
          </>
        )
      }

      export default App
      ```

    - No componente `MovieCard`, receba a `prop` `movie` e use `movie.title` para exibir o título.

5.  **Estilizando o Conteúdo do `MovieCard` (Título, Tags, Sinopse)**

    - **Título (`h2`):**
      - Adicionamos `style={{ margin: '0', fontSize: '1.5em' }}` para remover margens padrão e ajustar o tamanho.
    - **Container da Sinopse:**
      - Adicionamos um `div` para a sinopse com `style={{ overflowY: 'auto', flexGrow: 1, fontSize: '0.9em', textAlign: 'left' }}`.
        - `overflowY: 'auto'` adiciona uma barra de rolagem vertical se o texto for muito grande.
        - `flexGrow: 1` faz com que a sinopse ocupe o espaço vertical restante no card.
        - `fontSize: '0.9em'` e `textAlign: 'left'` para melhor legibilidade.

6.  **Criando e Estilizando um Componente `MovieTag`**

    - Para exibir as tags de forma organizada, criaremos outro componente pequeno chamado `MovieTag`.
    - Dentro do `MovieCard`, mapearemos as `tags` do filme para renderizar um `MovieTag` para cada uma.

      ```jsx
      // filepath: front/src/App.jsx
      // ... (const mockMovies)

      function MovieTag({ tag }) {
        // Novo componente para tags
        return (
          <div
            className="movie-tag"
            style={{
              border: '1px solid gray',
              padding: '2px 8px', // Ajustado padding
              borderRadius: '7px', // Bordas arredondadas
              fontSize: '0.8em', // Tamanho da fonte reduzido
              backgroundColor: '#333', // Cor de fundo para destaque
            }}
          >
            {tag}
          </div>
        )
      }

      function MovieCard({ movie }) {
        return (
          <div
            className="movie-card"
            style={
              {
                /* ... estilos do card ... */
              }
            }
          >
            <h2 style={{ margin: '0', fontSize: '1.5em' }}>{movie.title}</h2>
            <div
              className="tags-container"
              style={{
                display: 'flex',
                gap: '5px',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
              }}
            >
              {' '}
              {/* justifyContent alterado */}
              {movie.tags.map((tag, index) => (
                <MovieTag key={index} tag={tag} />
              ))}
            </div>
            <div
              className="synopsis-container"
              style={{ /* ... estilos da sinopse ... */ padding: '5px' }}
            >
              {movie.synopsis}
            </div>
          </div>
        )
      }

      // ... (função App e export)
      ```

    - **Estilos do `MovieTag`:**
      - Borda, padding, `borderRadius` e `fontSize` para um visual de "pílula".
      - `backgroundColor` para destacar.
    - **Container de Tags (`tags-container` no `MovieCard`):**
      - Usamos `display: 'flex'`, `gap: '5px'`, `flexWrap: 'wrap'` (para quebrar a linha se houver muitas tags) e `justifyContent: 'flex-start'` (para alinhar à esquerda).

7.  **Finalizando e Versionando**

    - Com os dados mocados e os estilos aplicados, a interface deve estar mais próxima do resultado desejado.
    - Lembre-se de salvar suas alterações no Git:
      ```sh
      git add .
      git commit -m "Feat: Create MovieCard and MovieTag components and apply initial styling"
      ```

---

### Dicas Práticas

- **CSS em Arquivos Separados:** Conforme a aplicação cresce, mova os estilos inline para arquivos `.css` dedicados (por exemplo, `MovieCard.css`, `App.css`) para melhor organização.
- **Flexbox é seu amigo:** `display: flex` é uma ferramenta poderosa para alinhar e distribuir elementos. Não hesite em usá-lo!
- **Iteração:** O design de UI é um processo iterativo. Não tenha medo de experimentar com diferentes estilos e layouts até encontrar o que funciona melhor.

---

> **Resumo:**  
> Nesta aula, refatoramos nossa interface criando componentes `MovieCard` e `MovieTag`. Utilizamos dados mocados gerados por IA para popular nossos cards e aplicamos diversos estilos usando CSS inline e flexbox para melhorar a aparência e organização dos elementos, como títulos, tags e sinopses. Por fim, versionamos nosso progresso.### **Melhorando a UI: Componentizando e Estilizando os Cards de Filmes**

#### Introdução

- Olá! Agora que temos o esqueleto do nosso front-end, vamos organizar melhor o código e deixar a interface mais agradável.
- Nesta aula, vamos criar um componente reutilizável para os cards de filmes, aplicar estilos para melhorar a aparência e preparar o terreno para exibir dados reais (ou quase reais!).

---

#### Tópicos

1.  Criando o componente `MovieCard`
2.  Ajustando estilos da lista e dos cards
3.  Gerando dados de filmes fictícios (mock data) com IA
4.  Exibindo os dados mocados nos `MovieCard`s
5.  Estilizando o conteúdo do `MovieCard` (título, tags, sinopse)
6.  Criando e estilizando um componente `MovieTag`
7.  Finalizando o versionamento das alterações

---

### Passo a Passo da Aula

1.  **Criando o Componente `MovieCard`**

    - Para evitar repetição de código e organizar melhor, vamos criar um componente React chamado `MovieCard`.
    - No arquivo `src/App.jsx`, defina uma nova função `MovieCard` que retorna a estrutura JSX de um card de filme.

      ```jsx
      // filepath: front/src/App.jsx
      // ... (imports e início da função App)

      function MovieCard() {
        // Novo componente
        return (
          <div
            className="movie-card"
            style={{
              border: '1px solid gray', // Cor da borda alterada
              padding: '10px', // Adicionado padding
              borderRadius: '8px', // Bordas arredondadas
              // width: '100%', // Removido para ajuste automático
              height: '250px', // Altura aumentada
              margin: '0', // Margin removida, será controlada pelo container pai
              display: 'flex',
              flexDirection: 'column', // Para alinhar conteúdo internamente
              // alignItems: 'center', // Removido para alinhar à esquerda
              // justifyContent: 'center', // Removido
              gap: '5px', // Espaço entre elementos internos
            }}
          >
            {/* Conteúdo do card virá aqui */}
            Movie Card Placeholder
          </div>
        )
      }

      function App() {
        // ... (código anterior da função App)
        return (
          <>
            <h1>Movie Recommender</h1>
            {/* ... (textarea e button) ... */}
            <div
              className="movie-list"
              style={{
                marginTop: '15px',
                width: '80%',
                // margin: '15px auto', // Removido margin auto
                display: 'flex', // Para usar gap
                flexDirection: 'column', // Para empilhar os cards
                gap: '10px', // Espaçamento entre os cards
              }}
            >
              <MovieCard />
              <MovieCard />
              <MovieCard />
              {/* Adicione quantos MovieCards desejar para teste */}
            </div>
          </>
        )
      }

      export default App
      ```

    - Agora, dentro do `div` com `className="movie-list"`, você pode usar `<MovieCard />` para renderizar cada card.

2.  **Ajustando Estilos da Lista e dos Cards**

    - **Lista de Filmes (`movie-list`):**
      - Removemos o `margin: '15px auto'` para ter mais controle.
      - Adicionamos `display: 'flex'`, `flexDirection: 'column'` e `gap: '10px'` para empilhar os cards verticalmente com um espaçamento entre eles.
    - **Cards de Filmes (`movie-card`):**
      - Alteramos a cor da borda para `gray`.
      - Adicionamos `padding: '10px'` para dar um respiro interno.
      - Adicionamos `borderRadius: '8px'` para bordas arredondadas.
      - Aumentamos a `height` para `250px`.
      - Removemos `width: '100%'` e `margin` (o `gap` do pai cuida do espaçamento).
      - Adicionamos `display: 'flex'`, `flexDirection: 'column'` e `gap: '5px'` para organizar o conteúdo interno do card.

3.  **Gerando Dados de Filmes Fictícios (Mock Data) com IA**

    - Para testar nossa interface com dados mais realistas, vamos pedir a uma IA (como o Google Gemini) para gerar uma lista de filmes fictícios.
    - **Prompt para a IA:**
      ```text
      Crie uma lista de 10 filmes fictícios em inglês.
      Cada elemento dessa lista deve ser em formato JSON com os seguintes atributos: title, tags (array de strings), synopsis.
      Crie as sinopses como textos relativamente grandes.
      ```
    - Copie o JSON gerado pela IA.

4.  **Exibindo os Dados Mocados nos `MovieCard`s**

    - No `src/App.jsx`, crie uma constante `mockMovies` e cole o JSON gerado.
    - Use o método `.map()` no array `mockMovies` para renderizar um `MovieCard` para cada filme, passando os dados do filme como `props`.

      ```jsx
      // filepath: front/src/App.jsx
      // ... (imports)

      const mockMovies = [
        // Cole o JSON gerado pela IA aqui
        {
          title: 'Guardians of Gahoole: The Lost Tales',
          tags: ['Animation', 'Adventure', 'Family'],
          synopsis:
            "A young owl, Soren, is abducted by an evil owl army. He and his new friends escape to the island of Ga'Hoole, to assist its noble, wise owls who fight the army.",
        },
        // ... outros 9 filmes
      ]

      function MovieCard({ movie }) {
        // Recebe 'movie' como prop
        return (
          <div
            className="movie-card"
            style={
              {
                /* ... estilos do card ... */
              }
            }
          >
            <h2 style={{ margin: '0', fontSize: '1.5em' }}>{movie.title}</h2>
            <div
              className="tags-container"
              style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}
            >
              {/* Tags virão aqui */}
            </div>
            <div
              className="synopsis-container"
              style={{
                overflowY: 'auto',
                flexGrow: 1,
                fontSize: '0.9em',
                textAlign: 'left',
              }}
            >
              {/* Sinopse virá aqui */}
            </div>
          </div>
        )
      }

      function App() {
        // ...
        return (
          <>
            {/* ... (título, textarea, button) ... */}
            <div
              className="movie-list"
              style={
                {
                  /* ... estilos da lista ... */
                }
              }
            >
              {mockMovies.map((movie, index) => (
                <MovieCard key={index} movie={movie} /> // Passa o filme como prop e adiciona uma key
              ))}
            </div>
          </>
        )
      }

      export default App
      ```

    - No componente `MovieCard`, receba a `prop` `movie` e use `movie.title` para exibir o título.

5.  **Estilizando o Conteúdo do `MovieCard` (Título, Tags, Sinopse)**

    - **Título (`h2`):**
      - Adicionamos `style={{ margin: '0', fontSize: '1.5em' }}` para remover margens padrão e ajustar o tamanho.
    - **Container da Sinopse:**
      - Adicionamos um `div` para a sinopse com `style={{ overflowY: 'auto', flexGrow: 1, fontSize: '0.9em', textAlign: 'left' }}`.
        - `overflowY: 'auto'` adiciona uma barra de rolagem vertical se o texto for muito grande.
        - `flexGrow: 1` faz com que a sinopse ocupe o espaço vertical restante no card.
        - `fontSize: '0.9em'` e `textAlign: 'left'` para melhor legibilidade.

6.  **Criando e Estilizando um Componente `MovieTag`**

    - Para exibir as tags de forma organizada, criaremos outro componente pequeno chamado `MovieTag`.
    - Dentro do `MovieCard`, mapearemos as `tags` do filme para renderizar um `MovieTag` para cada uma.

      ```jsx
      // filepath: front/src/App.jsx
      // ... (const mockMovies)

      function MovieTag({ tag }) {
        // Novo componente para tags
        return (
          <div
            className="movie-tag"
            style={{
              border: '1px solid gray',
              padding: '2px 8px', // Ajustado padding
              borderRadius: '7px', // Bordas arredondadas
              fontSize: '0.8em', // Tamanho da fonte reduzido
              backgroundColor: '#333', // Cor de fundo para destaque
            }}
          >
            {tag}
          </div>
        )
      }

      function MovieCard({ movie }) {
        return (
          <div
            className="movie-card"
            style={
              {
                /* ... estilos do card ... */
              }
            }
          >
            <h2 style={{ margin: '0', fontSize: '1.5em' }}>{movie.title}</h2>
            <div
              className="tags-container"
              style={{
                display: 'flex',
                gap: '5px',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
              }}
            >
              {' '}
              {/* justifyContent alterado */}
              {movie.tags.map((tag, index) => (
                <MovieTag key={index} tag={tag} />
              ))}
            </div>
            <div
              className="synopsis-container"
              style={{ /* ... estilos da sinopse ... */ padding: '5px' }}
            >
              {movie.synopsis}
            </div>
          </div>
        )
      }

      // ... (função App e export)
      ```

    - **Estilos do `MovieTag`:**
      - Borda, padding, `borderRadius` e `fontSize` para um visual de "pílula".
      - `backgroundColor` para destacar.
    - **Container de Tags (`tags-container` no `MovieCard`):**
      - Usamos `display: 'flex'`, `gap: '5px'`, `flexWrap: 'wrap'` (para quebrar a linha se houver muitas tags) e `justifyContent: 'flex-start'` (para alinhar à esquerda).

7.  **Finalizando e Versionando**

    - Com os dados mocados e os estilos aplicados, a interface deve estar mais próxima do resultado desejado.
    - Lembre-se de salvar suas alterações no Git:
      ```sh
      git add .
      git commit -m "Feat: Create MovieCard and MovieTag components and apply initial styling"
      ```

---

### Dicas Práticas

- **CSS em Arquivos Separados:** Conforme a aplicação cresce, mova os estilos inline para arquivos `.css` dedicados (por exemplo, `MovieCard.css`, `App.css`) para melhor organização.
- **Flexbox é seu amigo:** `display: flex` é uma ferramenta poderosa para alinhar e distribuir elementos. Não hesite em usá-lo!
- **Iteração:** O design de UI é um processo iterativo. Não tenha medo de experimentar com diferentes estilos e layouts até encontrar o que funciona melhor.

---

> **Resumo:**  
> Nesta aula, refatoramos nossa interface criando componentes `MovieCard` e `MovieTag`. Utilizamos dados mocados gerados por IA para popular nossos cards e aplicamos diversos estilos usando CSS inline e flexbox para melhorar a aparência e organização dos elementos, como títulos, tags e sinopses. Por fim, versionamos nosso progresso.
