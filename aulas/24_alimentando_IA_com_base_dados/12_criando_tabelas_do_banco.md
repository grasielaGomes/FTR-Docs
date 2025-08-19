### Criando Tabelas do Banco de Dados para o Projeto

1. **Objetivo da Etapa**

   - Criar as tabelas necessárias no banco de dados para armazenar clientes (customers) e compras (purchases) do projeto de chat com IA.
   - Utilizar o PostgreSQL como exemplo, mas pode ser adaptado para outros bancos relacionais.

2. **Passo a Passo da Implementação**

   1. **Preparar o ambiente**

      - Certifique-se de ter o PostgreSQL instalado e em execução em sua máquina.
      - Crie um banco de dados para o projeto (exemplo: `customer_chat`).

   2. **Instalar a biblioteca de conexão**

      - No diretório do projeto Node.js, instale a biblioteca `pg`:
        ```
        npm install pg
        ```

   3. **Configurar a conexão com o banco**

      - Importe e configure o Pool do `pg`:
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

   4. **Criar o tipo ENUM para status das compras**

      - Execute a query para criar o tipo ENUM no banco:
        ```sql
        CREATE TYPE purchase_status AS ENUM (
          'confirmada',
          'pagamento confirmado',
          'em separação',
          'em trânsito',
          'entregue',
          'atrasada',
          'cancelada pelo usuário',
          'cancelada pelo vendedor'
        );
        ```

   5. **Criar a tabela de clientes (customers)**

      - Exemplo de query SQL:
        ```sql
        CREATE TABLE customers (
          id UUID PRIMARY KEY,
          first_name VARCHAR(100),
          last_name VARCHAR(100),
          birth_date DATE,
          state VARCHAR(100),
          email VARCHAR(150)
        );
        ```

   6. **Criar a tabela de compras (purchases)**

      - Exemplo de query SQL:
        ```sql
        CREATE TABLE purchases (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          customer_id UUID REFERENCES customers(id),
          price VARCHAR(20),
          date TIMESTAMP,
          product VARCHAR(150),
          status purchase_status
        );
        ```

   7. **(Opcional) Funções para deletar tabelas e tipos**

      - Caso precise rodar novamente, utilize:
        ```sql
        DROP TABLE IF EXISTS purchases;
        DROP TABLE IF EXISTS customers;
        DROP TYPE IF EXISTS purchase_status;
        ```

   8. **Executar as queries no banco**
      - Você pode executar as queries usando um cliente SQL (ex: DBeaver, TablePlus, psql) ou via código Node.js:
        ```js
        await pool.query('SUA_QUERY_AQUI')
        ```

3. **Observações Importantes**

   - Ajuste os nomes dos campos conforme a estrutura dos dados gerados pelo Faker.
   - Certifique-se de que o tipo ENUM e as tabelas não existam antes de criar, para evitar erros.
   - O campo `customer_id` em `purchases` deve referenciar corretamente o campo `id` da tabela `customers`.

### Conclusão

- Com esses passos, você terá as tabelas do banco de dados prontas para armazenar clientes e compras do projeto de chat com IA.
- Próximos passos: inserir os dados gerados nas tabelas e integrar com o restante da aplicação.
