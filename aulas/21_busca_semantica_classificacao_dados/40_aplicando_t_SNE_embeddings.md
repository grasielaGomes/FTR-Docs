### **Projeto de Classificação: Aplicando t-SNE aos Embeddings e Gerando CSV**

#### Introdução

- Olá! Continuando nossa exploração com t-SNE, agora vamos aplicar o algoritmo a uma amostra dos nossos embeddings de imagem e preparar os resultados para visualização, salvando-os em um arquivo CSV. (00:0.88)

---

#### Tópicos da Aula

1.  Seleção da Amostra de Dados para t-SNE.
2.  Preparação do Input para o Modelo t-SNE.
3.  Execução do t-SNE e Análise Inicial do Output.
4.  Formatação dos Dados para Saída em CSV.
5.  Utilização da Biblioteca `csv-writer` para Salvar o CSV.
6.  Teste e Execução Final com Amostra Maior.
7.  Considerações sobre a Escalabilidade do t-SNE.

---

### Passo a Passo da Aula

#### 1. Seleção da Amostra de Dados para t-SNE (00:8.26)

- **Estratégia de Amostragem:**

  - Vamos selecionar um subconjunto (amostra) das nossas imagens de treino. Não usaremos dados de teste para não "contaminar" nossa avaliação futura. (00:16.4 - 00:41.98)
  - Escolheremos imagens com `imageNumber` entre 500 e 999 (inclusive), totalizando 1000 imagens (500 de cada classe, assumindo a numeração original).

- **Código para Filtrar a Amostra:**

  - Iteramos sobre todos os embeddings carregados e selecionamos aqueles que atendem ao critério.

  ```javascript
  // filepath: tsne_visualization/visualize_tsne.js
  // ... (allData carregado anteriormente) ...

  let tsneInput = [] // (00:25.94)
  for (const embeddingItem of allData) {
    // Renomeado de 'embeddings' para 'allData' para clareza
    if (embeddingItem.imageNumber >= 500 && embeddingItem.imageNumber < 1000) {
      // (00:53.02 - 01:1.65)
      tsneInput.push(embeddingItem) // (01:4.0 - 01:7.15)
    }
  }
  console.log(`Tamanho da amostra para t-SNE: ${tsneInput.length}`) // (01:16.15 - 01:20.04)
  // Esperado: 1000 (ou 998 se o < 1000 for estrito e a numeração for até 999)
  // Ajuste: >= 500 e < 1000 resulta em 500 itens (500 a 999). Para 1000 itens, seria imageNumber >= 500 e < 1500, por exemplo, ou ajustar a lógica.
  // O instrutor obteve 998 e depois ajustou para >= 500, resultando em 1000. (01:26.18 - 01:38.08)
  // Para este exemplo, vamos manter a lógica que resulta em 1000 amostras (índices 500 a 999 de cada classe, se a numeração for contínua por classe, ou 500 de uma e 500 de outra).
  // A lógica do instrutor parece ser: imageNumber 500 a 999.
  ```

#### 2. Preparação do Input para o Modelo t-SNE (01:41.06)

- O modelo t-SNE (`tsneModel.init`) espera apenas os vetores de embedding, não os objetos completos.
- Usamos `.map()` para extrair apenas a propriedade `embedding` de cada item da nossa amostra.

  ```javascript
  // filepath: tsne_visualization/visualize_tsne.js
  // ... (tsneInput definido) ...

  const dataForTsneModel = tsneInput.map((item) => item.embedding) // (01:50.78 - 01:58.16)

  // tsneModel.init({ data: dataForTsneModel, type: 'dense' }); // Já definido na aula anterior
  // tsneModel.run(); // Já definido
  // const outputCoordinates = tsneModel.getOutput(); // Já definido
  ```

  - O instrutor faz um teste rápido com uma amostra menor (ex: `imageNumber < 600`) para verificar a velocidade. (02:31.0 - 02:45.97)

#### 3. Execução do t-SNE e Análise Inicial do Output (02:49.0)

- Após rodar `tsneModel.run()`, `tsneModel.getOutput()` retorna uma lista de vetores.
- Cada vetor interno representa as coordenadas `[x, y]` de uma imagem no espaço 2D reduzido pelo t-SNE. (02:54.91 - 03:8.36)
- A ordem dos pontos no output corresponde à ordem dos embeddings no input.

#### 4. Formatação dos Dados para Saída em CSV (03:10.15)

- **Objetivo:** Criar um arquivo CSV com colunas para `x`, `y` e a `classe` (gato/cachorro) para plotagem.
- Vamos iterar sobre o `tsneInput` (que contém a classe) e o `outputCoordinates` (que contém x, y) para combinar essas informações.

  ```javascript
  // filepath: tsne_visualization/visualize_tsne.js
  // ... (outputCoordinates e tsneInput disponíveis) ...

  let csvOutputData = [] // (04:11.65)
  for (let i = 0; i < tsneInput.length; i++) {
    // (03:43.40 - 04:7.03)
    csvOutputData.push({
      x: outputCoordinates[i][0], // Coordenada X do t-SNE
      y: outputCoordinates[i][1], // Coordenada Y do t-SNE
      class: tsneInput[i].class, // Classe original da imagem (cat/dog) (04:40.0 - 04:45.86)
    })
  }
  // console.log(csvOutputData.slice(0, 2)); // Para verificar (04:50.0 - 04:58.42)
  ```

#### 5. Utilização da Biblioteca `csv-writer` para Salvar o CSV (05:12.39)

- **Instalação (se ainda não feita):**
  ```bash
  npm install csv-writer
  ```
- **Código para Escrever o CSV:**

  - Importamos `createObjectCsvWriter`.
  - Definimos o caminho do arquivo de saída e o cabeçalho do CSV.
    - Mapeamos a propriedade `class` para uma coluna chamada `color` no CSV, pois algumas ferramentas de plotagem usam essa coluna para colorir os pontos. (06:36.04 - 06:41.75)

  ```javascript
  // filepath: tsne_visualization/visualize_tsne.js
  import { createObjectCsvWriter } from 'csv-writer' // (05:40.16 - 05:42.30)
  // ... (fs e TSNE já importados) ...
  // ... (resto do código, incluindo a geração de csvOutputData) ...

  async function saveToCsv(data) {
    // Envolvemos em uma função async para usar await
    const csvWriterInstance = createObjectCsvWriter({
      // (05:57.68 - 06:2.18)
      path: './tsne_output.csv', // (06:8.0 - 06:9.54)
      header: [
        // (06:14.51 - 06:15.86)
        { id: 'class', title: 'color' }, // (06:28.10 - 06:38.22)
        { id: 'x', title: 'x' },
        { id: 'y', title: 'y' },
      ],
    })

    try {
      await csvWriterInstance.writeRecords(data) // (07:11.10 - 07:17.36)
      console.log('CSV file written successfully: tsne_output.csv')
    } catch (error) {
      console.error('Error writing CSV:', error)
    }
  }

  // No final da sua lógica principal, após gerar csvOutputData:
  // await saveToCsv(csvOutputData); // Chamar a função
  ```

  - **Nota:** O instrutor executa o script principal e chama `csvWriter.writeRecords` diretamente. Para usar `await` fora de uma função `async`, o script precisaria ser um módulo ES ou a chamada estar dentro de uma IIFE `async`. A adaptação acima com `saveToCsv` é uma forma comum.

#### 6. Teste e Execução Final com Amostra Maior

- **Teste Rápido:**
  - O instrutor primeiro testa com uma amostra bem pequena (ex: 50 itens, `imageNumber` de 500 a 549) para garantir que o CSV é gerado corretamente e rapidamente. (07:17.36 - 07:31.66)
  ```javascript
  // Exemplo de ajuste para teste rápido (modificar o loop de seleção da amostra):
  // if (embeddingItem.imageNumber >= 500 && embeddingItem.imageNumber < 550) { ... }
  ```
- **Execução Completa da Amostra:**
  - Após o teste, o tamanho da amostra é revertido para o desejado (1000 imagens). (07:42.72 - 07:45.94)
  - A execução para 1000 amostras leva alguns minutos (2.5 a 3 minutos no exemplo do instrutor). (07:53.30 - 08:2.19)

#### 7. Considerações sobre a Escalabilidade do t-SNE (08:10.39)

- **Aumento do Tempo de Processamento:**
  - O t-SNE é computacionalmente intensivo. Para 50 fotos, foi quase instantâneo. Para 1000, levou minutos. (08:10.39 - 08:18.81)
  - A complexidade é aproximadamente quadrática (O(N²)). Se aumentarmos o número de amostras em 10 vezes (de 1000 para 10000), o tempo pode aumentar em 100 vezes (10²). (08:18.81 - 08:30.37)
  - Portanto, para datasets muito grandes, é crucial trabalhar com amostras menores ou considerar outras técnicas de redução de dimensionalidade se a velocidade for crítica. (08:34.20 - 08:40.05)

---

> **Próximos Passos:** (08:42.05)
>
> - Com o arquivo `tsne_output.csv` gerado, contendo as coordenadas 2D (x, y) e a classe (como 'color'), podemos usar uma ferramenta de visualização (como Excel, Google Sheets, Tableau, ou bibliotecas de plotagem em Python/R) para criar um gráfico de dispersão.
> - Isso nos permitirá visualizar se os embeddings de gatos e cachorros formam agrupamentos distintos no espaço 2D, dando uma indicação visual da separabilidade dos dados.
