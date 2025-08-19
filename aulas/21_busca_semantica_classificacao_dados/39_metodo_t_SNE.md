### **Projeto de Classificação: Visualizando Embeddings com t-SNE**

#### Introdução

- Olá! Antes de partirmos para a classificação em si, vamos fazer algo bem legal: explorar e visualizar nossos dados de treino usando uma técnica chamada t-SNE. (00:0.00 - 00:8.36)
- Isso nos ajudará a ter uma intuição de como os embeddings de gatos e cachorros estão organizados e como o método KNN (que usaremos depois) poderá funcionar. (00:12.98 - 00:27.6)

---

#### Tópicos da Aula

1.  O que é o método t-SNE?
2.  Configuração do Ambiente para t-SNE.
3.  Instalação da Biblioteca `tsne-js`.
4.  Criação do Script de Visualização.
5.  Carregamento dos Embeddings.
6.  Configuração e Execução do Modelo t-SNE.
7.  A Importância da Amostragem (Sampling) para Performance.

---

### Passo a Passo da Aula

#### 1. O que é o método t-SNE? (00:29.88)

- **Redução de Dimensionalidade para Visualização:**
  - O t-SNE (t-distributed Stochastic Neighbor Embedding) é uma técnica usada para visualizar dados de alta dimensionalidade (como nossos embeddings de ~500 dimensões) em um espaço de baixa dimensionalidade (geralmente 2D ou 3D). (00:58.3 - 01:8.42)
- **Preservação da Proximidade:**
  - A grande vantagem do t-SNE é que ele tenta manter a estrutura local dos dados. Se dois embeddings são muito próximos (similares) no espaço original de 500 dimensões, o t-SNE tentará colocá-los próximos também na visualização 2D. (00:48.48 - 00:56.34, 01:10.23 - 01:14.0)
  - Isso significa que, se nossos embeddings de gatos estão agrupados e os de cachorros também, esperamos ver esses agrupamentos na visualização 2D. (01:20.12 - 01:32.42)
- **Perda do Significado Original dos Eixos:**
  - **Importante:** Ao aplicar o t-SNE, os eixos da nova visualização (2D) não têm mais o mesmo significado que os eixos originais dos embeddings. Os valores dos embeddings são alterados. (00:31.9 - 00:40.04, 01:39.94 - 01:41.95)
  - O t-SNE é útil **apenas para visualização e intuição**, não para treinar modelos de classificação diretamente sobre os dados transformados por ele.

#### 2. Configuração do Ambiente para t-SNE (01:55.94)

- **Criar uma Nova Pasta:**
  - Vamos criar um novo diretório para este experimento de visualização.
  ```bash
  mkdir tsne_visualization
  cd tsne_visualization
  ```
  (Exemplo, o instrutor usou `t-isney` (02:0.06))
- **Iniciar o `npm`:**
  - Dentro da pasta, inicialize um projeto Node.js.
  ```bash
  npm init -y
  ```
  (02:10.81)

#### 3. Instalação da Biblioteca `tsne-js` (02:14.71)

- **O que é?**
  - `tsne-js` é uma implementação em JavaScript do algoritmo t-SNE. O t-SNE é originalmente um artigo científico, e essa biblioteca nos permite usá-lo facilmente. (02:21.59 - 02:46.5)
- **Instalação:**
  ```bash
  npm install tsne-js
  ```
  (O instrutor menciona `tisne` ou `tisne.js` (02:17.22), mas o pacote comum é `tsne-js`)

#### 4. Criação do Script de Visualização (02:54.81)

- **Novo Arquivo:**
  - Crie um arquivo JavaScript, por exemplo, `visualize_tsne.js`. (O instrutor usou `t-sne.js` (02:54.81))
- **Importar Módulos Necessários:**
  ```javascript
  // filepath: tsne_visualization/visualize_tsne.js
  import TSNE from 'tsne-js' // (03:1.21 - 03:7.30)
  import fs from 'fs' // (03:12.24 - 03:13.97)
  ```

#### 5. Carregamento dos Embeddings (03:17.15)

- **Ler o Arquivo `embeddings.json`:**

  - Vamos carregar o arquivo `embeddings.json` que processamos na aula anterior. Ele está na pasta do projeto `NearestNeighbors`.

  ```javascript
  // filepath: tsne_visualization/visualize_tsne.js
  // ...existing code...

  function loadEmbeddings() {
    console.log('Carregando embeddings...')
    // Ajuste o caminho se a estrutura de pastas for diferente
    const filePath = '../NearestNeighbors/embeddings.json' // (03:26.02 - 03:39.78)
    const fileContent = fs.readFileSync(filePath)
    const allEmbeddingsData = JSON.parse(fileContent)
    console.log(`Total de embeddings carregados: ${allEmbeddingsData.length}`) // (03:48.44 - 03:55.28)
    return allEmbeddingsData
  }

  const allData = loadEmbeddings()
  ```

  - **Nota:** O script `visualize_tsne.js` está em uma pasta (`tsne_visualization`), e o `embeddings.json` está na pasta `NearestNeighbors` no mesmo nível do diretório pai. Por isso, usamos `../NearestNeighbors/`.

#### 6. Configuração e Execução do Modelo t-SNE

- **t-SNE é um Método "Aprendido":** (04:2.13 - 04:18.77)
  - O t-SNE não é um cálculo direto e fixo. Ele itera para encontrar a melhor representação 2D, "aprendendo" a partir dos dados de entrada.
- **Parâmetros do Modelo:** (04:20.43 - 04:27.5)

  - Existem vários parâmetros que podem ser ajustados. Usaremos os recomendados pela biblioteca.

  ```javascript
  // filepath: tsne_visualization/visualize_tsne.js
  // ...existing code...

  const tsneModel = new TSNE({
    dim: 2, // Queremos uma saída 2D (04:58.10)
    perplexity: 30.0, // (05:8.01)
    earlyExaggeration: 4.0, // (05:12.27)
    learningRate: 100.0, // Valor padrão comum, não mencionado explicitamente mas necessário
    nIter: 500, // Número de iterações (05:31.0 - 05:46.16)
    metric: 'euclidean', // Usar distância Euclidiana (05:48.01 - 05:56.18)
  })
  ```

  - `dim`: Número de dimensões da saída (2 para um gráfico 2D).
  - `perplexity`: Relacionado ao número de vizinhos próximos considerados.
  - `earlyExaggeration`: Ajuda a formar agrupamentos mais distintos no início.
  - `nIter`: Quantas vezes o algoritmo tentará otimizar a visualização. Mais iterações podem dar um resultado melhor, mas levam mais tempo.
  - `metric`: Como a "distância" entre os embeddings é calculada.

- **Preparando os Dados de Entrada para o t-SNE:**

  - O t-SNE espera uma matriz (array de arrays) onde cada array interno é um embedding.

  ```javascript
  // filepath: tsne_visualization/visualize_tsne.js
  // ...existing code...

  // ATENÇÃO: Vamos processar apenas uma amostra dos dados (ver próxima seção)
  // Por enquanto, vamos simular com uma pequena amostra para o código funcionar
  const sampleSize = 10 // Exemplo MUITO pequeno, aumentaremos depois
  const sampleData = allData.slice(0, sampleSize).map((item) => item.embedding)

  console.log(`Inicializando t-SNE com ${sampleData.length} amostras.`)
  tsneModel.init({
    data: sampleData, // (06:16.43)
    type: 'dense', // (06:16.43 - 06:35.18) Indica que estamos passando os vetores de embedding diretamente
  })
  ```

- **Executando o t-SNE e Obtendo a Saída:**

  ```javascript
  // filepath: tsne_visualization/visualize_tsne.js
  // ...existing code...

  console.log('Executando t-SNE (pode levar um tempo)...')
  // O método run executa as iterações.
  // Os parâmetros error e iter são atualizados a cada passo, mas não precisamos deles aqui.
  tsneModel.run() // (06:41.66 - 06:50.10)

  const outputCoordinates = tsneModel.getOutput() // (06:51.68 - 06:55.33)
  console.log('Visualização t-SNE gerada.')
  // console.log(outputCoordinates); // Serão as coordenadas X,Y para cada embedding da amostra
  ```

  - `outputCoordinates` será um array de arrays, onde cada array interno contém as coordenadas `[x, y]` para o embedding correspondente na visualização 2D.

#### 7. A Importância da Amostragem (Sampling) para Performance (07:31.93)

- **Complexidade Computacional:**
  - O t-SNE tem uma complexidade computacional de aproximadamente O(N^2), onde N é o número de pontos de dados. (07:38.01 - 07:42.31)
  - Isso significa que o tempo de execução aumenta drasticamente com mais dados. Processar 25.000 embeddings diretamente seria **extremamente lento**. (07:46.72 - 07:57.66)
  - Ex: 1.000 imagens -> 1 milhão de operações. 10.000 imagens -> 100 milhões. 25.000 imagens -> muito mais! (08:0.01 - 08:17.75)
- **Solução: Amostragem (Sampling):**

  - Para obter uma visualização útil sem esperar horas, vamos usar uma **amostra** dos nossos dados (ex: 500 ou 1000 embeddings) em vez do conjunto completo. (08:21.01 - 08:26.04)
  - Uma amostra bem escolhida ainda pode nos dar uma boa ideia da separação das classes. (08:42.0 - 08:45.63)
  - Além disso, plotar 25.000 pontos em um gráfico 2D pode ficar muito poluído visualmente. (08:32.0 - 08:40.13)

- **Implementando a Amostragem (Exemplo):**

  - Vamos pegar, por exemplo, os primeiros 250 gatos e os primeiros 250 cachorros do nosso conjunto de treino para a visualização.

  ```javascript
  // filepath: tsne_visualization/visualize_tsne.js
  // ... (função loadEmbeddings e instanciação do tsneModel) ...

  function prepareSampleData(allEmbeddingsData, samplePerClass = 250) {
    const catSamples = allEmbeddingsData
      .filter((item) => item.class === 'cat' && item.split === 'train')
      .slice(0, samplePerClass)
    const dogSamples = allEmbeddingsData
      .filter((item) => item.class === 'dog' && item.split === 'train')
      .slice(0, samplePerClass)

    const combinedSamples = [...catSamples, ...dogSamples]

    // Guardar as classes para colorir o gráfico depois
    const sampleClasses = combinedSamples.map((item) => item.class)
    const sampleEmbeddings = combinedSamples.map((item) => item.embedding)

    return { embeddings: sampleEmbeddings, classes: sampleClasses }
  }

  const { embeddings: dataForTsne, classes: dataClasses } = prepareSampleData(
    allData,
    250
  ) // (08:49.29 - 08:51.75)

  console.log(`Inicializando t-SNE com ${dataForTsne.length} amostras.`)
  tsneModel.init({
    data: dataForTsne,
    type: 'dense',
  })

  console.log('Executando t-SNE (pode levar um tempo)...')
  tsneModel.run()

  const outputCoordinates = tsneModel.getOutput()
  console.log('Visualização t-SNE gerada.')

  // Para realmente visualizar, precisaríamos de uma biblioteca de gráficos (ex: chart.js, D3.js)
  // ou salvar os dados para plotar em Python/R.
  // Por agora, vamos apenas salvar as coordenadas e classes:
  const visualizationData = outputCoordinates.map((coords, index) => ({
    x: coords[0],
    y: coords[1],
    class: dataClasses[index],
  }))

  fs.writeFileSync(
    './tsne_visualization_output.json',
    JSON.stringify(visualizationData, null, 2)
  )
  console.log('Dados da visualização salvos em tsne_visualization_output.json')
  ```

---

> **Próximos Passos:** (08:56.03 - 09:2.22)
>
> - Com as coordenadas 2D geradas pelo t-SNE (`tsne_visualization_output.json`), poderíamos usar uma biblioteca de gráficos para criar uma visualização onde cada ponto é colorido de acordo com sua classe (gato ou cachorro).
> - Isso nos permitiria ver se os gatos e cachorros formam agrupamentos distintos, o que seria um bom sinal para nosso classificador KNN.
> - Na próxima aula, partiremos para a implementação do classificador KNN.
