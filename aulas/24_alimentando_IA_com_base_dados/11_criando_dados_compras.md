### Criando Dados de Compras para Clientes

1. **Objetivo da Etapa**

   - Gerar dados de compras realistas para cada cliente do projeto de chat com IA.
   - Utilizar a biblioteca Faker para criar compras com diferentes atributos, associadas a clientes existentes.

2. **Passo a Passo da Implementação**

   1. **Definir os atributos de uma compra**

      - Cada compra deve conter:
        - ID do cliente (`customerId`)
        - Preço (`price`)
        - Data da compra (`date`)
        - Produto (`product`)
        - Status da compra (`status`)

   2. **Criar o array de status possíveis**

      - Exemplo de status:
        ```js
        const purchaseStatus = [
          'confirmada',
          'pagamento confirmado',
          'em separação',
          'em trânsito',
          'entregue',
          'atrasada',
          'cancelada pelo usuário',
          'cancelada pelo vendedor',
        ]
        ```

   3. **Criar a função para gerar compras de um cliente**

      - A função recebe um cliente e gera um número de compras para ele, com dados variados:
        ```js
        function createPurchases(customer, numPurchases) {
          const { fakerPT_BR } = require('@faker-js/faker')
          const faker = fakerPT_BR
          const purchases = []
          for (let i = 0; i < numPurchases; i++) {
            purchases.push({
              customerId: customer.id,
              price: faker.commerce.price({
                min: 10,
                max: 1000,
                dec: 2,
                symbol: 'R$ ',
              }),
              date: faker.date.recent({ days: 10 }),
              product: faker.commerce.productName(),
              status: faker.helpers.arrayElement(purchaseStatus),
            })
          }
          return purchases
        }
        ```

   4. **Gerar compras para múltiplos clientes**

      - Para cada cliente, defina quantas compras ele terá (pode ser aleatório ou baseado em distribuição) e gere as compras:
        ```js
        function generatePurchasesForCustomers(customers) {
          const allPurchases = []
          customers.forEach((customer) => {
            // Exemplo: número aleatório de compras entre 1 e 5
            const numPurchases = Math.floor(Math.random() * 5) + 1
            const purchases = createPurchases(customer, numPurchases)
            allPurchases.push(...purchases)
          })
          return allPurchases
        }
        ```

   5. **Testar a geração dos dados**
      - Exemplo de uso:
        ```js
        // Supondo que você já tenha um array de clientes
        const customers = [
          /* ...clientes gerados anteriormente... */
        ]
        const compras = generatePurchasesForCustomers(customers)
        console.log(compras)
        ```

3. **Observações Importantes**

   - Ajuste os status, produtos e distribuição de compras conforme o perfil desejado para o projeto.
   - Os dados gerados são apenas para testes e simulações.
   - Certifique-se de que os IDs dos clientes estejam corretos para manter a relação entre clientes e compras.

### Conclusão

- Com esses passos, você terá uma base de dados de compras associadas a clientes, pronta para ser utilizada no projeto de chat com IA.
- Próximos passos: inserir esses dados no banco de dados e integrar com o restante da solução.
