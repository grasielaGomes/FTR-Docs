### **Comparando Palavras e Frases com Embeddings na Prática**

#### Introdução

- Agora vamos colocar em prática tudo o que aprendemos sobre embeddings!
- Nesta aula, você vai aprender como criar uma função para gerar embeddings de textos e como comparar a similaridade entre diferentes palavras e frases usando código simples.

---

#### Tópicos

1. Criando uma função para gerar embeddings
2. Extraindo o vetor de embedding do resultado
3. Gerando embeddings para vários textos
4. Comparando embeddings usando similaridade de cosseno
5. Testando exemplos práticos de comparação
6. Explorando diferentes tipos de textos e palavras

---

### Passo a Passo da Aula

1. **Criando uma função para gerar embeddings**

   - Para facilitar, vamos criar uma função chamada `embedText` que recebe um texto e retorna o embedding correspondente.
   - Assim, não precisamos repetir o mesmo código toda vez que quisermos gerar um embedding.

2. **Extraindo o vetor de embedding do resultado**

   - O resultado do modelo geralmente vem em um formato chamado tensor (um tipo de matriz).
   - Para trabalhar com ele no JavaScript, usamos o método `toList()` para transformar o tensor em uma lista de números.
   - Como normalmente usamos pooling, pegamos apenas o primeiro elemento da lista para garantir que estamos usando o embedding correto.

3. **Gerando embeddings para vários textos**

   - Agora podemos passar diferentes textos para a função `embedText` e obter embeddings para cada um deles.
   - Exemplo:
     ```js
     async function embedText(text) {
       return embedder(text, { pooling: 'mean', normalize: true }).then(
         (t) => t.toList()[0]
       )
     }
     await embedText('hello world 1')
     await embedText('hello world 2')
     await embedText('hello world 3')
     ```
   - Cada texto terá um embedding diferente.

4. **Comparando embeddings usando similaridade de cosseno**

   - Para comparar se dois textos são parecidos, usamos a função de similaridade de cosseno (`cos_sim`) da biblioteca Transformers.
   - Exemplo:
     ```js
     cos_sim(await embedText('king'), await embedText('queen'))
     ```
   - O resultado será um número entre -1 e 1, indicando o quão parecidos são os textos (quanto mais próximo de 1, mais parecidos).

5. **Testando exemplos práticos de comparação**

   - Compare palavras relacionadas, como "king" e "queen", e veja que a similaridade é alta.
   - Compare "king" com "woman" ou "man" e veja que a similaridade é menor do que com "queen".
   - Teste frases completas, como:
     - "I drove my car to work." vs. "I walked home from work." (devem ser mais parecidas entre si do que com "I ate pizza at home for dinner.")
   - Compare países e comidas, por exemplo:
     - "France" e "Italy" (similaridade alta)
     - "France" e "China" (similaridade menor)
     - "Italy" e "pizza" (similaridade maior do que "France" e "pizza")

6. **Explorando diferentes tipos de textos e palavras**

   - Experimente comparar frases de diferentes temas, gêneros ou tamanhos.
   - Veja como o modelo consegue perceber relações semânticas entre palavras e frases, mesmo que sejam diferentes.

---

### Dicas Práticas

- Use a função de similaridade de cosseno para comparar embeddings de textos.
- Teste diferentes exemplos para ver como o modelo entende relações entre palavras e frases.
- Lembre-se: quanto mais próximo de 1 o resultado, mais parecidos são os textos para o computador.
- Divirta-se criando e comparando seus próprios exemplos!

---

> **Resumo:**  
> Nesta aula, você aprendeu a criar funções para gerar embeddings, extrair os vetores corretos e comparar textos usando similaridade de cosseno. Viu exemplos práticos e entendeu como a IA consegue perceber semelhanças entre palavras e frases!
