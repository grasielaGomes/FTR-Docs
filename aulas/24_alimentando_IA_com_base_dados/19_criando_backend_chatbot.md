### Criando o Backend do Chatbot com ExpressJS

1.  **Objetivo da Etapa**

    - Construir um servidor backend básico utilizando ExpressJS para integrar o fluxo de atendimento do chatbot.
    - Reutilizar o código de integração com IA (Google Gemini) e banco de dados, centralizando as operações em endpoints HTTP.

2.  **Passo a Passo da Implementação**

    1.  **Criar a estrutura do projeto**

        - Crie um diretório para o backend:
          ```
          mkdir backend
          cd backend
          ```
        - Inicialize o projeto Node.js:
          ```
          npm init -y
          ```
        - (Opcional) Inicie um repositório Git:
          ```
          git init
          ```

    2.  **Instalar dependências**

        - Instale as bibliotecas necessárias:
          ```
          npm install express cors pg @google/generative-ai dotenv
          ```

    3.  **Criar o arquivo principal do servidor**

        - Crie um arquivo chamado `server.js`:

          ```js
          const express = require('express')
          const cors = require('cors')
          const app = express()
          app.use(cors())
          app.use(express.json())

          const PORT = 3000
          app.listen(PORT, () => {
            console.log(`Servidor ouvindo na porta ${PORT}`)
          })
          ```

    4.  **Configurar conexão com o banco de dados**

        - Crie um arquivo `database.js` para centralizar a conexão e funções de consulta:

          ```js
          const { Pool } = require('pg');
          const pool = new Pool({
             'host:localhost',
            database: 'customer_chat',
            user: 'seu_usuario',
            password: 'sua_senha',
            port: 5432
          });

          async function getCustomerByEmail(email) {
            const result = await pool.query(
              'SELECT * FROM customers WHERE email = $1',
              [email]
            );
            return result.rows[0];
          }

          async function getPurchasesByCustomerId(customerId) {
            const result = await pool.query(
              'SELECT * FROM purchases WHERE customer_id = $1',
              [customerId]
            );
            return result.rows;
          }

          module.exports = { getCustomerByEmail, getPurchasesByCustomerId };
          ```

    5.  **Criar funções utilitárias para montagem do prompt** - Crie funções para calcular idade, dias desde a compra e montar o prompt:
        ```js
        function getCustomerAge(birthDate) {
        const today = new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const m = today.getMonth() - birth.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
        return age;
        }

                function getDaysSincePurchase(date) {
                  const today = new Date();
                  const purchaseDate = new Date(date);
                  const diffTime = Math.abs(today - purchaseDate);
                  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
                }

                function purchasesToString(purchases) {
                  return purchases.map(p => `

        Produto: ${p.product}
        Preço: ${p.price}
        Status: ${p.status}
        Dias desde a compra: ${getDaysSincePurchase(p.date)}
        `).join('\n');
        }
        ```

    6.  **Configurar integração com a IA (Google Gemini)**

        - Crie um arquivo `ai.js` para centralizar a chamada à IA:

          ```js
          require('dotenv').config()
          const { GoogleGenerativeAI } = require('@google/generative-ai')
          const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENAI_API_KEY)

          async function getAIResponse(systemInstruction, prompt, userMessage) {
            const model = genAI.getGenerativeModel({
              model: 'gemini-2.0-flash',
              systemInstruction,
            })
            const result = await model.generateContent([prompt, userMessage])
            const response = result.response
            return response.candidates[0].content.parts[0].text
          }

          module.exports = { getAIResponse }
          ```

    7.  **Montar o endpoint principal do chatbot** - No `server.js`, crie um endpoint POST `/chat`:
        ```js
        const { getCustomerByEmail, getPurchasesByCustomerId } = require('./database');
        const { getAIResponse } = require('./ai');
        // Importe as funções utilitárias criadas anteriormente

                app.post('/chat', async (req, res) => {
                  const { email, message } = req.body;
                  const customer = await getCustomerByEmail(email);
                  if (!customer) return res.status(404).json({ error: 'Cliente não encontrado' });

                  const purchases = await getPurchasesByCustomerId(customer.id);
                  const age = getCustomerAge(customer.birth_date);
                  const purchasesString = purchasesToString(purchases);

                  const prompt = `

        Dados do cliente:
        Nome: ${customer.first_name} ${customer.last_name}
        Idade: ${age}
        Estado: ${customer.state}
        E-mail: ${customer.email}

Compras:
${purchasesString}
`;

          const systemInstruction = `

Você é um atendente virtual de uma empresa de e-commerce e está conversando com clientes sobre dúvidas de suas compras recentes.
Não informe nada a respeito de você para o cliente, apenas diga que é um atendente virtual.
Altere o tom das respostas de acordo com a idade do cliente: seja mais informal para jovens, mais respeitoso para idosos e neutro para adultos.
Informe o SLA de entrega conforme o estado do cliente: Norte (10 dias), Nordeste (7 dias), Sul/Centro-Oeste (5 dias), Sudeste (2 dias).
Você não pode realizar nenhuma ação além de responder perguntas sobre os dados a seguir.
Caso o cliente solicite alguma ação (como contestar compras), direcione-o ao suporte pelo número (11) 1234-5678.
`;

          const aiResponse = await getAIResponse(systemInstruction, prompt, message);
          res.json({ response: aiResponse });
        });
        ```

8. **Testar o servidor**

   - Inicie o servidor:
     ```
     node server.js
     ```
   - Faça requisições POST para `http://localhost:3000/chat` com um JSON contendo `email` e `message` para testar o fluxo completo.

9. **Observações Importantes**

   - Trate erros de conexão, dados não encontrados e respostas inesperadas da IA.
   - Nunca exponha sua chave de API publicamente.
   - Ajuste o prompt e as regras conforme a necessidade do projeto.

### Conclusão

- Com esses passos, você terá um backend funcional para o chatbot, integrando banco de dados, montagem dinâmica de prompt e resposta da IA.
- Próximos passos: integrar com o front-end do chat e aprimorar o fluxo de atendimento.
