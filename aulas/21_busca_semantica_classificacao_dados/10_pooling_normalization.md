### **Pooling e Normalização: Como Obter um Único Embedding para Seu Texto**

#### Introdução

- Nesta aula, vamos entender por que, ao gerar embeddings para um texto, muitas vezes obtemos vários vetores e como transformar tudo isso em um único embedding para facilitar comparações.
- Você vai aprender o que é pooling, por que usamos subpalavras (tokens) e como a normalização ajuda na comparação de embeddings.

---

#### Tópicos

1. Por que um texto pode gerar vários embeddings
2. O que são tokens e subpalavras
3. Como transformar vários embeddings em um só (pooling)
4. Tipos de pooling: mean pooling e CLS pooling
5. O que é normalização de embeddings
6. Por que normalizar e quando usar

---

### Passo a Passo da Aula

1. **Por que um texto pode gerar vários embeddings**

   - Quando você gera embeddings para um texto, o modelo pode retornar vários vetores, um para cada token (subpalavra ou palavra).
   - Por exemplo, um texto simples pode gerar 9 embeddings, pois o modelo divide a frase em partes menores.

2. **O que são tokens e subpalavras**

   - Tokens são pedaços de palavras, não necessariamente palavras inteiras.
   - O modelo divide o texto em tokens para ser mais flexível e robusto, inclusive com palavras novas ou desconhecidas.
   - Isso permite que o modelo entenda até palavras que nunca viu antes, fatiando-as em partes menores.

3. **Como transformar vários embeddings em um só (pooling)**

   - Ter vários embeddings para um texto dificulta a comparação entre frases de tamanhos diferentes.
   - Para resolver isso, usamos pooling: uma técnica para juntar todos os embeddings em um único vetor.

4. **Tipos de pooling**

   - **Mean pooling (média):**
     - Soma todos os embeddings e divide pelo número de embeddings, criando um vetor médio.
     - É o método mais comum e fácil de entender.
   - **CLS pooling:**
     - Usa um token especial (CLS) criado pelo modelo para representar o texto inteiro.
     - Nem todos os modelos suportam esse método, depende da arquitetura.

5. **O que é normalização de embeddings**

   - Normalizar significa ajustar o vetor para que seu tamanho (norma) seja igual a 1.
   - Isso facilita a comparação entre embeddings, principalmente usando similaridade de cosseno ou produto escalar.

6. **Por que normalizar e quando usar**

   - Normalizar os embeddings garante que todos tenham o mesmo tamanho, tornando as comparações mais justas.
   - Pode perder um pouco de informação, mas geralmente é útil para tarefas de comparação.

---

### Dicas Práticas

- Sempre que gerar embeddings para textos de tamanhos diferentes, use pooling para obter um único vetor.
- Use mean pooling como padrão, pois é simples e funciona bem na maioria dos casos.
- Normalizar os embeddings é uma boa prática para facilitar comparações, especialmente em buscas semânticas.
- Experimente gerar embeddings com e sem normalização para ver como os resultados mudam.

---

> **Resumo:**  
> Nesta aula, você aprendeu por que um texto pode gerar vários embeddings, como usar pooling para obter um único vetor e a importância da normalização para comparar textos de forma eficiente!
