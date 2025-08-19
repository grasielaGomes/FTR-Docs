### **Projeto de Classificação: Gatos vs. Cachorros**

#### Introdução

- Olá! Vamos iniciar nosso projeto prático de classificação. O objetivo será construir um sistema capaz de classificar imagens, identificando se elas contêm um **gato** ou um **cachorro**. (00:0.42 - 00:16.02)
- A ideia é que, ao fornecer uma imagem ao nosso modelo, ele consiga determinar qual dos dois animais está presente.

---

#### Por que Gatos e Cachorros?

- **Variedade de Dados:** Já trabalhamos bastante com texto na parte de busca semântica. Agora, vamos explorar a classificação de imagens, que pode ser uma tarefa visualmente mais interessante. (00:26.3 - 00:35.36)
- **Dataset Conhecido e Acessível:** O conjunto de dados (dataset) de gatos e cachorros é muito popular e fácil de encontrar. Ele foi utilizado, por exemplo, em competições no Kaggle. (00:40.14 - 00:58.26)
- **Simplicidade para Começar:** Com apenas duas categorias (gato ou cachorro), o problema se torna mais simples de abordar inicialmente. (01:0.5 - 01:11.9)
- **Teste Pessoal:** Você poderá usar fotos do seu próprio animal de estimação para ver como o sistema o classifica! (01:11.9 - 01:28.28)
- **Exemplo Didático:** Embora seja um exemplo comum em tutoriais de classificação de imagem, ele serve muito bem aos nossos propósitos de aprendizado. (01:34.23 - 01:45.23)
- **Transferibilidade:** Os conceitos e o sistema que desenvolvermos aqui poderão ser adaptados para classificar outros tipos de imagens, não se limitando apenas a gatos e cachorros. (01:48.3 - 02:0.5)

---

#### Tópicos do Projeto (Roadmap)

1.  **Implementação de Classificação com Embeddings usando KNN (K-Nearest Neighbors).**
2.  **Implementação de Classificação com Modelos de Linguagem Grandes (LLMs).**
3.  **Criação de uma Aplicação Prática para Classificação de Imagens.**

---

### Passo a Passo do Projeto

#### 1. Sistema de Classificação com Embeddings (KNN) (02:10.12)

- **Conceito Principal:** (02:20.84 - 02:34.87)
  - Utilizaremos um modelo de IA pré-treinado para gerar **embeddings** (representações numéricas) das imagens.
  - Um segundo sistema, baseado no algoritmo **KNN**, utilizará esses embeddings para realizar a classificação final.
- **Passos Detalhados:**
  1.  **Criar Embeddings para o Dataset:** Gerar os vetores de embedding para todas as imagens do nosso conjunto de dados de gatos e cachorros. (02:52.13 - 02:55.96)
  2.  **Separar em Conjuntos de Treino e Teste:** Dividir os embeddings para que tenhamos um conjunto para treinar/referenciar (no caso do KNN) e outro para avaliar o desempenho do sistema. (02:58.44 - 03:6.65)
  3.  **Visualizar Embeddings com t-SNE:** (03:11.65 - 03:35.06)
      - Usaremos a técnica t-SNE para reduzir a dimensionalidade dos embeddings (ex: de 500 dimensões para 2 dimensões).
      - Isso nos permitirá visualizar os embeddings em um gráfico e entender melhor como o modelo está agrupando gatos e cachorros. (03:55.31 - 04:12.06)
      - **Nota:** t-SNE é para visualização e entendimento, não para o processo de classificação em si, pois há perda de informação na redução. (04:0.56 - 04:3.13)
  4.  **Implementar o Classificador KNN:** Desenvolver a lógica que, dado o embedding de uma nova imagem, encontra os 'K' vizinhos mais próximos na base de embeddings e classifica pela maioria. (04:14.78)
  5.  **Avaliar o Desempenho:** Utilizar o conjunto de teste para medir a acurácia e outras métricas do nosso classificador KNN. (04:19.25)

#### 2. Sistema de Classificação com LLMs (Modelos de Linguagem Grandes) (04:47.12)

- **Observação:** Não implementaremos a abordagem de _fine-tuning_ de modelos neste projeto. (04:28.57 - 04:42.72)
- **Conceito Principal:** Utilizar um LLM poderoso, como o Gemini, para classificar as imagens diretamente através de chamadas de API e engenharia de prompt.
- **Passos Detalhados:**
  1.  **Realizar Chamadas à API do LLM:** Utilizaremos a API pública do Gemini (que é gratuita com uma chave de API) para enviar as imagens (ou representações delas) e pedir a classificação. (04:51.68 - 05:1.86)
      - Alternativas como a API da OpenAI podem ser usadas, mas geralmente envolvem custos. (05:3.86 - 05:9.27)
  2.  **Configurar o LLM (Engenharia de Prompt):** Elaborar prompts eficazes que instruam o LLM a realizar a tarefa de classificação e especificar o formato de saída desejado (ex: JSON) para fácil integração. (05:12.39 - 05:19.72)
  3.  **Avaliar o Desempenho:** Testar o classificador LLM com o mesmo conjunto de teste usado para o KNN. (05:22.12)
  4.  **Comparar Resultados:** Analisar e comparar o desempenho do sistema LLM com o sistema KNN. (05:26.19 - 05:38.30)

#### 3. Aplicação de Classificação de Gatos e Cachorros (05:42.44)

- **Objetivo:** Criar uma interface simples para que o usuário possa testar o sistema de classificação.
- **Passos Detalhados:**
  1.  **Desenvolver o Front-end:** Uma interface web simples onde o usuário possa:
      - Informar o caminho (path) de uma imagem local. (05:52.63 - 05:59.95)
      - Visualizar a imagem carregada.
      - Ver o resultado da classificação (gato ou cachorro) fornecido pelo back-end. (06:5.42 - 06:8.75)
  2.  **Criar um Serviço Back-end (Node.js):** (06:11.92 - 06:13.95)
      - Desenvolver uma API que o front-end chamará para classificar uma imagem. (06:16.04 - 06:23.19)
  3.  **Integrar o Classificador KNN no Back-end:** (06:25.54)
      - O serviço deverá ser capaz de gerar o embedding da imagem enviada pelo usuário. (06:29.95 - 06:31.86)
      - Utilizar a lógica KNN implementada anteriormente para comparar com os embeddings da base e retornar a classificação. (06:33.86 - 06:38.12)
  4.  **Integrar a Classificação via LLM no Back-end (Opcional/Alternativo):** (06:39.56)
      - Adicionar uma rota ou opção no serviço para que a classificação também possa ser feita através da API do LLM. (06:42.07 - 06:46.33)

---

> **Próximos Passos:**  
> Temos um caminho interessante pela frente! Vamos começar a colocar a mão na massa para construir esses sistemas. (06:49.63)

### **Projeto de Classificação: Criando o Gerador de Embeddings**

#### Introdução

- Olá! Vamos começar a parte prática do nosso projeto de classificação de gatos e cachorros. (00:0.32)
- A primeira etapa é preparar nosso ambiente e criar uma ferramenta (um "embedder") que transformará nossas imagens em representações numéricas (embeddings).

---

#### Tópicos da Aula

1.  Configuração Inicial do Projeto.
2.  Instalação de Bibliotecas Necessárias.
3.  Download e Preparação do Dataset de Imagens.
4.  Criação do Script para Gerar Embeddings de Imagens.
5.  Carregamento dos Nomes dos Arquivos de Imagem.

---

### Passo a Passo da Aula

#### 1. Configuração Inicial do Projeto

- **Criar o Repositório (Pasta do Projeto):** (00:0.32 - 00:6.36)

  - Vamos criar uma nova pasta para o nosso projeto. Vou chamá-la de `NearestNeighbors`, pois nossa primeira abordagem de classificação usará o algoritmo K-Nearest Neighbors.

  ```bash
  mkdir NearestNeighbors
  cd NearestNeighbors
  ```

- **Iniciar o `npm`:** (00:17.14 - 00:28.3)
  - Dentro da pasta do projeto, vamos iniciar um projeto Node.js. Isso cria um arquivo `package.json` que gerencia as dependências do nosso projeto.
  ```bash
  npm init -y
  ```
  (O `-y` aceita as configurações padrão)

#### 2. Instalação de Bibliotecas

- **Instalar Hugging Face Transformers:** (00:29.84 - 00:44.3)
  - Precisaremos da biblioteca `@xenova/transformers` (da Hugging Face) para carregar um modelo de IA capaz de gerar embeddings a partir de imagens. É o mesmo que usamos anteriormente.
  ```bash
  npm install @xenova/transformers
  ```
  - **Por que não uma API pública?** (00:46.36 - 01:17.0)
    - Idealmente, poderíamos usar uma API online (como da OpenAI ou Google) para gerar embeddings de imagem.
    - No entanto, APIs públicas para embeddings de imagem gratuitas e sem grandes limitações são raras. Algumas são pagas, experimentais, ou têm limites de uso que complicariam nosso projeto, especialmente porque vamos processar 25.000 imagens.
    - Usar um modelo local com a biblioteca Transformers nos dá mais controle e evita custos.

#### 3. Download e Preparação do Dataset

- **Obter o Dataset "Cats vs Dogs":** (01:30.51 - 01:44.0)

  - Precisamos de um conjunto de imagens de gatos e cachorros. Um dataset popular para isso é o "Cats vs Dogs", frequentemente usado em competições do Kaggle.
  - Você pode procurar no Google por "Cats vs Dogs dataset Kaggle" e baixar o arquivo `train.zip`.
  - Vou disponibilizar este arquivo para vocês também.

- **Extrair as Imagens:** (01:48.12 - 01:58.72)

  - Após baixar o `train.zip`, precisamos extrair seu conteúdo.

  ```bash
  unzip train.zip
  ```

  - Isso criará uma pasta chamada `train` contendo 12.500 imagens de gatos e 12.500 imagens de cachorros.

- **Explorar o Conteúdo:** (01:58.72 - 02:16.46)
  - Dentro da pasta `train`, você verá arquivos como `cat.0.jpg`, `dog.100.jpg`, etc.
  - Temos um total de 25.000 imagens para nosso projeto.

#### 4. Criação do Script para Gerar Embeddings (`create_embeddings.js`)

- **Criar o Arquivo:** (02:31.86 - 02:39.9)

  - Vamos criar um arquivo JavaScript chamado `create_embeddings.js`. É nele que escreveremos o código para carregar o modelo e gerar os embeddings.

- **Importar a Biblioteca e Definir o Modelo:** (02:41.87 - 03:32.09)

  ```javascript
  // filepath: NearestNeighbors/create_embeddings.js
  import { pipeline } from '@xenova/transformers'
  import fs from 'fs' // Para interagir com o sistema de arquivos

  async function initializeImageEmbedder() {
    console.log('Carregando o modelo de embedding de imagem...')
    const imageEmbedder = await pipeline(
      'image-feature-extraction', // Tarefa: extração de características de imagem
      'Xenova/clip-vit-base-patch32', // Modelo pré-treinado que usaremos
      { quantized: false } // Usar dtype fp32 para evitar warnings e usar o padrão
    )
    console.log('Modelo carregado!')
    return imageEmbedder
  }
  ```

  - `pipeline`: Função da biblioteca Transformers para carregar modelos pré-treinados.
  - `image-feature-extraction`: Especifica que queremos um modelo para extrair características (embeddings) de imagens.
  - `Xenova/clip-vit-base-patch32`: Nome do modelo específico que estamos usando.
  - `{ quantized: false }`: Garante que estamos usando a precisão total do modelo (float32), que é o padrão e evita alguns avisos.

- **Criar a Função de Embedding:** (03:32.09 - 04:38.18)
  ```javascript
  // filepath: NearestNeighbors/create_embeddings.js
  // ...existing code...
  async function embedImages(imageEmbedder, imagePaths) {
    console.log(`Gerando embeddings para ${imagePaths.length} imagens...`)
    // O modelo pode processar uma URL de imagem ou dados de imagem brutos.
    // Para arquivos locais, precisamos passar o caminho.
    const embeddings = await imageEmbedder(imagePaths, {
      pooling: 'mean', // 'cls' ou 'mean' são comuns. 'mean' agrega melhor as features.
      normalize: true, // Normaliza os embeddings, bom para cálculos de similaridade.
    })
    console.log('Embeddings gerados.')
    return embeddings.tolist() // Converte o tensor de saída para uma lista JavaScript.
  }
  ```
  - `imagePaths`: Será um array com os caminhos para as imagens.
  - `pooling: 'mean'`: Define como agregar as múltiplas características que o modelo extrai em um único vetor (embedding) por imagem.
  - `normalize: true`: Garante que todos os vetores de embedding tenham o mesmo "comprimento", o que é útil para comparar similaridades.
  - `embeddings.tolist()`: O modelo retorna os embeddings como um "tensor" (uma estrutura de dados numérica). Convertemos para uma lista JavaScript para facilitar o manuseio.
  - **Nota sobre processamento em lote:** A pipeline pode processar múltiplas imagens de uma vez, por isso a função espera `imagePaths` (plural) e não pegamos apenas o primeiro resultado, mas todos. (04:21.83 - 04:38.18)

#### 5. Carregando os Nomes dos Arquivos de Imagem

- **Ler o Conteúdo da Pasta `train`:** (04:42.44 - 06:33.95)

  - Precisamos listar todos os arquivos dentro da nossa pasta `train`.

  ```javascript
  // filepath: NearestNeighbors/create_embeddings.js
  // ...existing code...

  async function main() {
    const imageEmbedder = await initializeImageEmbedder()

    const trainFolderPath = './train/'
    const allFiles = fs.readdirSync(trainFolderPath)

    // Filtramos para garantir que estamos pegando apenas arquivos de imagem (ex: .jpg)
    // e construímos o caminho completo para cada imagem.
    const imageFilePaths = allFiles
      .filter((file) => file.toLowerCase().endsWith('.jpg')) // Exemplo, ajuste se tiver outros formatos
      .map((file) => `${trainFolderPath}${file}`)

    console.log(`Encontrados ${imageFilePaths.length} arquivos de imagem.`)

    // Por enquanto, vamos apenas mostrar os 10 primeiros para teste
    console.log('Primeiros 10 caminhos de imagem:', imageFilePaths.slice(0, 10))

    // Nas próximas aulas, chamaremos a função embedImages aqui.
    // const allEmbeddings = await embedImages(imageEmbedder, imageFilePaths);
    // E depois salvaremos esses embeddings em um arquivo.
  }

  main()
  ```

  - `fs.readdirSync(trainFolderPath)`: Lê sincronicamente todos os nomes de arquivos e pastas dentro de `trainFolderPath`.
  - `.map(file => \`./train/${file}\`)`: Adiciona o prefixo `./train/` a cada nome de arquivo para termos o caminho completo. (06:14.16 - 06:33.95)

- **Testar o Carregamento dos Arquivos:** (06:3.77 - 06:48.87)
  - Se rodarmos o script agora (`node create_embeddings.js`), ele deve:
    1.  Demorar um pouco na primeira vez para baixar e carregar o modelo.
    2.  Depois, listar os nomes dos arquivos da pasta `train` com o caminho completo.
  - Nas execuções seguintes, o carregamento do modelo será mais rápido, pois ele estará em cache.

---

> **Próximos Passos:**  
> Agora que temos nosso modelo carregado e os caminhos dos arquivos, no próximo vídeo (ou aula), vamos efetivamente gerar os embeddings para todas as imagens e salvá-los. (06:53.98 - 06:56.0)
