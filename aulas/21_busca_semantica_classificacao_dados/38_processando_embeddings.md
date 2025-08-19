### **Projeto de Classificação: Processando e Preparando Embeddings**

#### Introdução

- Olá! Nesta aula, vamos dar um passo crucial no nosso projeto de classificação: processar os embeddings que geramos. (00:0.44)
- Nosso objetivo é juntar todos os arquivos de embeddings individuais, adicionar informações de classe (gato ou cachorro) e, em seguida, separar nosso dataset em conjuntos de treino e teste. (00:0.44 - 00:6.36)

---

#### Tópicos da Aula

1.  Criação do Script de Processamento.
2.  Agregação dos Arquivos de Embeddings.
3.  Adição da Classe (Gato/Cachorro) aos Dados.
4.  Separação dos Dados em Conjuntos de Treino e Teste.
5.  Salvamento do Dataset Processado.

---

### Passo a Passo da Aula

#### 1. Criação do Script de Processamento (`process_embeddings.js`)

- **Novo Arquivo:** (00:10.56 - 00:18.18)
  - Vamos criar um novo arquivo JavaScript em nosso projeto, que chamaremos de `process_embeddings.js`.
- **Dependências:** (00:25.56 - 00:37.48)

  - Precisaremos apenas do módulo `fs` (File System) do Node.js para ler e escrever arquivos.

  ```javascript
  // filepath: NearestNeighbors/process_embeddings.js
  import fs from 'fs'
  ```

#### 2. Agregação dos Arquivos de Embeddings

- **Listar Arquivos de Embeddings:** (00:39.78 - 01:0.06)

  - Primeiro, lemos todos os arquivos JSON da pasta `embeddings` (onde salvamos os lotes na aula anterior).

  ```javascript
  // filepath: NearestNeighbors/process_embeddings.js
  // ...existing code...

  async function processEmbeddings() {
      const embeddingsFolderPath = './embeddings/';
      const allEmbeddingFiles = fs.readdirSync(embeddingsFolderPath)
          .map(file => `${embeddingsFolderPath}${file}`); // Monta o caminho completo
  ```

- **Juntar os Dados:** (01:2.24 - 01:50.81)

  - Iteramos sobre cada arquivo, lemos seu conteúdo (que é uma lista de objetos de embedding), e concatenamos todas essas listas em uma única lista chamada `allEmbeddingsData`.

  ```javascript
  // filepath: NearestNeighbors/process_embeddings.js
  // ...existing code...
  let allEmbeddingsData = []
  for (const filePath of allEmbeddingFiles) {
    const fileContent = fs.readFileSync(filePath)
    const jsonData = JSON.parse(fileContent)
    allEmbeddingsData = allEmbeddingsData.concat(jsonData)
  }

  console.log(`Total de embeddings carregados: ${allEmbeddingsData.length}`) // Deve ser 25000
  // (01:50.81 - 02:9.78) - Verificação do total
  ```

#### 3. Adição da Classe (Gato/Cachorro) aos Dados

- **Extraindo a Classe do Caminho:** (02:16.87 - 02:31.72)

  - A classe de cada imagem (gato ou cachorro) está implícita no nome do arquivo original (ex: `cat.0.jpg`, `dog.100.jpg`).
  - Vamos iterar sobre cada item em `allEmbeddingsData` e adicionar uma nova propriedade `class`.

  ```javascript
  // filepath: NearestNeighbors/process_embeddings.js
  // ...existing code...
  for (let embeddingItem of allEmbeddingsData) {
    if (embeddingItem.path.includes('cat')) {
      embeddingItem.class = 'cat'
    } else if (embeddingItem.path.includes('dog')) {
      embeddingItem.class = 'dog'
    }
  }
  // (03:25.62 - 03:37.53) - Verificação da classe adicionada
  // console.log(allEmbeddingsData[0]);
  ```

#### 4. Separação dos Dados em Conjuntos de Treino e Teste

- **Importância da Aleatoriedade (Teoria):** (03:44.44 - 04:32.10)
  - Idealmente, a separação entre treino e teste deve ser feita aleatoriamente para evitar vieses. Se os dados estiverem ordenados de alguma forma (ex: imagens de melhor qualidade primeiro), uma simples divisão sequencial pode levar a um conjunto de teste não representativo.
- **Abordagem Simplificada (Prática):** (04:32.10 - 04:47.81)
  - Para simplificar, vamos definir que as primeiras 500 imagens de gatos e as primeiras 500 imagens de cachorros farão parte do nosso conjunto de **teste**. O restante será para **treino**.
- **Extraindo o Número da Imagem:** (04:47.81 - 05:47.60)

  - Precisamos extrair o número identificador da imagem do seu caminho (ex: de `cat.0.jpg` pegar o `0`). Usaremos uma expressão regular para isso.

  ```javascript
  // filepath: NearestNeighbors/process_embeddings.js
  // ...existing code...
  for (let embeddingItem of allEmbeddingsData) {
    // ... (código de adicionar classe) ...

    // Extrai o número do arquivo. Ex: './train/cat.123.jpg' -> '123'
    const match = embeddingItem.path.match(/\.(\d+)\.jpg$/)
    if (match && match[1]) {
      embeddingItem.imageNumber = parseInt(match[1])
    } else {
      embeddingItem.imageNumber = -1 // Caso não encontre, para depuração
    }
  }
  // (05:31.62 - 05:45.75) - Verificação do número extraído
  // console.log(allEmbeddingsData[0]);
  ```

- **Atribuindo ao Conjunto (Split):** (05:49.68 - 06:24.95)

  - Adicionamos uma propriedade `split` a cada item. Se o `imageNumber` for menor que 500, o item vai para o `test`; caso contrário, vai para `train`.

  ```javascript
  // filepath: NearestNeighbors/process_embeddings.js
  // ...existing code...
  for (let embeddingItem of allEmbeddingsData) {
    // ... (código de adicionar classe e imageNumber) ...

    if (embeddingItem.imageNumber < 500 && embeddingItem.imageNumber !== -1) {
      embeddingItem.split = 'test'
    } else {
      embeddingItem.split = 'train'
    }
  }
  // (06:27.07 - 06:49.10) - Verificação do split
  // console.log(allEmbeddingsData[0]);
  // console.log(allEmbeddingsData[12000]); // Exemplo de item de treino
  ```

#### 5. Salvamento do Dataset Processado

- **Salvar em Arquivo Único:** (06:54.44 - 07:20.68)

  - Agora que todos os dados estão processados e enriquecidos com `class`, `imageNumber` e `split`, salvamos a lista `allEmbeddingsData` inteira em um novo arquivo JSON chamado `embeddings.json`.

  ```javascript
  // filepath: NearestNeighbors/process_embeddings.js
  // ...existing code...
      fs.writeFileSync('./embeddings.json', JSON.stringify(allEmbeddingsData, null, 2));
      console.log('Dataset processado e salvo em embeddings.json');
  }

  processEmbeddings();
  ```

  - **Atenção:** Este arquivo `embeddings.json` será grande! (07:25.56 - 07:30.30)

---

> **Próximos Passos:** (07:30.89 - 07:55.24)
>
> - Com o arquivo `embeddings.json` pronto, contendo todos os nossos dados preparados, estamos prontos para a próxima etapa: construir e treinar nosso sistema de classificação!
> - Este arquivo `embeddings.json` será disponibilizado para que você possa pular as etapas de geração e processamento se desejar, e ir direto para a parte de classificação.
