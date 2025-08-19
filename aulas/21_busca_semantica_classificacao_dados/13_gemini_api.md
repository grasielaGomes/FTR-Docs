### **Gerando Embeddings de Texto com a Gemini API do Google**

#### Introdução

- Agora que você já viu como criar embeddings de texto e imagem usando modelos locais, vamos aprender a gerar embeddings de texto usando APIs públicas, como a Gemini API do Google.
- O objetivo é mostrar como usar uma API gratuita para criar embeddings de texto, sem precisar rodar modelos pesados no seu computador.

---

#### Tópicos

1. O que são APIs públicas de embeddings
2. Como obter uma chave de API do Google Gemini
3. Instalando o SDK do Google Gemini
4. Gerando embeddings de texto com a API
5. Comparando embeddings de textos em português
6. Dicas e observações importantes

---

### Passo a Passo da Aula

1. **O que são APIs públicas de embeddings**

   - APIs públicas permitem que você envie textos para servidores de empresas como Google ou OpenAI e receba embeddings prontos.
   - Muitas APIs são pagas, mas a Gemini API do Google oferece uma opção gratuita para quem quer experimentar.

2. **Como obter uma chave de API do Google Gemini**

   - Acesse o site da Gemini API do Google.
   - Faça o cadastro e solicite uma chave de API gratuita.
   - Guarde essa chave, pois você vai precisar dela para acessar a API.

3. **Instalando o SDK do Google Gemini**

   - No terminal, instale o SDK oficial do Google Gemini:
     ```sh
     npm install google-gemini
     ```
   - O SDK facilita a comunicação com a API.

4. **Gerando embeddings de texto com a API**

   - Importe a classe `GoogleGenAI` do SDK:
     ```js
     import { GoogleGenAI } from '@google/genai'
     ```
   - Crie um objeto passando sua chave de API:
     ```js
     const genAI = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY })
     ```
   - Crie uma função para gerar embeddings de texto:
     ```js
     async function embedWithGoogle(text) {
       const response = await genAI.embedContent({
         model: 'models/text-embedding-004',
         content: text,
       })
       return response.embeddings[0].values
     }
     ```
   - Agora, basta chamar a função passando o texto desejado:
     ```js
     const embedding = await embedWithGoogle('Olá, tudo bem')
     console.log(embedding)
     ```

5. **Comparando embeddings de textos em português**

   - Você pode comparar embeddings usando similaridade de cosseno, como já fez antes.
   - Exemplo:
     ```js
     const emb1 = await embedWithGoogle('Oi, meu nome é Arthur')
     const emb2 = await embedWithGoogle('Eu gosto de pizza')
     const similarity = cos_sim(emb1, emb2)
     console.log(similarity)
     ```
   - Quanto mais próximo de 1, mais parecidos são os textos.

6. **Dicas e observações importantes**

   - A Gemini API do Google aceita textos em português e outras línguas.
   - O pooling já é feito automaticamente pela API, então você recebe um vetor pronto para usar.
   - Você pode enviar vários textos de uma vez, mas para simplificar, use um por vez enquanto aprende.
   - Não é possível gerar embeddings de imagens gratuitamente com APIs públicas no momento.

---

### Dicas Práticas

- Use a Gemini API para gerar embeddings de textos em português sem custo.
- Guarde sua chave de API em uma variável de ambiente para segurança.
- Experimente comparar diferentes frases e veja como a similaridade muda.
- Lembre-se: para imagens, ainda não há APIs públicas gratuitas para embeddings.

---

> **Resumo:**  
> Nesta aula, você aprendeu como usar a Gemini API do Google para gerar embeddings de texto, configurar o ambiente, criar funções para facilitar o uso e comparar textos em português de forma simples e prática!
