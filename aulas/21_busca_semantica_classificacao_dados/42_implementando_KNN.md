### **Projeto de Classificação: Implementando o K-Nearest Neighbors (KNN)**

#### Introdução

- Olá! Nesta aula, vamos implementar o nosso classificador K-Nearest Neighbors (KNN) para determinar se uma imagem é de um gato ou de um cachorro, utilizando os embeddings que geramos. (00:0.48)
- Usaremos um valor de K igual a 5, o que significa que olharemos para os 5 vizinhos mais próximos para fazer a classificação. (00:6.3)

---

#### Tópicos da Aula

1.  Entendendo o Funcionamento do KNN com Embeddings.
2.  Configuração Inicial do Script `classifier.js`.
3.  Carregamento e Divisão dos Dados (Treino e Teste).
4.  Cálculo de Similaridade entre Embeddings.
5.  Implementação da Lógica para Encontrar os K Vizinhos Mais Próximos.
6.  Testes Iniciais da Implementação.

---

### Passo a Passo da Aula

#### 1. Entendendo o Funcionamento do KNN com Embeddings (00:15.28 - 00:48.14)

- **O Processo:**
  1.  Pegamos um embedding de uma imagem de **teste**.
  2.  Comparamos esse embedding com **todos** os embeddings do nosso conjunto de **treino**.
  3.  Calculamos a similaridade (ou distância) entre o embedding de teste e cada embedding de treino.
  4.  Selecionamos os **K** embeddings de treino mais similares (os "vizinhos mais próximos"). No nosso caso, K=5.
  5.  Verificamos a classe (gato ou cachorro) de cada um desses K vizinhos.
  6.  A classe que aparecer mais vezes entre os K vizinhos (por votação) será a classe prevista para o nosso embedding de teste.
- **Similaridade com Busca Semântica:** (00:50.04 - 01:20.78)
  - Este processo é muito parecido com a busca semântica que fizemos antes.
  - Poderíamos usar um banco de dados de vetores, mas para este exemplo, faremos uma busca exata (calculando todas as similaridades) para simplificar e mostrar o conceito.

#### 2. Configuração Inicial do Script `classifier.js`

- **Criar Novo Arquivo:** (01:56.62 - 02:17.46)
  - Dentro da nossa pasta `NearestNeighbors` (ou onde você estiver organizando seus scripts), crie um novo arquivo chamado `classifier.js`.
- **Importar Módulo `fs`:** (02:19.97)

  - Precisaremos do módulo `fs` (File System) para ler nosso arquivo de embeddings.

  ```javascript
  // filepath: NearestNeighbors/classifier.js
  import fs from 'fs'
  // Precisaremos também da função de similaridade de cosseno
  // (Será adicionada/assumida posteriormente no código do instrutor, mas é bom já saber)
  // import { cosineSimilarity } from './utils'; // Exemplo, se você tiver um utilitário
  ```

#### 3. Carregamento e Divisão dos Dados (Treino e Teste)

- **Carregar `embeddings.json`:** (02:22.12 - 03:13.37)

  - Vamos ler o arquivo `embeddings.json` que contém todos os nossos dados processados.
  - **Importante:** Lembre-se de usar `JSON.parse()` para converter o conteúdo do arquivo (que é uma string) em um objeto JavaScript.

  ```javascript
  // filepath: NearestNeighbors/classifier.js
  // ...existing code...

  const embeddingsFileContent = fs.readFileSync('./embeddings.json')
  const allEmbeddings = JSON.parse(embeddingsFileContent) // (03:5.91)

  console.log(`Total de embeddings carregados: ${allEmbeddings.length}`) // (02:40.94) - Deve ser 25000
  ```

- **Separar em Conjuntos de Treino e Teste:** (03:17.90 - 04:5.96)

  - Usaremos a propriedade `split` (que definimos como 'train' ou 'test' anteriormente) para dividir os dados.

  ```javascript
  // filepath: NearestNeighbors/classifier.js
  // ...existing code...

  const trainEmbeddings = allEmbeddings.filter((e) => e.split === 'train') // (03:29.72)
  const testEmbeddings = allEmbeddings.filter((e) => e.split === 'test') // (03:48.47)

  console.log(`Tamanho do conjunto de treino: ${trainEmbeddings.length}`) // (03:55.5)
  console.log(`Tamanho do conjunto de teste: ${testEmbeddings.length}`) // (03:58.62)
  // Esperado: 24000 para treino, 1000 para teste (ou os valores correspondentes à sua divisão)
  ```

- **Nota sobre "Treino" no KNN:** (04:08 - 04:20.04)
  - O KNN é um algoritmo "preguiçoso" (lazy learner). Ele não tem uma fase de "treino" explícita como outros modelos. A "base de treino" é simplesmente o conjunto de dados que ele usa como referência para fazer as comparações no momento da classificação.

#### 4. Cálculo de Similaridade entre Embeddings (Função `compare`)

- **Objetivo:** Criar uma função que, dado um embedding de teste, calcula a similaridade dele com todos os embeddings de treino.
- **Implementação:** (04:26.18 - 05:46.80)

  - A função `compare` receberá um `testEmbedding`.
  - Ela iterará por cada `trainEmbedding` no `trainEmbeddings`.
  - Para cada par, calculará a similaridade de cosseno.
  - Armazenará a `distance` (similaridade) e a `class` do `trainEmbedding`.

  ```javascript
  // filepath: NearestNeighbors/classifier.js
  // ... (imports e carregamento de dados) ...

  // Função de similaridade de cosseno (exemplo, adapte à sua implementação)
  function cosineSimilarity(vecA, vecB) {
    let dotProduct = 0
    let normA = 0
    let normB = 0
    for (let i = 0; i < vecA.length; i++) {
      dotProduct += vecA[i] * vecB[i]
      normA += vecA[i] * vecA[i]
      normB += vecB[i] * vecB[i]
    }
    if (normA === 0 || normB === 0) return 0 // Evita divisão por zero
    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB))
  }

  function compare(testEmbeddingItem) {
    // (04:27)
    let distances = [] // (04:43.75)
    for (const trainEmbeddingItem of trainEmbeddings) {
      // (04:50.36)
      const similarity = cosineSimilarity(
        // (05:0.81) - O instrutor usa 'cos sim'
        testEmbeddingItem.embedding,
        trainEmbeddingItem.embedding
      )
      distances.push({
        // (05:25.04)
        distance: similarity, // Na verdade, é similaridade. Maior é melhor.
        class: trainEmbeddingItem.class,
      })
    }
    return distances // (06:8.37)
  }

  // Teste inicial da função compare
  // const testSample = testEmbeddings[0];
  // const allDistances = compare(testSample);
  // console.log(allDistances.slice(0, 3)); // Mostra as primeiras 3 distâncias/classes
  ```

#### 5. Implementação da Lógica para Encontrar os K Vizinhos Mais Próximos (Função `getKnearestNeighbors`)

- **Objetivo:** Pegar todas as similaridades calculadas, ordená-las e retornar os K vizinhos mais próximos.
- **Implementação:** (06:30.36 - 08:35.24)

  - A função `getKnearestNeighbors` receberá um `testEmbeddingItem` e o valor de `k`.
  - Chamará a função `compare` para obter todas as similaridades.
  - Ordenará a lista de similaridades em ordem **decrescente** (pois maior similaridade de cosseno significa mais perto).
  - Retornará os primeiros `k` itens da lista ordenada.

  ```javascript
  // filepath: NearestNeighbors/classifier.js
  // ... (função compare e resto do código) ...

  function getKnearestNeighbors(testEmbeddingItem, k) {
    // (06:39.48)
    const distances = compare(testEmbeddingItem) // (07:0.43)

    // Ordena por 'distance' (similaridade) em ordem decrescente
    const sortedDistances = distances.sort((a, b) => {
      // (07:9.66)
      if (a.distance > b.distance) return -1 // (07:33.51 - A.distance > B.distance para decrescente)
      if (a.distance < b.distance) return 1
      return 0
    })

    return sortedDistances.slice(0, k) // (08:20.45)
  }
  ```

#### 6. Testes Iniciais da Implementação

- **Testando `getKnearestNeighbors`:** (08:4.98 - 08:41.46)

  - Chame a função com uma amostra de teste e um valor de K (ex: 5).
  - Verifique se ela retorna o número correto de vizinhos e se as similaridades parecem estar em ordem decrescente.

  ```javascript
  // filepath: NearestNeighbors/classifier.js
  // ... (resto do código) ...

  const testSample = testEmbeddings[0]
  const kValue = 5
  const neighbors = getKnearestNeighbors(testSample, kValue) // (08:25.75)
  console.log(
    `Os ${kValue} vizinhos mais próximos para a primeira amostra de teste:`
  )
  console.log(neighbors)
  // (08:35.24) - O output deve mostrar 5 vizinhos com suas similaridades e classes.
  ```

- **Verificação Visual:** (09:11.62 - 09:14.87)
  - Ao inspecionar o resultado do teste, você pode ver as classes dos vizinhos mais próximos. No exemplo do instrutor, para uma imagem de gato, todos os 5 vizinhos mais próximos também eram gatos, o que é um bom sinal.

---

> **Próximos Passos:** (09:16.37)
>
> - Agora que temos os K vizinhos mais próximos e suas classes, o próximo passo é implementar a lógica de "votação": contar qual classe aparece mais frequentemente entre esses K vizinhos para determinar a classe final da imagem de teste.
> - Depois, avaliaremos o desempenho do nosso classificador em todo o conjunto de teste.
