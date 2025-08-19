### **Criando Embeddings na Prática: Exemplo de Busca Semântica**

#### Introdução

- Nesta aula, vamos criar um exemplo simples de busca semântica usando embeddings.
- O objetivo é ver, na prática, como gerar embeddings para textos e como preparar uma base de dados para buscas inteligentes.
- Você vai implementar tudo passo a passo, entendendo cada etapa do processo.

---

#### Tópicos

1. Preparando o ambiente e os dados
2. Instalando as bibliotecas necessárias
3. Carregando os dados dos filmes
4. Criando uma função para gerar embeddings
5. Gerando embeddings para todos os filmes
6. Associando embeddings aos filmes

---

### Passo a Passo da Aula

1. **Preparando o ambiente e os dados**

   - Crie uma pasta para o projeto, por exemplo: `SemanticSearchExample`.
   - Dentro dessa pasta, coloque um arquivo chamado `movies.json` com uma lista de filmes. Cada filme deve ter nome, categoria e sinopse.
   - Você pode gerar esse arquivo usando o ChatGPT ou usar um arquivo pronto fornecido pelo instrutor.

2. **Instalando as bibliotecas necessárias**

   - No terminal, inicialize o projeto:
     ```sh
     npm init
     ```
   - Altere o tipo do projeto para `module` no `package.json`.
   - Instale a biblioteca de embeddings:
     ```sh
     npm install @xenova/transformers
     ```

3. **Carregando os dados dos filmes**

   - Crie um arquivo chamado `semantic_search.js`.
   - Importe o módulo de leitura de arquivos:
     ```js
     import fs from 'fs'
     ```
   - Carregue o arquivo `movies.json`:
     ```js
     const movies = JSON.parse(fs.readFileSync('movies.json'))
     ```
   - Verifique se os dados foram carregados corretamente com um `console.log(movies);`.

4. **Criando uma função para gerar embeddings**

   - Importe a pipeline da biblioteca:
     ```js
     import { pipeline } from '@xenova/transformers'
     ```
   - Carregue o modelo de embeddings:
     ```js
     const embedder = await pipeline(
       'feature-extraction',
       'Xenova/all-MiniLM-L6-v2',
       { dtype: 'q8' }
     )
     ```
   - Crie uma função para gerar embeddings de textos (usando pooling e normalização):
     ```js
     async function getEmbedding(texts) {
       return embedder(texts, { pooling: 'mean', normalize: true }).then((t) =>
         t.toList()
       )
     }
     ```
   - Essa função aceita uma lista de textos e retorna uma lista de embeddings.

5. **Gerando embeddings para todos os filmes**

   - Prepare os textos dos filmes juntando nome, categoria e sinopse:
     ```js
     const movieTexts = movies.map(
       (movie) => `${movie.name} ${movie.category} ${movie.synopsis}`
     )
     ```
   - Gere os embeddings para todos os filmes de uma vez:
     ```js
     const embeddings = await getEmbedding(movieTexts)
     ```

6. **Associando embeddings aos filmes**

   - Para cada filme, associe o embedding correspondente:
     ```js
     for (let i = 0; i < movies.length; i++) {
       movies[i].embedding = embeddings[i]
     }
     ```
   - Agora, cada filme tem seu próprio embedding, pronto para ser usado em buscas semânticas!

---

### Dicas Práticas

- Experimente gerar embeddings usando diferentes combinações de nome, categoria e sinopse para ver como isso afeta os resultados.
- Use sempre o mesmo modelo para gerar embeddings da base e das queries.
- Teste o código com diferentes listas de filmes para praticar.

---

> **Resumo:**  
> Nesta aula, você aprendeu como preparar dados, gerar embeddings para textos e associar esses embeddings aos seus filmes. Agora sua base está pronta para realizar buscas semânticas inteligentes!
