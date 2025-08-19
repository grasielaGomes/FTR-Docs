### **Projeto de Classificação: Classificando Imagens com LLM (Gemini) via API**

#### Introdução

- Nesta aula, vamos classificar imagens utilizando uma LLM (Large Language Model) através da API pública do Google Gemini.
- O objetivo é enviar imagens para o modelo e obter descrições ou classificações automáticas.

---

#### Tópicos da Aula

1. Estruturação do projeto Node.js para chamadas à LLM
2. Instalação e configuração do SDK do Gemini
3. Carregamento dos embeddings e seleção das imagens de teste
4. Upload de imagens para a API do Gemini
5. Envio de prompts e análise das respostas da LLM
6. Observações sobre o uso e limitações

---

### Passo a Passo da Aula

#### 1. Estruturação do Projeto Node.js

- **Criação da pasta e inicialização do projeto:**
  - Crie uma pasta chamada `LLM`.
  - Acesse a pasta e inicialize um projeto Node.js:
    ```sh
    mkdir LLM
    cd LLM
    npm init -y
    ```
- **Criação do arquivo principal:**
  - Crie um arquivo chamado `classify.js` para implementar a lógica de classificação.

---

#### 2. Instalação e Configuração do SDK do Gemini

- **Instale o pacote do Gemini:**
  ```sh
  npm install google-gen-ai
  ```
- **Importe e configure o SDK no seu código:**

  ```javascript
  import GoogleGenAI from 'google-gen-ai'

  const genai = new GoogleGenAI(process.env.googlegenai) // API Key na variável de ambiente
  ```

- **Teste a conexão com o modelo:**
  ```javascript
  const response = await genai.generateContent({
    model: 'gemini-2.0-flash',
    contents: [{ role: 'user', parts: [{ text: 'Olá, tudo bem?' }] }],
  })
  console.log(response.text)
  ```
  - Se tudo estiver correto, o modelo responderá normalmente.

---

#### 3. Carregamento dos Embeddings e Seleção das Imagens de Teste

- **Carregue o arquivo de embeddings:**

  ```javascript
  import fs from 'fs'

  const embeddingsFile = fs.readFileSync('../NearestNeighbors/embeddings.json')
  const embeddings = JSON.parse(embeddingsFile)
  ```

- **Filtre apenas os embeddings de teste e extraia os paths das imagens:**

  ```javascript
  const testEmbeddings = embeddings.filter((e) => e.split === 'test')
  const testPaths = testEmbeddings.map((e) => e.path)
  ```

- **Ajuste os paths se necessário:**  
  Caso os caminhos estejam incorretos para o contexto do novo projeto, ajuste-os conforme necessário.

---

#### 4. Upload de Imagens para a API do Gemini

- **Faça upload da imagem de teste:**

  ```javascript
  const image = await genai.files.upload({
    file: testPaths[0], // Caminho da imagem de teste
    config: { mimeType: 'image/jpeg' },
  })
  ```

- **Crie o conteúdo do usuário para enviar ao modelo:**
  ```javascript
  const userContent = genai.createUserContent([
    genai.createPartFromURI(image.uri, image.mimeType),
    { text: 'Faça uma descrição da imagem acima.' },
  ])
  ```

---

#### 5. Envio de Prompts e Análise das Respostas

- **Envie o conteúdo para o modelo e analise a resposta:**
  ```javascript
  const response = await genai.generateContent({
    model: 'gemini-2.0-flash',
    contents: [userContent],
  })
  console.log(response.text)
  ```
- **Exemplo de resposta:**  
  O modelo pode retornar algo como:  
  _"A foto mostra um gato laranja parado em cima de uma superfície escura..."_

- **Observação:**  
  O modelo responde de forma conversacional por padrão. Para tarefas de classificação, ajuste o prompt para obter respostas mais objetivas.

---

#### 6. Observações Sobre o Uso e Limitações

- O modelo Gemini 2.0 Flash possui limites de requisições gratuitos e é indicado para testes rápidos.
- Para tarefas mais robustas ou uso em produção, avalie os limites de uso e possíveis custos.
- O ajuste do prompt é fundamental para obter respostas no formato desejado (classificação, descrição, etc).

---

> **Próximos Passos:**
>
> - Ajustar o prompt para transformar a resposta em uma classificação direta (ex: "gato" ou "cachorro").
> - Integrar a classificação automática com o restante do pipeline de avaliação.
