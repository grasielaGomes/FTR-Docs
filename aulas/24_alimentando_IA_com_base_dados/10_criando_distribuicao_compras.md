### Criando Distribuição de Compras para Clientes

1. **Objetivo da Etapa**

   - Gerar uma distribuição realista de compras para cada cliente do projeto de chat com IA.
   - Utilizar a biblioteca Faker para criar uma quantidade variável de compras por cliente, simulando diferentes perfis de consumo.

2. **Passo a Passo da Implementação**

   1. **Criar a função para gerar clientes**

      - Implemente uma função `createCustomer` que retorna um objeto com os dados do cliente, incluindo um ID único (UUID).
      - Exemplo:

        ```js
        const { fakerPT_BR } = require('@faker-js/faker')
        const faker = fakerPT_BR

        function createCustomer() {
          return {
            id: faker.string.uuid(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            birthDate: faker.date.birthdate(),
            state: faker.location.state(),
            email: faker.internet.email({ firstName, lastName }),
          }
        }

        console.log(createCustomer())
        ```

   2. **Definir a distribuição das compras**

      - Utilize a função `faker.helpers.weightedArrayElement` para definir a quantidade de compras por cliente, com pesos diferentes para cada quantidade.
      - Exemplo de distribuição:
        - 10% dos clientes com 0 compras
        - 50% com 1 compra
        - 20% com 2 compras
        - 10% com 3 compras
        - 4% com 4 compras
        - 3% com 5 compras
      - Exemplo de configuração:

        ```js
        const purchaseProbability = [
          { value: 0, weight: 10 },
          { value: 1, weight: 50 },
          { value: 2, weight: 20 },
          { value: 3, weight: 10 },
          { value: 4, weight: 4 },
          { value: 5, weight: 3 },
        ]

        const numPurchases =
          faker.helpers.weightedArrayElement(purchaseProbability)
        console.log(numPurchases) // Exemplo de saída: 1
        ```

   3. **Gerar compras para cada cliente**

      - Para cada cliente criado, gere uma quantidade de compras de acordo com a distribuição definida.
      - Exemplo de função para gerar compras:
        ```js
        function generatePurchasesForCustomer() {
          const numPurchases =
            faker.helpers.weightedArrayElement(purchaseProbability)
          const purchases = []
          for (let i = 0; i < numPurchases; i++) {
            purchases.push({
              purchaseId: faker.string.uuid(),
              date: faker.date.recent(),
              status: faker.helpers.arrayElement(['sucesso', 'falha']),
              value: faker.finance.amount(10, 1000, 2, 'R$ '),
            })
          }
          return purchases
        }
        ```

   4. **Integrar geração de clientes e compras**

      - Para cada cliente, associe o array de compras gerado:

        ```js
        function generateCustomerWithPurchases() {
          const customer = createCustomer()
          const purchases = generatePurchasesForCustomer()
          return { ...customer, purchases }
        }

        console.log(generateCustomerWithPurchases())
        ```

   5. **Gerar múltiplos clientes com compras**

      - Para criar vários clientes com suas compras:

        ```js
        function generateCustomersWithPurchases(qtd) {
          const customers = []
          for (let i = 0; i < qtd; i++) {
            customers.push(generateCustomerWithPurchases())
          }
          return customers
        }

        console.log(generateCustomersWithPurchases(10))
        ```

3. **Observações Importantes**

   - A distribuição de compras pode ser ajustada conforme o perfil desejado para o projeto.
   - Teste a geração para garantir que a distribuição está de acordo com o esperado.
   - Os dados gerados são apenas para testes e simulações.

### Conclusão

- Com esses passos, você terá uma base de clientes com uma distribuição realista de compras, pronta para ser utilizada no projeto de chat com IA.
- Próximos passos: inserir esses dados no banco de dados e integrar com o restante da solução.
