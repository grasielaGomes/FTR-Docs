### Inserindo Customers e Purchases no Banco de Dados

1. **Objetivo da Etapa**

   - Inserir os dados gerados de clientes (customers) e compras (purchases) nas tabelas do banco de dados do projeto de chat com IA.
   - Utilizar scripts em JavaScript para automatizar a inserção dos dados.

2. **Passo a Passo da Implementação**

   1. **Preparar os dados**

      - Certifique-se de que você já possui arrays de objetos com os dados de customers e purchases gerados pelo Faker.

   2. **Instalar dependências**

      - No diretório do projeto, instale a biblioteca de conexão com o PostgreSQL:
        ```
        npm install pg
        ```

   3. **Criar o script de inserção**

      - Crie um arquivo chamado `insertData.js` (ou outro nome de sua preferência).

   4. **Configurar a conexão com o banco**

      - No início do arquivo, adicione:
        ```js
        const { Pool } = require('pg')
        const pool = new Pool({
          host: 'localhost',
          database: 'customer_chat',
          user: 'seu_usuario',
          password: 'sua_senha',
          port: 5432,
        })
        ```

   5. **Inserir os customers**

      - Para cada customer, execute uma query de inserção:
        ```js
        async function insertCustomers(customers) {
          for (const customer of customers) {
            await pool.query(
              `INSERT INTO customers (id, first_name, last_name, birth_date, state, email)
               VALUES ($1, $2, $3, $4, $5, $6)`,
              [
                customer.id,
                customer.firstName,
                customer.lastName,
                customer.birthDate,
                customer.state,
                customer.email,
              ]
            )
          }
        }
        ```

   6. **Inserir as purchases**

      - Para cada purchase, execute uma query de inserção:
        ```js
        async function insertPurchases(purchases) {
          for (const purchase of purchases) {
            await pool.query(
              `INSERT INTO purchases (id, customer_id, price, date, product, status)
               VALUES ($1, $2, $3, $4, $5, $6)`,
              [
                purchase.purchaseId,
                purchase.customerId,
                purchase.price,
                purchase.date,
                purchase.product,
                purchase.status,
              ]
            )
          }
        }
        ```

   7. **Executar o script**

      - No final do arquivo, chame as funções de inserção:

        ```js
        async function main() {
          // Importe ou gere seus arrays customers e purchases aqui
          await insertCustomers(customers)
          await insertPurchases(purchases)
          await pool.end()
        }

        main().catch(console.error)
        ```

   8. **Rodar o script**

      - Execute no terminal:
        ```
        node insertData.js
        ```

   9. **Verificar os dados no banco**
      - Use um cliente SQL ou o terminal para rodar:
        ```sql
        SELECT * FROM customers;
        SELECT * FROM purchases;
        ```
      - Confirme que os dados foram inseridos corretamente.

3. **Observações Importantes**

   - Certifique-se de que os campos dos objetos estejam alinhados com os nomes das colunas do banco.
   - Trate possíveis erros de inserção, como dados nulos ou IDs duplicados.
   - Aguarde a execução do script, pois a inserção pode demorar dependendo do volume de dados.

### Conclusão

- Com esses passos, você terá inserido os dados de clientes e compras no banco de dados do projeto.
- Próximos passos: preparar a IA para consumir esses dados e responder às requisições do chat.
