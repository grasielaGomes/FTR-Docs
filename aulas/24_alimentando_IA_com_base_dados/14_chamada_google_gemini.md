### Fazendo a Primeira Chamada à API do Google Gemini

1. **Objetivo da Etapa**

   - Preparar a IA para dialogar com o chat do projeto, utilizando a API do Google Gemini.
   - Realizar uma chamada de teste para garantir que a integração está funcionando.

2. **Passo a Passo da Implementação**

   1. **Criar a estrutura do projeto**

      - Crie uma nova pasta para os testes da IA:
        ```
        mkdir ai-test
        cd ai-test
        ```

   2. **Inicializar o projeto Node.js**

      - Execute:
        ```
        npm init -y
        ```

   3. **Instalar a biblioteca do Google Gemini**

      - Instale a biblioteca oficial (ajuste o nome conforme a documentação oficial):
        ```
        npm install @google/generative-ai
        ```

   4. **Obter a chave de API do Gemini**

      - Acesse o site do Google Gemini, crie uma conta (se necessário) e gere sua chave de API gratuita.

   5. **Configurar a variável de ambiente**

      - Crie um arquivo `.env` e adicione sua chave:
        ```
        GOOGLE_GENAI_API_KEY=sua_chave_aqui
        ```
      - Instale a biblioteca dotenv para ler variáveis de ambiente:
        ```
        npm install dotenv
        ```

   6. **Criar o arquivo de teste da IA**

      - Crie um arquivo chamado `testGemini.js`.

   7. **Implementar a chamada à API do Gemini**

      - Exemplo de código:

        ```js
        require('dotenv').config()
        const { GoogleGenerativeAI } = require('@google/generative-ai')

        const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENAI_API_KEY)

        async function main() {
          const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' })
          const result = await model.generateContent(['Olá, tudo bom?'])
          const response = result.response
          const text = response.candidates[0].content.parts[0].text
          console.log(text)
        }

        main().catch(console.error)
        ```

   8. **Executar o script**
      - No terminal, execute:
        ```
        node testGemini.js
        ```
      - Você deverá receber uma resposta do Gemini, confirmando que a integração está funcionando.

3. **Observações Importantes**

   - Utilize o modelo `gemini-2.0-flash` para maior velocidade e limite de chamadas.
   - Guarde sua chave de API em local seguro e nunca compartilhe publicamente.
   - O próximo passo será criar prompts personalizados para atendimento ao cliente.

### Conclusão

- Com esses passos, você terá realizado a primeira chamada à API do Google Gemini, validando a integração.
- Próximos passos: criar prompts específicos para o atendimento no chat e integrar com os dados dos clientes.
