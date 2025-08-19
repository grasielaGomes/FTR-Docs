### Criando o App Chatbot Integrado ao RAG

1. **Objetivo da Etapa**

   - Integrar o grafo de computação RAG com uma aplicação de chat.
   - Permitir que o usuário faça perguntas via interface e receba respostas fundamentadas pelo fluxo RAG.

2. **Visão Geral do Processo**

   - Utilizar um frontend de chat já existente (ex: chat-ui).
   - Adaptar o backend para receber perguntas e invocar o grafo RAG.
   - Garantir que o fluxo de perguntas e respostas funcione de ponta a ponta.

3. **Passo a Passo da Implementação**

   1. **Preparar o frontend de chat**

      - Crie ou copie uma pasta de chat já existente (ex: chat-ui).
      - Instale as dependências do frontend:
        ```
        npm install
        ```
      - Inicie o frontend:
        ```
        npm run dev
        ```
      - Verifique se o chat está rodando no navegador.

   2. **Preparar o backend**

      - Crie uma nova pasta para o backend ou copie um backend já existente.
      - Instale as dependências necessárias:
        ```
        npm install express cors
        ```
      - Crie ou edite o arquivo `server.js` para definir o endpoint de perguntas:

        ```js
        const express = require('express')
        const cors = require('cors')
        const { getAnswer } = require('./rag') // Função que invoca o grafo RAG

        const app = express()
        app.use(cors())
        app.use(express.json())

        app.post('/questionAnswering', async (req, res) => {
          const answer = await getAnswer(req.body.question)
          res.send({ response: answer })
        })

        app.listen(3000, () => {
          console.log('Servidor ouvindo na porta 3000')
        })
        ```

   3. **Integrar o backend com o grafo RAG**

      - Importe e utilize a função que invoca o grafo RAG no backend.
      - Certifique-se de que o endpoint `/questionAnswering` está recebendo a pergunta e retornando a resposta correta.

   4. **Adaptar o frontend para consumir o novo endpoint**

      - No frontend, ajuste a função de envio de perguntas para utilizar o endpoint `/questionAnswering`:
        ```js
        async function getResponse(question) {
          const response = await fetch(
            'http://localhost:3000/questionAnswering',
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ question }),
            }
          )
          const data = await response.json()
          return data.response
        }
        ```

   5. **Testar o fluxo completo**
      - Inicie o backend e o frontend.
      - Faça perguntas pelo chat e verifique se as respostas são geradas pelo fluxo RAG.
      - Ajuste o formato de retorno conforme necessário para o frontend exibir corretamente.

4. **Observações Importantes**

   - Certifique-se de que o backend está rodando antes de enviar perguntas pelo frontend.
   - Ajuste o prompt do grafo RAG para melhorar a qualidade das respostas.
   - Teste perguntas em diferentes idiomas e revise o template conforme necessário.

### Conclusão

- Com esses passos, você integrou o grafo RAG a uma aplicação de chat, permitindo perguntas e respostas fundamentadas.
- Próximos passos: aprimorar o template do prompt, adicionar validações e melhorar a experiência do usuário.
