### **Exemplos Práticos de Sistemas de Classificação com IA**

#### Introdução

- Olá! Nesta aula, vamos explorar diferentes maneiras de construir sistemas de classificação usando Inteligência Artificial.
- Vamos focar em três abordagens principais, entendendo como cada uma funciona, com exemplos práticos. Uma delas, a "classificação com embeddings ingênua", é mais simples e ótima para começar, e será uma das que implementaremos. A outra que veremos na prática é a classificação usando Modelos de Linguagem Grandes (LLMs).

---

#### Tópicos

1.  **Abordagem 1:** Classificação "Ingênua" com Embeddings (KNN - K-Nearest Neighbors).
2.  **Abordagem 2:** Classificação com Ajuste Fino (Fine-Tuning) de Modelos Pré-treinados.
3.  **Abordagem 3:** Classificação com Modelos de Linguagem Grandes (LLMs) e Engenharia de Prompt.
4.  Qual abordagem implementaremos.

---

### Passo a Passo da Aula

#### 1. Abordagem 1: Classificação "Ingênua" com Embeddings (KNN)

- **O que é?** (00:0.28)

  - Esta é uma abordagem simples para classificação que não envolve mecanismos complexos.
  - Pode não fornecer os resultados mais precisos em todas as situações, mas é excelente para entender o funcionamento básico da classificação baseada em embeddings.
  - Nós **vamos implementar** essa abordagem em nosso projeto. (00:29.82)

- **Como Funciona? (Conceito de K-Nearest Neighbors - KNN)** (00:37.82)

  1.  **Encontrar os K Vizinhos Mais Próximos:** Para um novo item que queremos classificar, primeiro geramos seu embedding. Depois, encontramos os 'K' embeddings da nossa base de dados que são mais próximos (mais similares) a este novo embedding. 'K' é um número que escolhemos (ex: 5, 10). (00:39.44)
  2.  **Votação Majoritária:** Olhamos para as classes desses 'K' vizinhos mais próximos.
  3.  **Atribuir a Classe:** A classe que aparecer mais vezes entre os vizinhos (a classe majoritária) será a classe atribuída ao nosso novo item. (01:8.79)

- **Exemplo Prático: Gatos vs. Cachorros** (01:16.73)

  1.  **Base de Dados:** Imagine que temos vários embeddings de imagens, alguns rotulados como "gato" e outros como "cachorro". Podemos visualizá-los como pontos (vetores) em um espaço. (01:40.09)
  2.  **Nova Imagem:** Surge uma nova imagem (ex: um cachorrinho que parece um pouco com um gato). Geramos o embedding para esta nova imagem. (01:48.84)
  3.  **Calcular Distâncias:** Medimos a "distância" (similaridade) do embedding da nova imagem para todos os embeddings de gatos e cachorros que já tínhamos.
  4.  **Selecionar K Vizinhos:** Se K=5, pegamos os 5 embeddings da nossa base que estão mais próximos do embedding da nova imagem. (02:16.5)
  5.  **Contar Classes:** Digamos que, entre esses 5 vizinhos, encontramos:
      - 3 cachorros
      - 2 gatos
  6.  **Classificar:** Como "cachorro" é a maioria (3 de 5), classificamos a nova imagem como "cachorro". (02:40.47)

- **Resumo da Implementação do KNN:** (02:58.34)
  1.  Calcular a distância do embedding do novo item para todos os embeddings na base de dados.
  2.  Selecionar os 'K' embeddings com as menores distâncias.
  3.  Contar a frequência de cada classe entre esses 'K' vizinhos.
  4.  A classe mais frequente é a previsão.

---

#### 2. Abordagem 2: Classificação com Ajuste Fino (Fine-Tuning) de Modelos Pré-treinados

- **O que é?** (03:19.93)

  - Nesta abordagem, pegamos um modelo de IA que já foi treinado em uma grande quantidade de dados (um "modelo pré-treinado") e o adaptamos para uma tarefa de classificação específica.
  - Isso envolve adicionar uma nova "camada" ao modelo e treiná-lo um pouco mais com dados específicos da nossa tarefa.

- **Como Funciona?** (03:26.5)

  1.  **Modelo Pré-treinado:** Começamos com um modelo robusto, como o BERT ou uma versão menor como o DistilBERT (que é mais fácil de ajustar). (04:19.89)
  2.  **Camada Adicional:** Adicionamos uma nova camada de classificação no topo do modelo pré-treinado. (03:31.31)
  3.  **Dados de Treino Específicos:** Precisamos de um conjunto de dados rotulados especificamente para a tarefa que queremos que o modelo aprenda (ex: classificar tipos de carros). (03:35.25)
  4.  **Treinamento (Fine-Tuning):** Treinamos essa combinação (modelo pré-treinado + nova camada) usando nossos dados específicos. Durante esse processo, tanto a nova camada quanto, sutilmente, o modelo original são ajustados. (03:52.31)
  5.  **Novo Modelo Especializado:** O resultado é um novo modelo que se tornou especialista na nossa tarefa de classificação, aproveitando o conhecimento geral do modelo pré-treinado. (05:6.01)

- **Considerações:**
  - O fine-tuning é útil para tarefas específicas. Se você ajusta um modelo para classificar carros, ele será bom nisso, mas não necessariamente para classificar ônibus, a menos que ônibus façam parte do treino de ajuste. (05:26.18)
  - Bibliotecas como Hugging Face fornecem ferramentas para facilitar o fine-tuning. (04:48.60)
  - Nós **não vamos implementar** o fine-tuning em nosso módulo. (05:52.24)

---

#### 3. Abordagem 3: Classificação com Modelos de Linguagem Grandes (LLMs)

- **O que é?** (06:5.83)

  - Utilizar diretamente modelos de linguagem poderosos (como ChatGPT, Gemini) para realizar tarefas de classificação.
  - A chave aqui é a "Engenharia de Prompt": criar instruções claras e eficazes para o LLM.

- **Como Funciona? (Engenharia de Prompt)** (06:9.57)

  - LLMs já possuem um vasto conhecimento do mundo por terem sido treinados em enormes quantidades de texto. "Ensiná-los" a classificar é mais uma questão de dar a instrução correta. (06:16.10)
  - **1. Instrução Clara e Específica:** (07:7.48)
    - Você precisa dizer ao LLM exatamente o que fazer.
    - Exemplo ruim: Mostrar uma foto de carro e não dizer nada. O LLM pode descrever a cor.
    - Exemplo bom: "Classifique este texto em uma das seguintes categorias: Esporte, Política, Entretenimento." (07:47.74)
    - Ou: "Classifique este carro como Sedã ou SUV. Um SUV, para este caso, tem altura do solo maior que X cm." (08:10.04)
    - Especifique as categorias desejadas para evitar que o LLM invente categorias irrelevantes. (07:58.54)
  - **2. Lidar com Casos Especiais/Ambiguidade:** (09:50.72)
    - Dê instruções sobre o que fazer em casos de dúvida ou entradas inesperadas.
    - Exemplo: "Em caso de ambiguidade, retorne 'NULO'." ou "Se a imagem não contiver um carro, retorne 'ERRO'." (09:57.60)
    - Isso ajuda a tornar o sistema mais robusto.
  - **3. Formato do Output:** (11:18.53)
    - LLMs tendem a responder de forma conversacional (ex: "Claro, o carro na foto é um SUV."). Para usar a saída em um sistema, precisamos de um formato padronizado. (11:33.53)
    - Muitas APIs de LLMs (Google, OpenAI) permitem especificar o formato da resposta, como JSON. (12:16.37)
    - Exemplo: Solicitar a resposta como `{"categoria": "SUV"}`. (12:23.22)
    - É mais confiável usar as funcionalidades da API para formatação do que apenas pedir no prompt, pois as APIs têm validadores. (13:10.65)
  - **4. Dar Exemplos (Few-Shot Prompting):** (13:51.98)
    - Para tarefas muito específicas ou dados que o LLM nunca viu (ex: classificar suas pinturas abstratas por emoção), fornecer alguns exemplos no prompt pode ajudar muito. (14:45.91)
    - Isso é chamado de "few-shot prompting" (dar poucas tentativas/exemplos). (15:25.77)
    - O oposto é "zero-shot prompting", onde o LLM classifica sem nenhum exemplo específico, usando apenas seu conhecimento geral. (15:49.89)

- **Considerações:**
  - A engenharia de prompt é crucial. Um bom prompt leva a bons resultados. (06:45.95)
  - Embora as LLMs estejam ficando mais inteligentes, diminuindo a necessidade de prompts excessivamente detalhados para tarefas comuns, instruções claras ainda são importantes, assim como são para humanos. (10:16.60)
  - Nós **vamos implementar** a classificação com LLMs. (16:40.74)

---

#### Quais Abordagens Implementaremos?

- No nosso projeto, vamos focar em duas dessas abordagens:
  1.  **Classificação "Ingênua" com Embeddings (KNN):** Pela sua simplicidade e valor didático.
  2.  **Classificação com Modelos de Linguagem Grandes (LLMs):** Pelo seu poder e acessibilidade através de APIs.
- Não abordaremos o fine-tuning na prática neste módulo. (16:52.17)

---

> **Resumo:**  
> Nesta aula, exploramos três formas práticas de realizar classificação com IA. A primeira, "Classificação Ingênua com Embeddings" (usando KNN), é uma técnica simples baseada na proximidade dos embeddings. A segunda, "Fine-Tuning", especializa modelos pré-treinados para tarefas específicas através de treinamento adicional. A terceira, "Classificação com LLMs", aproveita o vasto conhecimento desses modelos através de uma cuidadosa "Engenharia de Prompt". Entender essas abordagens nos permite escolher a melhor estratégia para diferentes cenários de classificação.
