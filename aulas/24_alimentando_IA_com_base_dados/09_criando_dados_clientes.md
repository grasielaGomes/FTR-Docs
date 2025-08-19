### Criando Dados Fake de Clientes para o Projeto

1. **Objetivo da Etapa**

   - Gerar dados fictícios de clientes para alimentar o banco de dados do projeto de chat com IA.
   - Utilizar a biblioteca Faker para criar informações realistas e em português.

2. **Passo a Passo da Implementação**

   1. **Criar o diretório do projeto**

      - No terminal, execute:
        ```
        mkdir CreateData
        cd CreateData
        ```

   2. **Inicializar o repositório Git (opcional)**

      - Para versionar o projeto:
        ```
        git init
        ```

   3. **Inicializar o projeto Node.js**

      - Execute:
        ```
        npm init -y
        ```

   4. **Instalar a biblioteca Faker**

      - Execute:
        ```
        npm install @faker-js/faker
        ```

   5. **Criar o arquivo de geração de clientes**

      - Crie um arquivo chamado `createCustomers.js`.

   6. **Importar e configurar o Faker em português**

      - No início do arquivo, adicione:
        ```js
        const { fakerPT_BR } = require('@faker-js/faker')
        const faker = fakerPT_BR
        ```

   7. **Gerar dados dos clientes**

      - Exemplo de geração de um cliente:

        ```js
        const firstName = faker.person.firstName()
        const lastName = faker.person.lastName()
        const birthDate = faker.date.birthdate()
        const state = faker.location.state()
        const email = faker.internet.email({ firstName, lastName })

        console.log({
          firstName,
          lastName,
          birthDate,
          state,
          email,
        })
        ```

   8. **Executar o script para testar**

      - No terminal, execute:
        ```
        node createCustomers.js
        ```
      - O script irá gerar e exibir dados fake de clientes em português.

   9. **Ajustar e expandir conforme necessário**

      - Adicione outros campos se desejar (ex: cidade, telefone).
      - Envolva a lógica em uma função para gerar múltiplos clientes.
      - Exemplo de função para gerar vários clientes:

        ```js
        function generateCustomers(qtd) {
          const customers = []
          for (let i = 0; i < qtd; i++) {
            const firstName = faker.person.firstName()
            const lastName = faker.person.lastName()
            const birthDate = faker.date.birthdate()
            const state = faker.location.state()
            const email = faker.internet.email({ firstName, lastName })
            customers.push({ firstName, lastName, birthDate, state, email })
          }
          return customers
        }

        console.log(generateCustomers(10))
        ```

3. **Observações Importantes**

   - Utilize nomes e dados em português para maior realismo no projeto.
   - Evite adicionar endereços completos se não forem necessários.
   - Os dados gerados são apenas para testes e simulações.

### Conclusão

- Com esses passos, você terá uma base de dados fake de clientes pronta para ser utilizada no projeto de chat com IA.
- Próximos passos: inserir esses dados no banco de dados e integrar com
