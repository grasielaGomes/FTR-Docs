### **Projeto de Classificação: Visualizando Embeddings com Plotly Online**

#### Introdução

- Olá! Nesta aula, vamos visualizar os embeddings que processamos com t-SNE na aula anterior. (00:00)
- Usaremos uma ferramenta online chamada Plotly para carregar nosso arquivo CSV e criar um gráfico de dispersão. Isso nos ajudará a ver se os embeddings de gatos e cachorros formam grupos distintos.

---

#### Tópicos da Aula

1.  Introdução ao Plotly Online.
2.  Importando o arquivo CSV gerado pelo t-SNE.
3.  Criando um gráfico de dispersão (Scatter Plot).
4.  Identificando e Corrigindo um Problema nos Dados para Coloração.
5.  Reexecutando o script t-SNE com a correção.
6.  Visualizando os Embeddings Corrigidos e Coloridos.
7.  Analisando a Separação das Classes (Gatos vs. Cachorros).
8.  Como a Visualização se Relaciona com o Classificador KNN.

---

### Passo a Passo da Aula

#### 1. Usando o Plotly Online para Visualização

- **O que é Plotly Online?** (00:04 - 00:20)
  - Plotly é uma biblioteca de gráficos popular (usada bastante em Python e também disponível para JavaScript).
  - Plotly Online é uma ferramenta web que permite carregar dados e criar visualizações interativas sem precisar programar no frontend.
- **Alternativas:** (00:28.42)
  - Você poderia usar Google Sheets, Excel, ou outras ferramentas para plotar os dados do CSV. Usaremos Plotly por seus gráficos visualmente atraentes.

#### 2. Importando os Dados do t-SNE

- **Acessar Plotly Online:**
  - Abra a ferramenta Plotly Chart Studio online.
- **Importar o CSV:** (00:35.16 - 00:46.46)
  - Use a opção "Import" para carregar o arquivo `tsne_output.csv` que geramos na aula anterior (localizado na pasta `tsne_visualization`).
  - Plotly deve reconhecer as colunas: `color` (que na verdade contém 'cat' ou 'dog' inicialmente), `x` e `y`.

#### 3. Criando o Gráfico de Dispersão (Scatter Plot)

- **Adicionar um "Trace":** (00:50.04 - 00:58.72)
  - Em Plotly, cada conjunto de dados plotado é um "trace".
  - Clique para adicionar um novo trace.
- **Configurar o Scatter Plot:** (00:59.84 - 01:9.54)
  - **Tipo de Gráfico:** Selecione "Scatter" (gráfico de dispersão), que plota pontos individuais.
  - **Eixo X:** Associe à coluna `x` do seu CSV.
  - **Eixo Y:** Associe à coluna `y` do seu CSV.
  - Você já deverá ver uma nuvem de pontos, e possivelmente notar duas separações visuais. (01:9.54 - 01:12.06)

#### 4. Identificando e Corrigindo um Problema nos Dados para Coloração

- **Tentativa de Colorir os Pontos:** (01:14.16 - 01:31.86)
  - Para distinguir gatos de cachorros, queremos colorir os pontos baseados na classe.
  - Vá nas opções de "Style" (Estilo) do trace.
  - Tente usar a coluna `color` (que contém 'cat'/'dog') para definir a cor dos pontos.
- **O Problema:** (01:31.86 - 01:42.87)

  - Plotly (e muitas ferramentas de plotagem) esperam nomes de cores reais (ex: "blue", "orange") ou valores numéricos mapeados para cores, não strings como "cat" ou "dog" diretamente na variável de cor.
  - Percebemos que o CSV foi gerado com a classe literal ('cat'/'dog') na coluna que queríamos usar para a cor.

- **Correção no Script `visualize_tsne.js`:** (01:45.78 - 02:6.87)

  - Precisamos voltar ao nosso script `visualize_tsne.js` (na pasta `tsne_visualization`).
  - Na parte onde formatamos os dados para o CSV (`csvOutputData`), vamos modificar como a propriedade `class` (que será o header `color` no CSV) é definida:
    - Se a classe original for 'dog', vamos atribuir uma cor (ex: 'orange').
    - Caso contrário (se for 'cat'), atribuímos outra cor (ex: 'blue').

  ```javascript
  // filepath: tsne_visualization/visualize_tsne.js
  // ... (outputCoordinates e tsneInput disponíveis) ...

  let csvOutputData = []
  for (let i = 0; i < tsneInput.length; i++) {
    csvOutputData.push({
      x: outputCoordinates[i][0],
      y: outputCoordinates[i][1],
      // ANTES: class: tsneInput[i].class,
      // DEPOIS (Exemplo de correção):
      class: tsneInput[i].class === 'dog' ? 'orange' : 'blue', // (02:0.84 - 02:6.87)
    })
  }
  // Lembre-se que o header no csv-writer ainda deve ser:
  // { id: 'class', title: 'color' }
  // ...
  ```

- **Reexecutar o Script:** (02:9.93 - 02:22.30)
  - Salve a alteração no `visualize_tsne.js`.
  - Execute o script novamente (`node visualize_tsne.js` dentro da pasta `tsne_visualization`).
  - Isso levará alguns minutos para reprocessar o t-SNE e gerar o novo `tsne_output.csv`. (O instrutor menciona ~3 minutos).

#### 5. Visualizando os Embeddings Corrigidos e Coloridos

- **Limpar Dados Antigos no Plotly:** (02:47.94 - 03:19.41)
  - De volta ao Plotly Online, remova o arquivo CSV antigo e o trace associado para evitar confusão.
- **Importar o Novo CSV:** (02:49.96 - 02:54.19)
  - Importe o `tsne_output.csv` recém-gerado e corrigido.
- **Recriar o Scatter Plot:** (03:21.72 - 03:24.81)
  - Adicione um novo trace do tipo "Scatter".
  - Configure o eixo X para a coluna `x` e o eixo Y para a coluna `y`.
- **Aplicar Cores Corretamente:** (03:29.25 - 03:34.18)
  - Vá em "Style" (Estilo) do trace.
  - Em "Color Variable" (ou opção similar), selecione a coluna `color` do seu CSV.
  - Agora, os pontos devem aparecer coloridos (ex: azul e laranja)! (03:33.18)

#### 6. Analisando a Separação das Classes

- **Identificando as Cores:** (03:46.34 - 03:56.75)
  - Verifique no seu código qual cor foi associada a qual classe (no exemplo do vídeo: cachorro = laranja, gato = azul).
- **Observando os Agrupamentos (Clusters):** (03:56.75 - 04:14.58)
  - Você deverá ver que os pontos azuis (gatos) tendem a se agrupar em uma região, e os pontos laranjas (cachorros) em outra.
  - Existe uma separação visível entre os dois grupos, indicando que o t-SNE conseguiu representar a diferença entre os embeddings de gatos e cachorros no espaço 2D.

#### 7. Como a Visualização se Relaciona com o Classificador KNN

- **Intuição do KNN:** (04:15.53 - 04:44.12)

  - Imagine que você adiciona uma nova imagem (um novo ponto) a este gráfico.
  - O modelo de embedding geraria o embedding dessa nova imagem, e o t-SNE (se aplicado) o colocaria em algum lugar no gráfico.
  - O K-Nearest Neighbors (KNN) olharia para os vizinhos mais próximos desse novo ponto.
  - Se a maioria dos vizinhos for "gato" (azul), o KNN classificaria o novo ponto como gato. Se a maioria for "cachorro" (laranja), classificaria como cachorro.
  - A clara separação visual sugere que o KNN terá uma boa chance de funcionar bem.

- **Imperfeições são Normais:** (04:48.36 - 05:6.68)
  - Você pode notar alguns pontos de uma cor "infiltrados" no agrupamento da outra cor (ex: um cachorro no meio dos gatos).
  - Isso é normal e esperado. Modelos de classificação raramente são 100% perfeitos. O t-SNE também é uma aproximação.

#### Conclusão da Visualização

- **Prova de Conceito:** (05:10.66 - 05:26.22)
  - Esta visualização é uma ótima "prova viva" de que os embeddings que geramos contêm informação suficiente para distinguir entre gatos e cachorros.
  - O modelo de embedding fez o trabalho pesado de transformar imagens em vetores que são separáveis.

---

> **Próximos Passos:** (05:28.74 - 05:32.13)
>
> - Agora que vimos que nossos embeddings parecem bons, estamos prontos para usar esses embeddings para treinar e testar um classificador de verdade, como o K-Nearest Neighbors (KNN).
