### Criando a Função de RAG Manualmente e Integrando com o Gemini

1. **Objetivo da Etapa**

   - Implementar manualmente a função de RAG (Retrieve, Augment, Generate) para responder perguntas sobre JavaScript.
   - Integrar a busca semântica (ChromaDB) com o modelo de IA (Gemini) e estruturar o prompt de forma adequada.
   - Entender cada etapa do fluxo antes de automatizar com Langchain.

2. **Visão Geral do Processo**

   - Inicializar um projeto Node.js para o agente RAG.
   - Instalar dependências necessárias (ChromaDB, embeddings, Google GenAI).
   - Criar um script para:
     - Buscar trechos relevantes no banco vetorial (Retrieve).
     - Montar o prompt com instruções e os trechos recuperados (Augment).
     - Enviar o prompt para o Gemini e obter a resposta (Generate).

3. **Passo a Passo da Implementação**

   1. **Inicializar o projeto e instalar dependências**

      - Crie um novo diretório para o agente:
        ```
        mkdir RegAgent
        cd RegAgent
        npm init -y
        ```
      - Instale as bibliotecas necessárias:
        ```
        npm install chroma-db chroma-default-embed chroma-core-default-embed google.genai
        ```

   2. **Criar o arquivo principal do agente**

      - Crie um arquivo chamado `agent.js`.

   3. **Configurar a chamada ao Gemini**

      - Importe e configure o Google GenAI:
        ```js
        const { GoogleGenerativeAI } = require('google.genai')
        const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENAI_API_KEY)
        ```
      - Faça uma chamada simples para testar:
        ```js
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' })
        const result = await model.generateContent(['Olá, tudo bom?'])
        const response = result.response
        const text = response.candidates[0].content.parts[0].text
        console.log(text)
        ```

   4. **Criar o prompt para o Gemini** - Estruture o prompt com uma system instruction clara:
      `` js
        const systemInstruction = `
Você é um expert em JavaScript e vai responder a pergunta do usuário.
Responda a pergunta com base nos seguintes trechos retirados do livro Eloquent JavaScript.
Referencie em sua resposta os trechos abaixo. Deixe explícito onde começa a referência ao livro.
Adicione esses trechos à resposta, caso necessário.
`;
         `` - Inclua os trechos recuperados (retrieved chunks) e a pergunta do usuário no prompt.

   5. **Implementar a função de Retrieve (busca semântica)**

      - Instancie o cliente e a collection do ChromaDB.
      - Crie uma função async para buscar os trechos relevantes:
        ```js
        async function retrieve(question) {
          // ...instanciar cliente e collection...
          const result = await collection.query({
            queryTexts: [question],
            nResults: 5,
          })
          // Retorne os documentos relevantes
          return result.documents[0].join('\n---\n')
        }
        ```

   6. **Montar o prompt final e chamar o Gemini** - Combine a system instruction, os trechos recuperados e a pergunta do usuário:
      ```js
        const retrievedChunks = await retrieve(userQuestion);
        const prompt = `
      ${systemInstruction}

Trechos do livro:
${retrievedChunks}

Pergunta do usuário: ${userQuestion}
`;
`      - Envie o prompt para o Gemini e exiba a resposta:
       `js
const result = await model.generateContent([prompt]);
const response = result.response;
const text = response.candidates[0].content.parts[0].text;
console.log(text);
```

7. **Testar e ajustar**

   - Teste perguntas em português e inglês.
   - Ajuste o prompt para garantir que o Gemini referencie corretamente os trechos do livro.
   - Observe se a resposta está fundamentada nos documentos recuperados.

8. **Observações Importantes**

   - O fluxo manual permite entender cada etapa do RAG: Retrieve (busca), Augment (montagem do contexto) e Generate (resposta).
   - Ajuste o número de trechos retornados conforme a necessidade.
   - O prompt pode ser refinado para melhorar a clareza das referências aos trechos do livro.

### Conclusão

- Com esses passos, você implementou manualmente uma função de RAG integrada ao Gemini, capaz de responder perguntas sobre JavaScript com base em documentos recuperados.
- Próximos passos: automatizar o fluxo utilizando Langchain para comparar abordagens e facilitar a manutenção do sistema.
