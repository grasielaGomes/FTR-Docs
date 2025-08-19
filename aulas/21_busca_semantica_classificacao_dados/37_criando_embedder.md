### **Projeto de Classificação: Gerando Embeddings em Lotes**

#### Introdução

- Olá! Nesta aula, continuaremos nosso projeto de classificação de gatos e cachorros. Após configurar o ambiente e o script básico para gerar embeddings de imagens individuais, vamos agora focar em processar todo o nosso dataset de 25.000 imagens.
- Para lidar com a grande quantidade de dados de forma eficiente e evitar problemas de memória, implementaremos uma estratégia de processamento em lotes (batches). Além disso, salvaremos os embeddings de cada lote em arquivos JSON separados, o que também nos protege contra perdas de progresso em caso de interrupções.

---

#### Tópicos da Aula

1.  Implementação do Processamento em Lotes.
2.  Geração e Salvamento dos Embeddings por Lote.
3.  Verificação e Execução Completa do Processo.

---

### Passo a Passo da Aula

#### 1. Implementando o Processamento em Lotes (00:0.32)

- **Desafio:** (00:2.00 - 00:21.28)
  - Processar 25.000 imagens de uma vez para gerar embeddings exigiria uma quantidade muito grande de memória RAM, o que é inviável para a maioria dos computadores.
- **Solução: Processamento em Lotes:** (00:26.00 - 00:32.56)
  - Vamos dividir o conjunto total de imagens em lotes menores (por exemplo, 500 imagens por lote) e processar um lote de cada vez.
  - Esta abordagem é semelhante à que utilizamos anteriormente ao lidar com documentos para a busca semântica.
- **Lógica do Loop de Lotes no script `create_embeddings.js`:** (00:34.44 - 02:0.92)

  - Precisamos modificar a função `main` para iterar sobre os `imageFilePaths` em lotes.

  ```javascript
  // filepath: NearestNeighbors/create_embeddings.js
  // ... (importações e funções initializeImageEmbedder, embedImages) ...

  async function main() {
    const imageEmbedder = await initializeImageEmbedder()

    const trainFolderPath = './train/'
    const allFiles = fs.readdirSync(trainFolderPath)
    const imageFilePaths = allFiles
      .filter((file) => file.toLowerCase().endsWith('.jpg'))
      .map((file) => `${trainFolderPath}${file}`)

    console.log(`Encontrados ${imageFilePaths.length} arquivos de imagem.`)

    let startIndex = 0 // (00:36.52)
    const batchSize = 500 // (00:51.64) Define o tamanho do lote
    const allBatchData = [] // Para guardar todos os embeddings se necessário, ou salvar direto

    while (startIndex < imageFilePaths.length) {
      // (00:40.10)
      const endIndex = Math.min(startIndex + batchSize, imageFilePaths.length) // (00:53.98) Garante que não ultrapasse o total
      const imagesToEmbed = imageFilePaths.slice(startIndex, endIndex) // (01:50.87 - 01:59.76) Seleciona o lote atual

      console.log(
        `Processando lote: imagens de ${startIndex} a ${endIndex - 1}`
      ) // (01:26.04 - 01:42.18)

      // ... (lógica para gerar e salvar embeddings do lote virá aqui) ...

      startIndex = endIndex // (01:1.96 - 01:5.81) Atualiza o índice para o próximo lote
    }
    console.log('Processamento de todos os lotes concluído.')
  }

  main()
  ```

- **Considerações sobre Eficiência:** (02:0.92 - 02:46.02)
  - Este método de processamento em lotes é prático para tarefas que não precisam ser executadas com altíssima frequência (ex: uma vez para gerar os dados iniciais de um projeto).
  - Se fosse necessário processar imagens e gerar embeddings continuamente e de forma otimizada, seria mais indicado construir um pipeline de ETL (Extract, Transform, Load) dedicado.
  - Para nosso projeto de aprendizado, esta abordagem é suficiente e didática.

#### 2. Gerando e Salvando Embeddings por Lote

- **Gerar Embeddings para o Lote Atual:** (02:47.81 - 03:4.59)

  - Dentro do loop `while`, após fatiar o `imagesToEmbed`, chamamos a função `embedImages`.

  ```javascript
  // filepath: NearestNeighbors/create_embeddings.js
  // ... (dentro do loop while) ...
  // const imagesToEmbed = imageFilePaths.slice(startIndex, endIndex); // Já definido
  // console.log(`Processando lote: imagens de ${startIndex} a ${endIndex - 1}`); // Já definido

  const currentEmbeddings = await embedImages(imageEmbedder, imagesToEmbed) // (02:54.16)
  ```

- **Estruturando os Dados para Salvar:** (03:32.58 - 05:4.83)

  - Para cada embedding gerado no lote, queremos salvar tanto o vetor do embedding quanto o caminho (path) da imagem original. Isso é crucial para sabermos a qual imagem cada embedding corresponde e, posteriormente, sua classe (gato ou cachorro).
  - O índice para acessar o `imageFilePaths` deve considerar o `startIndex` do lote atual.

  ```javascript
  // filepath: NearestNeighbors/create_embeddings.js
  // ... (após obter currentEmbeddings) ...
  let batchOutput = [] // (04:0.46)
  for (let i = 0; i < currentEmbeddings.length; i++) {
    batchOutput.push({
      path: imageFilePaths[startIndex + i], // (04:54.60) Caminho original da imagem
      embedding: currentEmbeddings[i], // (04:13.68) Vetor de embedding
    })
  }
  ```

- **Salvando o Lote em um Arquivo JSON:** (03:10.06 - 03:28.74, 05:8.39 - 05:34.92)

  - Para evitar a perda de todo o progresso caso ocorra algum problema (ex: falta de energia), salvaremos os embeddings de cada lote em um arquivo JSON separado.
  - Vamos criar uma pasta chamada `embeddings` para armazenar esses arquivos.
  - O nome de cada arquivo JSON pode incluir o `startIndex` do lote para fácil identificação (ex: `0.json`, `500.json`, etc.).

  ```javascript
  // filepath: NearestNeighbors/create_embeddings.js
  // ... (após popular batchOutput) ...
  const embeddingsDir = './embeddings/'
  if (!fs.existsSync(embeddingsDir)) {
    // (05:38.22) Cria a pasta se não existir
    fs.mkdirSync(embeddingsDir, { recursive: true })
  }

  const outputFilePath = `${embeddingsDir}${startIndex}.json` // (05:17.01 - 05:27.74)
  fs.writeFileSync(outputFilePath, JSON.stringify(batchOutput, null, 2)) // (05:29.06 - 05:33.95) Salva o JSON formatado
  console.log(
    `Lote de ${startIndex} a ${endIndex - 1} salvo em ${outputFilePath}`
  )
  ```

#### 3. Verificação e Execução Completa

- **Teste Inicial com um Lote Pequeno:** (05:48.24 - 05:53.94)
  - Antes de processar todas as 25.000 imagens, é uma boa prática testar com um único lote (ou alguns poucos) para garantir que tudo está funcionando como esperado.
  - Você pode, por exemplo, adicionar uma condição `if (startIndex >= 500) break;` dentro do loop `while` para processar apenas o primeiro lote.
  - Execute o script (`node create_embeddings.js`).
  - Verifique o tempo de processamento do lote (ex: cerca de 10 segundos para 500 imagens). (06:7.81)
  - Confira o arquivo JSON gerado na pasta `embeddings` (ex: `0.json`). Ele deve conter uma lista de objetos, cada um com `path` e `embedding`. (06:23.62 - 06:47.04)
- **Execução Completa para Todas as Imagens:** (06:52.22 - 07:4.83)
  - Após confirmar que o teste funciona, remova qualquer limitação de teste do loop.
  - Execute o script novamente para processar todas as imagens.
  - Este processo levará mais tempo. Para 25.000 imagens, com lotes de 500 e cerca de 10 segundos por lote, pode levar aproximadamente 50 \* 10 segundos = 500 segundos, ou cerca de 8-10 minutos. (06:11.74 - 06:19.62, 07:12.06)

---

> **Resultados e Próximos Passos:** (07:20.00 - 07:41.86)
>
> - Ao final da execução completa, a pasta `embeddings` conterá múltiplos arquivos JSON (ex: `0.json`, `500.json`, ..., `24500.json`). Cada arquivo armazena os dados (`path` e `embedding`) de um lote de imagens.
> - Com todos os embeddings gerados e salvos, o próximo passo, conforme nosso roadmap, será:
>   1.  Juntar os dados de todos esses arquivos JSON.
>   2.  Separar o conjunto de dados consolidado em um conjunto de treino e um conjunto de teste, que serão utilizados para treinar (no caso do KNN, referenciar) e avaliar nosso classificador.
