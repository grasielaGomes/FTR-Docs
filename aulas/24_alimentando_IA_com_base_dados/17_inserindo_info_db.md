### Inserindo Informações do Banco de Dados no Prompt da IA

1. **Objetivo da Etapa**

   - Consultar o banco de dados para obter informações reais de clientes e suas compras.
   - Montar dinamicamente o prompt da IA com esses dados, personalizando o atendimento.

2. **Passo a Passo da Implementação**

   1. **Instalar a biblioteca de conexão com o PostgreSQL**

      - No terminal, execute:
        ```
        npm install pg
        ```

   2. **Configurar a conexão com o banco**

      - Importe e configure o Pool do `pg`:
        ```js
        const { Pool } = require('pg');
        const pool = new Pool({
           'host:localhost',
          database: 'customer_chat',
          user: 'seu_usuario',
          password: 'sua_senha',
          port: 5432
        });
        ```

   3. **Selecionar um cliente para teste**

      - Escolha um cliente do banco de dados para testar (exemplo: Gustavo Saraiva).
      - Busque o cliente pelo ID:
        ```js
        const customerId = 'id-do-gustavo'
        const result = await pool.query(
          'SELECT * FROM customers WHERE id = $1',
          [customerId]
        )
        const customer = result.rows[0]
        ```

   4. **Calcular a idade do cliente**

      - Crie uma função para calcular a idade a partir da data de nascimento:
        ```js
        function getCustomerAge(customer) {
          const today = new Date()
          const birthDate = new Date(customer.birth_date)
          let age = today.getFullYear() - birthDate.getFullYear()
          const m = today.getMonth() - birthDate.getMonth()
          if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--
          }
          return age
        }
        ```

   5. **Buscar as compras do cliente**

      - Consulte as compras associadas ao cliente:
        ```js
        const purchasesResult = await pool.query(
          'SELECT * FROM purchases WHERE customer_id = $1',
          [customerId]
        )
        const purchases = purchasesResult.rows
        ```

   6. **Calcular dias desde a compra**

      - Crie uma função para calcular quantos dias se passaram desde cada compra:
        ```js
        function getDaysSincePurchase(purchase) {
          const today = new Date()
          const purchaseDate = new Date(purchase.date)
          const diffTime = Math.abs(today - purchaseDate)
          return Math.floor(diffTime / (1000 * 60 * 60 * 24))
        }
        ```

   7. **Montar a string das compras** - Construa uma string com as informações de cada compra:
      `` js
        let purchasesString = '';
        for (const purchase of purchases) {
          purchasesString += `
Produto: ${purchase.product}
Preço: ${purchase.price}
Status: ${purchase.status}
Dias desde a compra: ${getDaysSincePurchase(purchase)}
`;
        }
         ``

   8. **Montar o prompt com os dados do cliente** - Monte o prompt a ser enviado para a IA:
      ```js
        const prompt = `
      Dados do cliente:
      Nome: ${customer.first_name} ${customer.last_name}
      Idade: ${getCustomerAge(customer)}
      Estado: ${customer.state}
      E-mail: ${customer.email}

Compras:
${purchasesString}
`;
```

9. **Enviar o prompt para a IA**

   - Utilize o prompt montado na chamada à IA (exemplo com Gemini):
     ```js
     const result = await model.generateContent([prompt])
     const response = result.response
     const text = response.candidates[0].content.parts[0].text
     console.log(text)
     ```

10. **Observações Importantes**

    - Teste com diferentes clientes e cenários para garantir que o prompt está correto.
    - Certifique-se de tratar corretamente datas e campos nulos.
    - Ajuste o template do prompt conforme a necessidade do projeto.

### Conclusão

- Com esses passos, você conseguirá consultar o banco de dados, montar prompts personalizados e enviar para a IA, tornando o atendimento mais realista e relevante.
- Próximos passos: integrar esse fluxo ao chat do projeto e automatizar a seleção do cliente.
