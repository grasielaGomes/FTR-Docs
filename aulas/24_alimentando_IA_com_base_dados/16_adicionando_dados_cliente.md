### Adicionando Dados do Cliente ao Prompt da IA

1. **Objetivo da Etapa**

   - Demonstrar como inserir dados específicos de um cliente no banco de dados e utilizar essas informações para personalizar o atendimento da IA.
   - Ajustar o prompt para que a IA utilize corretamente os dados do cliente e personalize o tom da resposta conforme o perfil do usuário.

2. **Passo a Passo da Implementação**

   1. **Criar um cliente de exemplo no banco de dados**

      - Insira manualmente um cliente fictício para testes:
        - Nome: Arthur
        - E-mail: arthur.kaminski@gmail.com
        - Idade: 60 anos (pode variar para testar diferentes respostas)
        - Estado: Minas Gerais (ou outro estado para testar SLA)
      - Exemplo de comando SQL:
        ```sql
        INSERT INTO customers (id, first_name, last_name, birth_date, state, email)
        VALUES ('uuid-gerado', 'Arthur', '', '1964-01-01', 'Minas Gerais', 'arthur.kaminski@gmail.com');
        ```

   2. **Adicionar uma compra de exemplo para o cliente**

      - Insira uma compra fictícia associada ao cliente:
        - Produto: Skate maneiro
        - Valor: R$200,00
        - Dias desde o pedido: 5
        - Status: atrasado (ou altere para testar outros cenários)
      - Exemplo de comando SQL:
        ```sql
        INSERT INTO purchases (id, customer_id, price, date, product, status)
        VALUES ('uuid-compra', 'uuid-gerado', 'R$ 200,00', NOW() - INTERVAL '5 days', 'Skate maneiro', 'atrasada');
        ```

   3. **Ajustar o prompt (System Instruction) para personalização**

      - Inclua instruções para que a IA:
        - Não informe nada sobre si mesma ao cliente.
        - Adapte o tom da resposta conforme a idade do cliente (mais informal para jovens, mais respeitoso para idosos).
        - Informe o SLA de entrega conforme a região do cliente:
          - Norte: 10 dias
          - Nordeste: 7 dias
          - Sul/Centro-Oeste: 5 dias
          - Sudeste: 2 dias
        - Não realize nenhuma ação além de responder perguntas sobre os dados fornecidos.
        - Direcione ao suporte caso o cliente solicite ações.
      - Exemplo de System Instruction:
        ```js
        const systemInstruction = `
        Você é um atendente virtual de uma empresa de e-commerce e está conversando com clientes sobre dúvidas de suas compras recentes.
        Não informe nada a respeito de você para o cliente, apenas diga que é um atendente virtual.
        Altere o tom das respostas de acordo com a idade do cliente: seja mais informal para jovens, mais respeitoso para idosos e neutro para adultos.
        Informe o SLA de entrega conforme o estado do cliente: Norte (10 dias), Nordeste (7 dias), Sul/Centro-Oeste (5 dias), Sudeste (2 dias).
        Você não pode realizar nenhuma ação além de responder perguntas sobre os dados a seguir.
        Caso o cliente solicite alguma ação (como contestar compras), direcione-o ao suporte pelo número (11) 1234-5678.
        `
        ```

   4. **Montar o prompt com os dados do cliente**

      - Ao chamar a IA, inclua os dados reais do cliente e suas compras no prompt enviado.
      - Exemplo de montagem do prompt:

        ```js
        const prompt = `
        Dados do cliente:
        Nome: Arthur
        Idade: 60 anos
        Estado: Minas Gerais
        E-mail: arthur.kaminski@gmail.com
        
        Compras:
        Produto: Skate maneiro
        Valor: R$200,00
        Dias desde o pedido: 5
        Status: atrasada
        `
        ```

   5. **Testar diferentes cenários**

      - Altere a idade do cliente para observar mudanças no tom da resposta.
      - Altere o estado para verificar se o SLA informado está correto.
      - Altere o status da compra para testar respostas para pedidos atrasados, cancelados, etc.
      - Faça perguntas variadas para garantir que a IA só responda sobre pedidos e direcione corretamente para o suporte.

   6. **Ajustar o prompt conforme necessário**
      - Refine as instruções e os dados enviados para garantir que a IA siga as regras e personalize corretamente as respostas.

3. **Observações Importantes**

   - Sempre teste com diferentes perfis de clientes para validar a personalização do atendimento.
   - Certifique-se de que a IA não forneça informações sobre si mesma, apenas sobre os dados do cliente e suas compras.
   - Atualize o número de contato do suporte conforme a realidade da empresa.

### Conclusão

- Com esses passos, você conseguirá personalizar o atendimento da IA utilizando dados reais do cliente, ajustando o tom e as informações conforme o perfil e a situação de cada usuário.
- Próximos passos: automatizar a busca dos dados do banco e integração dinâmica com o chat.
